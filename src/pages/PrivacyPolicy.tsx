
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            {language === 'it' ? 'Informativa sulla Privacy' : 'Privacy Policy'}
          </h1>
          
          <div className="prose prose-blue max-w-none">
            {language === 'it' ? (
              <>
                <p className="text-lg mb-4">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduzione</h2>
                <p>La presente Informativa sulla Privacy descrive come protezione.cloud ("noi", "nostro" o "ci") raccoglie, utilizza e condivide le tue informazioni personali quando visiti o interagisci con il nostro sito web protezione.cloud ("Sito").</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informazioni che raccogliamo</h2>
                <p>Raccogliamo i seguenti tipi di informazioni:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Informazioni personali:</strong> nome, indirizzo email, numero di telefono e altre informazioni che fornisci tramite il modulo di contatto.</li>
                  <li><strong>Dati di utilizzo:</strong> informazioni su come interagisci con il nostro Sito, come le pagine visitate, il tempo trascorso sul Sito e altre statistiche.</li>
                  <li><strong>Informazioni del dispositivo:</strong> indirizzo IP, tipo di browser, provider di servizi Internet, identificatori del dispositivo e dati sulla posizione.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Come utilizziamo le tue informazioni</h2>
                <p>Utilizziamo le informazioni raccolte per:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Fornirti i servizi richiesti</li>
                  <li>Rispondere alle tue domande e richieste</li>
                  <li>Migliorare e ottimizzare il nostro Sito</li>
                  <li>Analizzare le tendenze di utilizzo e monitorare l'efficacia delle nostre campagne di marketing</li>
                  <li>Prevenire attività fraudolente e migliorare la sicurezza</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookie e tecnologie simili</h2>
                <p>Utilizziamo cookie e tecnologie di tracciamento simili per raccogliere informazioni sul tuo utilizzo del nostro Sito. I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Utilizziamo sia cookie di prima parte che di terze parti.</p>
                <p>Utilizziamo Google Analytics per analizzare l'utilizzo del nostro Sito. Google Analytics utilizza cookie per raccogliere informazioni standard sul registro di Internet e sul comportamento dei visitatori. Per ulteriori informazioni su come Google Analytics elabora i tuoi dati, visita: <a href="https://policies.google.com/privacy" className="text-accent">https://policies.google.com/privacy</a>.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Condivisione delle informazioni</h2>
                <p>Possiamo condividere le tue informazioni personali con:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Fornitori di servizi:</strong> terze parti che ci aiutano a gestire il nostro Sito e a fornirti servizi.</li>
                  <li><strong>Partner commerciali:</strong> con il tuo consenso, possiamo condividere i tuoi dati con i nostri partner commerciali per offrirti determinati prodotti, servizi o promozioni.</li>
                  <li><strong>Obblighi legali:</strong> quando richiesto dalla legge o se riteniamo che tale azione sia necessaria per rispettare un procedimento legale, proteggere i nostri diritti o la sicurezza di altri.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. I tuoi diritti sulla privacy</h2>
                <p>Se sei residente nell'Unione Europea, hai determinati diritti sulla protezione dei dati, tra cui:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Il diritto di accedere, aggiornare o eliminare le informazioni che abbiamo su di te</li>
                  <li>Il diritto di rettifica (per correggere informazioni imprecise)</li>
                  <li>Il diritto alla portabilità dei dati (per ricevere una copia dei tuoi dati personali)</li>
                  <li>Il diritto di limitare o opporsi al nostro trattamento dei tuoi dati personali</li>
                  <li>Il diritto di revocare il consenso</li>
                </ul>
                <p>Per esercitare questi diritti, contattaci all'indirizzo email indicato alla fine di questa Informativa.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Conservazione dei dati</h2>
                <p>Conserviamo le tue informazioni personali solo per il tempo necessario agli scopi indicati in questa Informativa sulla Privacy, a meno che non sia richiesto o consentito dalla legge un periodo di conservazione più lungo.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Sicurezza dei dati</h2>
                <p>Abbiamo implementato misure di sicurezza tecniche e organizzative appropriate per proteggere le tue informazioni personali da perdita accidentale, accesso o divulgazione non autorizzati, alterazione e distruzione.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifiche a questa Informativa</h2>
                <p>Possiamo aggiornare questa Informativa sulla Privacy di tanto in tanto per riflettere, ad esempio, cambiamenti nelle nostre pratiche o per altri motivi operativi, legali o normativi. La versione più recente sarà sempre disponibile sul nostro Sito.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contattaci</h2>
                <p>Se hai domande o commenti su questa Informativa sulla Privacy o sulle nostre pratiche in materia di dati, contattaci a:</p>
                <p>Email: contact@protezione.cloud</p>
              </>
            ) : (
              <>
                <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString('en-US')}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>This Privacy Policy describes how protezione.cloud ("we", "our", or "us") collects, uses, and shares your personal information when you visit or interact with our website protezione.cloud ("Site").</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Personal Information:</strong> name, email address, phone number, and other information you provide through our contact form.</li>
                  <li><strong>Usage Data:</strong> information about how you interact with our Site, such as pages visited, time spent on the Site, and other statistics.</li>
                  <li><strong>Device Information:</strong> IP address, browser type, internet service provider, device identifiers, and location data.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide you with the services you request</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve and optimize our Site</li>
                  <li>Analyze usage trends and monitor the effectiveness of our marketing campaigns</li>
                  <li>Prevent fraudulent activities and enhance security</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Similar Technologies</h2>
                <p>We use cookies and similar tracking technologies to collect information about your use of our Site. Cookies are small text files that are stored on your device when you visit a website. We use both first-party and third-party cookies.</p>
                <p>We use Google Analytics to analyze the use of our Site. Google Analytics uses cookies to collect standard internet log information and visitor behavior information. For more information about how Google Analytics processes your data, please visit: <a href="https://policies.google.com/privacy" className="text-accent">https://policies.google.com/privacy</a>.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Information Sharing</h2>
                <p>We may share your personal information with:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Service Providers:</strong> third parties that help us operate our Site and provide you with services.</li>
                  <li><strong>Business Partners:</strong> with your consent, we may share your data with our business partners to offer you certain products, services, or promotions.</li>
                  <li><strong>Legal Obligations:</strong> when required by law or if we believe that such action is necessary to comply with a legal proceeding, protect our rights, or safety of others.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Privacy Rights</h2>
                <p>If you are a resident of the European Union, you have certain data protection rights, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The right to access, update, or delete the information we have on you</li>
                  <li>The right of rectification (to correct inaccurate information)</li>
                  <li>The right to data portability (to receive a copy of your personal data)</li>
                  <li>The right to restrict or object to our processing of your personal data</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p>To exercise these rights, please contact us using the email address provided at the end of this Privacy Policy.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Retention</h2>
                <p>We will retain your personal information only for as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Security</h2>
                <p>We have implemented appropriate technical and organizational security measures to protect your personal information from accidental loss, unauthorized access or disclosure, alteration, and destruction.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. The most current version will always be available on our Site.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                <p>If you have any questions or comments about this Privacy Policy or our data practices, please contact us at:</p>
                <p>Email: contact@protezione.cloud</p>
              </>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
