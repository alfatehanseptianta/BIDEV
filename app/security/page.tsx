"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  Shield,
  Lock,
  Server,
  Eye,
  Key,
  AlertTriangle,
  CheckCircle2,
  FileWarning,
  Globe,
  Database,
  Users,
  Clock,
} from "lucide-react"

export default function SecurityPage() {
  const { t } = useLanguage()

  const securityMeasures = [
    {
      icon: Lock,
      titleId: "Enkripsi Data",
      titleEn: "Data Encryption",
      descId: "TLS 1.3 untuk data transit, AES-256 untuk data at rest",
      descEn: "TLS 1.3 for data in transit, AES-256 for data at rest",
    },
    {
      icon: Key,
      titleId: "Manajemen Akses",
      titleEn: "Access Management",
      descId: "Role-Based Access Control (RBAC) dengan prinsip least privilege",
      descEn: "Role-Based Access Control (RBAC) with least privilege principle",
    },
    {
      icon: Server,
      titleId: "Infrastruktur Aman",
      titleEn: "Secure Infrastructure",
      descId: "Hosting di data center tersertifikasi dengan redundansi tinggi",
      descEn: "Hosting in certified data centers with high redundancy",
    },
    {
      icon: Eye,
      titleId: "Monitoring 24/7",
      titleEn: "24/7 Monitoring",
      descId: "Pemantauan keamanan real-time dan deteksi anomali",
      descEn: "Real-time security monitoring and anomaly detection",
    },
    {
      icon: Database,
      titleId: "Backup Terenkripsi",
      titleEn: "Encrypted Backups",
      descId: "Backup otomatis harian dengan enkripsi end-to-end",
      descEn: "Automatic daily backups with end-to-end encryption",
    },
    {
      icon: Users,
      titleId: "Autentikasi Kuat",
      titleEn: "Strong Authentication",
      descId: "Multi-factor authentication untuk semua akun admin",
      descEn: "Multi-factor authentication for all admin accounts",
    },
  ]

  const complianceItems = [
    {
      titleId: "UU PDP Indonesia",
      titleEn: "Indonesia PDP Law",
      descId: "Kepatuhan terhadap Undang-Undang Perlindungan Data Pribadi",
      descEn: "Compliance with Personal Data Protection Law",
      statusId: "Patuh",
      statusEn: "Compliant",
    },
    {
      titleId: "ISO 27001",
      titleEn: "ISO 27001",
      descId: "Sistem Manajemen Keamanan Informasi",
      descEn: "Information Security Management System",
      statusId: "Dalam Proses",
      statusEn: "In Progress",
    },
    {
      titleId: "GDPR Principles",
      titleEn: "GDPR Principles",
      descId: "Menerapkan prinsip-prinsip GDPR untuk standar internasional",
      descEn: "Applying GDPR principles for international standards",
      statusId: "Diterapkan",
      statusEn: "Applied",
    },
  ]

  const incidentProcess = [
    {
      stepId: "1. Identifikasi",
      stepEn: "1. Identification",
      descId: "Tim keamanan mengidentifikasi dan mengklasifikasi insiden",
      descEn: "Security team identifies and classifies the incident",
      timeId: "< 1 jam",
      timeEn: "< 1 hour",
    },
    {
      stepId: "2. Containment",
      stepEn: "2. Containment",
      descId: "Isolasi sistem yang terdampak untuk mencegah penyebaran",
      descEn: "Isolate affected systems to prevent spread",
      timeId: "< 4 jam",
      timeEn: "< 4 hours",
    },
    {
      stepId: "3. Notifikasi",
      stepEn: "3. Notification",
      descId: "Pemberitahuan kepada pihak terdampak dan regulator jika diperlukan",
      descEn: "Notification to affected parties and regulators if required",
      timeId: "< 72 jam",
      timeEn: "< 72 hours",
    },
    {
      stepId: "4. Pemulihan",
      stepEn: "4. Recovery",
      descId: "Pemulihan sistem dan data, analisis root cause",
      descEn: "System and data recovery, root cause analysis",
      timeId: "Bervariasi",
      timeEn: "Varies",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              {t("Kepercayaan & Kepatuhan", "Trust & Compliance")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t("Keamanan & Perlindungan", "Security & Protection")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "Keamanan informasi adalah prioritas utama kami. Pelajari bagaimana kami melindungi data Anda.",
                "Information security is our top priority. Learn how we protect your data.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Langkah-langkah Keamanan", "Security Measures")}
              </h2>
              <p className="text-muted-foreground">
                {t("Perlindungan berlapis untuk data Anda", "Multi-layered protection for your data")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <measure.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(measure.titleId, measure.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(measure.descId, measure.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Kepatuhan & Standar", "Compliance & Standards")}
              </h2>
              <p className="text-muted-foreground">
                {t("Regulasi dan standar yang kami patuhi", "Regulations and standards we comply with")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceItems.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                    <Badge
                      variant={
                        t(item.statusId, item.statusEn) === "Patuh" || t(item.statusId, item.statusEn) === "Compliant"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {t(item.statusId, item.statusEn)}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(item.titleId, item.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descId, item.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Respons Insiden", "Incident Response")}
              </h2>
              <p className="text-muted-foreground">
                {t("Prosedur penanganan insiden keamanan", "Security incident handling procedures")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {incidentProcess.map((step, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-accent">{t(step.timeId, step.timeEn)}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t(step.stepId, step.stepEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(step.descId, step.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <FileWarning className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    {t("Responsible Disclosure", "Responsible Disclosure")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("Laporkan kerentanan keamanan", "Report security vulnerabilities")}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {t(
                  "Kami menghargai kontribusi peneliti keamanan dalam menjaga keamanan sistem kami. Jika Anda menemukan kerentanan keamanan, silakan laporkan melalui formulir ini atau email ke security@bidev.id.",
                  "We appreciate the contributions of security researchers in keeping our systems secure. If you find a security vulnerability, please report it through this form or email to security@bidev.id.",
                )}
              </p>

              <Card className="border-border bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">{t("Cakupan", "Scope")}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      bidev.id {t("dan subdomain", "and subdomains")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {t("Platform Prakarsa", "Prakarsa Platform")}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      API {t("publik", "public APIs")}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {t("Laporkan Kerentanan", "Report Vulnerability")}
                  </h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("Nama", "Name")}</Label>
                        <Input id="name" placeholder={t("Nama Anda", "Your name")} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">{t("Jenis Kerentanan", "Vulnerability Type")}</Label>
                      <Input id="type" placeholder={t("Contoh: XSS, SQL Injection", "Example: XSS, SQL Injection")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">{t("Deskripsi", "Description")}</Label>
                      <Textarea
                        id="description"
                        rows={4}
                        placeholder={t(
                          "Jelaskan kerentanan yang Anda temukan...",
                          "Describe the vulnerability you found...",
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="steps">{t("Langkah Reproduksi", "Steps to Reproduce")}</Label>
                      <Textarea
                        id="steps"
                        rows={3}
                        placeholder={t(
                          "1. Buka halaman...\n2. Klik...\n3. Masukkan...",
                          "1. Go to page...\n2. Click...\n3. Enter...",
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t("Kirim Laporan", "Submit Report")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            {t("Pertanyaan Keamanan?", "Security Questions?")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Tim keamanan kami siap menjawab pertanyaan Anda tentang praktik keamanan kami.",
              "Our security team is ready to answer your questions about our security practices.",
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:security@bidev.id">
              <Button size="lg">security@bidev.id</Button>
            </a>
            <Link href="/data-policy">
              <Button size="lg" variant="outline">
                {t("Lihat Kebijakan Data", "View Data Policy")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
