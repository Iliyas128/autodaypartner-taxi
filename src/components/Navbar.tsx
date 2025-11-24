import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar = () => {
  const t = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'benefits', label: t.nav.benefits },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-black text-xl">AutoDayPartner</div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Открыть меню">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6">
                <div className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={`mobile-${item.id}`}
                      onClick={() => handleNavigation(item.id)}
                      className="text-left text-lg font-semibold text-foreground/80 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
