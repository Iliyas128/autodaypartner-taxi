import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export const FloatingCTA = () => {
  const t = useTranslation();
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button 
        variant="hero" 
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <MessageCircle className="mr-2" />
        {t.floatingCta}
      </Button>
    </div>
  );
};
