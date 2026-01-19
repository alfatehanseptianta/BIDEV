"use client"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { Building, Briefcase, Users, Laptop, HelpCircle, ArrowRight } from "lucide-react"

const faqCategories = [
  {
    id: "government",
    labelId: "Pengadaan Pemerintah",
    labelEn: "Government Procurement",
    icon: Building,
    faqs: [
      {
        questionId: "Bagaimana proses pengadaan dengan BIDEV?",
        questionEn: "How does the procurement process work with BIDEV?",
        answerId:
          "BIDEV mengikuti prosedur pengadaan standar pemerintah. Anda dapat mengirimkan TOR/KAK melalui halaman RFP kami, dan tim kami akan merespons dalam 2-3 hari kerja dengan proposal teknis dan biaya.",
        answerEn:
          "BIDEV follows standard government procurement procedures. You can submit your TOR through our RFP page, and our team will respond within 2-3 business days with a technical and cost proposal.",
      },
      {
        questionId: "Apakah BIDEV memiliki NPWP dan dokumen legal lengkap?",
        questionEn: "Does BIDEV have complete tax ID and legal documents?",
        answerId:
          "Ya, BIDEV adalah entitas legal yang terdaftar dengan NPWP, SIUP, dan dokumen pendukung lainnya. Semua dokumen tersedia di halaman Credentials kami.",
        answerEn:
          "Yes, BIDEV is a registered legal entity with tax ID (NPWP), business license (SIUP), and other supporting documents. All documents are available on our Credentials page.",
      },
      {
        questionId: "Bagaimana sistem pembayaran dan termin?",
        questionEn: "How does the payment and milestone system work?",
        answerId:
          "Pembayaran mengikuti termin standar: 30% di awal (DP), 40% setelah draft, dan 30% setelah laporan final diterima. Termin dapat disesuaikan dengan kebijakan SKPD.",
        answerEn:
          "Payment follows standard milestones: 30% upfront (DP), 40% after draft, and 30% after final report acceptance. Milestones can be adjusted according to agency policy.",
      },
      {
        questionId: "Apakah BIDEV bisa mengikuti proses e-Procurement?",
        questionEn: "Can BIDEV participate in e-Procurement processes?",
        answerId:
          "Ya, BIDEV terdaftar di sistem e-Procurement dan dapat mengikuti tender melalui LPSE. Kami juga dapat bekerja sama melalui penunjukan langsung atau swakelola sesuai ketentuan.",
        answerEn:
          "Yes, BIDEV is registered in the e-Procurement system and can participate in tenders through LPSE. We can also work through direct appointment or self-management as per regulations.",
      },
    ],
  },
  {
    id: "private",
    labelId: "Klien Swasta",
    labelEn: "Private Clients",
    icon: Briefcase,
    faqs: [
      {
        questionId: "Berapa lama waktu yang dibutuhkan untuk engagement tipikal?",
        questionEn: "How long does a typical engagement take?",
        answerId:
          "Tergantung scope. Rapid advisory 2-4 minggu, full study 8-12 minggu, implementation support bisa retainer bulanan. Kami akan memberikan timeline detail di proposal.",
        answerEn:
          "Depends on scope. Rapid advisory takes 2-4 weeks, full study 8-12 weeks, implementation support can be monthly retainer. We provide detailed timeline in our proposal.",
      },
      {
        questionId: "Apakah informasi proyek kami dijaga kerahasiaannya?",
        questionEn: "Is our project information kept confidential?",
        answerId:
          "Absolut. Semua proyek dilindungi NDA standar. Kami juga memiliki kebijakan COI yang ketat untuk menghindari konflik kepentingan.",
        answerEn:
          "Absolutely. All projects are protected by standard NDA. We also have strict COI policy to avoid conflicts of interest.",
      },
      {
        questionId: "Bisakah BIDEV membantu dengan due diligence atau market entry?",
        questionEn: "Can BIDEV help with due diligence or market entry?",
        answerId:
          "Ya, kami menyediakan layanan investment advisory termasuk market assessment, regulatory mapping, stakeholder identification, dan entry strategy untuk investor domestik dan asing.",
        answerEn:
          "Yes, we provide investment advisory services including market assessment, regulatory mapping, stakeholder identification, and entry strategy for domestic and foreign investors.",
      },
    ],
  },
  {
    id: "expert",
    labelId: "Bergabung sebagai Pakar",
    labelEn: "Join as Expert",
    icon: Users,
    faqs: [
      {
        questionId: "Apa syarat untuk bergabung sebagai pakar BIDEV?",
        questionEn: "What are the requirements to join as a BIDEV expert?",
        answerId:
          "Minimal S2 dengan pengalaman profesional relevan, atau S3 dari institusi terakreditasi. Kami juga menilai publikasi, pengalaman proyek, dan reputasi di bidangnya.",
        answerEn:
          "Minimum Master's degree with relevant professional experience, or PhD from accredited institution. We also evaluate publications, project experience, and reputation in the field.",
      },
      {
        questionId: "Bagaimana sistem kompensasi untuk pakar?",
        questionEn: "How does the compensation system work for experts?",
        answerId:
          "Kompensasi berdasarkan jenis engagement (speaker fee, consulting day rate, research lead fee) dan senioritas. Detail dibahas saat onboarding.",
        answerEn:
          "Compensation is based on engagement type (speaker fee, consulting day rate, research lead fee) and seniority. Details are discussed during onboarding.",
      },
      {
        questionId: "Apakah ada kewajiban eksklusivitas?",
        questionEn: "Is there an exclusivity requirement?",
        answerId:
          "Tidak ada kewajiban eksklusivitas. Pakar dapat tetap bekerja di institusi utama dan menerima proyek dari sumber lain, selama tidak ada konflik kepentingan.",
        answerEn:
          "There is no exclusivity requirement. Experts can continue working at their primary institution and accept projects from other sources, as long as there is no conflict of interest.",
      },
    ],
  },
  {
    id: "prakarsa",
    labelId: "PRAKARSA Platform",
    labelEn: "PRAKARSA Platform",
    icon: Laptop,
    faqs: [
      {
        questionId: "Apa itu PRAKARSA?",
        questionEn: "What is PRAKARSA?",
        answerId:
          "PRAKARSA adalah platform digital untuk pengumpulan, validasi, dan visualisasi data sosial di tingkat RW/Kelurahan. Membantu pemerintah daerah membuat keputusan berbasis data.",
        answerEn:
          "PRAKARSA is a digital platform for collecting, validating, and visualizing social data at RW/Kelurahan level. It helps local governments make data-driven decisions.",
      },
      {
        questionId: "Bagaimana model deployment PRAKARSA?",
        questionEn: "What is the PRAKARSA deployment model?",
        answerId:
          "Ada 3 paket: Pilot (1-3 kecamatan), Citywide, dan Enterprise (integrasi penuh). Setiap paket termasuk training dan dukungan teknis.",
        answerEn:
          "There are 3 packages: Pilot (1-3 subdistricts), Citywide, and Enterprise (full integration). Each package includes training and technical support.",
      },
      {
        questionId: "Bagaimana keamanan data di PRAKARSA?",
        questionEn: "How is data security handled in PRAKARSA?",
        answerId:
          "Data dienkripsi, access control berbasis role (RBAC), audit trail lengkap, dan data ownership tetap pada pemerintah daerah. Detail di halaman Security.",
        answerEn:
          "Data is encrypted, role-based access control (RBAC), complete audit trail, and data ownership remains with local government. Details on Security page.",
      },
    ],
  },
]

