
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import FadeIn from "./FadeIn";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind or questions about Google Cloud services? 
              I'm here to help you navigate the cloud landscape and find the perfect solution for your needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-white rounded-xl shadow-card p-8 border border-border/50">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Get in Touch</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Let's discuss your cloud strategy</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking to migrate to Google Cloud, optimize your current setup, 
                  or enhance security, I'm ready to help you achieve your goals.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">contact@protezione.cloud</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 shadow-card border border-border/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 rounded-md bg-accent text-white font-medium flex items-center justify-center shadow-button hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
