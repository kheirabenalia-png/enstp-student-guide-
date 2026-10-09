// ============================================
// data/green.js — قسم المشروع الأخضر
// Guide de survie ENSTP
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "green",
  icon: "♻️",
  titleKey: "sectionGreen",
  introKey: "greenIntro",
  type: "custom",
  
  render: function() {
    return renderGreenSection();
  }
});

// ============================================
// دالة عرض قسم المشروع الأخضر
// ============================================
function renderGreenSection() {
  const lang = (typeof LANG !== 'undefined') ? LANG : (localStorage.getItem('lang') || 'fr');
  const t = (key) => (window.LANG_DATA && window.LANG_DATA[lang] && window.LANG_DATA[lang][key]) || key;
  
  let html = '';
  html += '<button class="back" onclick="renderHome()">' + t('back') + '</button>';
  html += '<h2>♻️ ' + t('sectionGreen') + '</h2>';
  html += '<p style="color:var(--mut);margin-bottom:20px">' + t('greenIntro') + '</p>';

  // ============================================
  // الفقرة الرئيسية — إعادة تدوير الورق
  // ============================================
  html += '<div class="card-3d" style="padding:22px;margin-bottom:18px">';
  
  html += '<h3 style="color:var(--acc);margin-bottom:16px;font-size:1.2rem;display:flex;align-items:center;gap:8px">';
  html += '<span style="font-size:1.4rem">♻️</span>';
  html += '<span>' + t('greenRecy') + '</span>';
  html += '</h3>';
  
  // المقدمة
  html += '<div style="background:var(--acc-soft);padding:16px;border-radius:12px;margin-bottom:18px;border-' + (lang === 'ar' ? 'right' : 'left') + ':4px solid var(--acc)">';
  html += '<p style="margin:0;line-height:1.85;color:var(--ink);text-align:justify;font-size:.98rem">';
  html += t('greenIntroPara');
  html += '</p>';
  html += '</div>';
  
  // عنوان الفوائد
  html += '<h4 style="color:var(--acc);margin:20px 0 14px;font-size:1.05rem;text-align:center">';
  html += '🎯 ' + t('greenBenefitsTitle');
  html += '</h4>';
  
  // ===== الفائدة 1: حماية الثروة الغابية =====
  html += '<div style="background:linear-gradient(135deg,#dcfce7,#f0fdf4);padding:16px;border-radius:14px;margin-bottom:12px;border:1px solid #bbf7d0">';
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
  html += '<span style="font-size:1.6rem">🌳</span>';
  html += '<h5 style="margin:0;color:#166534;font-size:1rem;font-weight:700">' + t('greenBenefit1Title') + '</h5>';
  html += '</div>';
  html += '<p style="margin:0;line-height:1.7;color:#166534;font-size:.94rem">' + t('greenBenefit1') + '</p>';
  html += '</div>';
  
  // ===== الفائدة 2: توفير الطاقة والمياه =====
  html += '<div style="background:linear-gradient(135deg,#fef3c7,#fffbeb);padding:16px;border-radius:14px;margin-bottom:12px;border:1px solid #fde68a">';
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
  html += '<span style="font-size:1.6rem">⚡</span>';
  html += '<h5 style="margin:0;color:#92400e;font-size:1rem;font-weight:700">' + t('greenBenefit2Title') + '</h5>';
  html += '</div>';
  html += '<p style="margin:0;line-height:1.7;color:#92400e;font-size:.94rem">' + t('greenBenefit2') + '</p>';
  html += '</div>';
  
  // ===== الفائدة 3: تقليل التلوث =====
  html += '<div style="background:linear-gradient(135deg,#dbeafe,#eff6ff);padding:16px;border-radius:14px;margin-bottom:12px;border:1px solid #bfdbfe">';
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
  html += '<span style="font-size:1.6rem">🌍</span>';
  html += '<h5 style="margin:0;color:#1e40af;font-size:1rem;font-weight:700">' + t('greenBenefit3Title') + '</h5>';
  html += '</div>';
  html += '<p style="margin:0;line-height:1.7;color:#1e40af;font-size:.94rem">' + t('greenBenefit3') + '</p>';
  html += '</div>';
  
  // ===== الفائدة 4: دعم الاقتصاد الدائري =====
  html += '<div style="background:linear-gradient(135deg,#ede9fe,#f5f3ff);padding:16px;border-radius:14px;margin-bottom:12px;border:1px solid #ddd6fe">';
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
  html += '<span style="font-size:1.6rem">💰</span>';
  html += '<h5 style="margin:0;color:#5b21b6;font-size:1rem;font-weight:700">' + t('greenBenefit4Title') + '</h5>';
  html += '</div>';
  html += '<p style="margin:0;line-height:1.7;color:#5b21b6;font-size:.94rem">' + t('greenBenefit4') + '</p>';
  html += '</div>';
  
  // ===== الخاتمة =====
  html += '<div style="background:linear-gradient(135deg,var(--acc),var(--acc2));padding:18px;border-radius:14px;margin-top:18px;text-align:center">';
  html += '<p style="margin:0;line-height:1.8;color:#fff;font-size:.98rem;font-weight:500;font-style:italic">';
  html += '💡 ' + t('greenConclusion');
  html += '</p>';
  html += '</div>';
  
  html += '</div>';

  // ============================================
  // بطاقة الإيكولوجيا
  // ============================================
  html += '<div class="card-3d" style="padding:20px">';
  html += '<h3 style="color:var(--acc);margin-bottom:10px;font-size:1.1rem;display:flex;align-items:center;gap:8px">';
  html += '<span style="font-size:1.3rem">🌱</span>';
  html += '<span>' + t('greenEcologie') + '</span>';
  html += '</h3>';
  html += '<p style="margin:0;line-height:1.7;color:var(--mut);font-size:.95rem">' + t('greenEcologieDesc') + '</p>';
  html += '</div>';

  return html;
}

// تصدير
if (typeof window !== 'undefined') {
  window.renderGreenSection = renderGreenSection;
}
