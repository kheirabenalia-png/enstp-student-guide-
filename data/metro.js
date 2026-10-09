// ============================================
// data/metro.js — خريطة المترو والترامواي
// Guide de survie ENSTP
// ============================================

window.SECTIONS = window.SECTIONS || [];

// ============================================
// بيانات مترو الجزائر (الخط 1)
// ============================================
window.METRO_STATIONS = [
  { id: "martyrs",     fr: "Place des Martyrs",         ar: "ساحة الشهداء",       en: "Martyrs' Square",       zone: "Casbah",           x: 8,  y: 50, key: true  },
  { id: "ali-b",       fr: "Ali Boumendjel",            ar: "علي بومنجل",         en: "Ali Boumendjel",        zone: "Alger Centre",     x: 15, y: 50, key: false },
  { id: "tafourah",    fr: "Tafourah - Grande Poste",   ar: "تافورة - البريد المركزي", en: "Tafourah - Post Office", zone: "Alger Centre", x: 22, y: 50, key: true  },
  { id: "khelifa",     fr: "Khelifa Boukhalfa",         ar: "خليفة بوخالفة",      en: "Khelifa Boukhalfa",     zone: "Alger Centre",     x: 29, y: 50, key: true  },
  { id: "1mai",        fr: "1er Mai",                   ar: "أول مايو",           en: "May 1st",               zone: "Sidi M'Hamed",     x: 36, y: 50, key: false },
  { id: "aissat",      fr: "Aïssat Idir",               ar: "عيسات إيدير",        en: "Aïssat Idir",           zone: "Sidi M'Hamed",     x: 43, y: 50, key: false },
  { id: "hamma",       fr: "Hamma",                     ar: "الحامة",             en: "Hamma",                 zone: "Hamma",            x: 50, y: 50, key: false },
  { id: "jardin",      fr: "Jardin d'Essai",            ar: "حديقة التجارب",      en: "Jardin d'Essai",        zone: "Hamma",            x: 57, y: 50, key: false },
  { id: "fusilles",    fr: "Les Fusillés",              ar: "المعدومون",          en: "Les Fusillés",          zone: "Hussein Dey",      x: 64, y: 50, key: false },
  { id: "amirouche",   fr: "Amirouche",                 ar: "عميروش",             en: "Amirouche",             zone: "Hussein Dey",      x: 71, y: 50, key: false },
  { id: "bachdjerrah", fr: "Bachdjerrah",               ar: "باش جراح",           en: "Bachdjerrah",           zone: "Bachdjerrah",      x: 78, y: 50, key: false },
  { id: "badr",        fr: "Haï El Badr",               ar: "حي البدر",           en: "Haï El Badr",           zone: "El Harrach",       x: 85, y: 50, key: false },
  { id: "harrach",     fr: "El Harrach Centre",         ar: "الحراش وسط",         en: "El Harrach Centre",     zone: "El Harrach",       x: 92, y: 50, key: true  },
  { id: "ain-naadja",  fr: "Aïn Naâdja",                ar: "عين النعجة",         en: "Aïn Naâdja",            zone: "Aïn Naâdja",       x: 99, y: 50, key: false }
];

// ============================================
// بيانات ترامواي الجزائر (الخط T1 الرئيسي)
// ============================================
window.TRAM_STATIONS = [
  { id: "ruisseau",  fr: "Ruisseau",             ar: "الرويسو",          en: "Ruisseau",           zone: "Hussein Dey",      x: 5,  y: 50, key: false },
  { id: "triolet",   fr: "Triolet",              ar: "تريوليه",          en: "Triolet",            zone: "Hussein Dey",      x: 12, y: 50, key: false },
  { id: "bachdjer",  fr: "Bachdjerrah",          ar: "باش جراح",         en: "Bachdjerrah",        zone: "Bachdjerrah",      x: 19, y: 50, key: false },
  { id: "bananiers", fr: "Les Bananiers",        ar: "الموز",            en: "Bananiers",          zone: "Bachdjerrah",      x: 26, y: 50, key: false },
  { id: "djilali",   fr: "Cité Djilali",         ar: "حي جيلالي",        en: "Cité Djilali",       zone: "Bachdjerrah",      x: 33, y: 50, key: false },
  { id: "zerhouni",  fr: "Mokhtar Zerhouni",     ar: "مختار زرهوني",     en: "Mokhtar Zerhouni",   zone: "Bachdjerrah",      x: 40, y: 50, key: false },
  { id: "belfort",   fr: "Belfort",              ar: "بلفور",            en: "Belfort",            zone: "El Harrach",       x: 47, y: 50, key: false },
  { id: "harrach-g", fr: "El Harrach Gare",      ar: "محطة الحراش",      en: "El Harrach Station", zone: "El Harrach",       x: 54, y: 50, key: true  },
  { id: "harrach-c", fr: "El Harrach Centre",    ar: "الحراش وسط",       en: "El Harrach Centre",  zone: "El Harrach",       x: 61, y: 50, key: true  },
  { id: "pont",      fr: "Pont El Harrach",      ar: "جسر الحراش",       en: "El Harrach Bridge",  zone: "El Harrach",       x: 68, y: 50, key: false },
  { id: "pins",      fr: "Les Pins",             ar: "الصنوبر",          en: "Les Pins",           zone: "Mohammadia",       x: 75, y: 50, key: false },
  { id: "chergui",   fr: "Café Chergui",         ar: "مقهى شرقي",        en: "Café Chergui",       zone: "Mohammadia",       x: 82, y: 50, key: false },
  { id: "ben-mhidi", fr: "Larbi Ben M'hidi",     ar: "العربي بن مهيدي",  en: "Larbi Ben M'hidi",   zone: "Mohammadia",       x: 88, y: 50, key: false },
  { id: "cite-1200", fr: "Cité 1200 logements",  ar: "حي 1200 مسكن",     en: "Cité 1200",          zone: "Bordj El Kiffan",  x: 94, y: 50, key: false },
  { id: "dergana",   fr: "Dergana",              ar: "الدرقانة",         en: "Dergana",            zone: "Bordj El Kiffan",  x: 99, y: 50, key: false }
];

// ============================================
// إضافة قسم خريطة المترو
// ============================================
window.SECTIONS.push({
  id: "metro-map",
  icon: "🚇",
  titleKey: "trMetroMap",
  introKey: "trMetroMapIntro",
  type: "metro-map"
});
