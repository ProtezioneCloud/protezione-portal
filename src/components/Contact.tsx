
import { Mail, MessageCircle, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactOptions = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      description: t('contact.options.email'),
      link: "mailto:enzo@protezione.cloud",
      linkText: "enzo@protezione.cloud"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Telegram",
      description: t('contact.options.telegram'),
      link: "https://t.me/sharpec",
      linkText: "@sharpec"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      description: t('contact.options.whatsapp'),
      link: "https://wa.me/393272408379",
      linkText: "+39 327 240 8379"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-muted-foreground">
              {t('contact.description')}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-card p-8 border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    {option.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {option.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    onClick={() => window.open(option.link, '_blank')}
                  >
                    {option.linkText} <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
