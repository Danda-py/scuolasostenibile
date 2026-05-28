import { Calendar, Zap, Trash2, Trees, Award, Clock, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const timelineSteps = [
  {
    month: "Settembre 2026",
    title: "Avvio del Progetto",
    description:
      "Presentazione ufficiale del progetto alla comunità scolastica, creazione del gruppo di lavoro studentesco e avvio delle prime attività di sensibilizzazione ambientale.",
    icon: Rocket,
    color: "bg-[var(--forest)]",
    status: "upcoming",
  },

  {
    month: "Novembre 2026",
    title: "Analisi dei Consumi Energetici",
    description:
      "Monitoraggio dei consumi della scuola e individuazione delle principali criticità energetiche per definire gli interventi prioritari.",
    icon: Zap,
    color: "bg-amber-500",
    status: "upcoming",
  },

  {
    month: "Gennaio 2027",
    title: "Miglioramento della Raccolta Differenziata",
    description:
      "Installazione di isole ecologiche e interventi per la riduzione degli sprechi idrici attraverso aeratori e manutenzione degli impianti.",
    icon: Trash2,
    color: "bg-blue-500",
    status: "upcoming",
  },

  {
    month: "Marzo 2027",
    title: "Riqualificazione degli Spazi Verdi",
    description:
      "Progettazione e realizzazione di nuove aree verdi scolastiche in collaborazione con gli studenti dell’indirizzo CAT.",
    icon: Trees,
    color: "bg-green-500",
    status: "upcoming",
  },

  {
    month: "Maggio 2027",
    title: "Richiesta Certificazione Green School",
    description:
      "Presentazione dei risultati raggiunti e candidatura ufficiale della scuola al programma Green School.",
    icon: Award,
    color: "bg-emerald-500",
    status: "upcoming",
  },
]

export function TimelineSection() {
  return (
    <section id="piano" className="py-20 bg-[var(--mint)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--forest)]/10 mb-4">
            <Calendar className="w-4 h-4 text-[var(--forest)]" />
            <span className="text-sm font-medium text-[var(--forest)]">Piano d&apos;Azione 2026/2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">
            Roadmap di Implementazione
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Il nostro percorso verso la certificazione Green School, passo dopo passo.
          </p>
        </div>

        {/* Status Banner */}
        <div className="mb-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-50 border border-amber-200">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">
              Il progetto partirà a Settembre 2026 con l&apos;inizio del nuovo anno scolastico
            </span>
          </div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-border rounded-full" />

            {/* Timeline Steps */}
            <div className="relative grid grid-cols-5 gap-4">
              {timelineSteps.map((step, index) => {
                const IconComponent = step.icon

                return (
                  <div key={index} className="flex flex-col items-center">
                    {/* Icon Circle */}
                    <div
                      className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center ${step.color} text-white shadow-lg opacity-70`}
                    >
                      <IconComponent className="w-10 h-10" />
                    </div>

                    {/* Content Card */}
                    <Card className="mt-6 w-full">
                      <CardContent className="p-4 text-center">
                        <p className="text-sm font-semibold text-muted-foreground">
                          {step.month}
                        </p>
                        <h3 className="font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                          In Attesa
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline Steps */}
            <div className="space-y-8">
              {timelineSteps.map((step, index) => {
                const IconComponent = step.icon

                return (
                  <div key={index} className="relative flex gap-4">
                    {/* Icon */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${step.color} text-white shadow-md shrink-0 opacity-70`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-muted-foreground">
                            {step.month}
                          </p>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                            In Attesa
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
