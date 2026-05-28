import { Lightbulb, Trash2, Droplets, Car, Trees, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const issues = [
  {
    id: 1,
    title: "Consumo Energetico Elevato",
    icon: Lightbulb,
    priority: "Alta",
    priorityColor: "bg-red-100 text-red-700 border-red-200",
    description:
      "Molte aule e dispositivi elettronici rimangono attivi anche quando non vengono utilizzati, causando inutili sprechi energetici.",
    details: [
      "Luci lasciate accese nelle aule vuote",
      "Computer spesso in standby fuori orario",
      "Assenza di sistemi automatici di spegnimento",
    ],
    wastePercent: 85,
    color: "amber",
  },

  {
    id: 2,
    title: "Gestione dei Rifiuti",
    icon: Trash2,
    priority: "Alta",
    priorityColor: "bg-red-100 text-red-700 border-red-200",
    description:
      "La raccolta differenziata non è sempre efficace a causa di cestini poco visibili, segnaletica limitata e scarsa sensibilizzazione.",
    details: [
      "Cestini non sempre ben identificabili",
      "Posizionamento poco strategico nelle aree comuni",
      "Necessità di maggiore sensibilizzazione",
    ],
    wastePercent: 70,
    color: "blue",
  },

  {
    id: 3,
    title: "Sprechi Idrici",
    icon: Droplets,
    priority: "Media",
    priorityColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    description:
      "Piccole perdite e sistemi poco efficienti contribuiscono a un consumo d’acqua superiore al necessario.",
    details: [
      "Rubinetti con perdite frequenti",
      "Mancanza di aeratori per il risparmio idrico",
      "Sistemi di scarico poco efficienti",
    ],
    wastePercent: 55,
    color: "sky",
  },

  {
    id: 4,
    title: "Mobilità e Trasporti",
    icon: Car,
    priority: "Media",
    priorityColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    description:
      "Molti studenti raggiungono la scuola in auto privata, aumentando traffico, emissioni e congestione nelle ore di punta.",
    details: [
      "Elevato utilizzo dell’auto privata",
      "Poche rastrelliere per biciclette",
      "Mobilità sostenibile poco incentivata",
    ],
    wastePercent: 65,
    color: "slate",
  },

  {
    id: 5,
    title: "Spazi Verdi Limitati",
    icon: Trees,
    priority: "Bassa",
    priorityColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description:
      "Gli spazi esterni della scuola presentano poche aree verdi e limitate zone ombreggiate dedicate al benessere degli studenti.",
    details: [
      "Ampie superfici cementificate",
      "Pochi alberi e aree ombreggiate",
      "Assenza di orti o spazi didattici verdi",
    ],
    wastePercent: 90,
    color: "green",
  },
]

const colorMap: Record<string, { bar: string; bg: string; icon: string }> = {
  amber: { bar: "bg-amber-500", bg: "bg-amber-50", icon: "text-amber-600" },
  blue: { bar: "bg-blue-500", bg: "bg-blue-50", icon: "text-blue-600" },
  sky: { bar: "bg-sky-500", bg: "bg-sky-50", icon: "text-sky-600" },
  slate: { bar: "bg-slate-500", bg: "bg-slate-50", icon: "text-slate-600" },
  green: { bar: "bg-green-500", bg: "bg-green-50", icon: "text-green-600" },
}

export function AuditSection() {
  return (
    <section id="audit" className="py-20 bg-[var(--mint)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--forest)]/10 mb-4">
            <AlertTriangle className="w-4 h-4 text-[var(--forest)]" />
            <span className="text-sm font-medium text-[var(--forest)]">Student Audit Report</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">
            Le 5 Criticità Identificate
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gli studenti hanno analizzato la situazione attuale della scuola, identificando le principali aree di miglioramento ambientale.
          </p>
        </div>

        {/* Issue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue) => {
            const IconComponent = issue.icon
            const colors = colorMap[issue.color]
            return (
              <Card
                key={issue.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[var(--emerald)]/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <Badge variant="outline" className={issue.priorityColor}>
                      Priorità {issue.priority}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-3">
                    {issue.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {issue.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {issue.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.bar} mt-1.5 shrink-0`} />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Frequenza problema</span>
                      <span className="font-semibold text-foreground">{issue.wastePercent}%</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 ${colors.bar} rounded-full transition-all duration-1000`}
                        style={{ width: `${issue.wastePercent}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {/* Summary Card */}
          <Card className="bg-[var(--forest)] text-white border-0 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 flex flex-col justify-center h-full">
              <h3 className="text-xl font-bold mb-4">Sintesi dell&apos;Audit</h3>
              <p className="text-white/80 mb-6">
                L&apos;analisi ha rivelato significative opportunità di miglioramento in tutte le aree chiave della sostenibilità scolastica.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Aree critiche</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Alta priorità</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Media priorità</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Bassa priorità</span>
                  <span className="font-bold">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
