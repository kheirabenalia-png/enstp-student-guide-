const CONFIG = {
  siteName: {
    fr: "Guide de survie ENSTP",
    ar: "دليل البقاء ENSTP",
    en: "ENSTP Survival Guide"
  },
  tagline: {
    fr: "Ton premier jour, dans ta poche.",
    ar: "يومك الأول، في جيبك.",
    en: "Your first day, in your pocket."
  },
  color: "#c2410c",
  defaultLang: "fr"
};

const SECTIONS = [
  {
    id: "bienvenue",
    icon: "🏫",
    title: { fr: "Bienvenue", ar: "مرحباً", en: "Welcome" },
    intro: {
      fr: "L'ENSTP forme des ingénieurs en travaux publics à Alger.",
      ar: "المدرسة الوطنية العليا للأشغال العمومية تكوّن مهندسين في الجزائر العاصمة.",
      en: "ENSTP trains civil engineers in Algiers."
    },
    items: [
      {
        title: { fr: "Qui sommes-nous ?", ar: "من نحن؟", en: "Who are we?" },
        desc: {
          fr: "Grande école d'ingénieurs dédiée aux travaux publics.",
          ar: "مدرسة مهندسين كبرى متخصصة في الأشغال العمومية.",
          en: "A major engineering school dedicated to public works."
        },
        map: "ENSTP Garidi Kouba Alger"
      },
      {
        title: { fr: "Où sommes-nous ?", ar: "أين نحن؟", en: "Where are we?" },
        desc: {
          fr: "Garidi, Kouba, Alger.",
          ar: "قاريدي، القبة، الجزائر العاصمة.",
          en: "Garidi, Kouba, Algiers."
        },
        map: "ENSTP Garidi Kouba Alger"
      }
    ]
  },
  {
    id: "manger",
    icon: "🍽",
    title: { fr: "Manger", ar: "الأكل", en: "Eating" },
    intro: {
      fr: "Où manger avec un petit budget.",
      ar: "أين تأكل بميزانية صغيرة.",
      en: "Where to eat on a small budget."
    },
    items: [
      {
        title: { fr: "Restaurants & fast-foods", ar: "مطاعم ووجبات سريعة", en: "Restaurants & fast-foods" },
        desc: { fr: "Autour de l'école.", ar: "حول المدرسة.", en: "Around the school." },
        map: "restaurant près de ENSTP Kouba"
      },
      {
        title: { fr: "Cafés", ar: "مقاهي", en: "Cafés" },
        desc: { fr: "Pour réviser ou se retrouver.", ar: "للمراجعة أو اللقاء.", en: "To study or meet." },
        map: "café près de ENSTP Kouba"
      }
    ]
  },
  {
    id: "transport",
    icon: "🚌",
    title: { fr: "Transport", ar: "النقل", en: "Transport" },
    intro: {
      fr: "Se déplacer autour de l'école.",
      ar: "التنقل حول المدرسة.",
      en: "Getting around the school."
    },
    items: [
      {
        title: { fr: "Arrêts de bus", ar: "محطات الحافلات", en: "Bus stops" },
        desc: { fr: "Ouvre Google Maps.", ar: "افتح خرائط جوجل.", en: "Open Google Maps." },
        map: "arrêt de bus près de ENSTP Kouba"
      },
      {
        title: { fr: "Taxis", ar: "سيارات الأجرة", en: "Taxis" },
        desc: { fr: "Station la plus proche.", ar: "أقرب محطة.", en: "Nearest station." },
        map: "station de taxi près de ENSTP Kouba"
      }
    ]
  },
  {
    id: "sport",
    icon: "⚽",
    title: { fr: "Sport", ar: "الرياضة", en: "Sport" },
    intro: {
      fr: "Étudier ne suffit pas.",
      ar: "الدراسة وحدها لا تكفي.",
      en: "Studying is not enough."
    },
    items: [
      {
        title: { fr: "🏃 ENSTP Running Club", ar: "🏃 نادي الجري", en: "🏃 ENSTP Running Club" },
        desc: { fr: "Rendez-vous devant l'entrée.", ar: "اللقاء أمام المدخل.", en: "Meet at the entrance." }
      },
      {
        title: { fr: "⚽ Football", ar: "⚽ كرة القدم", en: "⚽ Football" },
        desc: { fr: "Match libre le week-end.", ar: "مباراة حرة في نهاية الأسبوع.", en: "Free match on weekends." }
      }
    ]
  },
  {
    id: "alger",
    icon: "🗺",
    title: { fr: "Alger", ar: "الجزائر العاصمة", en: "Algiers" },
    intro: {
      fr: "Mini-guide étudiant.",
      ar: "دليل طلابي مصغّر.",
      en: "Mini student guide."
    },
    items: [
      {
        title: { fr: "Notre-Dame d'Afrique", ar: "سيدة إفريقيا", en: "Notre-Dame d'Afrique" },
        desc: { fr: "Basilique avec vue sur la baie.", ar: "كنيسة بإطلالة على الخليج.", en: "Basilica with bay view." },
        map: "Notre-Dame d'Afrique Alger"
      },
      {
        title: { fr: "Jardin d'Essai", ar: "حديقة التجارب", en: "Jardin d'Essai" },
        desc: { fr: "Grand jardin botanique.", ar: "حديقة نباتية كبيرة.", en: "Large botanical garden." },
        map: "Jardin d'Essai du Hamma Alger"
      },
      {
        title: { fr: "La Casbah", ar: "القصبة", en: "The Casbah" },
        desc: { fr: "Vieille ville classée UNESCO.", ar: "المدينة القديمة المصنفة يونسكو.", en: "Old town, UNESCO listed." },
        map: "Casbah d'Alger"
      }
    ]
  },
  {
    id: "aide",
    icon: "🆘",
    title: { fr: "Aide", ar: "المساعدة", en: "Help" },
    intro: {
      fr: "À qui m'adresser ?",
      ar: "بمن أتصل؟",
      en: "Who to contact?"
    },
    items: [
      {
        title: { fr: "Problème administratif", ar: "مشكلة إدارية", en: "Administrative problem" },
        desc: {
          fr: "Va à la Scolarité avec ta carte d'étudiant.",
          ar: "اذهب إلى قسم الشؤون الطلابية ببطاقتك.",
          en: "Go to Student Affairs with your card."
        }
      },
      {
        title: { fr: "J'ai perdu ma carte", ar: "أضعت بطاقتي", en: "I lost my card" },
        desc: { fr: "Déclaration de perte + photo.", ar: "تصريح بالضياع + صورة.", en: "Loss report + photo." }
      }
    ]
  }
];
