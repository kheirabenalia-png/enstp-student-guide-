// ============================================
// data/index.js — جامع الأقسام
// Guide de survie ENSTP
// ============================================
// ⚠️ هذا الملف يعمل كـ "فهرس" لكل الأقسام
//    يُحمَّل في النهاية، ويجمع كل الأقسام في SECTIONS

(function() {
  // ترتيب الأقسام (كما ستظهر في الموقع)
  const SECTION_ORDER = [
    "ecole",
    "profs",
    "admin",
    "services",
    "shopping",
    "transport",
    "cite",
    "natation",
    "sport",
    "green",
    "podcast",
    "courses",
    "about",
    "qr"
  ];

  // تأكد من وجود SECTIONS
  if (!window.SECTIONS) window.SECTIONS = [];

  // ترتيب حسب SECTION_ORDER
  window.SECTIONS.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.id);
    const ib = SECTION_ORDER.indexOf(b.id);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  // اطبع عدد الأقسام المحمّلة (للتشخيص)
  console.log(`✅ ${window.SECTIONS.length} sections chargées :`);
  window.SECTIONS.forEach(s => console.log(`   • ${s.id} — ${s.icon}`));

  // تحقق من عدم وجود أقسام ناقصة
  const loadedIds = window.SECTIONS.map(s => s.id);
  const missing = SECTION_ORDER.filter(id => !loadedIds.includes(id));
  if (missing.length > 0) {
    console.warn(`⚠️ Sections manquantes : ${missing.join(', ')}`);
  }
})();
