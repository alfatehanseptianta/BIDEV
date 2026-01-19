"use client"

import type React from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "government",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({ name: "", email: "", organization: "", type: "government", message: "" })
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm uppercase tracking-widest text-background/60 font-semibold mb-4">Get In Touch</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-background mb-6">Let&apos;s Work Together</h2>
            <p className="text-background/70 mb-10 text-lg">
              Whether you&apos;re a government agency, private company, or academic institution — we&apos;re ready to
              collaborate on your next urban development project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-background mb-1">Office Address</p>
                  <p className="text-background/60 text-sm leading-relaxed">
                    Gedung Rektorat ITB, Lantai 3
                    <br />
                    Jl. Ganesha No. 10, Bandung 40132
                    <br />
                    Jawa Barat, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-background mb-1">Email</p>
                  <a
                    href="mailto:info@bidev.id"
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    info@bidev.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-background mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/6281234567890"
                    className="text-background/60 text-sm hover:text-background transition-colors"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10">
            <h3 className="font-semibold text-xl text-background mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-background/80 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-background/80 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-background/80 mb-2">Organization</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-background/80 mb-2">I am a...</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="government" className="text-foreground">
                    Government Agency
                  </option>
                  <option value="private" className="text-foreground">
                    Private Sector
                  </option>
                  <option value="academic" className="text-foreground">
                    Academic Institution
                  </option>
                  <option value="media" className="text-foreground">
                    Media
                  </option>
                  <option value="other" className="text-foreground">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-background/80 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
