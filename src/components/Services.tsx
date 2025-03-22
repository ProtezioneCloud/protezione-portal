
import { CloudCog, Server, Database, Shield, Lock, Globe, Mail, Code, Settings } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const googleServices = [
    {
      icon: <Settings className="w-10 h-10 text-accent" />,
      title: t('services.google.workspace'),
      description: t('services.google.workspace.description')
    },
    {
      icon: <CloudCog className="w-10 h-10 text-accent" />,
      title: t('services.gcp'),
      description: t('services.gcp.description')
    },
    {
      icon: <Server className="w-10 h-10 text-accent" />,
      title: t('services.cloud'),
      description: t('services.cloud.description')
    },
    {
      icon: <Database className="w-10 h-10 text-accent" />,
      title: t('services.data'),
      description: t('services.data.description')
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: t('services.security'),
      description: t('services.security.description')
    },
    {
      icon: <Lock className="w-10 h-10 text-accent" />,
      title: t('services.devsecops'),
      description: t('services.devsecops.description')
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: t('services.global'),
      description: t('services.global.description')
    }
  ];

  const otherServices = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: t('services.erpnext'),
      description: t('services.erpnext.description')
    },
    {
      icon: <Mail className="w-10 h-10 text-accent" />,
      title: t('services.hosting'),
      description: t('services.hosting.description')
    }
  ];

  const renderServiceCards = (services) => (
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
  );

  return (
    <>
      <section id="google-services" className="section-padding bg-secondary/50 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('googleservices.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('googleservices.description')}
              </p>
            </div>
          </FadeIn>

          {renderServiceCards(googleServices)}
        </div>
      </section>
      
      <section id="other-services" className="section-padding bg-white relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div id="erpnext">
              <FadeIn>
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t('erpnext.title')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('erpnext.description')}
                  </p>
                </div>
              </FadeIn>
              
              {renderServiceCards([otherServices[0]])}
            </div>
            
            <div id="hosting">
              <FadeIn>
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t('hosting.title')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('hosting.description')}
                  </p>
                </div>
              </FadeIn>
              
              {renderServiceCards([otherServices[1]])}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
