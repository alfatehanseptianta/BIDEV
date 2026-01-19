"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Building2,
  Award,
  FileCheck,
  Users,
  GraduationCap,
  Shield,
  CheckCircle2,
  Download,
  ArrowRight,
  Globe,
  BookOpen,
} from "lucide-react"

export default function CredentialsPage() {
  const { t } = useLanguage()

  const legalInfo = [
    {
      labelId: "Nama Resmi",
      labelEn: "Legal Name",
      valueId: "PT Bandung Institute for Development",
      valueEn: "PT Bandung Institute for Development",
    },
    {
      labelId: "Nama Merek",
      labelEn: "Brand Name",
      valueId: "BIDEV Institute",
      valueEn: "BIDEV Institute",
    },
    {
      labelId: "NPWP",
      labelEn: "Tax ID",
      valueId: "XX.XXX.XXX.X-XXX.XXX",
      valueEn: "XX.XXX.XXX.X-XXX.XXX",
    },
    {
      labelId: "NIB",
      labelEn: "Business License",
      valueId: "XXXXXXXXXX",
      valueEn: "XXXXXXXXXX",
    },
    {
      labelId: "Tahun Berdiri",
      labelEn: "Year Established",
      valueId: "2020",
      valueEn: "2020",
    },
    {
      labelId: "Alamat Kantor",
      labelEn: "Office Address",
      valueId: "Gedung Rektorat ITB Lt. 3, Jl. Ganesha No. 10, Bandung 40132",
      valueEn: "ITB Rectorate Building 3rd Floor, Jl. Ganesha No. 10, Bandung 40132",
    },
  ]

  const certifications = [
    {
      iconName: "FileCheck",
      titleId: "ISO 9001:2015",
      titleEn: "ISO 9001:2015",
      descId: "Sistem Manajemen Mutu",
      descEn: "Quality Management System",
      statusId: "Dalam Proses",
      statusEn: "In Progress",
    },
    {
      iconName: "Shield",
      titleId: "ISO 27001",
      titleEn: "ISO 27001",
      descId: "Sistem Manajemen Keamanan Informasi",
      descEn: "Information Security Management",
      statusId: "Direncanakan 2025",
      statusEn: "Planned 2025",
    },
    {
      iconName: "GraduationCap",
      titleId: "Afiliasi Akademik",
      titleEn: "Academic Affiliation",
      descId: "Kemitraan dengan ITB & UNPAD",
      descEn: "Partnership with ITB & UNPAD",
      statusId: "Aktif",
      statusEn: "Active",
    },
  ]

  const standards = [
    {
      titleId: "Penjaminan Mutu",
      titleEn: "Quality Assurance",
      descId: "Proses QA 4 tahap dengan peer review oleh akademisi independen",
      descEn: "4-stage QA process with peer review by independent academics",
      linkHref: "/quality",
    },
    {
      titleId: "Kode Etik",
      titleEn: "Code of Ethics",
      descId: "Standar etika riset dan konsultasi yang ketat",
      descEn: "Strict research and consulting ethics standards",
      linkHref: "/integrity",
    },
    {
      titleId: "Kebijakan COI",
      titleEn: "COI Policy",
      descId: "Deklarasi dan manajemen konflik kepentingan",
      descEn: "Conflict of interest declaration and management",
      linkHref: "/integrity#coi",
    },
    {
      titleId: "Tata Kelola Data",
      titleEn: "Data Governance",
      descId: "Kebijakan perlindungan dan keamanan data",
      descEn: "Data protection and security policies",
      linkHref: "/data-policy",
    },
  ]

  const affiliations = [
    { name: "Institut Teknologi Bandung (ITB)", type: "Academic Partner" },
    { name: "Universitas Padjadjaran (UNPAD)", type: "Academic Partner" },
    { name: "Bappenas", type: "Government Partner" },
    { name: "World Bank Indonesia", type: "Development Partner" },
    { name: "GIZ Indonesia", type: "Development Partner" },
    { name: "UNDP Indonesia", type: "Development Partner" },
  ]

  const documents = [
    {
      titleId: "Profil Perusahaan",
      titleEn: "Company Profile",
      descId: "Ringkasan lengkap tentang BIDEV",
      descEn: "Complete overview of BIDEV",
      fileType: "PDF",
    },
    {
      titleId: "Akta Pendirian",
      titleEn: "Deed of Establishment",
      descId: "Dokumen legal pendirian",
      descEn: "Legal establishment document",
      fileType: "PDF",
    },
    {
      titleId: "NIB & Izin Usaha",
      titleEn: "Business License",
      descId: "Nomor Induk Berusaha",
      descEn: "Business Identification Number",
      fileType: "PDF",
    },
    {
      titleId: "Surat Keterangan Domisili",
      titleEn: "Domicile Certificate",
      descId: "Surat keterangan alamat kantor",
      descEn: "Office address certificate",
      fileType: "PDF",
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
              {t("Kredensial & Akreditasi", "Credentials & Accreditation")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "Dokumen legal, sertifikasi, dan standar yang menjamin kredibilitas dan profesionalisme BIDEV Institute.",
                "Legal documents, certifications, and standards that guarantee the credibility and professionalism of BIDEV Institute.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">{t("Entitas Legal", "Legal Entity")}</h2>
              <p className="text-muted-foreground">{t("Informasi resmi perusahaan", "Official company information")}</p>
            </div>
          </div>

          <Card className="border-border">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {legalInfo.map((info, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">{t(info.labelId, info.labelEn)}</span>
                    <span className="font-medium text-foreground">{t(info.valueId, info.valueEn)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Sertifikasi & Kompetensi", "Certifications & Competencies")}
              </h2>
              <p className="text-muted-foreground">
                {t("Standar internasional dan afiliasi", "International standards and affiliations")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {cert.iconName === "FileCheck" && <FileCheck className="w-5 h-5 text-primary" />}
                      {cert.iconName === "Shield" && <Shield className="w-5 h-5 text-primary" />}
                      {cert.iconName === "GraduationCap" && <GraduationCap className="w-5 h-5 text-primary" />}
                    </div>
                    <Badge
                      variant={
                        t(cert.statusId, cert.statusEn) === "Aktif" || t(cert.statusId, cert.statusEn) === "Active"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {t(cert.statusId, cert.statusEn)}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{t(cert.titleId, cert.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(cert.descId, cert.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">{t("Standar Kami", "Our Standards")}</h2>
              <p className="text-muted-foreground">
                {t("Komitmen terhadap kualitas dan integritas", "Commitment to quality and integrity")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <Link key={index} href={standard.linkHref}>
                <Card className="border-border hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {t(standard.titleId, standard.titleEn)}
                      </h3>
                      <p className="text-sm text-muted-foreground">{t(standard.descId, standard.descEn)}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Afiliasi & Kemitraan", "Affiliations & Partnerships")}
              </h2>
              <p className="text-muted-foreground">
                {t("Institusi yang bekerja sama dengan kami", "Institutions we work with")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {affiliations.map((aff, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">{aff.name}</p>
                  <p className="text-xs text-muted-foreground">{aff.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Dokumen Pendukung", "Supporting Documents")}
              </h2>
              <p className="text-muted-foreground">
                {t("Unduh dokumen legal dan profil perusahaan", "Download legal documents and company profile")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline">{doc.fileType}</Badge>
                    <Download className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{t(doc.titleId, doc.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(doc.descId, doc.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            {t("Butuh Informasi Lebih Lanjut?", "Need More Information?")}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t(
              "Hubungi kami untuk mendapatkan dokumen lengkap atau informasi tambahan mengenai kredensial BIDEV.",
              "Contact us to get complete documents or additional information about BIDEV credentials.",
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request">
              <Button size="lg" variant="secondary">
                {t("Hubungi Kami", "Contact Us")}
              </Button>
            </Link>
            <Link href="/downloads">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                {t("Pusat Unduhan", "Download Center")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
