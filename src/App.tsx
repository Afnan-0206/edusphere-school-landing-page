import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { AdmissionProcessSection } from './components/sections/AdmissionProcessSection'
import { ContactSection } from './components/sections/ContactSection'
import { EnquiryForm } from './components/sections/EnquiryForm'
import { FAQSection } from './components/sections/FAQSection'
import { FacilitiesSection } from './components/sections/FacilitiesSection'
import { GallerySection } from './components/sections/GallerySection'
import { HeroSection } from './components/sections/HeroSection'
import { ProgramsSection } from './components/sections/ProgramsSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection'

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#F6F1E4]">
      <Navbar />
      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ProgramsSection />
        <FacilitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <AdmissionProcessSection />
        <EnquiryForm />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
