"use client"

import { useState } from "react"
import { Users, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function CtaSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 bg-[var(--forest)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Unisciti a Noi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Entra nel Gruppo di Lavoro Studentesco
            </h2>
            <p className="text-white/80 text-lg mb-8 text-pretty">
              Vuoi contribuire attivamente al progetto? Unisciti al nostro team di studenti impegnati 
              nella trasformazione sostenibile della scuola.
            </p>

            <div className="space-y-4">
              {[
                "Partecipa alle riunioni settimanali",
                "Contribuisci alle iniziative ambientali",
                "Collabora con docenti ed esperti",
                "Lascia un impatto positivo sulla scuola",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--emerald)] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Iscriviti al Progetto</CardTitle>
              <CardDescription>
                Compila il modulo per unirti al gruppo di lavoro studentesco
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[var(--emerald)]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[var(--emerald)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Grazie per l&apos;iscrizione!
                  </h3>
                  <p className="text-muted-foreground">
                    Ti contatteremo presto con i dettagli per la prossima riunione.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Il tuo nome" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="surname">Cognome</Label>
                      <Input id="surname" placeholder="Il tuo cognome" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="nome@esempio.it" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Classe</Label>
                    <Input id="class" placeholder="Es. 3A, 4B CAT" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Perché vuoi unirti? (opzionale)</Label>
                    <Textarea
                      id="message"
                      placeholder="Raccontaci cosa ti motiva..."
                      rows={3}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[var(--emerald)] hover:bg-[var(--forest)] text-white py-6"
                  >
                    {isLoading ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Invia Iscrizione
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
