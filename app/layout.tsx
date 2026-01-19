import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { ChatAdminWidget } from "@/components/chat-admin-widget"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "BIDEV - Bandung Institute for Development and Urban Futures",
  description:
    "Bridging Knowledge, Policy, and Impact. BIDEV is an independent think tank coordinating Board of Experts from ITB, UNPAD, and other leading institutions for urban development and policy research.",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            <Navbar />
            {children}
            <ChatAdminWidget />
          </LanguageProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
