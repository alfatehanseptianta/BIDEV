"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function PrivateContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    interest: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Private contact submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="bg-[#F7F5EF]/5 border-[#F7F5EF]/10">
        <CardContent className="py-12 text-center">
          <CheckCircle className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#F7F5EF] mb-2">Message Sent!</h3>
          <p className="text-[#F7F5EF]/70 mb-6">
            Thank you for your interest. Our business development team will contact you within 24 hours.
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
                placeholder="your@company.com"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+62 812 3456 7890"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Company *</label>
              <Input
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your company"
                className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Industry</label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
              >
                <SelectTrigger className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF]">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realestate">Real Estate & Property</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="finance">Financial Services</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Area of Interest</label>
              <Select
                value={formData.interest}
                onValueChange={(value) => setFormData({ ...formData, interest: value })}
              >
                <SelectTrigger className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF]">
                  <SelectValue placeholder="Select interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="investment">Investment Advisory</SelectItem>
                  <SelectItem value="market-entry">Market Entry</SelectItem>
                  <SelectItem value="expert-access">Expert Access</SelectItem>
                  <SelectItem value="data">Urban Data Intelligence</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Budget Range (optional)</label>
              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF]">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under50">Under IDR 50M</SelectItem>
                  <SelectItem value="50-100">IDR 50M - 100M</SelectItem>
                  <SelectItem value="100-250">IDR 100M - 250M</SelectItem>
                  <SelectItem value="250-500">IDR 250M - 500M</SelectItem>
                  <SelectItem value="over500">Over IDR 500M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F7F5EF]/80 mb-1.5">Message *</label>
            <Textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your business needs..."
              className="bg-[#F7F5EF]/10 border-[#F7F5EF]/20 text-[#F7F5EF] placeholder:text-[#F7F5EF]/40"
            />
          </div>

          <Button type="submit" className="w-full bg-[#B89B5E] text-[#1C1C1C] hover:bg-[#B89B5E]/90">
            Submit to Private Sector Desk
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
