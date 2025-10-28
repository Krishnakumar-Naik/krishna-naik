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

app.get('/health', (req, res) => res.json({ ok: true }))

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    if (process.env.SENDGRID_API_KEY) {
      // send via SendGrid
      const msg = {
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: email,
      }
      await sgMail.send(msg)
      res.json({ success: true })
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
      // convert attachment to base64 if present
      const msg = {
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        subject: `Hire Offer: ${offeringPosition} from ${companyName}`,
        text: `You have received a new offer via your portfolio website.\n\nCompany Name: ${companyName}\nContact Email: ${contactEmail}\nRecruiter Name: ${yourName}\nRecruiter Position: ${yourPosition}\nOffering Position: ${offeringPosition}`,
        replyTo: contactEmail,
      }
      if (file) {
        msg.attachments = [
          {
            content: file.buffer.toString('base64'),
            filename: file.originalname,
            type: file.mimetype || 'application/octet-stream',
            disposition: 'attachment',
          },
        ]
      }
      await sgMail.send(msg)
      res.json({ success: true })
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
  // verify SMTP connection at startup (helpful for debugging connection issues)
  const verifier = createTransporter();
  verifier.verify()
    .then(() => console.log('SMTP transporter verified'))
    .catch(err => console.error('SMTP verify failed:', err));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});