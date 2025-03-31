import { CloudCog, Server, Database, Shield, Lock, Globe, Mail, Code, Settings, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

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
      description: t('services.erpnext.description'),
      link: "https://frappecloud.com/dashboard/signup?referrer=ac42104d"
    },
    {
      icon: <Mail className="w-10 h-10 text-accent" />,
      title: t('services.hosting'),
      description: t('services.hosting.description'),
      link: "https://www.netsons.com/manage/aff.php?aff=1751"
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: t('services.nextdns'),
      description: t('services.nextdns.description'),
      link: "https://nextdns.io/?from=8f47b5b2"
    }
  ];

  const renderServiceCards = (services, showAffiliateLink = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="h-full">
          <div 
            className="bg-white rounded-xl shadow-card p-8 border border-border/50 h-full relative group hover:shadow-hover transition-all duration-500"
            style={{ transform: "translateZ(0)", willChange: "transform, opacity" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-700"></div>
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
            {showAffiliateLink && service.link && (
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  {t('services.affiliate.button')} <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section id="google-services" className="section-padding bg-secondary/50 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('googleservices.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('googleservices.description')}
            </p>
          </div>

          {renderServiceCards(googleServices)}
        </div>
      </section>
      
      <section id="other-services" className="section-padding bg-white relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('otherservices.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('otherservices.description')}
            </p>
          </div>
          
          {renderServiceCards(otherServices, true)}
        </div>
      </section>
    </>
  );
};

export default Services;
