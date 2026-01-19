"use client"

import { useMemo, useState } from "react"
import { Mail, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const DEFAULT_MESSAGE = "Halo Admin, saya ingin bertanya tentang layanan BIDEV."
const WHATSAPP_NUMBER = "6281234567890"
const ADMIN_EMAIL = "info@bidev.id"

export function ChatAdminWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState(DEFAULT_MESSAGE)

  const trimmedMessage = message.trim() || DEFAULT_MESSAGE

  const whatsappLink = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(trimmedMessage)}`
  }, [trimmedMessage])

  const mailtoLink = useMemo(() => {
    const subject = "Chat Admin BIDEV"
    return `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(trimmedMessage)}`
  }, [trimmedMessage])

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div
          id="chat-admin-panel"
          role="dialog"
          aria-label="Chat admin"
          className="w-[min(92vw,360px)] rounded-2xl border border-white/40 bg-white/80 shadow-[0_18px_55px_rgba(15,61,46,0.2)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Chat Admin</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Online dalam jam kerja
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
              aria-label="Tutup chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4 px-4 py-4">
            <div className="rounded-xl bg-primary/10 px-3 py-2 text-sm text-foreground">
              Tulis pesan singkat dan kami akan arahkan ke WhatsApp admin.
            </div>
            <div className="space-y-2">
              <label htmlFor="chat-admin-message" className="text-xs font-medium text-muted-foreground">
                Pesan
              </label>
              <textarea
                id="chat-admin-message"
                rows={3}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-none rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tulis pesan..."
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <Button asChild className="w-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href={mailtoLink}>
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
            <div className="rounded-lg border border-dashed border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
              Respon biasanya 1x24 jam hari kerja.
            </div>
          </div>
        </div>
      ) : null}
      <Button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        size="lg"
        className="h-12 rounded-full bg-accent px-5 text-accent-foreground shadow-[0_12px_32px_rgba(15,61,46,0.2)] hover:bg-accent/90"
        aria-expanded={isOpen}
        aria-controls="chat-admin-panel"
      >
        <MessageCircle className="h-4 w-4" />
        Chat Admin
      </Button>
    </div>
  )
}
