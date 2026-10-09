// ============================================
// data/courses.js — قسم الدورات
// Guide de survie ENSTP
// ============================================
// يحتوي على: دورات الرياضيات، الفيزياء، الإعلام الآلي
// ⚠️ أضف روابط الدورات لاحقاً في حقل link
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "courses",
  icon: "📚",
  titleKey: "sectionCourses",
  introKey: "coursesIntro",
  type: "items",
  
  items: [
    
    // ========== 1. الرياضيات ==========
    {
      titleKey: "courseMath",
      icon: "🔢",
      descKey: "courseMathDesc",
      img: "",
      video: "",
      link: "",           // ⬅️ ضع هنا رابط الدورة (PDF, YouTube...)
      duration: "À compléter",
      level: "À compléter",
      extra: "📖 Analyse, algèbre, statistiques"
    },
    
    // ========== 2. الفيزياء ==========
    {
      titleKey: "coursePhysique",
      icon: "⚛️",
      descKey: "coursePhysiqueDesc",
      img: "",
      video: "",
      link: "",
      duration: "À compléter",
      level: "À compléter",
      extra: "⚛️ Mécanique, thermodynamique, électricité"
    },
    
    // ========== 3. الإعلام الآلي ==========
    {
      titleKey: "courseInfo",
      icon: "💻",
      descKey: "courseInfoDesc",
      img: "",
      video: "",
      link: "",
      duration: "À compléter",
      level: "À compléter",
      extra: "💻 Algorithmes, programmation, outils"
    }
    
  ]
});
