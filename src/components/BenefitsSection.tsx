import { Zap, DollarSign, Shield, Headphones, Car, Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const BenefitsSection = () => {
  const t = useTranslation();

  const benefits = [
    {
      icon: Zap,
      title: t.benefits.instantConnection.title,
      description: t.benefits.instantConnection.description
    },
    {
      icon: DollarSign,
      title: t.benefits.dailyPayouts.title,
      description: t.benefits.dailyPayouts.description
    },
    {
      icon: Shield,
      title: t.benefits.noHiddenFees.title,
      description: t.benefits.noHiddenFees.description
    },
    {
      icon: Headphones,
      title: t.benefits.support247.title,
      description: t.benefits.support247.description
    },
    {
      icon: Car,
      title: t.benefits.ownOrRental.title,
      description: t.benefits.ownOrRental.description
    },
    {
      icon: Star,
      title: t.benefits.highApproval.title,
      description: t.benefits.highApproval.description
    }
  ];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
