// ============================================
// data/about.js — قسم من نحن
// Guide de survie ENSTP
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "about",
  icon: "👥",
  titleKey: "sectionAbout",
  introKey: "aboutIntro",
  type: "items",
  
  items: [
    
    // ========== 1. مهمتنا ==========
    {
      titleKey: "aboutMission",
      icon: "🎯",
      descKey: "aboutMissionDesc",
      img: "",
      video: ""
    },
    
    // ========== 2. فريقنا ==========
    {
      titleKey: "aboutTeam",
      icon: "👥",
      descKey: "aboutTeamDesc",
      img: "",
      video: "",
      extra: "🎓 1ère année Ingénieur — Groupe 2"
    },
    
    // ========== 3. قيمنا ==========
    {
      titleKey: "aboutValues",
      icon: "💛",
      descKey: "aboutValuesDesc",
      img: "",
      video: "",
      values: [
        { icon: "🤝", fr: "Entraide", ar: "التضامن", en: "Mutual aid" },
        { icon: "💯", fr: "Gratuité", ar: "المجانية", en: "Free" },
        { icon: "🎯", fr: "Respect", ar: "الاحترام", en: "Respect" },
        { icon: "🔍", fr: "Transparence", ar: "الشفافية", en: "Transparency" },
        { icon: "💛", fr: "Confiance", ar: "الثقة", en: "Trust" }
      ]
    },
    
    // ========== 4. انضم إلينا ==========
    {
      titleKey: "aboutJoin",
      icon: "📢",
      descKey: "aboutJoinDesc",
      img: "",
      video: "",
      link: "",
      extra: "📲 Contacte-nous via le groupe officiel"
    },
    
    // ========== 5. تنبيه ==========
    {
      titleKey: "aboutWarning",
      icon: "⚠️",
      descKey: "aboutWarningDesc",
      img: "",
      video: ""
    },
    
    // ========== 6. آخر تحديث ==========
    {
      titleKey: "aboutUpdate",
      icon: "📅",
      descKey: "aboutUpdateDesc",
      img: "",
      video: "",
      extra: "🎉 Version 2.0 — Octobre 2026"
    }
    
  ]
});
