"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Leaf, Globe, Thermometer, Factory, Wind, Target, GraduationCap, Building2, Users, TrendingUp, CloudRain, Waves, Sun, AlertTriangle, ArrowRight, Play, Pause, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const slides = [
  {
    id: 1,
    title: "Verso una Scuola Sostenibile",
    content:
      "Comprendere la crisi climatica globale e il ruolo fondamentale che le scuole possono avere nella transizione ecologica.",
    icon: Leaf,
    bgClass: "bg-gradient-to-br from-[#064e3b] to-[#10b981]",
    category: "intro",
    details: [
      "Le grandi sfide ambientali del presente",
      "Le risposte internazionali al cambiamento climatico",
      "Il ruolo delle Green Schools"
    ]
  },

  {
    id: 2,
    title: "L’Emergenza Climatica",
    content:
      "La temperatura media globale è aumentata di oltre +1.2°C. Oggi nell’atmosfera c’è più CO₂ che in qualsiasi altro momento degli ultimi 800.000 anni.",
    icon: Thermometer,
    bgClass: "bg-gradient-to-br from-red-700 to-orange-500",
    category: "globale",
    details: [
      "+1.2°C rispetto all’era preindustriale",
      "420+ ppm di CO₂ in atmosfera",
      "2023: anno più caldo mai registrato"
    ]
  },

  {
    id: 3,
    title: "Gli Effetti del Cambiamento Climatico",
    content:
      "Ondate di calore, alluvioni e siccità stanno diventando sempre più frequenti. Gli effetti della crisi climatica sono ormai visibili in tutto il mondo.",
    icon: CloudRain,
    bgClass: "bg-gradient-to-br from-slate-700 to-blue-600",
    category: "globale",
    details: [
      "Eventi estremi sempre più frequenti",
      "Scioglimento dei ghiacciai alpini",
      "Aumento del livello dei mari"
    ]
  },

  {
    id: 4,
    title: "Le Emissioni Globali",
    content:
      "Ogni anno vengono emesse circa 40 miliardi di tonnellate di CO₂. Energia, industria e agricoltura sono tra i principali settori responsabili.",
    icon: Factory,
    bgClass: "bg-gradient-to-br from-zinc-800 to-zinc-600",
    category: "globale",
    details: [
      "40 miliardi di tonnellate di CO₂",
      "73% emissioni da combustibili fossili",
      "Deforestazione in costante crescita"
    ]
  },

  {
    id: 5,
    title: "Il Punto di Non Ritorno",
    content:
      "Superare la soglia di +1.5°C potrebbe provocare cambiamenti irreversibili per ecosistemi, economie e società. Il tempo per agire si sta riducendo.",
    icon: AlertTriangle,
    bgClass: "bg-gradient-to-br from-amber-600 to-red-600",
    category: "globale",
    details: [
      "Rischio di effetti irreversibili",
      "Tipping points sempre più vicini",
      "Necessaria un’azione immediata"
    ]
  },

  {
    id: 6,
    title: "Ecosistemi in Pericolo",
    content:
      "La perdita di biodiversità sta accelerando rapidamente. Oltre un milione di specie rischia l’estinzione a causa delle attività umane.",
    icon: Waves,
    bgClass: "bg-gradient-to-br from-cyan-700 to-blue-500",
    category: "globale",
    details: [
      "1 milione di specie a rischio",
      "Oceani sempre più acidi e caldi",
      "Habitat naturali in trasformazione"
    ]
  },

  {
    id: 7,
    title: "L’Accordo di Parigi",
    content:
      "Nel 2015, 195 Paesi hanno firmato un accordo storico per limitare il riscaldamento globale e raggiungere la neutralità climatica entro il 2050.",
    icon: Globe,
    bgClass: "bg-gradient-to-br from-blue-700 to-cyan-500",
    category: "politiche",
    details: [
      "195 Paesi firmatari",
      "Obiettivo massimo: +1.5°C",
      "Neutralità climatica entro il 2050"
    ]
  },

  {
    id: 8,
    title: "Gli SDGs dell’ONU",
    content:
      "L’Agenda 2030 delle Nazioni Unite definisce 17 Obiettivi di Sviluppo Sostenibile per proteggere il pianeta e migliorare la qualità della vita.",
    icon: Target,
    bgClass: "bg-gradient-to-br from-indigo-600 to-blue-500",
    category: "politiche",
    details: [
      "17 obiettivi globali",
      "169 target specifici",
      "Un piano condiviso per il futuro"
    ]
  },

  {
    id: 9,
    title: "Il Green Deal Europeo",
    content:
      "L’Unione Europea vuole diventare il primo continente climaticamente neutro attraverso investimenti, innovazione e sviluppo sostenibile.",
    icon: TrendingUp,
    bgClass: "bg-gradient-to-br from-emerald-700 to-teal-500",
    category: "politiche",
    details: [
      "-55% emissioni entro il 2030",
      "Investimenti nella transizione verde",
      "Neutralità climatica entro il 2050"
    ]
  },

  {
    id: 10,
    title: "L’Italia e la Transizione Ecologica",
    content:
      "Il PNRR investe miliardi di euro nella sostenibilità, nelle energie rinnovabili e nell’efficienza degli edifici pubblici.",
    icon: Sun,
    bgClass: "bg-gradient-to-br from-green-600 to-lime-500",
    category: "politiche",
    details: [
      "71 miliardi destinati alla transizione ecologica",
      "Sviluppo delle energie rinnovabili",
      "Efficienza energetica degli edifici"
    ]
  },

  {
    id: 11,
    title: "Le Scuole: Motori del Cambiamento",
    content:
      "Le scuole non sono solo luoghi di apprendimento: possono diventare esempi concreti di sostenibilità e innovazione.",
    icon: Building2,
    bgClass: "bg-gradient-to-br from-indigo-700 to-violet-500",
    category: "scuole",
    details: [
      "8.000 istituti scolastici in Italia",
      "7.5 milioni di studenti coinvolti",
      "Grande impatto energetico e sociale"
    ]
  },

  {
    id: 12,
    title: "Il Programma Green Schools",
    content:
      "Le Green Schools promuovono comportamenti sostenibili attraverso progetti concreti su energia, rifiuti, acqua e mobilità.",
    icon: GraduationCap,
    bgClass: "bg-gradient-to-br from-teal-600 to-emerald-500",
    category: "scuole",
    details: [
      "450+ scuole coinvolte in Lombardia",
      "Riduzione dei consumi energetici",
      "Educazione ambientale attiva"
    ]
  },

  {
    id: 13,
    title: "I Benefici delle Green Schools",
    content:
      "Una scuola sostenibile migliora l’ambiente, rafforza il senso di comunità e sviluppa competenze utili per il futuro.",
    icon: Heart,
    bgClass: "bg-gradient-to-br from-pink-600 to-rose-500",
    category: "scuole",
    details: [
      "Migliori risultati scolastici",
      "Più partecipazione degli studenti",
      "Competenze green per il mondo del lavoro"
    ]
  },

  {
    id: 14,
    title: "Educazione alla sostenibilità",
    content:
      "Educare alla sostenibilità significa formare cittadini più consapevoli, responsabili e pronti ad affrontare le sfide future.",
    icon: Users,
    bgClass: "bg-gradient-to-br from-orange-500 to-amber-500",
    category: "scuole",
    details: [
      "Educazione civica ambientale",
      "Progetti e attività interdisciplinari",
      "Cittadinanza attiva e responsabile"
    ]
  },

  {
    id: 15,
    title: "Insieme per il Futuro",
    content:
      "La sostenibilità non riguarda solo il domani: è una responsabilità del presente. Ogni scuola può diventare un motore di cambiamento.",
    icon: Leaf,
    bgClass: "bg-gradient-to-br from-emerald-600 to-[#064e3b]",
    category: "conclusione",
    details: [
      "Ogni azione conta",
      "Le scuole come esempio positivo",
      "Un futuro sostenibile è possibile"
    ]
  },
]


