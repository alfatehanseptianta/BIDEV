"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, ArrowLeft, Building, Briefcase, GraduationCap, Newspaper, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type RequestType = "meeting" | "proposal" | "demo" | null
type ClientType = "government" | "private" | "academic" | "media" | "other" | null

const clientTypes = [
  { id: "government", label: "Government", icon: Building, description: "Kementerian, Pemda, BUMN/BUMD" },
  { id: "private", label: "Private Sector", icon: Briefcase, description: "Perusahaan, Konsultan, Developer" },
  { id: "academic", label: "Academic", icon: GraduationCap, description: "Universitas, Lembaga Riset" },
  { id: "media", label: "Media", icon: Newspaper, description: "Jurnalis, Media Outlet" },
  { id: "other", label: "Other", icon: Users, description: "NGO, Individu, Lainnya" },
]

const requestTypes = [
  { id: "meeting", label: "Request Meeting", description: "Konsultasi awal dengan expert kami" },
  { id: "proposal", label: "Request Proposal", description: "Ajukan proposal untuk proyek Anda" },
  { id: "demo", label: "Request Demo", description: "Demo platform Prakarsa" },
]

const serviceOptions = [
  { value: "expert-speaker", label: "Expert Speaker & Resource Person" },
  { value: "policy-consulting", label: "Policy & Development Consulting" },
  { value: "training", label: "Training & Capacity Building" },
  { value: "roadmap-development", label: "Roadmap & Masterplan Development" },
  { value: "research", label: "Research & Field Studies" },
  { value: "digital-systems", label: "Digital Systems & IT Projects" },
  { value: "investment-advisory", label: "Investment Advisory" },
  { value: "stakeholder-engagement", label: "Stakeholder Engagement" },
  { value: "market-entry", label: "Market Entry Consulting" },
  { value: "impact-assessment", label: "Impact Assessment" },
  { value: "other", label: "Other" },
]

export default function RequestFormClient() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")
  const prefillRequestType: RequestType =
    typeParam === "meeting" || typeParam === "proposal" || typeParam === "demo" ? (typeParam as RequestType) : null
  const serviceParam = searchParams.get("service")
  const prefillService = serviceOptions.some((option) => option.value === serviceParam) ? serviceParam : null
  const [step, setStep] = useState(1)
  const [clientType, setClientType] = useState<ClientType>(null)
  const [requestType, setRequestType] = useState<RequestType>(prefillRequestType)

  const handleClientSelect = (type: ClientType) => {
    setClientType(type)
    if (prefillRequestType) {
      setRequestType(prefillRequestType)
      setStep(3)
      return
    }
    setStep(2)
  }

  const handleRequestSelect = (type: RequestType) => {
    setRequestType(type)
    setStep(3)
  }

  const handleBack = () => {
    if (step === 3) {
      setStep(2)
      setRequestType(null)
    } else if (step === 2) {
      setStep(1)
      setClientType(null)
    }
  }

  return (
    <main className="pt-[72px]">
      <section className="py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Step {step} of 3</span>
              {step > 1 && (
                <button onClick={handleBack} className="text-sm text-primary hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Client Type */}
          {step === 1 && (
            <div>
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Request Center</h1>
                <p className="text-lg text-muted-foreground">Satu pintu untuk semua permintaan. Pilih kategori Anda.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {clientTypes.map((type) => (
                  <Card
                    key={type.id}
                    className="cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => handleClientSelect(type.id as ClientType)}
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{type.label}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Request Type */}
          {step === 2 && (
            <div>
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">What do you need?</h1>
                <p className="text-lg text-muted-foreground">Pilih jenis permintaan Anda.</p>
              </div>
              <div className="space-y-4">
                {requestTypes.map((type) => (
                  <Card
                    key={type.id}
                    className="cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => handleRequestSelect(type.id as RequestType)}
                  >
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{type.label}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Form */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>
                  {requestType === "meeting" && "Request Meeting"}
                  {requestType === "proposal" && "Request Proposal"}
                  {requestType === "demo" && "Request Prakarsa Demo"}
                </CardTitle>
                <CardDescription>
                  {clientType === "government" && "Government Request Form"}
                  {clientType === "private" && "Private Sector Request Form"}
                  {clientType === "academic" && "Academic Request Form"}
                  {clientType === "media" && "Media Request Form"}
                  {clientType === "other" && "General Request Form"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position/Title</Label>
                      <Input id="position" placeholder="Your position" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input id="organization" placeholder="Your organization" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" placeholder="+62..." />
                    </div>
                  </div>
                </div>

                {/* Request Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Request Details</h3>

                  {requestType === "meeting" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="topic">Meeting Topic *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Consultation</SelectItem>
                            <SelectItem value="prakarsa">Prakarsa Platform</SelectItem>
                            <SelectItem value="research">Research Project</SelectItem>
                            <SelectItem value="training">Training Program</SelectItem>
                            <SelectItem value="partnership">Partnership Discussion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferred-date">Preferred Date</Label>
                        <Input id="preferred-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label>Meeting Format</Label>
                        <RadioGroup defaultValue="online" className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" />
                            <Label htmlFor="online" className="font-normal">
                              Online
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="offline" id="offline" />
                            <Label htmlFor="offline" className="font-normal">
                              In-person (Bandung)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </>
                  )}

                  {requestType === "proposal" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select defaultValue={prefillService ?? undefined}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100m">{"< Rp 100 juta"}</SelectItem>
                            <SelectItem value="100-500m">Rp 100-500 juta</SelectItem>
                            <SelectItem value="500m-1b">Rp 500 juta - 1 miliar</SelectItem>
                            <SelectItem value="above-1b">{"> Rp 1 miliar"}</SelectItem>
                            <SelectItem value="tbd">To be determined</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Expected Timeline</Label>
                        <Input id="timeline" placeholder="e.g., Start Q2 2026, 6 months duration" />
                      </div>
                    </>
                  )}

                  {requestType === "demo" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="region">Region/City of Interest *</Label>
                        <Input id="region" placeholder="e.g., Kota Bandung" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="current-system">Current Data System</Label>
                        <Input id="current-system" placeholder="Describe your current data management system" />
                      </div>
                      <div className="space-y-2">
                        <Label>Demo Preference</Label>
                        <RadioGroup defaultValue="live" className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="live" id="live" />
                            <Label htmlFor="live" className="font-normal">
                              Live Demo (Online)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="video" id="video" />
                            <Label htmlFor="video" className="font-normal">
                              Recorded Demo
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      {requestType === "meeting" && "What would you like to discuss? *"}
                      {requestType === "proposal" && "Project Description *"}
                      {requestType === "demo" && "What challenges are you trying to solve? *"}
                    </Label>
                    <Textarea id="description" placeholder="Please provide details..." rows={4} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="how-heard">How did you hear about BIDEV?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="event">Event/Workshop</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Submit Request
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 48 hours on business days.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Links */}
          {step === 1 && (
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/for-government/procurement" className="text-sm text-primary hover:underline">
                  Government Procurement
                </Link>
                <Link href="/prakarsa/demo" className="text-sm text-primary hover:underline">
                  Prakarsa Demo
                </Link>
                <Link href="/media" className="text-sm text-primary hover:underline">
                  Media Inquiry
                </Link>
                <Link href="/join" className="text-sm text-primary hover:underline">
                  Join as Expert
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
