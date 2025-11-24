import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
      >
        РУ
      </Button>
      <Button
        variant={language === 'kk' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('kk')}
      >
        ҚЗ
      </Button>
    </div>
  );
};
