// ============================================
// search.js — محرك البحث الذكي
// Guide de survie ENSTP
// ============================================

// ============================================
// 1. المرادفات
// ============================================
const SEARCH_SYNONYMS = {
  // فرنسي
  "salle": ["classe","amphi","amphithéâtre","cours","td","tp","laboratoire","labo"],
  "amphi": ["amphithéâtre","salle","grande salle"],
  "laboratoire": ["labo","tp","salle de tp"],
  "prof": ["enseignant","professeur","maître","intervenant"],
  "enseignant": ["prof","professeur","maître"],
  "probleme": ["aide","souci","difficulté","service"],
  "aide": ["probleme","service","secours"],
  "absence": ["absent","justificatif","manqué"],
  "carte": ["badge","identité","carte etudiant"],
  "transport": ["bus","taxi","métro","tram","déplacement"],
  "bus": ["transport","arrêt","ligne"],
  "taxi": ["transport","voiture","station"],
  "cite": ["résidence","logement","chambre"],
  "residence": ["cite","logement","chambre"],
  "manger": ["restaurant","repas","café","snack","pizzeria","boulangerie"],
  "restaurant": ["manger","repas","snack","café"],
  "bibliotheque": ["livre","adhésion","inscription","prêt"],
  "notes": ["résultats","examens","moyenne"],
  "examens": ["notes","résultats","contrôle"],
  "sport": ["football","basket","running","gym"],
  "medecin": ["docteur","santé","hopital","infirmerie"],
  "pharmacie": ["médicament","santé"],
  "info": ["informatique","programmation"],

  // عربي
  "قاعة": ["قسم","مدرج","صف","حصة","سال"],
  "مدرج": ["قاعة","أمفي","حصة"],
  "مخبر": ["مختبر","تجربة","أعمال تطبيقية"],
  "أستاذ": ["معلم","بروف","مدرس"],
  "أساتذة": ["أستاذ","معلم","بروف"],
  "مشكلة": ["مساعدة","سؤال","صعوبة","خدمة"],
  "مساعدة": ["مشكلة","خدمة","عون"],
  "غياب": ["غائب","تبرير","مبرر"],
  "بطاقة": ["هوية","شارة"],
  "نقل": ["حافلة","طاكسي","مترو","ترامواي","تنقل"],
  "حافلة": ["نقل","باص","محطة"],
  "طاكسي": ["نقل","سيارة","تكسي"],
  "إقامة": ["حي","سكن","غرفة"],
  "سكن": ["إقامة","حي","غرفة"],
  "أكل": ["مطعم","ماكلة","وجبة","طعام"],
  "ماكلة": ["أكل","مطعم","وجبة"],
  "مطعم": ["أكل","ماكلة","وجبة"],
  "مكتبة": ["كتاب","انضمام","استعارة"],
  "نقاط": ["نتائج","امتحانات","معدل"],
  "امتحانات": ["نقاط","نتائج","اختبارات"],
  "رياضة": ["كرة","جري","تمرين"],
  "طبيب": ["عيادة","صحة","مستشفى"],
  "صيدلية": ["دواء","صحة"],
  "إعلام": ["معلوماتية","برمجة"],

  // إنجليزي
  "room": ["class","amphi","classroom","lecture"],
  "teacher": ["professor","instructor"],
  "problem": ["help","issue","service"],
  "absence": ["absent","justification"],
  "card": ["badge","student","id"],
  "bus": ["transport","stop","line"],
  "taxi": ["transport","car","station"],
  "dorm": ["residence","housing","room"],
  "eat": ["restaurant","food","meal"],
  "food": ["eat","restaurant","meal"],
  "library": ["book","membership"],
  "grades": ["results","exams","marks"],
  "sport": ["football","basket","running"],
  "doctor": ["hospital","health"],
  "pharmacy": ["medicine","health"]
};

