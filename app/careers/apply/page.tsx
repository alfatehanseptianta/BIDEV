import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Apply | BIDEV Institute Careers",
  description: "Submit your application to join BIDEV Institute.",
}

export default function ApplyPage() {
  return (
    <main className="pt-[72px]">
      <section className="py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Application Form</CardTitle>
              <CardDescription>
                Complete the form below to apply. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Position Selection */}
              <div className="space-y-2">
                <Label htmlFor="position">Position Applied For *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="research-associate">Research Associate - Social Protection</SelectItem>
                    <SelectItem value="data-analyst">Data Analyst - Prakarsa</SelectItem>
                    <SelectItem value="project-coordinator">Project Coordinator</SelectItem>
                    <SelectItem value="fellowship">Research Fellowship</SelectItem>
                    <SelectItem value="internship">Internship Program</SelectItem>
                    <SelectItem value="visiting">Visiting Researcher</SelectItem>
                    <SelectItem value="other">Other / General Application</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold">Personal Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" placeholder="+62..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/..." />
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="font-semibold">Education</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Highest Degree *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="s1">S1 (Bachelor's)</SelectItem>
                        <SelectItem value="s2">S2 (Master's)</SelectItem>
                        <SelectItem value="s3">S3 (Doctorate)</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="field">Field of Study *</Label>
                    <Input id="field" placeholder="e.g., Urban Planning, Economics" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university">University *</Label>
                  <Input id="university" placeholder="University name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradYear">Graduation Year</Label>
                  <Input id="gradYear" placeholder="e.g., 2024" />
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h3 className="font-semibold">Experience</h3>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Relevant Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Fresh Graduate</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentRole">Current/Most Recent Role</Label>
                  <Input id="currentRole" placeholder="Job title at organization" />
                </div>
              </div>

              {/* Documents */}
              <div className="space-y-4">
                <h3 className="font-semibold">Documents</h3>
                <div className="space-y-2">
                  <Label>CV/Resume *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (max 5MB)</p>
                    <Input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Cover Letter</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (max 5MB)</p>
                    <Input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Portfolio/Writing Sample</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">PDF (max 10MB)</p>
                    <Input type="file" className="hidden" accept=".pdf" />
                  </div>
                </div>
              </div>

              {/* Additional */}
              <div className="space-y-4">
                <h3 className="font-semibold">Additional Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join BIDEV? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Tell us about your interest and what you hope to contribute..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Earliest Start Date *</Label>
                  <Input id="availability" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Expected Salary (IDR/month)</Label>
                  <Input id="salary" placeholder="e.g., 10,000,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referral">How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">BIDEV Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Employee Referral</SelectItem>
                      <SelectItem value="university">University Career Center</SelectItem>
                      <SelectItem value="event">Event/Workshop</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-start space-x-3">
                  <Checkbox id="consent" />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I confirm that the information provided is accurate and I consent to BIDEV processing my personal
                    data for recruitment purposes. *
                  </Label>
                </div>
              </div>

              <Button size="lg" className="w-full">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
