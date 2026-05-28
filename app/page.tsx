import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PresentationSection } from "@/components/presentation-section"
import { AuditSection } from "@/components/audit-section"
import { SolutionsSection } from "@/components/solutions-section"
import { TimelineSection } from "@/components/timeline-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PresentationSection />
      <AuditSection />
      <SolutionsSection />
      <TimelineSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
