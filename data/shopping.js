// ============================================
// data/shopping.js — قسم التسوق والأكل
// Guide de survie ENSTP
// ============================================
// يحتوي على: مطاعم، مقاهي، طباعة، صيدلية،
//            أطباء، الضمان الاجتماعي،
//            بن عمر القبة، مركز تشوف
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "shopping",
  icon: "🍽️",
  titleKey: "sectionShopping",
  introKey: "shoppingIntro",
  type: "items",
  
  items: [
    // ========== 1. مطاعم ==========
    { 
      titleKey: "shopResto", 
      icon: "🍽️", 
      descKey: "shopRestoDesc",
      location: "Autour de l'école",
      map: "restaurant près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 2. مقاهي ==========
    { 
      titleKey: "shopCafe", 
      icon: "☕", 
      descKey: "shopCafeDesc",
      location: "Autour de l'école",
      map: "café près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 3. طباعة وتصوير ==========
    { 
      titleKey: "shopPrint", 
      icon: "🖨️", 
      descKey: "shopPrintDesc",
      location: "Autour de l'école",
      map: "photocopie près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 4. صيدليات ==========
    { 
      titleKey: "shopPharma", 
      icon: "💊", 
      descKey: "shopPharmaDesc",
      location: "Autour de l'école",
      map: "pharmacie près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 5. أطباء ==========
    { 
      titleKey: "shopDocteur", 
      icon: "🩺", 
      descKey: "shopDocteurDesc",
      location: "Kouba et environs",
      map: "médecin près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 6. الضمان الاجتماعي (CNAS) ==========
    { 
      titleKey: "shopSecu", 
      icon: "💼", 
      descKey: "shopSecuDesc",
      location: "Kouba ou Ben Omar",
      map: "CNAS près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 7. بن عمر — القبة ==========
    { 
      titleKey: "shopBenOmar", 
      icon: "🛍️", 
      descKey: "shopBenOmarDesc",
      location: "Kouba, Alger",
      map: "Ben Omar Kouba Alger",
      img: "",
      video: ""
    },
    
    // ========== 8. مركز تشوف ==========
    { 
      titleKey: "shopTchof", 
      icon: "🎬", 
      descKey: "shopTchofDesc",
      location: "Kouba, Alger",
      map: "Centre Tchof Kouba Alger",
      img: "",
      video: ""
    }
  ]
});
