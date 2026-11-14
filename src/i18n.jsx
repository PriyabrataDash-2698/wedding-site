import { createContext, useContext, useEffect, useState } from "react";

const UI = {
  en: {
    tagline: "We are getting married. Join us in celebrating.",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    whereTitle: "Where to find us", whereLead: "Scan the code at each event to open directions on your phone.",
    scanHint: "Scan with your phone camera for directions.", openMaps: "Open in Maps",
    scheduleTitle: "The day", scheduleLead: "What happens, and when.",
    addCal: "Add to calendar", google: "Google Calendar", ics: "Apple / Outlook (.ics)",
    momentsTitle: "Our moments", momentsLead: "Swipe through a few favourite memories. Tap a photo to see it larger.",
    openPhoto: "Open photo", closePhoto: "Close photo",
    musicOn: "Play music", musicOff: "Pause music", withLove: "With love", and: "and families",
    locale: "en-IN",
  },
  hi: {
    tagline: "हम विवाह कर रहे हैं। हमारी खुशियों में शामिल हों।",
    days: "दिन", hours: "घंटे", minutes: "मिनट", seconds: "सेकंड",
    whereTitle: "हमें कहाँ ढूँढें", whereLead: "अपने फ़ोन पर रास्ता खोलने के लिए हर कार्यक्रम का कोड स्कैन करें।",
    scanHint: "रास्ते के लिए फ़ोन कैमरे से स्कैन करें।", openMaps: "मैप्स में खोलें",
    scheduleTitle: "दिन का कार्यक्रम", scheduleLead: "क्या, कब होगा।",
    addCal: "कैलेंडर में जोड़ें", google: "गूगल कैलेंडर", ics: "Apple / Outlook (.ics)",
    momentsTitle: "हमारे पल", momentsLead: "कुछ पसंदीदा यादें देखें। बड़ा देखने के लिए फ़ोटो पर टैप करें।",
    openPhoto: "फ़ोटो खोलें", closePhoto: "फ़ोटो बंद करें",
    musicOn: "संगीत चलाएँ", musicOff: "संगीत रोकें", withLove: "स्नेह सहित", and: "एवं परिवारजन",
    locale: "hi-IN",
  },
  kn: {
    tagline: "ଆମେ ବିବାହ କରୁଛୁ। ଆମ ସହ ମିଶି ଏହି ଉତ୍ସବ ପାଳନ କରନ୍ତୁ।",
    days: "ଦିନ", hours: "ଘଣ୍ଟା", minutes: "ମିନିଟ୍", seconds: "ସେକେଣ୍ଡ",
    whereTitle: "ସ୍ଥାନ", whereLead: "ଆପଣଙ୍କ ଫୋନରେ ଦିଗ ନିର୍ଦ୍ଦେଶନା ଖୋଲିବା ପାଇଁ ପ୍ରତ୍ୟେକ ଇଭେଣ୍ଟରେ ଥିବା କୋଡ୍‌କୁ ସ୍କାନ୍ କରନ୍ତୁ।",
    scanHint: "ଦିଗ ଜାଣିବା ପାଇଁ ଆପଣଙ୍କ ଫୋନ୍ କ୍ୟାମେରା ସାହାଯ୍ୟରେ ସ୍କାନ୍ କରନ୍ତୁ।", openMaps: "ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    scheduleTitle: "ದಿನದ ಕಾರ್ಯಕ್ರಮ", scheduleLead: "ಏನು, ಯಾವಾಗ.",
    addCal: "ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ", google: "ಗೂಗಲ್ ಕ್ಯಾಲೆಂಡರ್", ics: "Apple / Outlook (.ics)",
    momentsTitle: "ನಮ್ಮ ಕ್ಷಣಗಳು", momentsLead: "ಕೆಲವು ನೆನಪುಗಳನ್ನು ನೋಡಿ. ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಫೋಟೋ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ.",
    openPhoto: "ಫೋಟೋ ತೆರೆಯಿರಿ", closePhoto: "ಫೋಟೋ ಮುಚ್ಚಿ",
    musicOn: "ಸಂಗೀತ ಪ್ರಾರಂಭಿಸಿ", musicOff: "ಸಂಗೀತ ನಿಲ್ಲಿಸಿ", withLove: "ಪ್ರೀತಿಯಿಂದ", and: "ಮತ್ತು ಕುಟುಂಬದವರು",
    locale: "kn-IN",
  },
};

export const LANGS = [["en", "EN"], ["hi", "हिं"], ["kn", "ಕನ್"]];
const Ctx = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);
  const t = (k) => UI[lang][k];
  const tr = (obj) => obj[lang] ?? obj.en; // pick a translated field from config
  return <Ctx.Provider value={{ lang, setLang, t, tr }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