// ============================================
// 2. تطبيع النص
// ============================================
function searchNormalize(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/[éèêë]/g,'e').replace(/[àâä]/g,'a').replace(/[îï]/g,'i')
    .replace(/[ôö]/g,'o').replace(/[ùûü]/g,'u').replace(/[ç]/g,'c')
    .replace(/[إأآا]/g,'ا').replace(/[ىي]/g,'ي').replace(/[ةه]/g,'ه')
    .replace(/[ًٌٍَُِّْ]/g,'').trim();
}

// ============================================
// 3. توسيع الكلمة
// ============================================
function searchExpandWord(word) {
  const norm = searchNormalize(word);
  const expanded = new Set([norm]);
  Object.keys(SEARCH_SYNONYMS).forEach(key => {
    if (searchNormalize(key) === norm) {
      SEARCH_SYNONYMS[key].forEach(syn => expanded.add(searchNormalize(syn)));
    }
  });
  return Array.from(expanded);
}

// ============================================
// 4. البحث الرئيسي
// ============================================
function smartSearch(query) {
  const q = searchNormalize(query);
  if (!q) return [];

  const words = q.split(/\s+/).filter(w => w.length > 1);
  if (words.length === 0) return [];

  const expandedWords = words.map(w => searchExpandWord(w));
  const results = [];
  const SECTIONS = window.SECTIONS || [];

  SECTIONS.forEach(section => {
    // الأقسام العادية (items)
    if (section.items) {
      section.items.forEach((item, idx) => {
        let score = 0;
        const titleText = searchNormalize(
          (item.titleKey ? (t(item.titleKey) || '') : '') + ' ' +
          (item.title || '')
        );
        const descText = searchNormalize(
          item.descKey ? (t(item.descKey) || '') : ''
        );
        const secText = searchNormalize(
          section.titleKey ? (t(section.titleKey) || '') : ''
        );

        expandedWords.forEach(group => {
          group.forEach(w => {
            if (titleText.includes(w)) score += 10;
            if (descText.includes(w)) score += 3;
            if (secText.includes(w)) score += 1;
          });
        });

        if (score > 0) {
          results.push({ section, item, itemIndex: idx, score });
        }
      });
    }

    // الأقسام ذات الفئات (categories)
    if (section.categories) {
      section.categories.forEach(cat => {
        // فئة الخريطة
        if (cat.type === 'map' && cat.buildings) {
          cat.buildings.forEach(b => {
            const bText = searchNormalize(
              (b.nameKey ? (t(b.nameKey) || '') : '') + ' ' + (b.name || '')
            );
            let score = 0;
            expandedWords.forEach(group => group.forEach(w => {
              if (bText.includes(w)) score += 10;
            }));
            if (score > 0) {
              results.push({ 
                section, 
                item: { 
                  titleKey: b.nameKey, 
                  icon: b.icon, 
                  title: b.name 
                }, 
                score 
              });
            }
          });
        }

        // الفئات ذات items
        if (cat.items) {
          cat.items.forEach((item, idx) => {
            let score = 0;
            const titleText = searchNormalize(
              (item.titleKey ? (t(item.titleKey) || '') : '') + ' ' + (item.title || '')
            );
            const descText = searchNormalize(
              item.descKey ? (t(item.descKey) || '') : ''
            );
            const catText = searchNormalize(
              cat.titleKey ? (t(cat.titleKey) || '') : ''
            );

            expandedWords.forEach(group => group.forEach(w => {
              if (titleText.includes(w)) score += 10;
              if (descText.includes(w)) score += 3;
              if (catText.includes(w)) score += 1;
            }));

            if (score > 0) {
              results.push({
                section,
                item,
                category: cat,
                itemIndex: idx,
                score
              });
            }
          });
        }
      });
    }
  });

  results.sort((a, b) => b.score - a.score);
  return results;
}

// ============================================
// تصدير
// ============================================
if (typeof window !== 'undefined') {
  window.smartSearch = smartSearch;
  window.searchNormalize = searchNormalize;
}
