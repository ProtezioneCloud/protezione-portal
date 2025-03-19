
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
              <li><a href="#home" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <p className="text-muted-foreground mb-1">contact@protezione.cloud</p>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} protezione.cloud. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-muted-foreground text-sm">
              Designed with precision and simplicity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
