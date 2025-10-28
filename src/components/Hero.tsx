import React, { useState, useRef } from 'react'
import { Github, Linkedin, Mail, MapPin, Instagram } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'

const Hero = () => {
  const [hireSending, setHireSending] = useState(false)
  const [hireStatus, setHireStatus] = useState('')
  const hireFormRef = useRef(null)

  const handleHireSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setHireSending(true)
    setHireStatus('')
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const res = await fetch('https://portfolio-backend-gq11.onrender.com/hire', {
        method: 'POST',
        body: formData,
      })
      const body = await res.json().catch(() => ({}))
      if (res.ok) {
        setHireStatus('Offer sent successfully!')
        form.reset()
      } else {
        console.error('Hire error response:', body)
        setHireStatus(body?.error || body?.details || 'Failed to send offer. Please try again later.')
      }
    } catch (err) {
      console.error('Hire fetch error:', err)
      setHireStatus(err?.message || 'Failed to send offer. Please try again later.')
    }
    setHireSending(false)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-12 pb-12 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-20">
          {/* Left: profile + brush */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[520px] lg:h-[520px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <img src="/images/Brush.png" alt="Background brush" className="w-full h-full object-contain" style={{ filter: 'none', boxShadow: 'none' }} />
              </div>
              <img src="/images/profile-img.png" alt="Profile" className="relative z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl pl-[10px] pt-[19px] md:pl-0 md:pt-0" />
            </div>
          </div>

          {/* Right: text & actions */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight">
              Krishnakumar Naik
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-foreground/90 font-semibold">Full-Stack Web Developer</p>
            <p className="text-sm md:text-lg text-foreground/90">MERN Stack | Java | Python | C | SQL</p>
            <div className="flex items-center text-foreground/70 gap-2 mt-2">
              <MapPin size={18} />
              <span className="text-sm">Yellapur, Uttara Kannada</span>
            </div>
            <p className="text-sm md:text-base text-foreground/90 max-w-xl mt-4">
              Passionate developer with expertise in full-stack development, creative skills in video editing and drawing, and experience building innovative solutions like construction management tools and voice assistants.
            </p>

            <div className="flex justify-center lg:justify-start space-x-6 mb-4 mt-6">
              <a href="https://github.com/Krishnakumar-Naik" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Github size={24} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/krishnakumar-naik/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} className="text-white" />
              </a>
              <a href="https://www.instagram.com/krishnakumar_naik_/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="text-white" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                View My Work
              </a>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300">Hire Me</button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Company / Recruiter Details</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={handleHireSubmit} ref={hireFormRef}>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-foreground">Company Name</label>
                      <input name="companyName" type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter company name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-foreground">Contact Email <span className="text-xs text-foreground/60">(company or your email)</span></label>
                      <input name="contactEmail" type="email" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter contact email" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-foreground">Your Name</label>
                        <input name="yourName" type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1 text-foreground">Your Position</label>
                        <input name="yourPosition" type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. HR, Manager, CEO" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-foreground">Offering Position</label>
                      <input name="offeringPosition" type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Frontend Developer" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-foreground">Upload Offer Letter <span className="text-xs text-foreground/60">(optional)</span></label>
                      <input name="offerLetter" type="file" className="w-full text-foreground" accept="application/pdf,.doc,.docx" />
                    </div>
                    <DialogFooter>
                      <button type="submit" className="px-8 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:from-green-600 hover:to-teal-600 transition-all font-semibold disabled:opacity-60 disabled:cursor-not-allowed" disabled={hireSending}>
                        {hireSending ? 'Sending...' : 'Send Offer'}
                      </button>
                    </DialogFooter>
                    {hireStatus && <div className={`mt-2 text-center font-semibold ${hireStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{hireStatus}</div>}
                  </form>
                </DialogContent>
              </Dialog>

              <a href="/images/Resume.pdf" download="Krishnakumar_Naik_Resume.pdf" className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
