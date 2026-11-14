// ===== EDIT YOUR WEDDING DETAILS HERE =====
// Every translatable field has { en, hi, kn }.
export const CONFIG = {
  names: { en: ["Priyabrata", "Swarnaprabha"], hi: ["प्रियब्रत", "स्वर्णप्रभा"], kn: ["ಪ್ರಿಯವ್ರತ", "ಸ್ವರ್ಣಪ್ರಭಾ"], or:["ପ୍ରିୟବ୍ରତ", "ସ୍ୱର୍ଣ୍ଣପ୍ରଭା"] },
  date: "2026-12-11T16:30:00+05:30", // countdown target

  events: [
    {
      id: "baraat",
      start: "2026-12-11T16:30:00+05:30",
      hours: 2,
      mapQuery: "Sai Lotus Kalyan Mandap nimapada", // used for the QR code and Maps link
      name: { en: "Baraat", hi: "बारात", kn: "ಬರಾತ್",or: "ବରଯାତ୍ରୀ" },
      place: { en: "Sai Lotus Mandap,Near Court Square,Nimapada", hi: "साईं लोटस कल्याण मंडप, कोर्ट स्क्वायर के पास, निमापाड़ा", kn:"ಸಾಯಿ ಲೋಟಸ್ ಕಲ್ಯಾಣ ಮಂಟಪ, ಕೋರ್ಟ್ ಸ್ಕ್ವೇರ್ ಹತ್ತಿರ, ನಿಮಪದ",or: "ସାଇ ଲୋଟସ୍ କଲ୍ୟାଣ ମଣ୍ଡପ, କୋର୍ଟ ଛକ ନିକଟରେ, ନିମାପଡ଼ା" },
      note: { en: "The procession starts near the mandap.", hi: "बारात मंडप के पास से शुरू होगी।", kn: "ಮೆರವಣಿಗೆ ಮಂಟಪದ ಬಳಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ." ,or: "ମଣ୍ଡପ ନିକଟରୁ ବରଯାତ୍ରୀ ଆରମ୍ଭ ହେବ ।"},
    },
    {
      id: "reception",
      start: "2026-12-13T20:00:00+05:30",
      hours: 3,
      mapQuery: "20.0229459, 86.1836021",
      name: { en: "Reception", hi: "रिसेप्शन", kn: "ಆರತಕ್ಷತೆ" , or: "ରିସେପ୍ସନ୍" },
      place: { en: "Raghunath Bhawan,Patisahi,Kakatpur,puri", hi: "रघुनाथ भवन, पतिशाही, काकटपुर, पुरी", kn:"ರಘುನಾಥ ಭವನ, ಪತಿಸಾಹಿ, ಕಾಕತ್‌ಪುರ, ಪುರಿ" ,or: "ରଘୁନାଥ ଭବନ, ପତିସାହି, କାକଟପୁର, ପୁରୀ |" },
      note: { en: "Dinner and music follow the blessings.", hi: "आशीर्वाद के बाद भोजन और संगीत होगा।", kn: "ಆಶೀರ್ವಾದದ ನಂತರ ಭೋಜನ ಮತ್ತು ಸಂಗೀತ." , or: "ଆଶୀର୍ବାଦ ପରେ ରାତ୍ରିଭୋଜନ ଓ ସଙ୍ଗୀତର ଆୟୋଜନ ରହିଛି।" },
    },
  ],

  // Day schedule (timeline). Times are shown in India time.
  schedule: [
    {
      at: "2026-12-11T09:30:00+01:30", title: {en: "Baraat leaves from home",hi: "बारात घर से रवाना",kn: "ಬರಾತ್ ಮನೆಯಿಂದ ಹೊರಡುತ್ತದೆ",or: "ବରଯାତ୍ରୀ ଘରୁ ବାହାରିବେ"
      }
    },
    { at: "2026-12-11T18:00:00+05:30", title: { en: "Milni and Jaimala", hi: "मिलनी और जयमाला", kn: "ಮಿಲನಿ ಮತ್ತು ಜಯಮಾಲಾ" ,or:"ମିଳନୀ ଓ ଜୟମାଳା"} },
    { at: "2026-12-13T20:00:00+06:30", title: { en: "Reception begins", hi: "रिसेप्शन शुरू", kn: "ಆರತಕ್ಷತೆ ಆರಂಭ" , or: "ରିସେପ୍ସନ୍ ଆରମ୍ଭ ହୁଏ |"} },
    { at: "2026-12-13T21:00:00+07:30", title: { en: "Dinner", hi: "भोजन", kn: "ಭೋಜನ" ,or: "ରାତ୍ରିଭୋଜନ" } },
  ],

  // Put image files in /public/photos and set src: "photos/1.jpg". Without src, a colour tile is shown.
  photos: [
    { src:"photos/clsmt2slmt.jpeg" , cap: { en: "From Classmate to Soulmate", hi: "सहपाठी से जीवनसाथी तक", kn: "ಸಹಪಾಠಿಯಿಂದ ಜೀವನಸಂಗಾತಿಯವರೆಗೆ", or: "ସହପାଠୀରୁ ଜୀବନସାଥୀ" }, c: ["#E8A598", "#B9731A"] },
    { src:"photos/prpsl.jpeg" , cap: { en: "The proposal", hi: "प्रेम निवेदन", kn: "ಪ್ರೇಮ ನಿವೇದನೆ", or: "ପ୍ରେମ ନିବେଦନ" }, c: ["#0E2A2B", "#2f7f78"] },
    { src:"photos/prmsrslvd.jpeg" , cap: { en: "In JS we call:- A Promise Resolved", hi: "JS में हम कहते हैं:- एक वादा पूरा हुआ", kn: "JS ನಲ್ಲಿ ನಾವು ಹೇಳುತ್ತೇವೆ:- ಒಂದು ಭರವಸೆ ಈಡೇರಿದೆ", or: "JS ରେ ଆମେ କହୁ:- ଏକ ପ୍ରତିଶ୍ରୁତି ପୂରଣ ହେଲା" }, c: ["#F2A93B", "#e56b4a"] },
    { src:"photos/ngmnt.jpeg" , cap: { en: "Engagement", hi: "सगाई", kn: "ನಿಶ್ಚಿತಾರ್ಥ", or: "ନିର୍ବନ୍ଧ" }, c: ["#2f7f78", "#8bbf7a"] },
    { src:"photos/tgthr.jpeg" , cap: { en: "Together", hi: "साथ-साथ", kn: "ಒಟ್ಟಿಗೆ", or: "ଏକାଠି" }, c: ["#7a3b5a", "#E8A598"] },
  ],
};
