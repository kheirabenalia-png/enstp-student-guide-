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
    "ecole",        // 🏫 مدرستي
    "admin",        // 🏛️ إدارتي
    "profs",        // 👨‍🏫 أساتذتي
    "services",     // 📋 الخدمات
    "cite",         // 🏠 الإقامة الجامعية
    "transport",    // 🚌 النقل
    "metro-map",    // 🚇 خريطة المترو والترامواي
    "sport",        // ⚽ الرياضة
    "podcast",      // 🎙️ بودكاست الطالب
    "forum",        // 🎓 ملتقى الطلبة
    "courses",      // 📚 دورات
    "green",        // ♻️ المشروع الأخضر
    "qr",           // 📱 رموز QR
    "about",        // 👥 من نحن
    "shopping"      // 🍽️ التسوق والأكل (اختياري)
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
  // إحداثيات ENSTP
  // ============================================
  window.ENSTP_INFO = {
    name: "ENSTP",
    fullName: "École Nationale Supérieure des Travaux Publics",
    location: "Garidi, Kouba, Alger",
    coordinates: {
      lat: 36.7089,
      lng: 3.0917
    },
    nearestMetro: {
      station: "Tafourah - Grande Poste",
      distance: "~7 km"
    },
    nearestTram: {
      station: "El Harrach Centre",
      distance: "~12 km"
    }
  };
})();
