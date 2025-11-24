import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroTaxi from "@/assets/hero-taxi.jpg";
import { useTranslation } from "@/hooks/useTranslation";

export const HeroSection = () => {
  const t = useTranslation();
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 pt-8 md:pt-0">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight">
              AutoDayPartner
              <span className="block text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 opacity-90">
                {t.hero.title.split('—')[1]?.trim()}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl font-medium">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
              >
                {t.hero.connectButton} <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline-light" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2" />
                {t.hero.contactButton}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/80 font-medium">Поддержка</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-primary-foreground">0%</div>
                <div className="text-sm text-primary-foreground/80 font-medium">Комиссий</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-primary-foreground">1 день</div>
                <div className="text-sm text-primary-foreground/80 font-medium">Подключение</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-float flex justify-center">
            <div className="relative">
              <img 
                src={heroTaxi} 
                alt="Такси AutoDayPartner" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover max-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
