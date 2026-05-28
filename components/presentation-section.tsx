"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Leaf, Globe, Thermometer, Factory, Wind, Target, GraduationCap, Building2, Users, TrendingUp, CloudRain, Waves, Sun, AlertTriangle, ArrowRight, Play, Pause, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const slides = [
  // SEZIONE 1: Introduzione
  {
    id: 1,
    title: "Verso una Scuola Sostenibile",
    content: "Comprendere l'emergenza climatica globale e il ruolo fondamentale che le scuole possono giocare nella transizione ecologica.",
    icon: Leaf,
    bgClass: "bg-gradient-to-br from-[#064e3b] to-[#10b981]",
    category: "intro",
    details: [
      "Contesto globale e sfide ambientali",
      "Politiche internazionali per il clima",
      "Il movimento Green Schools"
    ]
  },
  
  // SEZIONE 2: Emergenza Climatica Globale
  {
    id: 2,
    title: "L'Emergenza Climatica: I Numeri",
    content: "Il pianeta si sta riscaldando a un ritmo senza precedenti. La concentrazione di CO2 ha superato le 420 ppm, il livello piu alto degli ultimi 800.000 anni.",
    icon: Thermometer,
    bgClass: "bg-gradient-to-br from-red-700 to-orange-500",
    category: "globale",
    details: [
      "+1.2C rispetto all'era preindustriale",
      "420+ ppm di CO2 in atmosfera",
      "2023: anno piu caldo mai registrato"
    ]
  },
  {
    id: 3,
    title: "Gli Effetti del Cambiamento Climatico",
    content: "Eventi meteorologici estremi sempre piu frequenti: ondate di calore, alluvioni, siccita. Le conseguenze sono gia visibili in ogni parte del mondo.",
    icon: CloudRain,
    bgClass: "bg-gradient-to-br from-slate-700 to-blue-600",
    category: "globale",
    details: [
      "Aumento di alluvioni e siccita",
      "Scioglimento dei ghiacciai alpini",
      "Innalzamento del livello del mare"
    ]
  },
  {
    id: 4,
    title: "Le Emissioni di Gas Serra",
    content: "Ogni anno l'umanita emette circa 40 miliardi di tonnellate di CO2. I principali settori responsabili: energia, agricoltura e industria.",
    icon: Factory,
    bgClass: "bg-gradient-to-br from-zinc-800 to-zinc-600",
    category: "globale",
    details: [
      "40 Gt di CO2 emesse ogni anno",
      "Energia fossile: 73% delle emissioni",
      "Deforestazione: 10% delle emissioni"
    ]
  },
  {
    id: 5,
    title: "Il Punto di Non Ritorno",
    content: "Gli scienziati avvertono: superare i +1.5C potrebbe innescare effetti irreversibili. Abbiamo meno di 10 anni per agire decisamente.",
    icon: AlertTriangle,
    bgClass: "bg-gradient-to-br from-amber-600 to-red-600",
    category: "globale",
    details: [
      "Budget carbonio limitato",
      "Tipping points sempre piu vicini",
      "Urgenza di azione immediata"
    ]
  },
  {
    id: 6,
    title: "L'Impatto sugli Ecosistemi",
    content: "Perdita di biodiversita senza precedenti: 1 milione di specie a rischio estinzione. Oceani sempre piu acidi e caldi.",
    icon: Waves,
    bgClass: "bg-gradient-to-br from-cyan-700 to-blue-500",
    category: "globale",
    details: [
      "1 milione di specie a rischio",
      "Oceani +30% acidita dal 1800",
      "Ecosistemi marini in pericolo"
    ]
  },

  // SEZIONE 3: Risposte Internazionali
  {
    id: 7,
    title: "L'Accordo di Parigi (2015)",
    content: "195 nazioni unite per limitare il riscaldamento a +1.5C. Obiettivo: neutralita climatica entro il 2050 e riduzione emissioni del 45% entro il 2030.",
    icon: Globe,
    bgClass: "bg-gradient-to-br from-blue-700 to-cyan-500",
    category: "politiche",
    details: [
      "195 paesi firmatari",
      "Obiettivo: max +1.5C",
      "Net-zero entro 2050"
    ]
  },
  {
    id: 8,
    title: "Gli SDGs delle Nazioni Unite",
    content: "I 17 Obiettivi di Sviluppo Sostenibile dell'Agenda 2030: un piano d'azione globale per le persone, il pianeta e la prosperita.",
    icon: Target,
    bgClass: "bg-gradient-to-br from-indigo-600 to-blue-500",
    category: "politiche",
    details: [
      "17 obiettivi interconnessi",
      "169 target specifici",
      "Scadenza: 2030"
    ]
  },
  {
    id: 9,
    title: "Il Green Deal Europeo",
    content: "L'Europa punta a diventare il primo continente climaticamente neutro. 1.000 miliardi di euro investiti nella transizione verde.",
    icon: TrendingUp,
    bgClass: "bg-gradient-to-br from-emerald-700 to-teal-500",
    category: "politiche",
    details: [
      "1 trilione di euro di investimenti",
      "-55% emissioni entro 2030",
      "Neutralita climatica entro 2050"
    ]
  },
  {
    id: 10,
    title: "L'Italia e la Sostenibilita",
    content: "Il PNRR destina 71 miliardi alla transizione ecologica. Obiettivo: 72% di energia da fonti rinnovabili entro il 2030.",
    icon: Sun,
    bgClass: "bg-gradient-to-br from-green-600 to-lime-500",
    category: "politiche",
    details: [
      "71 miliardi euro dal PNRR",
      "72% rinnovabili entro 2030",
      "Efficienza edifici pubblici"
    ]
  },

  // SEZIONE 4: Il Ruolo delle Scuole
  {
    id: 11,
    title: "Le Scuole: Motori del Cambiamento",
    content: "8.000 istituti scolastici in Italia, 7.5 milioni di studenti. Le scuole consumano il 17% dell'energia del settore pubblico.",
    icon: Building2,
    bgClass: "bg-gradient-to-br from-indigo-700 to-violet-500",
    category: "scuole",
    details: [
      "8.000 istituti scolastici",
      "7.5 milioni di studenti",
      "17% consumi energetici pubblici"
    ]
  },
  {
    id: 12,
    title: "Il Programma Green Schools",
    content: "Nato in Lombardia, oggi diffuso in tutta Italia. Certifica le scuole che riducono l'impatto ambientale in almeno 4 aree tematiche.",
    icon: GraduationCap,
    bgClass: "bg-gradient-to-br from-teal-600 to-emerald-500",
    category: "scuole",
    details: [
      "450+ scuole certificate in Lombardia",
      "4 pilastri: energia, rifiuti, acqua, mobilita",
      "Risparmio medio: 25% energia"
    ]
  },
  {
    id: 13,
    title: "Benefici delle Green Schools",
    content: "Oltre all'ambiente: migliori risultati scolastici, maggiore senso di comunita, sviluppo di competenze trasversali per il futuro.",
    icon: Heart,
    bgClass: "bg-gradient-to-br from-pink-600 to-rose-500",
    category: "scuole",
    details: [
      "Miglioramento performance accademiche",
      "Riduzione assenteismo",
      "Competenze green per il lavoro"
    ]
  },
  {
    id: 14,
    title: "Educazione alla Sostenibilita",
    content: "Le scuole formano i cittadini di domani. L'educazione ambientale e oggi inserita nei curricula scolastici come materia trasversale.",
    icon: Users,
    bgClass: "bg-gradient-to-br from-orange-500 to-amber-500",
    category: "scuole",
    details: [
      "Educazione civica ambientale obbligatoria",
      "33 ore/anno dedicate alla sostenibilita",
      "Progetti PCTO green in crescita"
    ]
  },

  // SEZIONE 5: Conclusione
  {
    id: 15,
    title: "Insieme per il Futuro",
    content: "Il cambiamento parte da ogni singola scuola, da ogni studente. Insieme possiamo fare la differenza per il nostro pianeta.",
    icon: Leaf,
    bgClass: "bg-gradient-to-br from-emerald-600 to-[#064e3b]",
    category: "conclusione",
    details: [
      "Ogni azione conta",
      "Le scuole come esempio",
      "Un futuro sostenibile e possibile"
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
            Sostenibilita e Green Schools
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
                  <p className="text-sm text-muted-foreground">450+ scuole certificate in Lombardia per la sostenibilita</p>
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
