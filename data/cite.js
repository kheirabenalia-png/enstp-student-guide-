// ============================================
// data/cite.js — قسم الإقامة الجامعية
// Guide de survie ENSTP
// ============================================
// يحتوي على: إقامة قاريدي، سعيد حمدين، رويسو،
//            المطعم الجامعي، قاعات الدراسة
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "cite",
  icon: "🏠",
  titleKey: "sectionCite",
  introKey: "citeIntro",
  type: "items",
  
  items: [
    // ========== 1. إقامة قاريدي ==========
    { 
      titleKey: "citeGaridi", 
      icon: "🏠", 
      descKey: "citeGaridiDesc",
      location: "Garidi, Kouba",
      distance: "5 min à pied de l'ENSTP",
      capacity: "À compléter",
      services: "Restaurant, laverie, salles d'étude",
      map: "Cité universitaire Garidi Kouba Alger",
      img: "",
      video: ""
    },
    
    // ========== 2. إقامة سعيد حمدين ==========
    { 
      titleKey: "citeSaid", 
      icon: "🏠", 
      descKey: "citeSaidDesc",
      location: "Saïd Hamdine, Alger",
      distance: "15 min en bus",
      capacity: "À compléter",
      services: "Restaurant, laverie, salles d'étude",
      map: "Cité universitaire Saïd Hamdine Alger",
      img: "",
      video: ""
    },
    
    // ========== 3. إقامة رويسو ==========
    { 
      titleKey: "citeRouiba", 
      icon: "🏠", 
      descKey: "citeRouibaDesc",
      location: "Rouiba, Alger",
      distance: "45 min en transport",
      capacity: "À compléter",
      services: "Restaurant, laverie, salles d'étude",
      map: "Cité universitaire Rouiba Alger",
      img: "",
      video: ""
    },
    
    // ========== 4. المطعم الجامعي ==========
    { 
      titleKey: "citeResto", 
      icon: "🍽️", 
      descKey: "citeRestoDesc",
      location: "Dans chaque résidence",
      hours: "Matin / Midi / Soir",
      services: "Repas à tarif étudiant",
      img: "",
      video: ""
    },
    
    // ========== 5. قاعات الدراسة ==========
    { 
      titleKey: "citeEtude", 
      icon: "📚", 
      descKey: "citeEtudeDesc",
      location: "Dans chaque résidence",
      hours: "Jusqu'à 22h",
      services: "Espaces calmes pour réviser",
      img: "",
      video: ""
    }
  ]
});
