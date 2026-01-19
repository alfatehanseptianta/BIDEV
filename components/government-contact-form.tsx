"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function GovernmentContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    position: "",
    institutionType: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Government contact submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="bg-[#F7F5EF]/5 border-[#F7F5EF]/10">
        <CardContent className="py-12 text-center">
          <CheckCircle className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#F7F5EF] mb-2">Message Sent!</h3>
          <p className="text-[#F7F5EF]/70 mb-6">
            Thank you for contacting the Government Desk. Our team will respond within 1-2 business days.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="border-[#F7F5EF]/30 text-[#F7F5EF] hover:bg-[#F7F5EF]/10 bg-transparent"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-[#F7F5EF]/5 border-[#F7F5EF]/10">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Full Name *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Position *</label>
              <Input
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="Your position"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Email *</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.go.id"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Phone *</label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+62 812 3456 7890"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Institution *</label>
              <Input
                required
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="e.g., Bappeda Kota Bandung"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Institution Type *</label>
              <Select
                value={formData.institutionType}
                onValueChange={(value) => setFormData({ ...formData, institutionType: value })}
              >
                <SelectTrigger className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pemkot">Pemerintah Kota</SelectItem>
                  <SelectItem value="pemkab">Pemerintah Kabupaten</SelectItem>
                  <SelectItem value="pemprov">Pemerintah Provinsi</SelectItem>
                  <SelectItem value="kementerian">Kementerian</SelectItem>
                  <SelectItem value="lembaga">Lembaga Negara</SelectItem>
                  <SelectItem value="bumn">BUMN/BUMD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Area of Interest</label>
            <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
              <SelectTrigger className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF]">
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prakarsa">PRAKARSA Deployment</SelectItem>
                <SelectItem value="policy">Policy Consulting</SelectItem>
                <SelectItem value="research">Research Study</SelectItem>
                <SelectItem value="training">Training Program</SelectItem>
                <SelectItem value="speaker">Expert Speaker</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Message *</label>
            <Textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your needs or questions..."
              className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
            />
          </div>

          <Button type="submit" className="w-full bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
            Submit to Government Desk
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
