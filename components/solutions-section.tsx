import { Lightbulb, Trash2, Droplets, Car, Trees, TrendingUp, Coins, CheckCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    issue: "Consumo Energetico",
    icon: Lightbulb,
    solution: "Sensori di movimento per illuminazione automatica",
    additionalActions: ["Timer per spegnimento PC", "Audit settimanale consumi"],
    cost: "Medio",
    costColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    impact: "Alto",
    impactColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    savings: "-35% energia",
  },
  {
    issue: "Gestione Rifiuti",
    icon: Trash2,
    solution: "Isole ecologiche in ogni piano con segnaletica chiara",
    additionalActions: ["Campagna informativa", "Monitoraggio settimanale"],
    cost: "Basso",
    costColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    impact: "Alto",
    impactColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    savings: "+60% riciclo",
  },
  {
    issue: "Sprechi Idrici",
    icon: Droplets,
    solution: "Aeratori su tutti i rubinetti + riparazione perdite",
    additionalActions: ["Sensori automatici", "Monitoraggio contatori"],
    cost: "Basso",
    costColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    impact: "Medio",
    impactColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    savings: "-40% acqua",
  },
  {
    issue: "Trasporti",
    icon: Car,
    solution: "Promozione Pedibus e ampliamento rastrelliere bici",
    additionalActions: ["App carpooling studenti", "Incentivi mobilità green"],
    cost: "Medio",
    costColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    impact: "Medio",
    impactColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    savings: "-25% auto",
  },
  {
    issue: "Spazi Verdi",
    icon: Trees,
    solution: "Progetto cortile verde con studenti CAT",
    additionalActions: ["Orto didattico", "Aree ombra naturale"],
    cost: "Medio",
    costColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    impact: "Alto",
    impactColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    savings: "+500m² verde",
  },
]

export function SolutionsSection() {
  return (
    <section id="soluzioni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--emerald)]/10 mb-4">
            <TrendingUp className="w-4 h-4 text-[var(--emerald)]" />
            <span className="text-sm font-medium text-[var(--forest)]">Soluzioni & Impatto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--forest)] mb-4">
            Le Nostre Proposte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un confronto tra le criticità identificate e le soluzioni proposte dagli studenti, con stima di costi e impatto ambientale.
          </p>
        </div>

        {/* Desktop Table */}
        <Card className="hidden lg:block overflow-hidden border-2">
          <Table>
            <TableHeader>
              <TableRow className="bg-[var(--mint)]/50">
                <TableHead className="font-semibold text-[var(--forest)]">Criticità</TableHead>
                <TableHead className="font-semibold text-[var(--forest)]">Soluzione Principale</TableHead>
                <TableHead className="font-semibold text-[var(--forest)]">Azioni Aggiuntive</TableHead>
                <TableHead className="font-semibold text-[var(--forest)] text-center">Costo</TableHead>
                <TableHead className="font-semibold text-[var(--forest)] text-center">Impatto</TableHead>
                <TableHead className="font-semibold text-[var(--forest)] text-center">Risparmio Atteso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {solutions.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[var(--mint)]">
                          <IconComponent className="w-4 h-4 text-[var(--forest)]" />
                        </div>
                        <span className="font-medium">{item.issue}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm">{item.solution}</p>
                    </TableCell>
                    <TableCell>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {item.additionalActions.map((action, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-[var(--emerald)]" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={item.costColor}>
                        <Coins className="w-3 h-3 mr-1" />
                        {item.cost}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={item.impactColor}>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {item.impact}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-semibold text-[var(--emerald)]">{item.savings}</span>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>

        {/* Mobile Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {solutions.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="border-2 hover:border-[var(--emerald)]/30 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--mint)]">
                      <IconComponent className="w-5 h-5 text-[var(--forest)]" />
                    </div>
                    <CardTitle className="text-base">{item.issue}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Soluzione:</p>
                    <p className="text-sm text-muted-foreground">{item.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className={item.costColor}>
                      <Coins className="w-3 h-3 mr-1" />
                      Costo {item.cost}
                    </Badge>
                    <Badge variant="outline" className={item.impactColor}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Impatto {item.impact}
                    </Badge>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-sm text-muted-foreground">Risparmio: </span>
                    <span className="font-semibold text-[var(--emerald)]">{item.savings}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
