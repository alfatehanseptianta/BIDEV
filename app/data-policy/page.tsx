"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Database,
  Shield,
  Lock,
  Eye,
  Clock,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Mail,
} from "lucide-react"

export default function DataPolicyPage() {
  const { t } = useLanguage()

  const principles = [
    {
      icon: Lock,
      titleId: "Privasi by Design",
      titleEn: "Privacy by Design",
      descId: "Perlindungan data diintegrasikan sejak awal dalam setiap proyek dan sistem",
      descEn: "Data protection is integrated from the start in every project and system",
    },
    {
      icon: Eye,
      titleId: "Transparansi",
      titleEn: "Transparency",
      descId: "Kami menjelaskan dengan jelas bagaimana data dikumpulkan, digunakan, dan dilindungi",
      descEn: "We clearly explain how data is collected, used, and protected",
    },
    {
      icon: Users,
      titleId: "Minimisasi Data",
      titleEn: "Data Minimization",
      descId: "Hanya mengumpulkan data yang benar-benar diperlukan untuk tujuan yang ditentukan",
      descEn: "Only collecting data that is truly necessary for specified purposes",
    },
    {
      icon: Clock,
      titleId: "Retensi Terbatas",
      titleEn: "Limited Retention",
      descId: "Data disimpan hanya selama diperlukan dan dihapus sesuai jadwal",
      descEn: "Data is stored only as long as necessary and deleted according to schedule",
    },
  ]

  const dataTypes = [
    {
      typeId: "Data Pribadi",
      typeEn: "Personal Data",
      examplesId: "Nama, email, nomor telepon dari pengunjung website dan klien",
      examplesEn: "Name, email, phone number from website visitors and clients",
      purposeId: "Komunikasi dan pelayanan klien",
      purposeEn: "Communication and client service",
      retentionId: "3 tahun setelah interaksi terakhir",
      retentionEn: "3 years after last interaction",
    },
    {
      typeId: "Data Proyek",
      typeEn: "Project Data",
      examplesId: "Data riset, survei, dan analisis yang dikumpulkan dalam proyek",
      examplesEn: "Research data, surveys, and analysis collected in projects",
      purposeId: "Pelaksanaan proyek sesuai kontrak",
      purposeEn: "Project execution as per contract",
      retentionId: "Sesuai perjanjian dengan klien",
      retentionEn: "As per client agreement",
    },
    {
      typeId: "Data Prakarsa",
      typeEn: "Prakarsa Data",
      examplesId: "Data RW, data sosial ekonomi, data spasial dari platform Prakarsa",
      examplesEn: "RW data, socio-economic data, spatial data from Prakarsa platform",
      purposeId: "Mendukung kebijakan berbasis data",
      purposeEn: "Supporting data-driven policies",
      retentionId: "Kepemilikan penuh oleh pemerintah daerah",
      retentionEn: "Full ownership by local government",
    },
    {
      typeId: "Data Analitik",
      typeEn: "Analytics Data",
      examplesId: "Data penggunaan website, cookies, log akses",
      examplesEn: "Website usage data, cookies, access logs",
      purposeId: "Peningkatan layanan dan pengalaman pengguna",
      purposeEn: "Service improvement and user experience",
      retentionId: "1 tahun",
      retentionEn: "1 year",
    },
  ]

  const rights = [
    {
      titleId: "Hak Akses",
      titleEn: "Right to Access",
      descId: "Anda dapat meminta salinan data pribadi yang kami simpan tentang Anda",
      descEn: "You can request a copy of the personal data we hold about you",
    },
    {
      titleId: "Hak Koreksi",
      titleEn: "Right to Correction",
      descId: "Anda dapat meminta perbaikan data yang tidak akurat atau tidak lengkap",
      descEn: "You can request correction of inaccurate or incomplete data",
    },
    {
      titleId: "Hak Penghapusan",
      titleEn: "Right to Deletion",
      descId: "Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu",
      descEn: "You can request deletion of your personal data under certain conditions",
    },
    {
      titleId: "Hak Pembatasan",
      titleEn: "Right to Restriction",
      descId: "Anda dapat meminta pembatasan pemrosesan data Anda",
      descEn: "You can request restriction of processing your data",
    },
    {
      titleId: "Hak Portabilitas",
      titleEn: "Right to Portability",
      descId: "Anda dapat meminta data Anda dalam format yang dapat dibaca mesin",
      descEn: "You can request your data in a machine-readable format",
    },
    {
      titleId: "Hak Keberatan",
      titleEn: "Right to Object",
      descId: "Anda dapat keberatan terhadap pemrosesan data Anda untuk tujuan tertentu",
      descEn: "You can object to processing of your data for certain purposes",
    },
  ]

  const prakarsa = [
    {
      titleId: "Kepemilikan Data",
      titleEn: "Data Ownership",
      descId: "Semua data yang dikumpulkan melalui Prakarsa adalah milik penuh pemerintah daerah",
      descEn: "All data collected through Prakarsa is fully owned by the local government",
    },
    {
      titleId: "Akses Terkontrol",
      titleEn: "Controlled Access",
      descId: "Sistem RBAC memastikan hanya pihak berwenang yang dapat mengakses data",
      descEn: "RBAC system ensures only authorized parties can access data",
    },
    {
      titleId: "Enkripsi End-to-End",
      titleEn: "End-to-End Encryption",
      descId: "Data dienkripsi saat transit dan saat disimpan",
      descEn: "Data is encrypted in transit and at rest",
    },
    {
      titleId: "Audit Trail",
      titleEn: "Audit Trail",
      descId: "Semua akses dan perubahan data tercatat untuk akuntabilitas",
      descEn: "All data access and changes are logged for accountability",
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
              {t("Kebijakan Data & Privasi", "Data & Privacy Policy")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              {t(
                "Komitmen kami terhadap perlindungan data pribadi dan tata kelola data yang bertanggung jawab.",
                "Our commitment to personal data protection and responsible data governance.",
              )}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("Terakhir diperbarui: Januari 2025", "Last updated: January 2025")}
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Prinsip Perlindungan Data", "Data Protection Principles")}
              </h2>
              <p className="text-muted-foreground">
                {t("Fondasi pengelolaan data kami", "The foundation of our data management")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(principle.titleId, principle.titleEn)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(principle.descId, principle.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Jenis Data yang Kami Kelola", "Types of Data We Manage")}
              </h2>
              <p className="text-muted-foreground">
                {t("Kategori data dan kebijakan pengelolaannya", "Data categories and their management policies")}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {dataTypes.map((data, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t("Jenis Data", "Data Type")}</p>
                      <p className="font-semibold text-foreground">{t(data.typeId, data.typeEn)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t("Contoh", "Examples")}</p>
                      <p className="text-sm text-foreground">{t(data.examplesId, data.examplesEn)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t("Tujuan", "Purpose")}</p>
                      <p className="text-sm text-foreground">{t(data.purposeId, data.purposeEn)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{t("Retensi", "Retention")}</p>
                      <p className="text-sm text-foreground">{t(data.retentionId, data.retentionEn)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">{t("Hak Anda", "Your Rights")}</h2>
              <p className="text-muted-foreground">
                {t("Hak-hak Anda terkait data pribadi", "Your rights regarding personal data")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rights.map((right, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t(right.titleId, right.titleEn)}</h3>
                      <p className="text-sm text-muted-foreground">{t(right.descId, right.descEn)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prakarsa Data Governance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Tata Kelola Data Prakarsa", "Prakarsa Data Governance")}
              </h2>
              <p className="text-muted-foreground">
                {t("Kebijakan khusus untuk platform Prakarsa", "Special policies for the Prakarsa platform")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prakarsa.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(item.titleId, item.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(item.descId, item.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border mt-6 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("Penting untuk Pemerintah Daerah", "Important for Local Governments")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(
                      "BIDEV tidak pernah menggunakan data Prakarsa untuk tujuan komersial atau membagikannya kepada pihak ketiga tanpa persetujuan tertulis dari pemerintah daerah. Semua data tetap menjadi aset pemerintah daerah.",
                      "BIDEV never uses Prakarsa data for commercial purposes or shares it with third parties without written consent from the local government. All data remains an asset of the local government.",
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-serif font-bold mb-4">
                {t("Pertanyaan tentang Privasi?", "Questions about Privacy?")}
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                {t(
                  "Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin menggunakan hak Anda, silakan hubungi Data Protection Officer kami.",
                  "If you have questions about our privacy policy or want to exercise your rights, please contact our Data Protection Officer.",
                )}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:privacy@bidev.id">
                  <Button variant="secondary" size="lg">
                    privacy@bidev.id
                  </Button>
                </a>
                <Link href="/security">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    {t("Lihat Keamanan", "View Security")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
