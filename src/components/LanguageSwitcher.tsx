
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex items-center text-sm">
        <button
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 rounded-l-md transition-colors ${
            language === "en"
              ? "bg-accent text-white"
              : "hover:bg-secondary"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("it")}
          className={`px-2 py-1 rounded-r-md transition-colors ${
            language === "it"
              ? "bg-accent text-white"
              : "hover:bg-secondary"
          }`}
        >
          IT
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
