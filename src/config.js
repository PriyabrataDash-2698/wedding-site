// ===== EDIT YOUR WEDDING DETAILS HERE =====
// Every translatable field has { en, hi, kn }.
export const CONFIG = {
  names: { en: ["Priyabrata", "Swarnaprabha"], hi: ["प्रियब्रत", "स्वर्णप्रभा"], kn: ["ପ୍ରିୟବ୍ରତ", "ସ୍ୱର୍ଣ୍ଣପ୍ରଭା"] },
  date: "2026-12-11T16:30:00+05:30", // countdown target

  events: [
    {
      id: "baraat",
      start: "2026-12-11T16:30:00+05:30",
      hours: 2,
      mapQuery: "The Leela Palace Bengaluru", // used for the QR code and Maps link
      name: { en: "Baraat", hi: "बारात", kn: "ବରଯାତ୍ରୀ" },
      place: { en: "Sai Lotus ,Near Court Square,Nimapada", hi: "होटल लीला पैलेस, बेंगलुरु", kn: "ସାଇ ଲୋଟସ୍, କୋର୍ଟ ଛକ ନିକଟରେ, ନିମାପଡ଼ା" },
      note: { en: "The procession starts at the hotel gate.", hi: "बारात होटल के गेट से शुरू होगी।", kn: "ಮೆರವಣಿಗೆ ಹೋಟೆಲ್ ಗೇಟ್‌ನಿಂದ ಆರಂಭವಾಗುತ್ತದೆ." },
    },
    {
      id: "reception",
      start: "2027-02-06T20:00:00+05:30",
      hours: 3,
      mapQuery: "Palace Grounds Bengaluru",
      name: { en: "Reception", hi: "रिसेप्शन", kn: "ରିସେପ୍ସନ୍" },
      place: { en: "Raghunath Bhawan,Patisahi,Kakatpur,puri", hi: "रघुनाथ भवन, पतिशाही, काकटपुर, पुरी", kn: "ରଘୁନାଥ ଭବନ, ପଟିସାହି, କାକଟପୁର, ପୁରୀ |" },
      note: { en: "Dinner and music follow the blessings.", hi: "आशीर्वाद के बाद भोजन और संगीत होगा।", kn: "आशीर्वाद के बाद रात का खाना और संगीत होगा।" },
    },
  ],

  // Day schedule (timeline). Times are shown in India time.
  schedule: [
    { at: "2026-12-11T16:30:00+05:30", title: { en: "Baraat leaves the hotel", hi: "बारात होटल से रवाना", kn: "ಬರಾತ್ ಹೋಟೆಲ್‌ನಿಂದ ಹೊರಡುತ್ತದೆ" } },
    { at: "2027-02-06T18:00:00+05:30", title: { en: "Milni and Jaimala", hi: "मिलनी और जयमाला", kn: "ಮಿಲನಿ ಮತ್ತು ಜಯಮಾಲಾ" } },
    { at: "2027-02-06T20:00:00+05:30", title: { en: "Reception begins", hi: "रिसेप्शन शुरू", kn: "ಆರತಕ್ಷತೆ ಆರಂಭ" } },
    { at: "2027-02-06T21:00:00+05:30", title: { en: "Dinner", hi: "भोजन", kn: "ಭೋಜನ" } },
  ],

  // Put image files in /public/photos and set src: "photos/1.jpg". Without src, a colour tile is shown.
  photos: [
    { cap: { en: "How we met", hi: "हमारी पहली मुलाकात", kn: "ನಾವು ಭೇಟಿಯಾದದ್ದು" }, c: ["#E8A598", "#B9731A"] },
    { cap: { en: "The proposal", hi: "प्रपोज़ल", kn: "ಪ್ರಸ್ತಾಪ" }, c: ["#0E2A2B", "#2f7f78"] },
    { cap: { en: "Haldi", hi: "हल्दी", kn: "ಅರಿಶಿನ" }, c: ["#F2A93B", "#e56b4a"] },
    { cap: { en: "Mehendi", hi: "मेहंदी", kn: "ಮೆಹೆಂದಿ" }, c: ["#2f7f78", "#8bbf7a"] },
    { cap: { en: "Together", hi: "साथ-साथ", kn: "ಒಟ್ಟಿಗೆ" }, c: ["#7a3b5a", "#E8A598"] },
  ],
};
