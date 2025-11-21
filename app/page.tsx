"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function Home() {
  const [customLink, setCustomLink] = useState("")
  const [showLinkInput, setShowLinkInput] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl text-center space-y-12">
        {/* Header */}
        <div className="space-y-6">

          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            Simulador de Algoritmos y Blackjack educativo
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Visualiza y comprende cómo funcionan los algoritmos FIFO, LRU y Óptimo en la gestión de memoria.
          </p>
          <Link href="/simulator">
            <Button size="lg" className="text-base font-semibold px-8 gap-2 group cursor-pointer">
              Ir al Simulador
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Aprende los fundamentos del Blackjack mientras practicas con nuestro juego interactivo.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="text-base font-semibold px-8 bg-transparent cursor-pointer hover:bg-green-400"
            onClick={() => setShowLinkInput(!showLinkInput)}
          >
            {showLinkInput ? "Cancelar" : "Blackjack Educativo"}
          </Button>
        </div>

        {/* Custom Link Input */}
        {showLinkInput && (
          <div className="space-y-4 p-6 bg-muted/50 rounded-lg border border-border">
            <label className="block text-sm font-semibold text-foreground text-left">
              URL del enlace personalizado
            </label>
            <input
              type="url"
              value={customLink}
              onChange={(e) => setCustomLink(e.target.value)}
              placeholder="https://ejemplo.com"
              className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowLinkInput(false)
                  setCustomLink("")
                }}
              >
                Cancelar
              </Button>
              {customLink && (
                <a href={customLink} target="_blank" rel="noopener noreferrer">
                  <Button>Ir a enlace</Button>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
