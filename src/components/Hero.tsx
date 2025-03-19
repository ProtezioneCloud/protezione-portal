
import { Cloud, Shield, Server } from "lucide-react";
import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-hero-pattern"
    >
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeIn>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Professional IT Security</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Secure Cloud <br />
                <span className="text-accent">Solutions</span> for Your Business
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground max-w-xl">
                Specialized in Google Cloud Platform services, delivering enterprise-grade security, scalability, and performance for your mission-critical applications.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-md bg-accent text-white font-medium shadow-button hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-3 rounded-md bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="hidden lg:block">
            <FadeIn direction="right" delay={400}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" aria-hidden="true" />
                <div className="glass rounded-2xl p-8 shadow-card relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-5 shadow-soft">
                        <Cloud className="w-8 h-8 text-accent mb-3" />
                        <h3 className="font-semibold text-lg">Cloud Infrastructure</h3>
                        <p className="text-sm text-muted-foreground mt-1">Scalable & secure GCP solutions</p>
                      </div>
                      <div className="bg-accent text-white rounded-xl p-5 shadow-soft">
                        <Shield className="w-8 h-8 mb-3" />
                        <h3 className="font-semibold text-lg">Security First</h3>
                        <p className="text-sm text-white/80 mt-1">Enterprise-grade protection</p>
                      </div>
                    </div>
                    <div className="space-y-6 mt-8">
                      <div className="bg-white rounded-xl p-5 shadow-soft">
                        <Server className="w-8 h-8 text-accent mb-3" />
                        <h3 className="font-semibold text-lg">Managed Services</h3>
                        <p className="text-sm text-muted-foreground mt-1">24/7 expert support & monitoring</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-5 shadow-soft">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs text-muted-foreground">Uptime</span>
                          <span className="text-xs font-medium">99.99%</span>
                        </div>
                        <div className="w-full bg-secondary-foreground/10 rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: '99.99%' }}></div>
                        </div>
                      </div>
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
