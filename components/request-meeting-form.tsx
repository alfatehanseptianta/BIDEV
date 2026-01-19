"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface RequestMeetingFormProps {
  expertName?: string
  expertId?: string
}

export function RequestMeetingForm({ expertName, expertId }: RequestMeetingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    orgType: "",
    intent: "",
    timeline: "",
    location: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    console.log("Form submitted:", { ...formData, expertName, expertId })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Request Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest. We&apos;ll review your request and get back to you within 48 hours.
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
          {expertName && (
            <div className="p-3 bg-muted rounded-lg mb-4">
              <p className="text-sm text-muted-foreground">
                Requesting meeting with: <strong className="text-foreground">{expertName}</strong>
              </p>
            </div>
          )}

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
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
              <Input
                type="tel"
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
                  <SelectItem value="government">Government Agency</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                  <SelectItem value="academic">Academic Institution</SelectItem>
                  <SelectItem value="ngo">NGO / Non-Profit</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Intent *</label>
              <Select
                value={formData.intent}
                onValueChange={(value) => setFormData({ ...formData, intent: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select intent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="speaking">Speaking Engagement</SelectItem>
                  <SelectItem value="training">Training Program</SelectItem>
                  <SelectItem value="research">Research Collaboration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Timeline</label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                  <SelectItem value="1month">Within 1 month</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Meeting Format</label>
              <Select
                value={formData.location}
                onValueChange={(value) => setFormData({ ...formData, location: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online (Video Call)</SelectItem>
                  <SelectItem value="offline-bandung">Offline - Bandung</SelectItem>
                  <SelectItem value="offline-jakarta">Offline - Jakarta</SelectItem>
                  <SelectItem value="offline-other">Offline - Other Location</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
            <Textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your project or consultation needs..."
            />
          </div>

          <Button type="submit" className="w-full bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
