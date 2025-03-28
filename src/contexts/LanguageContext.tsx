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
  'nav.google.title': {
    en: 'Google Services',
    it: 'Servizi Google',
  },
  'nav.google.services': {
    en: 'Google Cloud Services',
    it: 'Servizi Google Cloud',
  },
  'nav.other.title': {
    en: 'Other Services',
    it: 'Altri Servizi',
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
  'nav.erpnext': {
    en: 'ERPNext',
    it: 'ERPNext',
  },
  'nav.hosting': {
    en: 'Hosting',
    it: 'Hosting',
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
    en: 'Specialized in Google Cloud Platform services, we deliver enterprise-grade security, scalability, and performance for your mission-critical applications.',
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
  
  // Services sections
  'googleservices.title': {
    en: 'Google Cloud Services',
    it: 'Servizi Google Cloud',
  },
  'googleservices.description': {
    en: 'Comprehensive Google Cloud Platform solutions tailored to your business needs, from infrastructure setup to ongoing management and optimization.',
    it: 'Soluzioni Google Cloud Platform complete su misura per le esigenze della tua azienda, dall\'implementazione dell\'infrastruttura alla gestione e ottimizzazione continua.',
  },
  'otherservices.title': {
    en: 'Other Services',
    it: 'Altri Servizi',
  },
  'otherservices.description': {
    en: 'Additional specialized solutions to complement your cloud infrastructure and enhance your digital presence.',
    it: 'Soluzioni specializzate aggiuntive per completare la tua infrastruttura cloud e migliorare la tua presenza digitale.',
  },
  'erpnext.title': {
    en: 'ERPNext Solutions',
    it: 'Soluzioni ERPNext',
  },
  'erpnext.description': {
    en: 'Professional support, configuration and custom modules development for ERPNext open source software to streamline your business operations.',
    it: 'Supporto professionale, configurazione e sviluppo di moduli personalizzati per il software open source ERPNext per ottimizzare le operazioni aziendali.',
  },
  'hosting.title': {
    en: 'Domain & Email Hosting',
    it: 'Hosting Domini & Email',
  },
  'hosting.description': {
    en: 'Reliable domain registration, hosting, and professional email solutions with advanced security features and spam protection.',
    it: 'Registrazione domini affidabile, hosting e soluzioni email professionali con funzionalità di sicurezza avanzate e protezione anti-spam.',
  },
  
  // Services items
  'services.google.workspace': {
    en: 'Google Workspace',
    it: 'Google Workspace',
  },
  'services.google.workspace.description': {
    en: 'Complete setup, migration, and ongoing maintenance of Google Workspace. Expert consulting for optimizing your business collaboration tools.',
    it: 'Configurazione completa, migrazione e manutenzione continua di Google Workspace. Consulenza esperta per ottimizzare gli strumenti di collaborazione aziendale.',
  },
  'services.erpnext': {
    en: 'ERPNext Solutions',
    it: 'Soluzioni ERPNext',
  },
  'services.erpnext.description': {
    en: 'Professional support, setup, configuration and custom modules development for ERPNext open source software to streamline your business operations.',
    it: 'Supporto professionale, configurazione e sviluppo di moduli personalizzati per il software open source ERPNext per ottimizzare le operazioni aziendali.',
  },
  'services.nextdns': {
    en: 'Internet Protection',
    it: 'Protezione Internet',
  },
  'services.nextdns.description': {
    en: 'NextDNS-based protection against malware, phishing, and unwanted content for your entire network, providing a safer browsing experience.',
    it: 'Protezione basata su NextDNS contro malware, phishing e contenuti indesiderati per l\'intera rete, offrendo un\'esperienza di navigazione più sicura.',
  },
  'services.hosting': {
    en: 'Domain & Email Hosting',
    it: 'Hosting Domini & Email',
  },
  'services.hosting.description': {
    en: 'Reliable domain registration, hosting, and professional email solutions with advanced security features and spam protection.',
    it: 'Registrazione domini affidabile, hosting e soluzioni email professionali con funzionalità di sicurezza avanzate e protezione anti-spam.',
  },
  'services.gcp': {
    en: 'Google Cloud Platform',
    it: 'Google Cloud Platform',
  },
  'services.gcp.description': {
    en: 'Expert deployment, migration, and management of GCP resources with best practices for security and cost optimization.',
    it: 'Implementazione, migrazione e gestione esperta delle risorse GCP con best practice per la sicurezza e l\'ottimizzazione dei costi.',
  },
  'services.cloud': {
    en: 'Cloud Infrastructure',
    it: 'Infrastruttura Cloud',
  },
  'services.cloud.description': {
    en: 'Design and implementation of scalable, reliable, and secure infrastructure solutions on Google Cloud.',
    it: 'Progettazione e implementazione di soluzioni infrastrutturali scalabili, affidabili e sicure su Google Cloud.',
  },
  'services.data': {
    en: 'Data Management',
    it: 'Gestione Dati',
  },
  'services.data.description': {
    en: 'Comprehensive database solutions including Cloud SQL, Bigtable, Firestore, and Spanner with robust backup strategies.',
    it: 'Soluzioni database complete che includono Cloud SQL, Bigtable, Firestore e Spanner con robuste strategie di backup.',
  },
  'services.security': {
    en: 'Security & Compliance',
    it: 'Sicurezza & Conformità',
  },
  'services.security.description': {
    en: 'Advanced security configurations, IAM policies, network security, and compliance with regulatory requirements.',
    it: 'Configurazioni di sicurezza avanzate, policy IAM, sicurezza di rete e conformità con requisiti normativi.',
  },
  'services.devsecops': {
    en: 'DevSecOps',
    it: 'DevSecOps',
  },
  'services.devsecops.description': {
    en: 'Integration of security into your CI/CD pipeline, automating security testing and compliance verification.',
    it: 'Integrazione della sicurezza nella pipeline CI/CD, automazione dei test di sicurezza e verifica della conformità.',
  },
  'services.global': {
    en: 'Global Infrastructure',
    it: 'Infrastruttura Globale',
  },
  'services.global.description': {
    en: 'Leverage Google\'s global network for high-performance applications with multi-region deployments.',
    it: 'Sfrutta la rete globale di Google per applicazioni ad alte prestazioni con implementazioni multi-regione.',
  },
  'services.affiliate.button': {
    en: 'Visit Service',
    it: 'Visita Servizio',
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
    en: 'IT Specialists',
    it: 'Specialisti IT',
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
    en: 'As certified Google Cloud specialists, we provide tailored cloud solutions that balance security, performance, and cost-efficiency. With deep technical expertise in Google\'s ecosystem, we help businesses leverage the full potential of cloud technology.',
    it: 'Come specialisti certificati Google Cloud, forniamo soluzioni cloud su misura che bilanciano sicurezza, prestazioni ed efficienza dei costi. Con una profonda competenza tecnica nell\'ecosistema Google, aiutiamo le aziende a sfruttare appieno il potenziale della tecnologia cloud.',
  },
  'about.paragraph2': {
    en: 'Our approach focuses on understanding your unique business requirements and designing cloud architectures that align with your goals, whether you\'re migrating existing workloads, building new applications, or optimizing current deployments.',
    it: 'Il nostro approccio si concentra sulla comprensione delle tue esigenze aziendali uniche e sulla progettazione di architetture cloud allineate ai tuoi obiettivi, che tu stia migrando carichi di lavoro esistenti, creando nuove applicazioni o ottimizzando implementazioni attuali.',
  },
  'about.cta': {
    en: 'Work With Us',
    it: 'Lavora Con Noi',
  },
  
  // Contact section
  'contact.title': {
    en: 'Get in Touch',
    it: 'Contattaci',
  },
  'contact.description': {
    en: 'Have a project in mind or questions about Google Cloud services? We\'re here to help you navigate the cloud landscape and find the perfect solution for your needs.',
    it: 'Hai un progetto in mente o domande sui servizi Google Cloud? Siamo qui per aiutarti a navigare nel panorama cloud e trovare la soluzione perfetta per le tue esigenze.',
  },
  'contact.options.email': {
    en: 'Reach out to us via email for detailed inquiries or to discuss your specific requirements.',
    it: 'Contattaci via email per richieste dettagliate o per discutere le tue esigenze specifiche.',
  },
  'contact.options.telegram': {
    en: 'Get quick responses and chat with our team through Telegram.',
    it: 'Ottieni risposte rapide e chatta con il nostro team tramite Telegram.',
  },
  'contact.options.whatsapp': {
    en: 'Connect with us on WhatsApp for convenient and immediate communication.',
    it: 'Connettiti con noi su WhatsApp per una comunicazione comoda e immediata.',
  },
  'contact.form.email': {
    en: 'Send Email',
    it: 'Invia Email',
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
  'footer.quicklinks': {
    en: 'Quick Links',
    it: 'Link Rapidi',
  },
  'footer.contact': {
    en: 'Contact',
    it: 'Contatti',
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
  const [language, setLanguage] = useState<Language>('it');

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
