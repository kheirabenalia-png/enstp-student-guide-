// ============================================
// data/index.js — جامع الأقسام
// Guide de survie ENSTP
// ============================================

(function() {
  const SECTION_ORDER = [
    "ecole",
    "profs",
    "forum",
    "admin",
    "services",
    "shopping",
    "transport",
    "metro-map",
    "cite",
    "sport",
    "green",
    "podcast",
    "courses",
    "about",
    "qr"
  ];

  if (!window.SECTIONS) window.SECTIONS = [];

  window.SECTIONS.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.id);
    const ib = SECTION_ORDER.indexOf(b.id);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  console.log('═══════════════════════════════════════');
  console.log('📚 Guide ENSTP — Sections chargées');
  console.log('═══════════════════════════════════════');
  console.log('Total : ' + window.SECTIONS.length + ' sections');
  window.SECTIONS.forEach((s, i) => {
    console.log('  ' + (i + 1) + '. ' + s.icon + ' ' + s.id);
  });
  console.log('═══════════════════════════════════════');

  const loadedIds = window.SECTIONS.map(s => s.id);
  const missing = SECTION_ORDER.filter(id => !loadedIds.includes(id));
  if (missing.length > 0) {
    console.warn('⚠️ Sections manquantes :', missing);
  } else {
    console.log('✅ Toutes les sections sont chargées !');
  }
})();
