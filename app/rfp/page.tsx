"use client"

import type React from "react"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/lib/language-context"
import { Upload, FileText, Clock, DollarSign, User, Building, CheckCircle, ArrowRight } from "lucide-react"

export default function RFPPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    organizationType: "",
    organizationName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    projectTitle: "",
    projectCategory: "",
    deadline: "",
    budgetRange: "",
    description: "",
    deliverables: "",
    agreeToTerms: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen">
        <section className="pt-[72px] min-h-[80vh] flex items-center justify-center bg-muted/30">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              {t("TOR/RFP Berhasil Dikirim", "TOR/RFP Successfully Submitted")}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t(
                "Tim kami akan meninjau dokumen Anda dan menghubungi dalam 2-3 hari kerja.",
                "Our team will review your document and contact you within 2-3 business days.",
              )}
            </p>
            <Button onClick={() => setSubmitted(false)}>{t("Kirim TOR/RFP Lain", "Submit Another TOR/RFP")}</Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Pengajuan Formal", "Formal Submission")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F7F5EF] leading-tight">
              {t("Kirim TOR / RFP", "Submit TOR / RFP")}
            </h1>
            <p className="mt-6 text-lg text-[#F7F5EF]/80">
              {t(
                "Untuk pengadaan formal, silakan unggah Kerangka Acuan Kerja (TOR) atau Request for Proposal (RFP) Anda. Tim kami akan meninjau dan merespons dalam 2-3 hari kerja.",
                "For formal procurement, please upload your Terms of Reference (TOR) or Request for Proposal (RFP). Our team will review and respond within 2-3 business days.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization Type */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">{t("Jenis Organisasi", "Organization Type")} *</Label>
              <RadioGroup
                value={formData.organizationType}
                onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="government" id="government" />
                  <Label htmlFor="government" className="flex items-center gap-2 cursor-pointer">
                    <Building className="w-4 h-4 text-primary" />
                    {t("Pemerintah", "Government")}
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private" className="flex items-center gap-2 cursor-pointer">
                    <User className="w-4 h-4 text-primary" />
                    {t("Swasta / Investor", "Private / Investor")}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Organization Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="organizationName">{t("Nama Organisasi", "Organization Name")} *</Label>
                <Input
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  placeholder={t("Contoh: Dinas PUPR Kota Bandung", "e.g., Bandung City Public Works Agency")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectCategory">{t("Kategori Proyek", "Project Category")} *</Label>
                <Select
                  value={formData.projectCategory}
                  onValueChange={(value) => setFormData({ ...formData, projectCategory: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("Pilih kategori", "Select category")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roadmap">{t("Roadmap / Masterplan", "Roadmap / Masterplan")}</SelectItem>
                    <SelectItem value="research">{t("Penelitian / Kajian", "Research / Study")}</SelectItem>
                    <SelectItem value="consulting">{t("Konsultasi Kebijakan", "Policy Consulting")}</SelectItem>
                    <SelectItem value="training">{t("Pelatihan / Bimtek", "Training / Capacity Building")}</SelectItem>
                    <SelectItem value="prakarsa">{t("Prakarsa Deployment", "Prakarsa Deployment")}</SelectItem>
                    <SelectItem value="digital">{t("Sistem Digital / IT", "Digital Systems / IT")}</SelectItem>
                    <SelectItem value="other">{t("Lainnya", "Other")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactName">{t("Nama PIC", "Contact Person")} *</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">{t("Telepon", "Phone")}</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <Label htmlFor="projectTitle">{t("Judul Proyek", "Project Title")} *</Label>
              <Input
                id="projectTitle"
                value={formData.projectTitle}
                onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                placeholder={t(
                  "Contoh: Penyusunan Roadmap Smart City Kota Bandung 2025-2030",
                  "e.g., Smart City Roadmap Development for Bandung 2025-2030",
                )}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="deadline" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {t("Deadline Pengajuan", "Submission Deadline")}
                </Label>
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetRange" className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {t("Rentang Anggaran", "Budget Range")}
                </Label>
                <Select
                  value={formData.budgetRange}
                  onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("Pilih rentang", "Select range")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under100">&lt; Rp 100 juta</SelectItem>
                    <SelectItem value="100-500">Rp 100 - 500 juta</SelectItem>
                    <SelectItem value="500-1000">Rp 500 juta - 1 miliar</SelectItem>
                    <SelectItem value="1000-5000">Rp 1 - 5 miliar</SelectItem>
                    <SelectItem value="above5000">&gt; Rp 5 miliar</SelectItem>
                    <SelectItem value="tbd">{t("Akan ditentukan", "To be determined")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">{t("Deskripsi Singkat", "Brief Description")} *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={t(
                  "Jelaskan latar belakang, tujuan, dan ruang lingkup proyek...",
                  "Describe the background, objectives, and scope of the project...",
                )}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deliverables">{t("Output yang Diharapkan", "Expected Deliverables")}</Label>
              <Textarea
                id="deliverables"
                value={formData.deliverables}
                onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                placeholder={t(
                  "Contoh: Dokumen roadmap, executive summary, presentasi steering...",
                  "e.g., Roadmap document, executive summary, steering presentation...",
                )}
                rows={3}
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label>{t("Unggah Dokumen TOR/RFP", "Upload TOR/RFP Document")}</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">
                  {t("Seret file ke sini atau klik untuk memilih", "Drag files here or click to browse")}
                </p>
                <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (max 10MB)</p>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="agree"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
              />
              <Label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                {t(
                  "Saya menyetujui bahwa informasi yang diberikan akan digunakan oleh BIDEV untuk mengevaluasi dan merespons pengajuan ini sesuai dengan kebijakan privasi.",
                  "I agree that the information provided will be used by BIDEV to evaluate and respond to this submission in accordance with the privacy policy.",
                )}
              </Label>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={!formData.agreeToTerms}
            >
              {t("Kirim Pengajuan", "Submit Proposal")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t("Respons Cepat", "Quick Response")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Tim kami akan meninjau dan merespons dalam 2-3 hari kerja.",
                    "Our team will review and respond within 2-3 business days.",
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {t("Kerahasiaan Terjamin", "Confidentiality Guaranteed")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Semua dokumen diperlakukan secara rahasia sesuai NDA standar.",
                    "All documents are treated confidentially under standard NDA.",
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t("Routing Otomatis", "Auto Routing")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Pengajuan otomatis diarahkan ke Government Desk atau Private Desk.",
                    "Submissions are automatically routed to Government Desk or Private Desk.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
