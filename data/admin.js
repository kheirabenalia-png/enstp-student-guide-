// ============================================
// data/admin.js — قسم إدارتي
// Guide de survie ENSTP
// ============================================
// يحتوي على: الإدارة، الشؤون الطلابية، أمانة الأقسام،
//            الموارد البشرية، المالية
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "admin",
  icon: "🏛️",
  titleKey: "sectionAdmin",
  introKey: "adminIntro",
  type: "items",
  
  items: [
    { 
      titleKey: "adminDirection", 
      icon: "🏛️", 
      descKey: "adminDirectionDesc",
      location: "Bâtiment administratif — 1er étage",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: "",
      map: "ENSTP Garidi Kouba Alger"
    },
    { 
      titleKey: "adminScolarite", 
      icon: "📋", 
      descKey: "adminScolariteDesc",
      location: "Bâtiment administratif — RDC",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: "",
      map: "ENSTP Garidi Kouba Alger"
    },
    { 
      titleKey: "adminDept", 
      icon: "🎓", 
      descKey: "adminDeptDesc",
      location: "Bâtiment des départements",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: ""
    },
    { 
      titleKey: "adminRH", 
      icon: "👥", 
      descKey: "adminRHDesc",
      location: "Bâtiment administratif",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: ""
    },
    { 
      titleKey: "adminFinances", 
      icon: "💰", 
      descKey: "adminFinancesDesc",
      location: "Bâtiment administratif",
      hours: "Dimanche à Jeudi : 8h - 16h",
      phone: "À compléter",
      email: "",
      img: "",
      video: ""
    }
  ]
});
