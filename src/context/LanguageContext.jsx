import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { metaDescs, titles, translations } from "../i18n/translations";

const LanguageContext = createContext(null);

function detectInitialLang() {
  try {
    const saved = localStorage.getItem("tz-portfolio-lang");
    if (saved && translations[saved]) return saved;
    if ((navigator.language || "").toLowerCase().startsWith("en")) return "en";
  } catch {
    /* storage unavailable */
  }
  return "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  const setLang = useCallback((next) => {
    const resolved = translations[next] ? next : "fr";
    setLangState(resolved);
    try {
      localStorage.setItem("tz-portfolio-lang", resolved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.title = titles[lang];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescs[lang]);
  }, [lang]);

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations.fr[key] ?? key,
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
