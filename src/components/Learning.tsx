
import { Book, Users, GraduationCap, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Learning = () => {
  const { t } = useLanguage();
  
  return (
    <section id="learning" className="section-padding relative">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('learning.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('learning.description')}
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={100}>
            <div className="bg-white rounded-xl shadow-card p-8 border border-border/50 h-full relative group hover:shadow-hover transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-500"></div>
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Book className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('learning.individual.title')}</h3>
              <p className="text-muted-foreground mb-8">{t('learning.individual.description')}</p>
              <a href="#contact" className="inline-flex items-center text-accent font-medium group/link">
                <span>{t('learning.cta')}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="bg-white rounded-xl shadow-card p-8 border border-border/50 h-full relative group hover:shadow-hover transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-500"></div>
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('learning.team.title')}</h3>
              <p className="text-muted-foreground mb-8">{t('learning.team.description')}</p>
              <a href="#contact" className="inline-flex items-center text-accent font-medium group/link">
                <span>{t('learning.cta')}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Learning;
