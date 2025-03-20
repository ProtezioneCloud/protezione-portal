
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const About = () => {
  const { t } = useLanguage();
  
  const skills = [
    "Google Cloud Architecture",
    "Cloud Security & IAM",
    "Kubernetes & GKE",
    "CI/CD Pipeline Design",
    "Disaster Recovery Planning",
    "Performance Optimization",
    "Cost Management",
    "Compliance & Governance"
  ];

  const certifications = [
    "Google Cloud Professional Cloud Architect",
    "Google Cloud Professional Security Engineer",
    "Google Cloud Professional DevOps Engineer",
    "Google Cloud Professional Network Engineer",
    "Certified Information Systems Security Professional (CISSP)"
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-card relative bg-gradient-to-br from-accent/5 to-primary/5 p-1">
                <div className="bg-white rounded-xl p-8 h-full">
                  <div className="border-l-4 border-accent pl-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-2">{t('about.specialist')}</h3>
                    <p className="text-muted-foreground">{t('about.experience')}</p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{t('about.certifications')}</h3>
                  <ul className="space-y-3 mb-8">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 p-1 rounded-full bg-accent/10 mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </span>
                        <span className="text-sm">{cert}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="text-sm px-3 py-2 rounded-md bg-secondary border border-border/50"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="space-y-8">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.title')}
              </h2>
            </FadeIn>
            
            <FadeIn direction="right" delay={100}>
              <p className="text-muted-foreground mb-6">
                {t('about.paragraph1')}
              </p>
            </FadeIn>
            
            <FadeIn direction="right" delay={200}>
              <p className="text-muted-foreground mb-8">
                {t('about.paragraph2')}
              </p>
            </FadeIn>
            
            <FadeIn direction="right" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-md bg-accent text-white font-medium shadow-button hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('about.cta')}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
