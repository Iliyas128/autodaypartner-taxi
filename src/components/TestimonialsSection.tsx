import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialsSection = () => {
  const t = useTranslation();
  const { language } = useLanguage();

  const testimonialsRu = [
    {
      name: "Александр М.",
      role: "Водитель 2 года",
      rating: 5,
      text: "Отличный таксопарк! Выплаты действительно приходят каждый день, поддержка всегда отвечает быстро. Рекомендую!"
    },
    {
      name: "Дмитрий К.",
      role: "Водитель 6 месяцев",
      rating: 5,
      text: "Подключился за один день, никаких проблем. Комиссия действительно самая низкая из тех, что я видел."
    },
    {
      name: "Нұрлан Б.",
      role: "Водитель 1 год",
      rating: 5,
      text: "Работаю на своей машине, очень доволен условиями. Бонусная программа реально работает."
    },
    {
      name: "Ерлан А.",
      role: "Водитель 3 года",
      rating: 5,
      text: "Перешёл из другого таксопарка и не жалею. Здесь действительно заботятся о водителях."
    },
    {
      name: "Михаил Л.",
      role: "Водитель 8 месяцев",
      rating: 5,
      text: "Арендую машину у них, автомобили всегда в отличном состоянии. Очень удобно!"
    }
  ];

  const testimonialsKk = [
    {
      name: "Александр М.",
      role: "2 жыл жүргізуші",
      rating: 5,
      text: "Тамаша такси паркі! Төлемдер шынымен күн сайын келеді, қолдау қызметі әрқашан тез жауап береді. Ұсынамын!"
    },
    {
      name: "Дмитрий К.",
      role: "6 ай жүргізуші",
      rating: 5,
      text: "Бір күнде қосылдым, ешқандай проблема жоқ. Комиссия шынымен мен көргендердің ішіндегі ең төмені."
    },
    {
      name: "Нұрлан Б.",
      role: "1 жыл жүргізуші",
      rating: 5,
      text: "Өз көлігімде жұмыс істеймін, шарттарға өте риза. Бонустық бағдарлама шынымен жұмыс істейді."
    },
    {
      name: "Ерлан А.",
      role: "3 жыл жүргізуші",
      rating: 5,
      text: "Басқа такси паркінен көшіп келдім және өкінбеймін. Мұнда шынымен жүргізушілер туралы қамқорлық жасайды."
    },
    {
      name: "Михаил Л.",
      role: "8 ай жүргізуші",
      rating: 5,
      text: "Олардан көлік жалдаймын, автомобильдер әрқашан тамаша жағдайда. Өте ыңғайлы!"
    }
  ];

  const testimonials = language === 'ru' ? testimonialsRu : testimonialsKk;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card p-8 md:p-12 rounded-2xl shadow-soft">
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="text-center">
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
