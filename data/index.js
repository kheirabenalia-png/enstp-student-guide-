// ============================================
// data/index.js — جامع الأقسام
// ============================================

(function() {
  const SECTION_ORDER = [
    "ecole", "admin", "profs", "forum", "services",
    "cite", "transport", "metro-map", "sport", "podcast",
    "courses", "green", "qr", "about", "shopping"
  ];

  if (!window.SECTIONS) window.SECTIONS = [];

  window.SECTIONS.sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.id);
    const ib = SECTION_ORDER.indexOf(b.id);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  console.log('📚 Sections chargées : ' + window.SECTIONS.length);
  window.SECTIONS.forEach((s, i) => console.log('  ' + (i+1) + '. ' + s.icon + ' ' + s.id));

  const loadedIds = window.SECTIONS.map(s => s.id);
  const missing = SECTION_ORDER.filter(id => !loadedIds.includes(id));
  if (missing.length > 0) console.warn('⚠️ Manquantes :', missing.join(', '));
})();
