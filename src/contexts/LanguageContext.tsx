
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it';

// Translation type definition
interface Translations {
  [key: string]: {
    en: string;
    it: string;
  };
}

// Define all translations here
export const translations: Translations = {
  // Navbar translations
  'nav.home': {
    en: 'Home',
    it: 'Home',
  },
  'nav.services': {
    en: 'Services',
    it: 'Servizi',
  },
  'nav.about': {
    en: 'About',
    it: 'Chi Siamo',
  },
  'nav.learning': {
    en: 'Learning',
    it: 'Formazione',
  },
  'nav.contact': {
    en: 'Contact',
    it: 'Contatti',
  },
  
  // Hero section
  'hero.badge': {
    en: 'Professional IT Security',
    it: 'Sicurezza IT Professionale',
  },
  'hero.title1': {
    en: 'Secure Cloud',
    it: 'Soluzioni Cloud',
  },
  'hero.title2': {
    en: 'Solutions',
    it: 'Sicure',
  },
  'hero.title3': {
    en: 'for Your Business',
    it: 'per la Tua Azienda',
  },
  'hero.description': {
    en: 'Specialized in Google Cloud Platform services, delivering enterprise-grade security, scalability, and performance for your mission-critical applications.',
    it: 'Specializzati in servizi Google Cloud Platform, offriamo sicurezza, scalabilità e prestazioni di livello enterprise per le tue applicazioni mission-critical.',
  },
  'hero.cta.start': {
    en: 'Get Started',
    it: 'Inizia Ora',
  },
  'hero.cta.learn': {
    en: 'Learn More',
    it: 'Scopri di Più',
  },
  
  // Services section
  'services.title': {
    en: 'Specialized Google Cloud Services',
    it: 'Servizi Google Cloud Specializzati',
  },
  'services.description': {
    en: 'Comprehensive Google Cloud Platform solutions tailored to your business needs, from infrastructure setup to ongoing management and optimization.',
    it: 'Soluzioni Google Cloud Platform complete su misura per le esigenze della tua azienda, dall\'implementazione dell\'infrastruttura alla gestione e ottimizzazione continua.',
  },
  
  // Learning section
  'learning.title': {
    en: 'Learning & Training',
    it: 'Formazione & Training',
  },
  'learning.description': {
    en: 'Customized training programs to help your team master Google Cloud Platform technologies and best practices.',
    it: 'Programmi di formazione personalizzati per aiutare il tuo team a padroneggiare le tecnologie e le best practice di Google Cloud Platform.',
  },
  'learning.individual.title': {
    en: 'Individual Learning',
    it: 'Formazione Individuale',
  },
  'learning.individual.description': {
    en: 'Personalized one-on-one training sessions tailored to your specific needs and learning pace. Ideal for professionals seeking to deepen their Google Cloud expertise.',
    it: 'Sessioni di formazione personalizzate one-to-one adattate alle tue esigenze specifiche e al tuo ritmo di apprendimento. Ideale per professionisti che desiderano approfondire la propria competenza su Google Cloud.',
  },
  'learning.team.title': {
    en: 'Team Training',
    it: 'Formazione per Team',
  },
  'learning.team.description': {
    en: 'Comprehensive training workshops designed for teams to build collective Google Cloud knowledge. Includes hands-on labs, real-world scenarios, and collaborative exercises.',
    it: 'Workshop di formazione completi progettati per i team per sviluppare conoscenze collettive su Google Cloud. Include laboratori pratici, scenari reali ed esercizi collaborativi.',
  },
  'learning.cta': {
    en: 'Request Training',
    it: 'Richiedi Formazione',
  },
  
  // About section
  'about.title': {
    en: 'Expert Google Cloud Solutions for Your Business',
    it: 'Soluzioni Google Cloud di Esperti per la Tua Azienda',
  },
  'about.specialist': {
    en: 'IT Specialist',
    it: 'Specialista IT',
  },
  'about.experience': {
    en: '10+ years of experience with cloud infrastructure',
    it: '10+ anni di esperienza con infrastrutture cloud',
  },
  'about.certifications': {
    en: 'Professional Certifications',
    it: 'Certificazioni Professionali',
  },
  'about.paragraph1': {
    en: 'As a certified Google Cloud specialist, I provide tailored cloud solutions that balance security, performance, and cost-efficiency. With deep technical expertise in Google\'s ecosystem, I help businesses leverage the full potential of cloud technology.',
    it: 'Come specialista certificato Google Cloud, fornisco soluzioni cloud su misura che bilanciano sicurezza, prestazioni ed efficienza dei costi. Con una profonda competenza tecnica nell\'ecosistema Google, aiuto le aziende a sfruttare appieno il potenziale della tecnologia cloud.',
  },
  'about.paragraph2': {
    en: 'My approach focuses on understanding your unique business requirements and designing cloud architectures that align with your goals, whether you\'re migrating existing workloads, building new applications, or optimizing current deployments.',
    it: 'Il mio approccio si concentra sulla comprensione delle tue esigenze aziendali uniche e sulla progettazione di architetture cloud allineate ai tuoi obiettivi, che tu stia migrando carichi di lavoro esistenti, creando nuove applicazioni o ottimizzando implementazioni attuali.',
  },
  'about.cta': {
    en: 'Work With Me',
    it: 'Lavora Con Me',
  },
  
  // Contact section
  'contact.title': {
    en: 'Get in Touch',
    it: 'Contattaci',
  },
  'contact.description': {
    en: 'Have a project in mind or questions about Google Cloud services? I\'m here to help you navigate the cloud landscape and find the perfect solution for your needs.',
    it: 'Hai un progetto in mente o domande sui servizi Google Cloud? Sono qui per aiutarti a navigare nel panorama cloud e trovare la soluzione perfetta per le tue esigenze.',
  },
  'contact.sidebar.badge': {
    en: 'Get in Touch',
    it: 'Contattaci',
  },
  'contact.sidebar.title': {
    en: 'Let\'s discuss your cloud strategy',
    it: 'Parliamo della tua strategia cloud',
  },
  'contact.sidebar.description': {
    en: 'Whether you\'re looking to migrate to Google Cloud, optimize your current setup, or enhance security, I\'m ready to help you achieve your goals.',
    it: 'Che tu stia cercando di migrare a Google Cloud, ottimizzare la tua configurazione attuale o migliorare la sicurezza, sono pronto ad aiutarti a raggiungere i tuoi obiettivi.',
  },
  'contact.form.name': {
    en: 'Name',
    it: 'Nome',
  },
  'contact.form.email': {
    en: 'Email',
    it: 'Email',
  },
  'contact.form.company': {
    en: 'Company',
    it: 'Azienda',
  },
  'contact.form.message': {
    en: 'Message',
    it: 'Messaggio',
  },
  'contact.form.placeholder.name': {
    en: 'Your name',
    it: 'Il tuo nome',
  },
  'contact.form.placeholder.email': {
    en: 'Your email',
    it: 'La tua email',
  },
  'contact.form.placeholder.company': {
    en: 'Your company name',
    it: 'Nome della tua azienda',
  },
  'contact.form.placeholder.message': {
    en: 'How can I help you?',
    it: 'Come posso aiutarti?',
  },
  'contact.form.submit': {
    en: 'Send Message',
    it: 'Invia Messaggio',
  },
  'contact.form.sending': {
    en: 'Sending...',
    it: 'Invio in corso...',
  },
  
  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    it: 'Tutti i diritti riservati.',
  },
  'footer.design': {
    en: 'Designed with precision and simplicity',
    it: 'Progettato con precisione e semplicità',
  },
};

// Create the language context
interface LanguageContextProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
