
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    try {
      const res = await fetch('https://portfolio-backend-gq11.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Contact error response:', body);
        setStatus(body?.error || body?.details || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error('Contact fetch error:', err);
      setStatus(err?.message || 'Failed to send message. Please try again later.');
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a conversation about technology and development.
          </p>
        </div>
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 place-items-center lg:place-items-stretch">
          {/* Contact Information */}
          <div className="bg-card/80 shadow-xl rounded-2xl p-10 border border-border flex flex-col justify-center mx-auto max-w-md lg:mx-0 lg:max-w-none justify-self-center lg:justify-self-auto -ml-[14px] lg:ml-0">
            <div className="space-y-8 mb-10">
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
                <p className="text-foreground/80 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                    <h4 className="text-foreground font-semibold">Email</h4>
                    <p className="text-foreground/70">krishnaknaik25@gmail.com</p>
                  </div>
                </div>
              <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                    <h4 className="text-foreground font-semibold">Phone</h4>
                    <p className="text-foreground/70">+91 6361313400</p>
                  </div>
                </div>
              <div className="flex items-center">
                  <a
                    href="https://www.google.com/maps?q=Yellapur,+Uttara+Kannada,+Karnataka"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4 hover:scale-105 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <MapPin size={20} className="text-white" />
                  </a>
                  <div>
                    <h4 className="text-foreground font-semibold">Location</h4>
                    <a
                      href="https://www.google.com/maps?q=Yellapur,+Uttara+Kannada,+Karnataka"
                      className="text-foreground/70 underline hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yellapur, Uttara Kannada, Karnataka
                    </a>
                </div>
                </div>
              </div>
            <div className="pt-8">
                <h4 className="text-foreground font-semibold mb-4">Find me on:</h4>
              <div className="flex space-x-4">
                <a
                    href="https://github.com/Krishnakumar-Naik"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <Github size={20} className="text-primary" />
                </a>
                <a
                    href="https://www.linkedin.com/in/krishnakumar-naik/"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <Linkedin size={20} className="text-primary" />
                </a>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-card/80 shadow-xl rounded-2xl p-10 border border-border flex flex-col justify-center mx-auto max-w-md lg:mx-0 lg:max-w-none justify-self-center lg:justify-self-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={sending}
              >
                <Send size={20} />
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
            {status && (
              <div className={`mt-4 text-center font-semibold ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{status}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
