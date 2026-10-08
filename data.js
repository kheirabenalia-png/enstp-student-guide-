// ============================================
// data.js — Guide de survie ENSTP
// Fait par les étudiants de 1ère année Ingénieur
// Groupe 2 — Infrastructures de Base — 2024/2025
// ============================================

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
  defaultLang: "fr"
};

const SECTIONS = [

  // ========== 1. LES SALLES ==========
  {
    id: "salles",
    icon: "📍",
    title: {
      fr: "Où est ma salle ?",
      ar: "أين قاعتي؟",
      en: "Where is my room?"
    },
    intro: {
      fr: "26 salles de cours, 2 amphithéâtres (A et B). Trouve ta salle en un clic.",
      ar: "26 قاعة، مدرجان (أ و ب). اعرف قاعتك بضغطة واحدة.",
      en: "26 classrooms, 2 amphitheaters (A and B). Find your room in one click."
    },
    type: "salles",
    items: [
      {
        title: { fr: "🏛 Amphithéâtres A et B", ar: "🏛 المدرجان أ و ب", en: "🏛 Amphitheaters A and B" },
        desc: {
          fr: "Utilisés pour les cours magistraux (CM). Capacité : grands groupes réunis.",
          ar: "تُستخدم للمحاضرات. السعة: الأفواج الكبيرة مجتمعة.",
          en: "Used for lectures. Capacity: large groups together."
        }
      },
      {
        title: { fr: "📚 26 Salles de TD", ar: "📚 26 قاعة للأعمال الموجهة", en: "📚 26 TD rooms" },
        desc: {
          fr: "Numérotées de 1 à 26. Réparties sur plusieurs étages. Consulte le plan ci-dessous.",
          ar: "مرقّمة من 1 إلى 26. موزعة على عدة طوابق. راجع الخريطة أدناه.",
          en: "Numbered 1 to 26. Spread over several floors. Check the map below."
        }
      },
      {
        title: { fr: "🔬 Salles de TP & Laboratoires", ar: "🔬 قاعات الأعمال التطبيقية والمخابر", en: "🔬 TP rooms & Laboratories" },
        desc: {
          fr: "Physique, chimie, géotechnique, matériaux, topographie, hydraulique.",
          ar: "فيزياء، كيمياء، جيوتقنية، مواد، طبوغرافيا، هيدروليك.",
          en: "Physics, chemistry, geotechnics, materials, topography, hydraulics."
        }
      }
    ]
  },

  // ========== 2. LES SERVICES ==========
  {
    id: "services",
    icon: "🆘",
    title: {
      fr: "Les services",
      ar: "الخدمات",
      en: "Services"
