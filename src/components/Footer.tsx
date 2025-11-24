import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const t = useTranslation();
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black mb-4 text-primary">AutoDayPartner</h3>
            <p className="opacity-80 mb-4">
              Современный таксопарк для подключения водителей к Яндекс Такси, Uber и Bolt. 
              Быстро, выгодно, надёжно.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#benefits" className="hover:text-primary transition-colors">{t.nav.benefits}</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">{t.nav.testimonials}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 opacity-80">
              <li>+7 (999) 999-99-99</li>
              <li>info@autodaypartner.ru</li>
              <li>
                <a href="https://t.me/autodaypartner" className="hover:text-primary transition-colors">
                  Telegram: @autodaypartner
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center opacity-60">
          <p>&copy; 2025 AutoDayPartner. {t.footer.allRightsReserved}.</p>
        </div>
      </div>
    </footer>
  );
};
