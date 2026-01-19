"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function RequestDemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    city: "",
    orgType: "",
    timeline: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Demo Request Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in PRAKARSA. Our team will contact you within 2 business days to schedule your
            demonstration.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+62 812 3456 7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Organization *</label>
              <Input
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Your organization"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">City/Region *</label>
              <Input
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g., Kota Surabaya"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Organization Type *</label>
              <Select
                value={formData.orgType}
                onValueChange={(value) => setFormData({ ...formData, orgType: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pemkot">Pemerintah Kota</SelectItem>
                  <SelectItem value="pemkab">Pemerintah Kabupaten</SelectItem>
                  <SelectItem value="pemprov">Pemerintah Provinsi</SelectItem>
                  <SelectItem value="kementerian">Kementerian/Lembaga</SelectItem>
                  <SelectItem value="investor">Investor/Private Sector</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Timeline</label>
            <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
              <SelectTrigger>
                <SelectValue placeholder="When are you looking to implement?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediately (within 1 month)</SelectItem>
                <SelectItem value="quarter">This quarter (1-3 months)</SelectItem>
                <SelectItem value="halfyear">Within 6 months</SelectItem>
                <SelectItem value="planning">Planning phase (6+ months)</SelectItem>
                <SelectItem value="exploring">Just exploring</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Additional Notes</label>
            <Textarea
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about your specific needs or questions about PRAKARSA..."
            />
          </div>

          <Button type="submit" className="w-full bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
            Request Demo
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
