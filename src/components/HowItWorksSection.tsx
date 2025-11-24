import { FileText, Send, Wallet } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const HowItWorksSection = () => {
  const t = useTranslation();

  const steps = [
    {
      icon: FileText,
      step: "01",
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description
    },
    {
      icon: Send,
      step: "02",
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description
    },
    {
      icon: Wallet,
      step: "03",
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description
    }
  ];
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
              
              <div className="relative glass-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
