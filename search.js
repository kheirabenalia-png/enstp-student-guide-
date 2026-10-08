// ============================================
// search.js — محرك البحث الذكي
// Guide de survie ENSTP
// ============================================

// ============================================
// 1. المرادفات (كلمات لها نفس المعنى)
// ============================================
const SYNONYMS = {
  // فرنسي
  "manger": ["restaurant", "repas", "bouffe", "café", "snack", "pizzeria", "boulangerie", "nourriture"],
  "restaurant": ["manger", "repas", "snack", "café", "pizzeria"],
  "salle": ["classe", "amphi", "amphithéâtre", "cours", "td", "tp"],
  "amphi": ["amphithéâtre", "salle", "cours"],
  "problème": ["aide", "souci", "difficulté", "question", "service"],
  "aide": ["problème", "service", "secours", "assistance"],
  "absence": ["absent", "justificatif", "justification", "manqué"],
  "carte": ["badge", "étudiant", "identité"],
  "transport": ["bus", "taxi", "métro", "tram", "déplacement"],
  "bus": ["transport", "arrêt", "ligne"],
  "taxi": ["transport", "voiture", "station"],
  "cité": ["résidence", "logement", "chambre", "internat"],
  "résidence": ["cité", "logement", "chambre"],
  "prof": ["enseignant", "professeur", "maître", "enseignants"],
  "enseignant": ["prof", "professeur", "maître"],
  "enseignants": ["prof", "professeur", "enseignant"],
  "bibliothèque": ["livre", "adhésion", "inscription", "prêt"],
  "notes": ["résultats", "examens", "notes", "moyenne"],
  "examens": ["notes", "résultats", "contrôle"],
  "tourisme": ["visite", "lieu", "sortie", "touristique", "alger"],
  
  // عربي
  "أكل": ["مطعم", "ماكلة", "وجبة", "مأكولات", "طعام"],
  "ماكلة": ["أكل", "مطعم", "وجبة", "طعام"],
  "مطعم": ["أكل", "ماكلة", "وجبة", "طعام"],
  "قاعة": ["قسم", "مدرج", "صف", "حصة"],
  "مدرج": ["قاعة", "أمفي", "حصة"],
  "مشكلة": ["مساعدة", "سؤال", "صعوبة", "خدمة"],
  "مساعدة": ["مشكلة", "خدمة", "عون"],
  "غياب": ["غائب", "تبرير", "مبرر", "تخلف"],
  "بطاقة": ["بطاقة الطالب", "هوية", "شارة"],
  "نقل": ["حافلة", "طاكسي", "مترو", "ترامواي", "تنقل"],
  "حافلة": ["نقل", "باص", "محطة", "خط"],
  "طاكسي": ["نقل", "سيارة", "محطة", "تكسي"],
  "إقامة": ["حي", "سكن", "غرفة", "داخلية"],
  "سكن": ["إقامة", "حي", "غرفة"],
  "أستاذ": ["معلم", "بروف", "أساتذة"],
  "أساتذة": ["أستاذ", "معلم", "بروف"],
  "مكتبة": ["كتاب", "انضمام", "تسجيل", "استعارة"],
  "نقاط": ["نتائج", "امتحانات", "معدل", "علامات"],
  "امتحانات": ["نقاط", "نتائج", "اختبارات"],
  "سياحة": ["زيارة", "أماكن", "خرجة", "العاصمة", "الجزائر"],
  
  // إنجليزي
  "eat": ["restaurant", "food", "meal", "snack", "café"],
  "food": ["eat", "restaurant", "meal"],
  "room": ["class", "amphi", "classroom", "lecture"],
  "problem": ["help", "issue", "question", "service"],
  "help": ["problem", "service", "assistance"],
  "absence": ["absent", "justification", "missed"],
  "card": ["badge", "student", "id"],
  "transport": ["bus", "taxi", "metro", "tram"],
  "bus": ["transport", "stop", "line"],
  "taxi": ["transport", "car", "station"],
  "dorm": ["residence", "housing", "room"],
  "teacher": ["professor", "instructor", "teachers"],
  "teachers": ["teacher", "professor", "instructors"],
  "library": ["book", "membership", "registration"],
  "grades": ["results", "exams", "marks"],
  "exams": ["grades", "results", "tests"],
  "tourism": ["visit", "place", "outing", "algiers"]
};

// ============================================
// 2. تصحيح الأخطاء الإملائية
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
// 3. تطبيع النص (توحيد الأحرف)
// ============================================
function normalize(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâä]/g, 'a')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    // عربي: توحيد الألف
    .replace(/[إأآا]/g, 'ا')
    .replace(/[ىي]/g, 'ي')
    .replace(/[ةه]/g, 'ه')
    .replace(/[ًٌٍَُِّْ]/g, '') // حذف التشكيل
    .trim();
}

