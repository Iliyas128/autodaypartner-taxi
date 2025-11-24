import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export const PricingSection = () => {
  const t = useTranslation();

  const pricingFeatures = [
    {
      title: t.pricing.commission.title,
      value: t.pricing.commission.value,
      description: t.pricing.commission.description
    },
    {
      title: t.pricing.rental.title,
      value: t.pricing.rental.value,
      description: t.pricing.rental.description
    },
    {
      title: t.pricing.branding.title,
      value: t.pricing.branding.value,
      description: t.pricing.branding.description
    },
    {
      title: t.pricing.minCommission.title,
      value: t.pricing.minCommission.value,
      description: t.pricing.minCommission.description
    }
  ];

  const includedFeatures = [
    t.pricing.features.freeConnection,
    t.pricing.features.documentHelp,
    t.pricing.features.training,
    t.pricing.features.fuelCards,
    t.pricing.features.support,
    t.pricing.features.insurance
  ];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {pricingFeatures.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-muted-foreground">{feature.title}</h3>
                <div className="text-3xl font-black text-primary">{feature.value}</div>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl shadow-soft">
          <h3 className="text-2xl font-bold mb-8 text-center">{t.pricing.included}</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="xl">
              {t.pricing.learnMoreButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
