import express from 'express';
import nodemailer from 'nodemailer';
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

app.get('/health', (req, res) => res.json({ ok: true }))

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    });

    res.json({ success: true });
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
  } catch (error) {
    console.error('Hire sendMail error:', error)
    res.status(500).json({ error: 'Failed to send offer email.', details: error?.message || String(error) });
  }
});

// verify SMTP connection at startup (helpful for debugging connection issues)
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  const verifier = createTransporter();
  verifier.verify()
    .then(() => console.log('SMTP transporter verified'))
    .catch(err => console.error('SMTP verify failed:', err));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});