// ============================================
// 4. توسيع الكلمة بالمرادفات
// ============================================
function expandWord(word) {
  const norm = normalize(word);
  const expanded = new Set([norm]);
  
  // ابحث في المرادفات
  Object.keys(SYNONYMS).forEach(key => {
    const normKey = normalize(key);
    if (normKey === norm) {
      SYNONYMS[key].forEach(syn => expanded.add(normalize(syn)));
    }
  });
  
  return Array.from(expanded);
}

// ============================================
// 5. البحث الرئيسي
// ============================================
function smartSearch(query, sections, currentLang) {
  const q = normalize(query);
  if (!q) return [];
  
  // قسّم السؤال إلى كلمات
  const words = q.split(/\s+/).filter(w => w.length > 1);
  if (words.length === 0) return [];
  
  // وسّع كل كلمة بالمرادفات
  const expandedWords = words.map(w => expandWord(w));
  
  const results = [];
  
  sections.forEach(section => {
    // ابحث في البطاقات العادية
    if (section.items) {
      section.items.forEach(item => {
        const score = scoreItem(item, expandedWords, section);
        if (score > 0) {
          results.push({
            section: section,
            item: item,
            score: score,
            type: 'item'
          });
        }
      });
    }
    
    // ابحث في شجرة المشاكل
    if (section.tree) {
      section.tree.forEach(node => {
        const score = scoreTree(node, expandedWords, section);
        if (score > 0) {
          results.push({
            section: section,
            item: {
              title: node.q,
              desc: node.a.service,
              procedure: node.a.procedure
            },
            score: score,
            type: 'tree'
          });
        }
      });
    }
  });
  
  // رتّب حسب الأهمية
  results.sort((a, b) => b.score - a.score);
  
  return results;
}

// ============================================
// 6. حساب أهمية النتيجة
// ============================================
function scoreItem(item, expandedWords, section) {
  let score = 0;
  
  // اجمع كل النصوص
  const titleText = normalize(
    (item.title?.fr || '') + ' ' +
    (item.title?.ar || '') + ' ' +
    (item.title?.en || '')
  );
  const descText = normalize(
    (item.desc?.fr || '') + ' ' +
    (item.desc?.ar || '') + ' ' +
    (item.desc?.en || '')
  );
  const sectionText = normalize(
    (section.title?.fr || '') + ' ' +
    (section.title?.ar || '') + ' ' +
    (section.title?.en || '')
  );
  
  expandedWords.forEach(wordGroup => {
    wordGroup.forEach(word => {
      // في العنوان = 10 نقاط
      if (titleText.includes(word)) score += 10;
      // في الوصف = 3 نقاط
      if (descText.includes(word)) score += 3;
      // في عنوان القسم = 1 نقطة
      if (sectionText.includes(word)) score += 1;
    });
  });
  
  return score;
}

function scoreTree(node, expandedWords, section) {
  let score = 0;
  const qText = normalize(
    (node.q?.fr || '') + ' ' +
    (node.q?.ar || '') + ' ' +
    (node.q?.en || '')
  );
  const aText = normalize(
    (node.a?.service?.fr || '') + ' ' +
    (node.a?.service?.ar || '') + ' ' +
    (node.a?.service?.en || '') + ' ' +
    (node.a?.procedure?.fr || '') + ' ' +
    (node.a?.procedure?.ar || '') + ' ' +
    (node.a?.procedure?.en || '')
  );
  
  expandedWords.forEach(wordGroup => {
    wordGroup.forEach(word => {
      if (qText.includes(word)) score += 10;
      if (aText.includes(word)) score += 3;
    });
  });
  
  return score;
}

// ============================================
// 7. اقتراحات ذكية (عند عدم وجود نتائج)
// ============================================
function suggestWords(query) {
  const q = normalize(query);
  const suggestions = [];
  
  // إذا كان السؤال قريباً من كلمة معروفة
  Object.keys(SYNONYMS).forEach(key => {
    const dist = levenshtein(q, normalize(key));
    if (dist <= 2 && dist > 0) {
      suggestions.push({ word: key, distance: dist });
    }
  });
  
  suggestions.sort((a, b) => a.distance - b.distance);
  return suggestions.slice(0, 3).map(s => s.word);
}

// ============================================
// تصدير الدوال
// ============================================
if (typeof window !== 'undefined') {
  window.smartSearch = smartSearch;
  window.suggestWords = suggestWords;
  window.normalize = normalize;
}
