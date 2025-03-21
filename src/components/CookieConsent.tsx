
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { InfoIcon } from 'lucide-react';

// Local storage key for cookie consent
const COOKIE_CONSENT_KEY = 'protezione-cookie-consent';

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Check if the user has already made a choice
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Wait a bit before showing the dialog for better UX
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleConsent = (consent: 'accept' | 'reject') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    setOpen(false);
    
    // Only reload if accepting to apply analytics
    if (consent === 'accept') {
      window.location.reload();
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <InfoIcon className="h-5 w-5 text-accent" />
            {language === 'it' ? 'Informativa sui Cookie' : 'Cookie Policy'}
          </DialogTitle>
          <DialogDescription>
            {language === 'it' 
              ? 'Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.'
              : 'We use cookies to enhance your experience on our site.'}
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm mb-4">
          {language === 'it'
            ? 'Accettando, ci consenti di utilizzare i cookie per l\'analisi del sito, personalizzare contenuti e migliorare le prestazioni. Per maggiori informazioni, consulta la nostra'
            : 'By accepting, you allow us to use cookies for site analytics, content personalization, and performance improvement. For more information, see our'}
          {' '}
          <Link to="/privacy-policy" className="text-accent hover:underline">
            {language === 'it' ? 'Informativa sulla Privacy' : 'Privacy Policy'}
          </Link>.
        </div>
        <DialogFooter className="sm:justify-between">
          <Button 
            variant="outline" 
            onClick={() => handleConsent('reject')}
          >
            {language === 'it' ? 'Rifiuta' : 'Reject'}
          </Button>
          <Button 
            onClick={() => handleConsent('accept')}
          >
            {language === 'it' ? 'Accetta' : 'Accept'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
