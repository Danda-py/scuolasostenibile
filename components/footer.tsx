import { Leaf, MapPin, Phone, Mail, ExternalLink } from "lucide-react"

const resources = [
  { label: "Green Schools Network", href: "#" },
  { label: "Ministero dell'Ambiente", href: "#" },
  { label: "Regione Lombardia - Sostenibilità", href: "#" },
  { label: "Educazione Ambientale", href: "#" },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Presentazione", href: "#presentazione" },
  { label: "Student Audit", href: "#audit" },
  { label: "Soluzioni", href: "#soluzioni" },
  { label: "Piano d'Azione", href: "#piano" },
]

export function Footer() {
  return (
    <footer className="bg-[var(--forest)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[var(--emerald)]" />
              </div>
              <div>
                <p className="font-semibold">Eco Saraceno-Romegialli</p>
                <p className="text-xs text-white/60">Green School Initiative</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Un progetto studentesco per trasformare il nostro istituto in una scuola sostenibile e certificata.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigazione</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Risorse Utili</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contatti Scuola</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--emerald)] mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Istituto Saraceno-Romegialli<br />
                  P.zza S. Antonio<br />
                  23017 Morbegno (SO)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--emerald)] shrink-0" />
                <a href="tel:+390342610468" className="text-sm text-white/70 hover:text-white transition-colors">
                  0342 610468
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--emerald)] shrink-0" />
                <a href="mailto:info@saracenorom.edu.it" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@saracenorom.edu.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
<div className="py-6 border-t border-white/10">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
    <p className="text-sm text-white/60">
      © 2024 Istituto Saraceno-Romegialli, Morbegno. Progetto Studenti per la Sostenibilità.
    </p>

    <div className="flex items-center gap-4">
      <a
        href="#"
        className="text-sm text-white/60 hover:text-white transition-colors"
      >
        Privacy
      </a>

      <a
        href="#"
        className="text-sm text-white/60 hover:text-white transition-colors"
      >
        Cookie Policy
      </a>

      <a
        href="https://github.com/Danda-py/scuolasostenibile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/60 hover:text-white transition-colors"
      >
        GitHub Repository
      </a>
    </div>
  </div>
</div>
    </footer>
  )
}
