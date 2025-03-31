
import { Cloud, Shield, Server } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn direction="up" duration={600} delay={100} initiallyVisible={false}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{t('hero.badge')}</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={300} duration={700} initiallyVisible={false}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                {t('hero.title1')} <br />
                <span className="text-accent">{t('hero.title2')}</span> {t('hero.title3')}
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={500} duration={700} initiallyVisible={false}>
              <p className="text-lg text-muted-foreground max-w-xl">
                {t('hero.description')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={700} duration={700} initiallyVisible={false}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-md bg-accent text-white font-medium shadow-button hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('hero.cta.start')}
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-3 rounded-md bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all duration-300"
                >
                  {t('hero.cta.learn')}
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="hidden lg:block">
            <FadeIn direction="right" delay={900} duration={800} initiallyVisible={false}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" aria-hidden="true" />
                <div className="glass rounded-2xl p-8 shadow-card relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <FadeIn direction="up" delay={1100} duration={700} initiallyVisible={false}>
                        <div className="bg-white rounded-xl p-5 shadow-soft">
                          <Cloud className="w-8 h-8 text-accent mb-3" />
                          <h3 className="font-semibold text-lg">Cloud Infrastructure</h3>
                          <p className="text-sm text-muted-foreground mt-1">Scalable & secure GCP solutions</p>
                        </div>
                      </FadeIn>
                      <FadeIn direction="up" delay={1300} duration={700} initiallyVisible={false}>
                        <div className="bg-accent text-white rounded-xl p-5 shadow-soft">
                          <Shield className="w-8 h-8 mb-3" />
                          <h3 className="font-semibold text-lg">Security First</h3>
                          <p className="text-sm text-white/80 mt-1">Enterprise-grade protection</p>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="space-y-6 mt-8">
                      <FadeIn direction="up" delay={1500} duration={700} initiallyVisible={false}>
                        <div className="bg-white rounded-xl p-5 shadow-soft">
                          <Server className="w-8 h-8 text-accent mb-3" />
                          <h3 className="font-semibold text-lg">Managed Services</h3>
                          <p className="text-sm text-muted-foreground mt-1">24/7 expert support & monitoring</p>
                        </div>
                      </FadeIn>
                      <FadeIn direction="up" delay={1700} duration={700} initiallyVisible={false}>
                        <div className="bg-secondary rounded-xl p-5 shadow-soft">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xs text-muted-foreground">Uptime</span>
                            <span className="text-xs font-medium">99.99%</span>
                          </div>
                          <div className="w-full bg-secondary-foreground/10 rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: '99.99%' }}></div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
