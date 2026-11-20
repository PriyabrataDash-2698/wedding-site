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
    scrollTop: "Back to top",
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
    scrollTop: "ऊपर जाएँ" ,
    locale: "hi-IN",
  },
  kn: {
    tagline: "ನಾವು ಮದುವೆಯಾಗುತ್ತಿದ್ದೇವೆ. ನಮ್ಮ ಸಂತೋಷದಲ್ಲಿ ಭಾಗವಹಿಸಿ.",
    days: "ದಿನ", hours: "ಗಂಟೆ", minutes: "ನಿಮಿಷ", seconds: "ಸೆಕೆಂಡ್",
    whereTitle: "ನಮ್ಮನ್ನು ಎಲ್ಲಿ ಭೇಟಿಯಾಗಬೇಕು", whereLead: "ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲಿ ಮಾರ್ಗ ತೆರೆಯಲು ಪ್ರತಿ ಕಾರ್ಯಕ್ರಮದ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    scanHint: "ಮಾರ್ಗಕ್ಕಾಗಿ ಫೋನ್ ಕ್ಯಾಮೆರಾದಿಂದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.", openMaps: "ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    scheduleTitle: "ದಿನದ ಕಾರ್ಯಕ್ರಮ", scheduleLead: "ಏನು, ಯಾವಾಗ.",
    addCal: "ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ", google: "ಗೂಗಲ್ ಕ್ಯಾಲೆಂಡರ್", ics: "Apple / Outlook (.ics)",
    momentsTitle: "ನಮ್ಮ ಕ್ಷಣಗಳು", momentsLead: "ಕೆಲವು ನೆನಪುಗಳನ್ನು ನೋಡಿ. ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಫೋಟೋ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ.",
    openPhoto: "ಫೋಟೋ ತೆರೆಯಿರಿ", closePhoto: "ಫೋಟೋ ಮುಚ್ಚಿ",
    musicOn: "ಸಂಗೀತ ಪ್ರಾರಂಭಿಸಿ", musicOff: "ಸಂಗೀತ ನಿಲ್ಲಿಸಿ", withLove: "ಪ್ರೀತಿಯಿಂದ", and: "ಮತ್ತು ಕುಟುಂಬದವರು",
    scrollTop: "ಮೇಲೆ ಹೋಗಿ" ,
    locale: "kn-IN",
  },
  or: {
    tagline: "ଆମେ ବିବାହ କରିବାକୁ ଯାଉଛୁ। ଏହି ଖୁସିର ମୁହୂର୍ତ୍ତରେ ଆମ ସହ ସାମିଲ ହୁଅନ୍ତୁ।",
    days: "ଦିନ", hours: "ଘଣ୍ଟା", minutes: "ମିନିଟ୍", seconds: "ସେକେଣ୍ଡ",
    whereTitle: "ଆମକୁ କେଉଁଠି ପାଇବେ", whereLead: "ଆପଣଙ୍କ ଫୋନ୍‌ରେ ଦିଗ ଜାଣିବା ପାଇଁ ପ୍ରତ୍ୟେକ କାର୍ଯ୍ୟକ୍ରମର କୋଡ୍ ସ୍କାନ୍ କରନ୍ତୁ।",
    scanHint: "ଦିଗ ଜାଣିବା ପାଇଁ ଆପଣଙ୍କ ଫୋନ୍ କ୍ୟାମେରା ସାହାଯ୍ୟରେ ସ୍କାନ୍ କରନ୍ତୁ।", openMaps: "ମ୍ୟାପ୍‌ରେ ଖୋଲନ୍ତୁ",
    scheduleTitle: "ବିବାହ ଦିନର କାର୍ଯ୍ୟକ୍ରମ", scheduleLead: "କେତେବେଳେ କ’ଣ ହେବ, ତାହାର ବିବରଣୀ।",
    addCal: "କ୍ୟାଲେଣ୍ଡରରେ ଯୋଡ଼ନ୍ତୁ", google: "ଗୁଗୁଲ୍ କ୍ୟାଲେଣ୍ଡର", ics: "ଆପଲ୍ / ଆଉଟଲୁକ୍ (.ics)",
    momentsTitle: "ଆମର କିଛି ସ୍ମରଣୀୟ ମୁହୂର୍ତ୍ତ", momentsLead: "ଆମର କିଛି ପ୍ରିୟ ସ୍ମୃତି ଦେଖିବା ପାଇଁ ସ୍ୱାଇପ୍ କରନ୍ତୁ। ଫଟୋକୁ ବଡ଼ କରି ଦେଖିବା ପାଇଁ ଟ୍ୟାପ୍ କରନ୍ତୁ।",
    openPhoto: "ଫଟୋ ଖୋଲନ୍ତୁ", closePhoto: "ଫଟୋ ବନ୍ଦ କରନ୍ତୁ",
    musicOn: "ସଙ୍ଗୀତ ଚଲାନ୍ତୁ", musicOff: "ସଙ୍ଗୀତ ବନ୍ଦ କରନ୍ତୁ", withLove: "ସ୍ନେହ ସହକାରେ", and: "ଏବଂ ପରିବାରବର୍ଗ",
    scrollTop: "ଉପରକୁ ଯାଆନ୍ତୁ",
    locale: "or-IN",
  },
};

export const LANGS = [["en", "EN"], ["hi", "हिं"], ["kn", "ಕನ್"],["or","ଓ"]];
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
  const tr = (obj) => obj?.[lang] ?? obj?.en ?? "";// pick a translated field from config
  return <Ctx.Provider value={{ lang, setLang, t, tr }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
