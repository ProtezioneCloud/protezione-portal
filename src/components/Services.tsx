
import { CloudCog, Server, Database, Shield, Lock, Globe, Mail, Code, Settings } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: <Settings className="w-10 h-10 text-accent" />,
    title: "Google Workspace",
    description: "Complete setup, migration, and ongoing maintenance of Google Workspace. Expert consulting for optimizing your business collaboration tools."
  },
  {
    icon: <Code className="w-10 h-10 text-accent" />,
    title: "ERPNext Solutions",
    description: "Professional support, setup, configuration and custom modules development for ERPNext open source software to streamline your business operations."
  },
  {
    icon: <Mail className="w-10 h-10 text-accent" />,
    title: "Domain & Email Hosting",
    description: "Reliable domain registration, hosting, and professional email solutions with advanced security features and spam protection."
  },
  {
    icon: <CloudCog className="w-10 h-10 text-accent" />,
    title: "Google Cloud Platform",
    description: "Expert deployment, migration, and management of GCP resources with best practices for security and cost optimization."
  },
  {
    icon: <Server className="w-10 h-10 text-accent" />,
    title: "Cloud Infrastructure",
    description: "Design and implementation of scalable, reliable, and secure infrastructure solutions on Google Cloud."
  },
  {
    icon: <Database className="w-10 h-10 text-accent" />,
    title: "Data Management",
    description: "Comprehensive database solutions including Cloud SQL, Bigtable, Firestore, and Spanner with robust backup strategies."
  },
  {
    icon: <Shield className="w-10 h-10 text-accent" />,
    title: "Security & Compliance",
    description: "Advanced security configurations, IAM policies, network security, and compliance with regulatory requirements."
  },
  {
    icon: <Lock className="w-10 h-10 text-accent" />,
    title: "DevSecOps",
    description: "Integration of security into your CI/CD pipeline, automating security testing and compliance verification."
  },
  {
    icon: <Globe className="w-10 h-10 text-accent" />,
    title: "Global Infrastructure",
    description: "Leverage Google's global network for high-performance applications with multi-region deployments."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Google Cloud Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive Google Cloud Platform solutions tailored to your business needs,
              from infrastructure setup to ongoing management and optimization.
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
