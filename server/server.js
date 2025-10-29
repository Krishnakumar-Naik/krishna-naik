import express from 'express';
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Multer setup for file uploads (in memory)
const upload = multer({ storage: multer.memoryStorage() });

// Create transporter factory to support explicit SMTP host/port or service
function createTransporter() {
  const connectionTimeout = 20000; // 20s
  if (process.env.SMTP_HOST) {
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout,
    });
  }

  // fallback to service (e.g. 'gmail') if SMTP_HOST not provided
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout,
  });
}

// Configure SendGrid if key provided
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

// Log active email mode and basic config (no secrets)
if (process.env.SENDGRID_API_KEY) {
  console.log(`Email mode: SendGrid HTTP (from=${process.env.EMAIL_USER || 'unset'}, to=${process.env.EMAIL_TO || 'unset'})`);
}

// Optional startup SendGrid sanity check (uses sandbox mode so no real email is delivered)
async function verifySendGridAtStartup() {
  if (!process.env.SENDGRID_API_KEY) return;
  const from = process.env.EMAIL_USER || process.env.EMAIL_TO;
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER || from;
  if (!from) {
    console.log('SendGrid startup check skipped: EMAIL_USER or EMAIL_TO not set');
    return;
  }
  try {
    const msg = {
      to,
      from,
      subject: 'Portfolio API: SendGrid API key verification (sandbox)',
      text: 'This is a non-delivery verification message (sandbox mode) to validate SendGrid API key and sender.',
      mail_settings: {
        sandbox_mode: {
          enable: true,
        },
      },
    };
    await sgMail.send(msg);
    console.log('SendGrid startup check: API key and sender appear valid (sandbox send accepted).');
  } catch (err) {
    console.error('SendGrid startup check failed:', err?.message || err);
  }
}

// run the verification asynchronously but don't block startup
verifySendGridAtStartup().catch(() => {});

app.get('/health', (req, res) => res.json({ ok: true }))

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    if (process.env.SENDGRID_API_KEY) {
      // send via SendGrid (HTTP API). use reply_to per SendGrid spec
      const msg = {
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        reply_to: { email },
      };
      const [response] = await sgMail.send(msg);
      console.log('SendGrid response:', response && response.statusCode);
      return res.json({ success: true });
    } else {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: email,
      })
      res.json({ success: true })
    }
  } catch (error) {
    console.error('Contact sendMail error:', error)
    res.status(500).json({ error: 'Failed to send email.', details: error?.message || String(error) });
  }
});

app.post('/hire', upload.single('offerLetter'), async (req, res) => {
  const { companyName, contactEmail, yourName, yourPosition, offeringPosition } = req.body;
  const file = req.file;

  if (!companyName || !contactEmail || !yourName || !yourPosition || !offeringPosition) {
    return res.status(400).json({ error: 'All fields except offer letter are required.' });
  }

  try {
    if (process.env.SENDGRID_API_KEY) {
      // convert attachment to base64 if present and use reply_to
      const msg = {
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        subject: `Hire Offer: ${offeringPosition} from ${companyName}`,
        text: `You have received a new offer via your portfolio website.\n\nCompany Name: ${companyName}\nContact Email: ${contactEmail}\nRecruiter Name: ${yourName}\nRecruiter Position: ${yourPosition}\nOffering Position: ${offeringPosition}`,
        reply_to: { email: contactEmail },
      };
      if (file) {
        msg.attachments = [
          {
            content: file.buffer.toString('base64'),
            filename: file.originalname,
            type: file.mimetype || 'application/octet-stream',
            disposition: 'attachment',
          },
        ];
      }
      const [response] = await sgMail.send(msg);
      console.log('SendGrid response:', response && response.statusCode);
      return res.json({ success: true });
    } else {
      const transporter = createTransporter();

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `Hire Offer: ${offeringPosition} from ${companyName}`,
        text: `You have received a new offer via your portfolio website.\n\nCompany Name: ${companyName}\nContact Email: ${contactEmail}\nRecruiter Name: ${yourName}\nRecruiter Position: ${yourPosition}\nOffering Position: ${offeringPosition}`,
        replyTo: contactEmail,
        attachments: file
          ? [{ filename: file.originalname, content: file.buffer }]
          : [],
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    }
  } catch (error) {
    console.error('Hire sendMail error:', error)
    res.status(500).json({ error: 'Failed to send offer email.', details: error?.message || String(error) });
  }
});

// At startup, if SendGrid HTTP API is configured we skip SMTP verification.
if (process.env.SENDGRID_API_KEY) {
  console.log('SendGrid API key detected — using SendGrid HTTP API for sending emails. Skipping SMTP verify.');
} else if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  // Allow skipping SMTP verify (useful on PaaS where verify may fail intermittently)
  if (process.env.SKIP_SMTP_VERIFY === 'true') {
    console.log('SKIP_SMTP_VERIFY=true — skipping SMTP transporter.verify() at startup.');
  } else {
    // verify SMTP connection at startup (helpful for debugging connection issues)
    const verifier = createTransporter();
    verifier.verify()
      .then(() => console.log('SMTP transporter verified'))
      .catch(err => {
        console.error('SMTP verify failed:', err);
        // Helpful hint for Gmail users - common cause is not using an App Password
        if (process.env.SMTP_HOST && process.env.SMTP_HOST.includes('gmail')) {
          console.error('Hint: Using Gmail SMTP requires a Google App Password (enable 2-Step Verification and create an App Password).');
        }
      });
  }
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});