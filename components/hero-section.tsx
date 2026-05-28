import { ArrowRight, Leaf, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--mint)] via-white to-[var(--emerald-light)]/30" />
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5 Q40 20 30 35 Q20 20 30 5" fill="currentColor" className="text-[var(--forest)]" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-pulse">
        <Leaf className="w-8 h-8 text-[var(--emerald)] opacity-40" />
      </div>
      <div className="absolute bottom-1/3 right-16 animate-pulse delay-500">
        <TreePine className="w-10 h-10 text-[var(--forest)] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--forest)]/10 border border-[var(--forest)]/20 mb-8">
            <Leaf className="w-4 h-4 text-[var(--emerald)]" />
            <span className="text-sm font-medium text-[var(--forest)]">Iniziativa Studenti 2026/2027</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--forest)] leading-tight mb-6 text-balance">
            Verso un Saraceno-Romegialli{" "}
            <span className="text-[var(--emerald)]">Sostenibile</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            L&apos;iniziativa degli studenti di Morbegno per trasformare la scuola in una{" "}
            <span className="font-semibold text-[var(--forest)]">Green School</span> certificata.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[var(--emerald)] hover:bg-[var(--forest)] text-white px-8 py-6 text-base font-medium shadow-lg shadow-[var(--emerald)]/25 transition-all hover:shadow-[var(--forest)]/30"
            >
              <a href="#presentazione">
                Esplora la Presentazione
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--forest)] text-[var(--forest)] hover:bg-[var(--forest)] hover:text-white px-8 py-6 text-base font-medium transition-all"
            >
              <a href="#piano">
                Leggi il Piano d&apos;Azione
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "5", label: "Aree di Intervento" },
              { value: "5", label: "Soluzioni Proposte" },
              { value: "2027", label: "Obiettivo Certificazione" },
              { value: "100%", label: "Impegno Studenti" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[var(--forest)]">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.2C384 37 480 49 576 54.2C672 59.3 768 57.7 864 52.5C960 47.3 1056 38.7 1152 37.5C1248 36.3 1344 42.7 1392 45.8L1440 49V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
