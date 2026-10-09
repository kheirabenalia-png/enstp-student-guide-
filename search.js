// ============================================
// search.js — محرك البحث الذكي
// Guide de survie ENSTP
// ============================================

// ============================================
// 1. المرادفات
// ============================================
const SYNONYMS = {
  // ==== فرنسي ====
  "salle": ["classe", "amphi", "amphithéâtre", "cours", "td", "tp", "laboratoire", "labo"],
  "amphi": ["amphithéâtre", "salle", "grande salle"],
  "laboratoire": ["labo", "tp", "salle de tp", "expérience"],
  "prof": ["enseignant", "professeur", "maître", "intervenant"],
  "enseignant": ["prof", "professeur", "maître"],
  "probleme": ["aide", "souci", "difficulté", "service", "question"],
  "aide": ["probleme", "service", "secours", "assistance"],
  "absence": ["absent", "justificatif", "manqué"],
  "carte": ["badge", "identité", "carte etudiant"],
  "transport": ["bus", "taxi", "métro", "tram", "déplacement", "trajet"],
  "bus": ["transport", "arrêt", "ligne", "autobus"],
  "taxi": ["transport", "voiture", "station", "tacsi"],
  "cite": ["résidence", "logement", "chambre", "internat"],
  "residence": ["cite", "logement", "chambre", "dortoir"],
  "manger": ["restaurant", "repas", "café", "snack", "pizzeria", "boulangerie", "nourriture", "bouffe"],
  "restaurant": ["manger", "repas", "snack", "café"],
  "bibliotheque": ["livre", "adhésion", "inscription", "prêt", "biblio"],
  "notes": ["résultats", "examens", "moyenne"],
  "examens": ["notes", "résultats", "contrôle"],
  "tourisme": ["visite", "lieu", "sortie", "touristique", "alger", "loisir"],
  "sport": ["football", "basket", "running", "gym"],
  "medecin": ["docteur", "santé", "hopital", "infirmerie"],
  "pharmacie": ["médicament", "santé"],
  "laboratoire": ["labo", "expérience"],
  "physique": ["labo physique", "expérience physique"],
  "chimie": ["labo chimie", "expérience chimie"],
  "mecanique": ["fluides", "hydraulique"],
  "electricite": ["circuit", "électrique"],
  "informatique": ["info", "ordinateur", "programmation"],
  "economie": ["éco", "gestion"],
  "gestion": ["management", "entreprise"],

  // ==== عربي ====
  "قاعة": ["قسم", "مدرج", "صف", "حصة", "سال", "قاعه"],
  "مدرج": ["قاعة", "أمفي", "حصة", "مدرج كبير"],
  "مخبر": ["مختبر", "تجربة", "أعمال تطبيقية", "لابو"],
  "أستاذ": ["معلم", "بروف", "أستاذة", "مدرس"],
  "أساتذة": ["أستاذ", "معلم", "بروف", "مدرسين"],
  "مشكلة": ["مساعدة", "سؤال", "صعوبة", "خدمة", "مشكله"],
  "مساعدة": ["مشكلة", "خدمة", "عون"],
  "غياب": ["غائب", "تبرير", "مبرر", "تخلف"],
  "بطاقة": ["بطاقه", "هوية", "شارة", "كارط"],
  "نقل": ["حافلة", "طاكسي", "مترو", "ترامواي", "تنقل", "باص"],
  "حافلة": ["نقل", "باص", "محطة", "حافله"],
  "طاكسي": ["نقل", "سيارة", "تكسي", "طاكسي جماعي"],
  "إقامة": ["حي", "سكن", "غرفة", "داخلية", "اقامه"],
  "سكن": ["إقامة", "حي", "غرفة", "سكن جامعي"],
  "أكل": ["مطعم", "ماكلة", "وجبة", "مأكولات", "طعام", "اكل"],
  "ماكلة": ["أكل", "مطعم", "وجبة", "طعام"],
  "مطعم": ["أكل", "ماكلة", "وجبة", "طعام", "ريستوران"],
  "مكتبة": ["كتاب", "انضمام", "تسجيل", "استعارة", "مكتبه"],
  "نقاط": ["نتائج", "امتحانات", "معدل", "علامات"],
  "امتحانات": ["نقاط", "نتائج", "اختبارات", "امتحان"],
  "سياحة": ["زيارة", "أماكن", "خرجة", "العاصمة", "الجزائر"],
  "رياضة": ["كرة", "جري", "تمرين", "ملعب"],
  "طبيب": ["عيادة", "صحة", "مستشفى", "إسعاف"],
  "صيدلية": ["دواء", "صحة", "ميدكاية"],
  "فيزياء": ["مخبر فيزياء", "تجربة"],
  "كيمياء": ["مخبر كيمياء", "تحليل"],
  "كهرباء": ["مخبر كهرباء", "دارة"],
  "ميكانيك": ["موائع", "هيدروليك"],
  "اقتصاد": ["تسيير", "مالية"],
  "تسيير": ["إدارة", "مؤسسة"],
  "إعلام": ["حاسوب", "برمجة", "معلومية"],
  "بحث": ["بحث علمي", "مرجع"],
  "منحة": ["مساعدة مالية", "بورصة"],

  // ==== إنجليزي ====
  "room": ["class", "amphi", "classroom", "lecture", "lab"],
  "teacher": ["professor", "instructor", "prof"],
  "problem": ["help", "issue", "question", "service"],
  "help": ["problem", "service", "assistance"],
  "absence": ["absent", "justification"],
  "card": ["badge", "student", "id"],
  "transport": ["bus", "taxi", "metro", "tram"],
  "bus": ["transport", "stop", "line"],
  "taxi": ["transport", "car", "station"],
  "dorm": ["residence", "housing", "room"],
  "eat": ["restaurant", "food", "meal"],
  "food": ["eat", "restaurant", "meal"],
  "library": ["book", "membership"],
  "grades": ["results", "exams", "marks"],
  "exams": ["grades", "results", "tests"],
  "tourism": ["visit", "place", "outing", "algiers"],
  "sport": ["football", "basket", "running"],
  "doctor": ["hospital", "health", "clinic"],
  "pharmacy": ["medicine", "health"],
  "physics": ["lab", "experiment"],
  "chemistry": ["lab", "analysis"],
  "electricity": ["circuit", "electrical"],
  "computer": ["programming", "it"],
  "economics": ["management", "business"],
  "management": ["business", "company"]
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
// 3. تطبيع النص
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
// 4. توسيع الكلمة بالمرادفات
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
// 5. البحث الرئيسي
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
        // بحث في عنوان التصنيف
        if (cat.titleKey) {
          const ct = (typeof window !== 'undefined' && window.t) ? window.t(cat.titleKey, getCurrentLang()) : '';
          const ctext = normalize(ct);
          expandedWords.forEach(group => group.forEach(w => {
            if (ctext.includes(w)) {
              results.push({
                section: section,
                item: { titleKey: cat.titleKey, icon: cat.icon, descKey: cat.descKey },
                itemIndex: null,
                categoryId: cat.id,
                score: 15
              });
            }
          }));
        }
        
        // بحث في items داخل التصنيف
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

// ============================================
// 6. حساب أهمية النتيجة
// ============================================
function scoreItem(item, expandedWords, section) {
  let score = 0;
  
  const titleText = normalize(
    (item.titleKey ? getTextForKey(item.titleKey) : '') + ' ' +
    (item.title || '')
  );
  const descText = normalize(
    (item.descKey ? getTextForKey(item.descKey) : '') + ' ' +
    (item.desc || '')
  );
  const secText = normalize(
    (section.titleKey ? getTextForKey(section.titleKey) : '')
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

// ============================================
// 7. الحصول على نص من مفتاح (كل اللغات)
// ============================================
function getTextForKey(key) {
  if (typeof LANG_DATA === 'undefined') return '';
  let text = '';
  ['fr', 'ar', 'en'].forEach(lang => {
    if (LANG_DATA[lang] && LANG_DATA[lang][key]) {
      text += ' ' + LANG_DATA[lang][key];
    }
  });
  return text.trim();
}

function getCurrentLang() {
  return (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'fr';
}

// ============================================
// 8. اقتراحات ذكية
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

// ============================================
// تصدير
// ============================================
if (typeof window !== 'undefined') {
  window.smartSearch = smartSearch;
  window.suggestWords = suggestWords;
  window.normalize = normalize;
}
