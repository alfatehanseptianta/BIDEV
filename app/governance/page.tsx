"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  Shield,
  ShieldCheck,
  Award,
  BookOpen,
  FileText,
  ArrowRight,
  Building2,
  Scale,
  Eye,
  CheckCircle2,
  LineChart,
  Database,
  ClipboardCheck,
  Calendar,
  Clock,
  CalendarCheck,
  Target,
} from "lucide-react"
import Image from "next/image"

export default function GovernancePage() {
  const { t } = useLanguage()

  const governanceHighlights = [
    { labelId: "Dewan penasihat independen", labelEn: "Independent advisory board" },
    { labelId: "COI review wajib", labelEn: "Mandatory COI review" },
    { labelId: "QA gates bertahap", labelEn: "Multi-stage QA gates" },
    { labelId: "Data stewardship", labelEn: "Data stewardship" },
  ]

  const governanceSignals = [
    { icon: ShieldCheck, labelId: "Etika dan akuntabilitas", labelEn: "Ethics and accountability" },
    { icon: ClipboardCheck, labelId: "QA gates di setiap milestone", labelEn: "QA gates at every milestone" },
    { icon: Users, labelId: "Steering lintas disiplin", labelEn: "Cross-disciplinary steering" },
    { icon: Database, labelId: "Data governance dan privasi", labelEn: "Data governance and privacy" },
  ]

  const principles = [
    {
      icon: ShieldCheck,
      titleId: "Akuntabilitas Publik",
      titleEn: "Public accountability",
      descId: "Keputusan terdokumentasi, dapat ditelusuri, dan diaudit.",
      descEn: "Decisions are documented, traceable, and auditable.",
    },
    {
      icon: LineChart,
      titleId: "Keputusan Berbasis Bukti",
      titleEn: "Evidence-led decisions",
      descId: "Analisis data menjadi dasar rekomendasi kebijakan.",
      descEn: "Data analysis anchors every policy recommendation.",
    },
    {
      icon: Scale,
      titleId: "Independensi",
      titleEn: "Independence",
      descId: "Bebas dari intervensi politik dan komersial.",
      descEn: "Free from political and commercial interference.",
    },
    {
      icon: Eye,
      titleId: "Transparansi Metodologi",
      titleEn: "Methodology transparency",
      descId: "Asumsi, metode, dan batasan dijelaskan sejak awal.",
      descEn: "Assumptions, methods, and limits are disclosed early.",
    },
    {
      icon: Database,
      titleId: "Data Stewardship",
      titleEn: "Data stewardship",
      descId: "Perlindungan data, akses, dan retensi yang jelas.",
      descEn: "Clear rules for data protection, access, and retention.",
    },
    {
      icon: Users,
      titleId: "Kolaborasi Inklusif",
      titleEn: "Inclusive collaboration",
      descId: "Melibatkan pemangku kepentingan sejak perumusan.",
      descEn: "Engages stakeholders from the start.",
    },
  ]

  const governanceLayers = [
    {
      titleId: "Dewan Penasihat",
      titleEn: "Advisory Board",
      descId: "Menetapkan arah strategis dan menjaga integritas lembaga.",
      descEn: "Sets strategic direction and safeguards integrity.",
      bulletsId: [
        "Menetapkan prioritas dan tema tahunan",
        "Mengesahkan kebijakan etika dan COI",
        "Meninjau laporan dampak dan risiko",
      ],
      bulletsEn: [
        "Sets annual priorities and themes",
        "Approves ethics and COI policies",
        "Reviews impact and risk reports",
      ],
    },
    {
      titleId: "Steering Committee",
      titleEn: "Steering Committee",
      descId: "Menghubungkan strategi dengan keputusan operasional.",
      descEn: "Bridges strategy with operational decisions.",
      bulletsId: [
        "Menyetujui scope dan anggaran proyek",
        "Mengelola portofolio dan alokasi sumber daya",
        "Menetapkan eskalasi isu kritis",
      ],
      bulletsEn: [
        "Approves project scope and budget",
        "Manages portfolio and resource allocation",
        "Sets escalation for critical issues",
      ],
    },
    {
      titleId: "PMO & Quality Office",
      titleEn: "PMO & Quality Office",
      descId: "Menjaga konsistensi proses, template, dan QA gates.",
      descEn: "Maintains process consistency, templates, and QA gates.",
      bulletsId: [
        "Menerapkan SOP dan standar deliverable",
        "Memantau risk log dan kepatuhan",
        "Mengelola review lintas tim",
      ],
      bulletsEn: [
        "Applies SOPs and deliverable standards",
        "Monitors risk logs and compliance",
        "Runs cross-team reviews",
      ],
    },
    {
      titleId: "Delivery Squads",
      titleEn: "Delivery Squads",
      descId: "Tim lintas disiplin yang mengeksekusi dan melaporkan.",
      descEn: "Cross-disciplinary teams that execute and report.",
      bulletsId: [
        "Pelaksanaan proyek dan monitoring harian",
        "Dokumentasi evidence dan data",
        "Serah terima pengetahuan ke klien",
      ],
      bulletsEn: [
        "Project execution and daily monitoring",
        "Evidence and data documentation",
        "Knowledge handover to clients",
      ],
    },
  ]

  const boardMembers = [
    {
      name: "Prof. Dr. Ahmad Rizal",
      role: t("Ketua Dewan Penasihat", "Chair of Advisory Board"),
      affiliation: "ITB",
      expertise: t("Perencanaan Kota", "Urban Planning"),
      image: "/professional-indonesian-male-professor-urban-plann.jpg",
    },
    {
      name: "Prof. Dr. Siti Nurhaliza",
      role: t("Anggota Dewan", "Board Member"),
      affiliation: "UNPAD",
      expertise: t("Kebijakan Publik", "Public Policy"),
      image: "/professional-indonesian-female-professor-public-po.jpg",
    },
    {
      name: "Dr. Bambang Sutrisno",
      role: t("Anggota Dewan", "Board Member"),
      affiliation: "Bappenas",
      expertise: t("Pembangunan Ekonomi", "Economic Development"),
      image: "/professional-indonesian-male-economist-government.jpg",
    },
    {
      name: "Dr. Maya Indah",
      role: t("Anggota Dewan", "Board Member"),
      affiliation: "World Bank",
      expertise: t("Perlindungan Sosial", "Social Protection"),
      image: "/professional-indonesian-female-economist-developme.jpg",
    },
  ]

  const committees = [
    {
      icon: Shield,
      titleId: "Komite Etika",
      titleEn: "Ethics Committee",
      descId: "Mengawasi kepatuhan terhadap kode etik dan menangani pelanggaran",
      descEn: "Oversees compliance with code of ethics and handles violations",
      membersId: "3 anggota independen",
      membersEn: "3 independent members",
    },
    {
      icon: Eye,
      titleId: "Panel Peer Review",
      titleEn: "Peer Review Panel",
      descId: "Memvalidasi kualitas metodologi dan output riset",
      descEn: "Validates quality of methodology and research outputs",
      membersId: "5 akademisi senior",
      membersEn: "5 senior academics",
    },
    {
      icon: Scale,
      titleId: "Komite COI",
      titleEn: "COI Committee",
      descId: "Mengelola deklarasi dan mitigasi konflik kepentingan",
      descEn: "Manages conflict of interest declarations and mitigation",
      membersId: "3 anggota rotasi",
      membersEn: "3 rotating members",
    },
    {
      icon: Award,
      titleId: "Komite Penjaminan Mutu",
      titleEn: "Quality Assurance Committee",
      descId: "Memastikan standar kualitas deliverable terpenuhi",
      descEn: "Ensures deliverable quality standards are met",
      membersId: "4 anggota internal",
      membersEn: "4 internal members",
    },
  ]

  const decisionProcess = [
    {
      stepId: "1. Inisiasi Proyek",
      stepEn: "1. Project Initiation",
      descId: "Tim proyek mengajukan proposal ke manajemen",
      descEn: "Project team submits proposal to management",
    },
    {
      stepId: "2. Review COI",
      stepEn: "2. COI Review",
      descId: "Komite COI memeriksa potensi konflik kepentingan",
      descEn: "COI Committee checks for potential conflicts of interest",
    },
    {
      stepId: "3. Approval Steering",
      stepEn: "3. Steering Approval",
      descId: "Steering committee menyetujui ruang lingkup dan tim",
      descEn: "Steering committee approves scope and team",
    },
    {
      stepId: "4. Eksekusi & QA",
      stepEn: "4. Execution & QA",
      descId: "Tim melaksanakan proyek dengan QA gates",
      descEn: "Team executes project with QA gates",
    },
    {
      stepId: "5. Peer Review",
      stepEn: "5. Peer Review",
      descId: "Panel peer review memvalidasi output",
      descEn: "Peer review panel validates outputs",
    },
    {
      stepId: "6. Final Delivery",
      stepEn: "6. Final Delivery",
      descId: "Deliverable final diserahkan ke klien",
      descEn: "Final deliverable handed over to client",
    },
    {
      stepId: "7. Retrospektif & Pembelajaran",
      stepEn: "7. Retrospective & Learning",
      descId: "Evaluasi hasil, dokumentasi lesson learned, dan rencana tindak lanjut",
      descEn: "Evaluate outcomes, document lessons learned, and set follow-up actions",
    },
  ]

  const governanceCadence = [
    {
      icon: Clock,
      titleId: "Mingguan",
      titleEn: "Weekly",
      itemsId: ["Standup lintas fungsi", "Update risk log", "Cek QA milestone"],
      itemsEn: ["Cross-functional standup", "Risk log update", "QA milestone check"],
    },
    {
      icon: Calendar,
      titleId: "Bulanan",
      titleEn: "Monthly",
      itemsId: ["Steering review", "Tracking anggaran dan scope", "Sinkronisasi stakeholder"],
      itemsEn: ["Steering review", "Budget and scope tracking", "Stakeholder sync"],
    },
    {
      icon: CalendarCheck,
      titleId: "Triwulanan",
      titleEn: "Quarterly",
      itemsId: ["Review dewan penasihat", "Audit sampel deliverable", "Evaluasi portofolio"],
      itemsEn: ["Advisory board review", "Deliverable sample audit", "Portfolio evaluation"],
    },
    {
      icon: Target,
      titleId: "Tahunan",
      titleEn: "Annual",
      itemsId: ["Audit independen", "Penyegaran kebijakan dan SOP", "Laporan publik"],
      itemsEn: ["Independent audit", "Policy and SOP refresh", "Public reporting"],
    },
  ]

  const assuranceItems = [
    {
      icon: ClipboardCheck,
      titleId: "Audit trail dan approval",
      titleEn: "Audit trail and approvals",
      descId: "Setiap keputusan, perubahan scope, dan persetujuan terdokumentasi rapi.",
      descEn: "Every decision, scope change, and approval is logged and traceable.",
    },
    {
      icon: ShieldCheck,
      titleId: "Etika dan COI",
      titleEn: "Ethics and COI",
      descId: "Pemeriksaan COI wajib sebelum penugasan dan saat perubahan tim.",
      descEn: "COI checks are required before assignment and during team changes.",
    },
    {
      icon: Database,
      titleId: "Data governance",
      titleEn: "Data governance",
      descId: "Standar akses, keamanan, dan retensi data diterapkan konsisten.",
      descEn: "Consistent standards for data access, security, and retention.",
    },
    {
      icon: Eye,
      titleId: "Transparansi publik",
      titleEn: "Public transparency",
      descId: "Ringkasan proyek dan kebijakan kunci tersedia bagi mitra.",
      descEn: "Project summaries and key policies are available to partners.",
    },
  ]

  const reportingItems = [
    {
      labelId: "Laporan tahunan dan ringkasan transparansi",
      labelEn: "Annual report and transparency summary",
    },
    {
      labelId: "Piagam tata kelola dan SOP inti",
      labelEn: "Governance charter and core SOPs",
    },
    {
      labelId: "Ringkasan QA dan peer review",
      labelEn: "QA and peer review summary",
    },
    {
      labelId: "Matriks risiko dan mitigasi",
      labelEn: "Risk register and mitigation plan",
    },
  ]

  const governanceResources = [
    {
      href: "/integrity",
      icon: Shield,
      titleId: "Pusat Integritas",
      titleEn: "Integrity Center",
      descId: "Kode etik, COI, dan kebijakan antigratifikasi.",
      descEn: "Code of ethics, COI, and anti-gratuity policy.",
    },
    {
      href: "/quality",
      icon: CheckCircle2,
      titleId: "Penjaminan Mutu",
      titleEn: "Quality Assurance",
      descId: "QA gates, peer review, dan standar deliverable.",
      descEn: "QA gates, peer review, and deliverable standards.",
    },
    {
      href: "/standards",
      icon: BookOpen,
      titleId: "Etika dan Standar",
      titleEn: "Ethics and Standards",
      descId: "Prinsip, metodologi, dan standar riset.",
      descEn: "Principles, methodology, and research standards.",
    },
    {
      href: "/data-policy",
      icon: Database,
      titleId: "Kebijakan Data",
      titleEn: "Data Policy",
      descId: "Privasi, keamanan, dan tata kelola data.",
      descEn: "Privacy, security, and data governance.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {t("Tata Kelola", "Governance")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                {t("Tata Kelola Modern untuk Dampak yang Terukur", "Modern Governance for Measurable Impact")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t(
                  "Kami menjaga integritas, akuntabilitas, dan kualitas melalui struktur dewan, komite independen, dan proses review berlapis yang memastikan setiap proyek dapat ditelusuri dari awal hingga hasil.",
                  "We safeguard integrity, accountability, and quality through a board-led structure, independent committees, and layered reviews that keep every project traceable from start to finish.",
                )}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {governanceHighlights.map((item) => (
                  <Badge key={item.labelEn} variant="secondary">
                    {t(item.labelId, item.labelEn)}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/downloads">
                  <Button size="lg">
                    {t("Unduh Piagam Tata Kelola", "Download Governance Charter")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/integrity">
                  <Button size="lg" variant="outline" className="bg-transparent">
                    {t("Kunjungi Integrity Center", "Visit Integrity Center")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-muted">
                <Image
                  src="/prakarsa-approval-workflow-diagram-tiers.jpg"
                  alt={t("Diagram alur persetujuan tata kelola", "Governance approval flow diagram")}
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t("Alur persetujuan", "Approval flow")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("Jejak keputusan dapat ditelusuri", "Decision trail is traceable")}
                      </p>
                    </div>
                    <Badge variant="secondary">{t("Framework dinamis", "Living framework")}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Signals */}
      <section className="py-8 border-y border-border bg-muted/40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceSignals.map((signal) => (
              <div key={signal.labelEn} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{t(signal.labelId, signal.labelEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              {t("Prinsip Utama", "Core Principles")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {t("Prinsip Tata Kelola", "Governance Principles")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Fondasi yang menjaga kualitas keputusan, integritas, dan kepercayaan pemangku kepentingan.",
                "The foundation that protects decision quality, integrity, and stakeholder trust.",
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <Card key={principle.titleEn} className="border-border hover:border-primary/40 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t(principle.titleId, principle.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(principle.descId, principle.descEn)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Architecture */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              {t("Struktur", "Structure")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {t("Arsitektur Tata Kelola", "Governance Architecture")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Lapisan peran yang memisahkan arah, pengawasan, dan eksekusi secara jelas.",
                "Layered roles that separate direction, oversight, and execution clearly.",
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceLayers.map((layer) => (
              <Card key={layer.titleEn} className="border-border h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(layer.titleId, layer.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t(layer.descId, layer.descEn)}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {layer.bulletsId.map((item, idx) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                        <span>{t(item, layer.bulletsEn[idx])}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">{t("Dewan Penasihat", "Advisory Board")}</h2>
              <p className="text-muted-foreground">
                {t("Para pemimpin yang memastikan arah strategis dan integritas", "Leaders who safeguard strategy and integrity")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">{member.affiliation}</Badge>
                    <Badge variant="outline">{member.expertise}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Komite & Panel", "Committees & Panels")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "Panel dan komite yang menjaga etika, kualitas, dan risiko",
                  "Panels and committees that protect ethics, quality, and risk",
                )}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <committee.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {t(committee.titleId, committee.titleEn)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{t(committee.descId, committee.descEn)}</p>
                      <Badge variant="secondary">{t(committee.membersId, committee.membersEn)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Process */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                {t("Proses Pengambilan Keputusan", "Decision-Making Process")}
              </h2>
              <p className="text-muted-foreground">
                {t("Alur tata kelola proyek dari awal hingga akhir", "Project governance flow from start to finish")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {decisionProcess.map((step, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t(step.stepId, step.stepEn)}</h3>
                      <p className="text-sm text-muted-foreground">{t(step.descId, step.descEn)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Cadence */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">{t("Ritme Tata Kelola", "Governance Cadence")}</h2>
              <p className="text-muted-foreground">
                {t("Ritual yang menjaga alignment dan kualitas di setiap tahap.", "Rituals that keep alignment and quality at every stage.")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceCadence.map((item) => (
              <Card key={item.titleEn} className="border-border h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{t(item.titleId, item.titleEn)}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.itemsId.map((entry, idx) => (
                      <li key={entry} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                        <span>{t(entry, item.itemsEn[idx])}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance & Transparency */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                {t("Transparansi", "Transparency")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                {t("Assurance yang Terbuka", "Open Assurance")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t(
                  "Kami mempublikasikan kebijakan dan ringkasan governance agar mitra memahami standar yang kami terapkan.",
                  "We publish governance policies and summaries so partners understand the standards we uphold.",
                )}
              </p>
              <div className="space-y-4">
                {assuranceItems.map((item) => (
                  <div key={item.titleEn} className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t(item.titleId, item.titleEn)}</p>
                      <p className="text-sm text-muted-foreground">{t(item.descId, item.descEn)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/annual-report">
                  <Button size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    {t("Lihat Laporan Tahunan", "View Annual Report")}
                  </Button>
                </Link>
                <Link href="/quality">
                  <Button size="lg" variant="outline" className="bg-transparent">
                    {t("Penjaminan Mutu & Peer Review", "Quality & Peer Review")}
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="border-border overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/annual-report-cover-modern-urban-development-insti.jpg"
                  alt={t("Sampul laporan tahunan", "Annual report cover")}
                  width={960}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {t("Dokumen Publikasi", "Public Documents")}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {reportingItems.map((item) => (
                    <li key={item.labelEn} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span>{t(item.labelId, item.labelEn)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              {t("Dokumen Tata Kelola", "Governance Toolkit")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Panduan, standar, dan kebijakan yang menjadi referensi setiap proyek.",
                "Guides, standards, and policies that anchor every project.",
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceResources.map((resource) => (
              <Link key={resource.href} href={resource.href}>
                <Card className="border-border hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mt-4 mb-2">{t(resource.titleId, resource.titleEn)}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{t(resource.descId, resource.descEn)}</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-2 mt-auto">
                      {t("Pelajari lebih lanjut", "Learn more")}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            {t("Ingin Berkontribusi pada Tata Kelola?", "Want to Contribute to Our Governance?")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t(
              "Kami membuka peluang bagi pemimpin pemikiran yang berkomitmen pada tata kelola publik berbasis bukti.",
              "We welcome thought leaders committed to evidence-based public governance.",
            )}
          </p>
          <Link href="/request">
            <Button size="lg">{t("Hubungi Kami", "Contact Us")}</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
