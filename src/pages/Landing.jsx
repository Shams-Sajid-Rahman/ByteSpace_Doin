import Hero from '../components/Hero.jsx'
import DiscoverSection from '../components/DiscoverSection.jsx'
import LearningPathsSection from '../components/LearningPathsSection.jsx'
import GrowthSections from '../components/GrowthSections.jsx'
import CreatorBanner from '../components/CreatorBanner.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import Footer from '../components/Footer.jsx'
import PartnerLogos from '../components/PartnerLogos.jsx'

function Landing() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <main>
        <DiscoverSection />
        <LearningPathsSection />
        <GrowthSections />
        <CreatorBanner />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}

export default Landing