export default function FAQPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-[72px] bg-[#0F3D2E]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-[#B89B5E] font-semibold mb-4">
              {t("Pusat Bantuan", "Help Center")}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7F5EF] leading-tight">
              {t("Pertanyaan yang Sering Diajukan", "Frequently Asked Questions")}
            </h1>
            <p className="mt-6 text-xl text-[#F7F5EF]/80">
              {t(
                "Temukan jawaban untuk pertanyaan umum tentang layanan BIDEV, proses pengadaan, dan kerjasama.",
                "Find answers to common questions about BIDEV services, procurement process, and collaboration.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="government" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {faqCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{language === "id" ? cat.labelId : cat.labelEn}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {faqCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="mb-6">
                  <h2 className="font-semibold text-xl text-foreground flex items-center gap-2">
                    <cat.icon className="w-5 h-5 text-primary" />
                    {language === "id" ? cat.labelId : cat.labelEn}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {cat.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card rounded-lg border border-border px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-foreground">
                          {language === "id" ? faq.questionId : faq.questionEn}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground">
                        {language === "id" ? faq.answerId : faq.answerEn}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {t("Masih Punya Pertanyaan?", "Still Have Questions?")}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t(
              "Tim kami siap membantu Anda. Hubungi kami untuk konsultasi lebih lanjut.",
              "Our team is ready to help. Contact us for further consultation.",
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/request">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                {t("Hubungi Kami", "Contact Us")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/downloads">
              <Button variant="outline" className="bg-transparent">
                {t("Unduh Dokumen", "Download Documents")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
