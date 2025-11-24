import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = () => {
  const t = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-black text-xl">AutoDayPartner</div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.nav.benefits}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.nav.pricing}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.nav.testimonials}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
