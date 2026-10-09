// ============================================
// data/green.js — قسم المشروع الأخضر
// Guide de survie ENSTP
// ============================================
// يحتوي على: إعادة تدوير الورق، الإيكولوجيا،
//            جمع البلاستيك، زراعة الأشجار
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "green",
  icon: "♻️",
  titleKey: "sectionGreen",
  introKey: "greenIntro",
  type: "items",
  
  items: [
    
    // ========== 1. إعادة تدوير الورق ==========
    {
      titleKey: "greenRecy",
      icon: "📄",
      descKey: "greenRecyDesc",
      img: "",
      video: "",
      extra: "🌱 Chaque kg de papier recyclé sauve 17 arbres",
      details: [
        { icon: "📦", fr: "Boîtes de collecte dans les couloirs", ar: "صناديق جمع في الممرات", en: "Collection boxes in corridors" },
        { icon: "📝", fr: "Dépose tes feuilles usagées", ar: "ضع أوراقك المستعملة", en: "Drop your used papers" },
        { icon: "♻️", fr: "Collecte hebdomadaire", ar: "جمع أسبوعي", en: "Weekly collection" },
        { icon: "🌳", fr: "Recyclage en papier neuf", ar: "إعادة تدوير لورق جديد", en: "Recycling into new paper" }
      ]
    },
    
    // ========== 2. الإيكولوجيا ==========
    {
      titleKey: "greenEcologie",
      icon: "🌍",
      descKey: "greenEcologieDesc",
      img: "",
      video: "",
      details: [
        { icon: "🌱", fr: "Plantation d'arbres sur le campus", ar: "زراعة الأشجار في الحرم", en: "Tree planting on campus" },
        { icon: "🚯", fr: "Nettoyage des espaces verts", ar: "تنظيف المساحات الخضراء", en: "Cleaning green spaces" },
        { icon: "🎓", fr: "Sensibilisation des étudiants", ar: "توعية الطلاب", en: "Student awareness" },
        { icon: "💡", fr: "Économie d'énergie", ar: "توفير الطاقة", en: "Energy saving" }
      ]
    },
    
    // ========== 3. جمع البلاستيك ==========
    {
      titleKey: "greenPlastic",
      icon: "🥤",
      descKey: "greenPlasticDesc",
      img: "",
      video: "",
      extra: "♻️ Le plastique met 400 ans à se décomposer",
      details: [
        { icon: "🥤", fr: "Bouteilles en plastique", ar: "قوارير بلاستيكية", en: "Plastic bottles" },
        { icon: "🛍️", fr: "Sacs plastiques", ar: "أكياس بلاستيكية", en: "Plastic bags" },
        { icon: "📦", fr: "Points de collecte identifiés", ar: "نقاط جمع محددة", en: "Identified collection points" }
      ]
    },
    
    // ========== 4. زراعة الأشجار ==========
    {
      titleKey: "greenTrees",
      icon: "🌳",
      descKey: "greenTreesDesc",
      img: "",
      video: "",
      details: [
        { icon: "🌳", fr: "Campagne de plantation annuelle", ar: "حملة زراعة سنوية", en: "Annual planting campaign" },
        { icon: "👥", fr: "Chaque étudiant peut planter un arbre", ar: "كل طالب يمكنه زراعة شجرة", en: "Each student can plant a tree" },
        { icon: "💧", fr: "Suivi et arrosage", ar: "متابعة وسقي", en: "Follow-up and watering" }
      ]
    }
    
  ]
});
