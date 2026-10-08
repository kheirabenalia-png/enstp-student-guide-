// ============================================
// theme.js — إدارة الألوان والوضع الليلي
// Guide de survie ENSTP
// ============================================

const THEMES = {
  orange: {
    name: { fr: "Orange ENSTP", ar: "برتقالي ENSTP", en: "ENSTP Orange" },
    icon: "🟠",
    light: { acc: "#c2410c", acc2: "#9a3412", accSoft: "#fde8dc" },
    dark:  { acc: "#fb923c", acc2: "#ea580c", accSoft: "#3a2a20" }
  },
  red: {
    name: { fr: "Rouge", ar: "أحمر", en: "Red" },
    icon: "🔴",
    light: { acc: "#dc2626", acc2: "#991b1b", accSoft: "#fee2e2" },
    dark:  { acc: "#f87171", acc2: "#dc2626", accSoft: "#3b1d1d" }
  },
  green: {
    name: { fr: "Vert", ar: "أخضر", en: "Green" },
    icon: "🟢",
    light: { acc: "#059669", acc2: "#047857", accSoft: "#d1fae5" },
    dark:  { acc: "#34d399", acc2: "#10b981", accSoft: "#1a3a2e" }
  },
  blue: {
    name: { fr: "Bleu", ar: "أزرق", en: "Blue" },
    icon: "🔵",
    light: { acc: "#2563eb", acc2: "#1d4ed8", accSoft: "#dbeafe" },
    dark:  { acc: "#60a5fa", acc2: "#3b82f6", accSoft: "#1e2a45" }
  },
  purple: {
    name: { fr: "Violet", ar: "بنفسجي", en: "Purple" },
    icon: "🟣",
    light: { acc: "#7c3aed", acc2: "#6d28d9", accSoft: "#ede9fe" },
    dark:  { acc: "#a78bfa", acc2: "#8b5cf6", accSoft: "#2e2345" }
  },
  gray: {
    name: { fr: "Gris", ar: "رمادي", en: "Gray" },
    icon: "⚫",
    light: { acc: "#475569", acc2: "#334155", accSoft: "#e2e8f0" },
    dark:  { acc: "#94a3b8", acc2: "#64748b", accSoft: "#2d3342" }
  }
};

// ============================================
// تطبيق الثيم
// ============================================
function applyTheme() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'auto';
  const t = THEMES[theme];
  if (!t) return;

  // تحديد الوضع الفعلي
  let actualMode = mode;
  if (mode === 'auto') {
    actualMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // طبّق الوضع
  document.documentElement.setAttribute('data-mode', actualMode);
  document.documentElement.setAttribute('data-theme', theme);

  // طبّق الألوان
  const colors = actualMode === 'dark' ? t.dark : t.light;
  document.documentElement.style.setProperty('--acc', colors.acc);
  document.documentElement.style.setProperty('--acc2', colors.acc2);
  document.documentElement.style.setProperty('--acc-soft', colors.accSoft);

  // أعلام في الـ body للاستخدام في CSS
  document.body.classList.toggle('dark-mode', actualMode === 'dark');
  document.body.classList.toggle('light-mode', actualMode === 'light');

  // حدّث الزر النشط
  document.querySelectorAll('[data-theme-btn]').forEach(b => {
    b.classList.toggle('active', b.dataset.themeBtn === theme);
  });

  // حدّث زر الوضع
  const modeIcon = actualMode === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('[data-mode-toggle]').forEach(b => {
    b.textContent = modeIcon;
    b.title = actualMode === 'dark' ? 'Mode clair' : 'Mode sombre';
  });
}

// ============================================
// تبديل الوضع
// ============================================
function toggleMode() {
  const current = localStorage.getItem('mode') || 'auto';
  let next;
  if (current === 'auto') next = 'dark';
  else if (current === 'dark') next = 'light';
  else next = 'auto';
  localStorage.setItem('mode', next);
  applyTheme();
}

// ============================================
// تبديل اللون
// ============================================
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  applyTheme();
  closeThemePanel();
}

// ============================================
// لوحة الألوان
// ============================================
function toggleThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (!panel) return;
  panel.classList.toggle('show');
}

function closeThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.remove('show');
}

// ============================================
// راقب تغيير تفضيلات النظام
// ============================================
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if ((localStorage.getItem('mode') || 'auto') === 'auto') {
      applyTheme();
    }
  });
}

// ============================================
// تطبيق فوري (قبل التحميل الكامل)
// ============================================
(function() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'auto';
  const t = THEMES[theme];
  if (!t) return;
  let actualMode = mode;
  if (mode === 'auto') {
    actualMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  const colors = actualMode === 'dark' ? t.dark : t.light;
  document.documentElement.style.setProperty('--acc', colors.acc);
  document.documentElement.style.setProperty('--acc2', colors.acc2);
  document.documentElement.style.setProperty('--acc-soft', colors.accSoft);
  document.documentElement.setAttribute('data-mode', actualMode);
  document.documentElement.setAttribute('data-theme', theme);
})();
