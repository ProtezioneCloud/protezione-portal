
import { CloudCog, Server, Database, Shield, Lock, Globe, Mail, Code, Settings } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      icon: <Settings className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Google Workspace" : "Google Workspace",
      description: language === 'en' 
        ? "Complete setup, migration, and ongoing maintenance of Google Workspace. Expert consulting for optimizing your business collaboration tools."
        : "Configurazione completa, migrazione e manutenzione continua di Google Workspace. Consulenza esperta per ottimizzare gli strumenti di collaborazione aziendale."
    },
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "ERPNext Solutions" : "Soluzioni ERPNext",
      description: language === 'en'
        ? "Professional support, setup, configuration and custom modules development for ERPNext open source software to streamline your business operations."
        : "Supporto professionale, configurazione e sviluppo di moduli personalizzati per il software open source ERPNext per ottimizzare le operazioni aziendali."
    },
    {
      icon: <Mail className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Domain & Email Hosting" : "Hosting Domini & Email",
      description: language === 'en'
        ? "Reliable domain registration, hosting, and professional email solutions with advanced security features and spam protection."
        : "Registrazione domini affidabile, hosting e soluzioni email professionali con funzionalità di sicurezza avanzate e protezione anti-spam."
    },
    {
      icon: <CloudCog className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Google Cloud Platform" : "Google Cloud Platform",
      description: language === 'en'
        ? "Expert deployment, migration, and management of GCP resources with best practices for security and cost optimization."
        : "Implementazione, migrazione e gestione esperta delle risorse GCP con best practice per la sicurezza e l'ottimizzazione dei costi."
    },
    {
      icon: <Server className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Cloud Infrastructure" : "Infrastruttura Cloud",
      description: language === 'en'
        ? "Design and implementation of scalable, reliable, and secure infrastructure solutions on Google Cloud."
        : "Progettazione e implementazione di soluzioni infrastrutturali scalabili, affidabili e sicure su Google Cloud."
    },
    {
      icon: <Database className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Data Management" : "Gestione Dati",
      description: language === 'en'
        ? "Comprehensive database solutions including Cloud SQL, Bigtable, Firestore, and Spanner with robust backup strategies."
        : "Soluzioni database complete che includono Cloud SQL, Bigtable, Firestore e Spanner con robuste strategie di backup."
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Security & Compliance" : "Sicurezza & Conformità",
      description: language === 'en'
        ? "Advanced security configurations, IAM policies, network security, and compliance with regulatory requirements."
        : "Configurazioni di sicurezza avanzate, policy IAM, sicurezza di rete e conformità con requisiti normativi."
    },
    {
      icon: <Lock className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "DevSecOps" : "DevSecOps",
      description: language === 'en'
        ? "Integration of security into your CI/CD pipeline, automating security testing and compliance verification."
        : "Integrazione della sicurezza nella pipeline CI/CD, automazione dei test di sicurezza e verifica della conformità."
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: language === 'en' ? "Global Infrastructure" : "Infrastruttura Globale",
      description: language === 'en'
        ? "Leverage Google's global network for high-performance applications with multi-region deployments."
        : "Sfrutta la rete globale di Google per applicazioni ad alte prestazioni con implementazioni multi-regione."
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('services.description')}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={100 * index} className="h-full">
              <div className="bg-white rounded-xl shadow-card p-8 border border-border/50 h-full relative group hover:shadow-hover transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-500"></div>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
