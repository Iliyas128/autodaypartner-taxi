import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { toast } from "sonner";

export const ContactSection = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success(t.contact.form.successMessage);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl opacity-90">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder={t.contact.form.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px] px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:border-primary transition-colors focus:outline-none resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                >
                  {t.contact.form.submitButton}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Телефон</h3>
                    <a href="tel:+79999999999" className="text-primary hover:underline text-lg">
                      +7 (999) 999-99-99
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telegram</h3>
                    <a href="https://t.me/autodaypartner" className="text-primary hover:underline text-lg">
                      @autodaypartner
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:info@autodaypartner.ru" className="text-primary hover:underline text-lg">
                      info@autodaypartner.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
