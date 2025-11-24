import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <Navbar />
      <HeroSection />
      <section id="benefits" className="scroll-mt-24">
        <BenefitsSection />
      </section>
      <section id="how-it-works" className="scroll-mt-24">
        <HowItWorksSection />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <PricingSection />
      </section>
      <section id="testimonials" className="scroll-mt-24">
        <TestimonialsSection />
      </section>
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
