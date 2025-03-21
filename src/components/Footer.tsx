
import { Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.learning'), href: '#learning' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];
  
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-display font-semibold text-lg">protezione.cloud</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Expert Google Cloud solutions for businesses seeking secure, 
              scalable, and efficient cloud infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <p className="text-muted-foreground mb-1">contact@protezione.cloud</p>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} protezione.cloud. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 items-center">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              {t('footer.privacy') || 'Privacy Policy'}
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.design')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
