// ============================================
// theme.js — الألوان والوضع الليلي
// ============================================

const THEMES = {
  orange: {
    light: { acc: "#c2410c", acc2: "#9a3412", accSoft: "#fde8dc" },
    dark:  { acc: "#fb923c", acc2: "#ea580c", accSoft: "#3a2a20" }
  },
  red: {
    light: { acc: "#dc2626", acc2: "#991b1b", accSoft: "#fee2e2" },
    dark:  { acc: "#f87171", acc2: "#dc2626", accSoft: "#3b1d1d" }
  },
  green: {
    light: { acc: "#059669", acc2: "#047857", accSoft: "#d1fae5" },
    dark:  { acc: "#34d399", acc2: "#10b981", accSoft: "#1a3a2e" }
  },
  blue: {
    light: { acc: "#2563eb", acc2: "#1d4ed8", accSoft: "#dbeafe" },
    dark:  { acc: "#60a5fa", acc2: "#3b82f6", accSoft: "#1e2a45" }
  },
  purple: {
    light: { acc: "#7c3aed", acc2: "#6d28d9", accSoft: "#ede9fe" },
    dark:  { acc: "#a78bfa", acc2: "#8b5cf6", accSoft: "#2e2345" }
  },
  gray: {
    light: { acc: "#475569", acc2: "#334155", accSoft: "#e2e8f0" },
    dark:  { acc: "#94a3b8", acc2: "#64748b", accSoft: "#2d3342" }
  }
};

function applyTheme() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'auto';
  const t = THEMES[theme] || THEMES.orange;

  let actualMode = mode;
  if (mode === 'auto') {
    actualMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.documentElement.setAttribute('data-mode', actualMode);
  document.documentElement.setAttribute('data-theme', theme);

  const colors = actualMode === 'dark' ? t.dark : t.light;
  document.documentElement.style.setProperty('--acc', colors.acc);
  document.documentElement.style.setProperty('--acc2', colors.acc2);
  document.documentElement.style.setProperty('--acc-soft', colors.accSoft);

  document.querySelectorAll('[data-theme-btn]').forEach(b => {
    b.classList.toggle('active', b.dataset.themeBtn === theme);
  });

  const modeIcon = actualMode === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('[data-mode-toggle]').forEach(b => {
    b.textContent = modeIcon;
  });
}

function toggleMode() {
  const current = localStorage.getItem('mode') || 'auto';
  let next;
  if (current === 'auto') next = 'dark';
  else if (current === 'dark') next = 'light';
  else next = 'auto';
  localStorage.setItem('mode', next);
  applyTheme();
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  applyTheme();
  closeThemePanel();
}

function toggleThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.toggle('show');
}

function closeThemePanel() {
  const panel = document.getElementById('theme-panel');
  if (panel) panel.classList.remove('show');
}

// تطبيق فوري قبل التحميل
(function() {
  const theme = localStorage.getItem('theme') || 'orange';
  const mode = localStorage.getItem('mode') || 'auto';
  const t = THEMES[theme] || THEMES.orange;
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