const categories = [
  { id: "all", label: "Tutte", icon: Globe },
  { id: "globale", label: "Crisi Climatica", icon: Thermometer },
  { id: "politiche", label: "Politiche", icon: TrendingUp },
  { id: "scuole", label: "Green Schools", icon: GraduationCap },
]

export function PresentationSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAutoplay, setIsAutoplay] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredSlides = activeCategory === "all" 
    ? slides 
    : slides.filter(s => s.category === activeCategory || s.category === "intro" || s.category === "conclusione")

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % filteredSlides.length)
  }, [filteredSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length)
  }, [filteredSlides.length])

  const enterFullscreen = useCallback(async () => {
    try {
      if (containerRef.current) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen()
        } else if ((containerRef.current as HTMLDivElement & { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen) {
          await (containerRef.current as HTMLDivElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen()
        }
        setIsFullscreen(true)
      }
    } catch (err) {
      // Fallback to CSS fullscreen if native API fails
      setIsFullscreen(true)
    }
  }, [])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else if ((document as Document & { webkitExitFullscreen?: () => Promise<void> }).webkitExitFullscreen) {
        await (document as Document & { webkitExitFullscreen: () => Promise<void> }).webkitExitFullscreen()
      }
    } catch {
      // Ignore errors
    }
    setIsFullscreen(false)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Autoplay
  useEffect(() => {
    if (!isAutoplay) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoplay, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "Escape" && isFullscreen) {
        exitFullscreen()
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault()
        toggleFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, isFullscreen, toggleFullscreen, exitFullscreen])

  // Prevent body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isFullscreen])

  const currentSlideData = filteredSlides[currentSlide]
  const CurrentIcon = currentSlideData?.icon || Leaf

  return (
    <section id="presentazione" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-[var(--forest)]/10 text-[var(--forest)] text-sm font-medium mb-4">
            Contesto Globale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            sostenibilità e Green Schools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprendere l&apos;emergenza climatica e il ruolo delle scuole nella transizione ecologica.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const CatIcon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setCurrentSlide(0)
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[var(--forest)] text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-[var(--forest)]/10"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Presentation Container */}
        <div 
          ref={containerRef}
          className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-black" : ""}`}
        >
          {/* Main Slide */}
          <Card className={`overflow-hidden border-0 shadow-xl ${isFullscreen ? "h-full rounded-none" : ""}`}>
            <div className={`${currentSlideData?.bgClass} transition-all duration-500 ${isFullscreen ? "h-full" : "aspect-[16/9]"}`}>
              <div className={`h-full flex flex-col items-center justify-center text-white ${isFullscreen ? "p-8 md:p-16 lg:p-24" : "p-6 md:p-10"}`}>
                <CurrentIcon className={`${isFullscreen ? "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 mb-8" : "w-12 h-12 md:w-16 md:h-16 mb-4"} opacity-90`} />
                
                <h3 className={`${isFullscreen ? "text-3xl md:text-5xl lg:text-6xl mb-6" : "text-xl md:text-3xl mb-3"} font-bold text-center text-balance max-w-5xl`}>
                  {currentSlideData?.title}
                </h3>
                
                <p className={`${isFullscreen ? "text-lg md:text-2xl lg:text-3xl mb-10" : "text-sm md:text-lg mb-6"} text-center opacity-90 text-pretty max-w-4xl`}>
                  {currentSlideData?.content}
                </p>

                {/* Details bullets */}
                {currentSlideData?.details && (
                  <div className={`flex flex-wrap justify-center ${isFullscreen ? "gap-4 md:gap-6" : "gap-2 md:gap-3"}`}>
                    {currentSlideData.details.map((detail, idx) => (
                      <div 
                        key={idx}
                        className={`flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full ${isFullscreen ? "px-5 py-3 text-base md:text-lg" : "px-3 py-1.5 text-xs md:text-sm"}`}
                      >
                        <ArrowRight className={`${isFullscreen ? "w-4 h-4 md:w-5 md:h-5" : "w-3 h-3"}`} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Top Controls */}
              <div className={`absolute ${isFullscreen ? "top-6 left-6 right-6" : "top-3 left-3 right-3"} flex items-center justify-between`}>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-white hover:bg-white/20 ${isFullscreen ? "w-12 h-12" : "w-8 h-8"}`}
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Esci da schermo intero" : "Schermo intero"}
                  >
                    {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-white hover:bg-white/20 ${isFullscreen ? "w-12 h-12" : "w-8 h-8"}`}
                    onClick={() => setIsAutoplay(prev => !prev)}
                    aria-label={isAutoplay ? "Pausa" : "Riproduci"}
                  >
                    {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
                <div className={`bg-white/20 backdrop-blur-sm rounded-full ${isFullscreen ? "px-5 py-2" : "px-3 py-1"}`}>
                  <span className={`font-medium text-white ${isFullscreen ? "text-lg" : "text-sm"}`}>
                    {currentSlide + 1} / {filteredSlides.length}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${isFullscreen ? "p-4" : "p-2"}`}
                aria-label="Slide precedente"
              >
                <ChevronLeft className={`text-white ${isFullscreen ? "w-10 h-10" : "w-5 h-5 md:w-6 md:h-6"}`} />
              </button>
              <button
                onClick={nextSlide}
                className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${isFullscreen ? "p-4" : "p-2"}`}
                aria-label="Slide successiva"
              >
                <ChevronRight className={`text-white ${isFullscreen ? "w-10 h-10" : "w-5 h-5 md:w-6 md:h-6"}`} />
              </button>

              {/* Bottom Progress */}
              <div className={`absolute ${isFullscreen ? "bottom-6 left-6 right-6" : "bottom-3 left-3 right-3"}`}>
                <div className="flex gap-1">
                  {filteredSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        idx === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Vai alla slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Thumbnail Navigation */}
          {!isFullscreen && (
            <div className="mt-4 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                {filteredSlides.map((slide, idx) => {
                  const SlideIcon = slide.icon
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden transition-all ${
                        idx === currentSlide 
                          ? "ring-2 ring-[var(--forest)] ring-offset-2" 
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div className={`h-full ${slide.bgClass} flex items-center justify-center`}>
                        <SlideIcon className="w-5 h-5 text-white" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="border-[var(--forest)]/20 bg-[var(--mint)]/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--forest)] rounded-xl">
                  <Thermometer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Emergenza Climatica</h4>
                  <p className="text-sm text-muted-foreground">+1.2C di riscaldamento globale e conseguenze sempre piu evidenti</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[var(--forest)]/20 bg-[var(--mint)]/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--emerald)] rounded-xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Risposte Globali</h4>
                  <p className="text-sm text-muted-foreground">Accordo di Parigi, SDGs e Green Deal per un futuro sostenibile</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[var(--forest)]/20 bg-[var(--mint)]/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--forest)] rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Green Schools</h4>
                  <p className="text-sm text-muted-foreground">450+ scuole certificate in Lombardia per la sostenibilità</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Usa le frecce o premi F per lo schermo intero
        </p>
      </div>
    </section>
  )
}
