// ============================================
// search.js — محرك البحث الذكي
// Guide de survie ENSTP
// Version 2.0
// ============================================

const SYNONYMS = {
  // فرنسي
  "salle": ["classe", "amphi", "amphithéâtre", "cours", "td", "tp", "laboratoire"],
  "amphi": ["amphithéâtre", "salle", "grande salle"],
  "laboratoire": ["labo", "tp", "expérience"],
  "prof": ["enseignant", "professeur", "maître"],
  "enseignant": ["prof", "professeur"],
  "probleme": ["aide", "souci", "difficulté", "service"],
  "aide": ["probleme", "service", "secours"],
  "absence": ["absent", "justificatif", "manqué"],
  "carte": ["badge", "identité"],
  "transport": ["bus", "taxi", "métro", "tram", "déplacement"],
  "bus": ["transport", "arrêt", "ligne"],
  "taxi": ["transport", "voiture", "station"],
  "cite": ["résidence", "logement", "chambre"],
  "residence": ["cite", "logement"],
  "manger": ["restaurant", "repas", "snack", "café", "pizzeria", "boulangerie"],
  "restaurant": ["manger", "repas", "snack"],
  "bibliotheque": ["livre", "adhésion", "prêt"],
  "notes": ["résultats", "examens", "moyenne"],
  "examens": ["notes", "résultats"],
  "sport": ["football", "basket", "running"],
  "medecin": ["docteur", "santé", "infirmerie"],
  "pharmacie": ["médicament", "santé"],
  "forum": ["discussion", "chat", "étudiants", "communauté"],
  "etudiant": ["élève", "étudiants", "apprenant"],
  
  // عربي
  "قاعة": ["قسم", "مدرج", "صف", "حصة"],
  "مدرج": ["قاعة", "أمفي"],
  "مخبر": ["مختبر", "تجربة", "تطبيقي"],
  "أستاذ": ["معلم", "بروف", "مدرس"],
  "أساتذة": ["أستاذ", "معلم"],
  "مشكلة": ["مساعدة", "سؤال", "صعوبة"],
  "مساعدة": ["مشكلة", "خدمة"],
  "غياب": ["غائب", "تبرير", "مبرر"],
  "بطاقة": ["هوية", "شارة"],
  "نقل": ["حافلة", "طاكسي", "مترو", "ترامواي"],
  "حافلة": ["نقل", "باص", "محطة"],
  "طاكسي": ["نقل", "سيارة", "تكسي"],
  "إقامة": ["حي", "سكن", "غرفة"],
  "سكن": ["إقامة", "حي"],
  "أكل": ["مطعم", "ماكلة", "وجبة", "طعام"],
  "ماكلة": ["أكل", "مطعم", "وجبة"],
  "مطعم": ["أكل", "ماكلة", "وجبة"],
  "مكتبة": ["كتاب", "انضمام", "استعارة"],
  "نقاط": ["نتائج", "امتحانات", "معدل"],
  "امتحانات": ["نقاط", "نتائج"],
  "رياضة": ["كرة", "جري", "تمرين"],
  "طبيب": ["عيادة", "صحة", "إسعاف"],
  "صيدلية": ["دواء", "صحة"],
  "ملتقى": ["دردشة", "طلبة", "مجتمع", "تواصل"],
  "طلبة": ["طلاب", "ملتقى"],
  
  // إنجليزي
  "room": ["class", "amphi", "classroom"],
  "teacher": ["professor", "instructor"],
  "problem": ["help", "issue", "service"],
  "help": ["problem", "service"],
  "transport": ["bus", "taxi", "metro"],
  "dorm": ["residence", "housing"],
  "eat": ["restaurant", "food", "meal"],
  "library": ["book", "membership"],
  "grades": ["results", "exams"],
  "forum": ["discussion", "chat", "community"]
};

// ============================================
// تطبيع النص
// ============================================
function normalize(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/[ç]/g, 'c')
    .replace(/[إأآا]/g, 'ا').replace(/[ىي]/g, 'ي').replace(/[ةه]/g, 'ه')
    .replace(/[ًٌٍَُِّْ]/g, '').trim();
}

// ============================================
// توسيع الكلمة بالمرادفات
// ============================================
function expandWord(word) {
  const norm = normalize(word);
  const expanded = new Set([norm]);
  Object.keys(SYNONYMS).forEach(key => {
    if (normalize(key) === norm) {
      SYNONYMS[key].forEach(syn => expanded.add(normalize(syn)));
    }
  });
  return Array.from(expanded);
}

