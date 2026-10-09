// ============================================
// data/index.js — جامع الأقسام
// Guide de survie ENSTP
// ============================================
// ⚠️ هذا الملف يعمل كـ "فهرس" لكل الأقسام
//    يُحمَّل في النهاية، ويجمع كل الأقسام في SECTIONS

(function() {
  // ============================================
  // ترتيب الأقسام (كما ستظهر في الموقع)
  // ============================================
  const SECTION_ORDER = [
    "ecole",       // 🏫 مدرستي
    "profs",       // 👨‍🏫 أساتذتي
    "admin",       // 🏛️ إدارتي
    "services",    // 📋 الخدمات
    "shopping",    // 🍽️ التسوق والأكل
    "transport",   // 🚌 النقل
    "metro-map",   // 🚇 خريطة المترو والترامواي
    "cite",        // 🏠 الإقامة الجامعية
    "sport",       // ⚽ الرياضة
    "green",       // ♻️ المشروع الأخضر
    "podcast",     // 🎙️ بودكاست الطالب
    "courses",     // 📚 دورات
    "about",       // 👥 من نحن
    "qr"           // 📱 رموز QR
  ];

  // تأكد من وجود SECTIONS
  if (!window.SECTIONS) window.SECTIONS = [];

  // ============================================
  // ترتيب حسب SECTION_ORDER
  // ============================================
  window.SECTIONS.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.id);
    const ib = SECTION_ORDER.indexOf(b.id);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  // ============================================
  // طباعة عدد الأقسام المحمّلة (للتشخيص)
  // ============================================
  console.log('═══════════════════════════════════════');
  console.log('📚 Guide ENSTP — Sections chargées');
  console.log('═══════════════════════════════════════');
  console.log('Total : ' + window.SECTIONS.length + ' sections');
  window.SECTIONS.forEach((s, i) => {
    console.log('  ' + (i + 1) + '. ' + s.icon + ' ' + s.id + ' (' + (s.titleKey || '?') + ')');
  });
  console.log('═══════════════════════════════════════');

  // ============================================
  // تحقق من عدم وجود أقسام ناقصة
  // ============================================
  const loadedIds = window.SECTIONS.map(s => s.id);
  const missing = SECTION_ORDER.filter(id => !loadedIds.includes(id));
  
  if (missing.length > 0) {
    console.warn('⚠️ Sections manquantes :');
    missing.forEach(id => console.warn('   ❌ ' + id));
  } else {
    console.log('✅ Toutes les sections sont chargées !');
  }

  // ============================================
  // إضافة إحداثيات ENSTP (اختياري)
  // ============================================
  window.ENSTP_INFO = {
    name: "ENSTP",
    fullName: "École Nationale Supérieure des Travaux Publics",
    location: "Garidi, Kouba, Alger",
    coordinates: {
      lat: 36.7089,
      lng: 3.0917
    },
    // أقرب محطة مترو
    nearestMetro: {
      station: "Tafourah - Grande Poste",
      distance: "~7 km",
      walkTime: "~15 min en taxi"
    },
    // أقرب محطة ترامواي
    nearestTram: {
      station: "El Harrach Centre",
      distance: "~12 km",
      walkTime: "~25 min en taxi"
    }
  };
})();