// ============================================
// Levenshtein (تصحيح الأخطاء الإملائية)
// ============================================
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// ============================================
// البحث الذكي
// ============================================
function smartSearch(query, sections) {
  const q = normalize(query);
  if (!q) return [];
  
  const words = q.split(/\s+/).filter(w => w.length > 1);
  if (words.length === 0) return [];
  
  const expandedWords = words.map(w => expandWord(w));
  const results = [];
  
  sections.forEach(section => {
    // بحث في items
    if (section.items) {
      section.items.forEach((item, idx) => {
        const score = scoreItem(item, expandedWords, section);
        if (score > 0) {
          results.push({
            section: section,
            item: item,
            itemIndex: idx,
            categoryId: null,
            score: score
          });
        }
      });
    }
    
    // بحث في categories
    if (section.categories) {
      section.categories.forEach(cat => {
        // عنوان التصنيف
        if (cat.titleKey && typeof window.t === 'function') {
          const ct = window.t(cat.titleKey, getCurrentLang()) || '';
          const ctext = normalize(ct);
          expandedWords.forEach(group => group.forEach(w => {
            if (ctext.includes(w)) {
              results.push({
                section: section,
                item: { titleKey: cat.titleKey, icon: cat.icon },
                itemIndex: null,
                categoryId: cat.id,
                score: 15
              });
            }
          }));
        }
        
        // items داخل التصنيف
        if (cat.items) {
          cat.items.forEach((item, idx) => {
            const score = scoreItem(item, expandedWords, section);
            if (score > 0) {
              results.push({
                section: section,
                item: item,
                itemIndex: idx,
                categoryId: cat.id,
                score: score
              });
            }
          });
        }
      });
    }
  });
  
  // إزالة التكرارات
  const seen = new Set();
  const unique = [];
  results.forEach(r => {
    const key = r.section.id + '|' + (r.item.titleKey || '') + '|' + (r.categoryId || '') + '|' + (r.itemIndex || '');
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(r);
    }
  });
  
  unique.sort((a, b) => b.score - a.score);
  return unique;
}

function scoreItem(item, expandedWords, section) {
  let score = 0;
  const titleText = normalize(
    (item.titleKey && typeof window.t === 'function' ? window.t(item.titleKey, 'fr') + ' ' + window.t(item.titleKey, 'ar') + ' ' + window.t(item.titleKey, 'en') : '') + ' ' +
    (typeof item.title === 'object' ? (item.title.fr + ' ' + item.title.ar + ' ' + item.title.en) : (item.title || ''))
  );
  const descText = normalize(
    (item.descKey && typeof window.t === 'function' ? window.t(item.descKey, 'fr') + ' ' + window.t(item.descKey, 'ar') + ' ' + window.t(item.descKey, 'en') : '') + ' ' +
    (typeof item.desc === 'object' ? (item.desc.fr + ' ' + item.desc.ar + ' ' + item.desc.en) : (item.desc || ''))
  );
  const secText = normalize(
    section.titleKey && typeof window.t === 'function' ? window.t(section.titleKey, 'fr') + ' ' + window.t(section.titleKey, 'ar') + ' ' + window.t(section.titleKey, 'en') : ''
  );
  
  expandedWords.forEach(group => {
    group.forEach(w => {
      if (titleText.includes(w)) score += 10;
      if (descText.includes(w)) score += 3;
      if (secText.includes(w)) score += 1;
    });
  });
  
  return score;
}

function getCurrentLang() {
  return (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'fr';
}

// ============================================
// اقتراحات
// ============================================
function suggestWords(query) {
  const q = normalize(query);
  const suggestions = [];
  Object.keys(SYNONYMS).forEach(key => {
    const dist = levenshtein(q, normalize(key));
    if (dist <= 2 && dist > 0) {
      suggestions.push({ word: key, distance: dist });
    }
  });
  suggestions.sort((a, b) => a.distance - b.distance);
  return suggestions.slice(0, 3).map(s => s.word);
}

// تصدير
if (typeof window !== 'undefined') {
  window.smartSearch = smartSearch;
  window.suggestWords = suggestWords;
  window.normalize = normalize;
}
