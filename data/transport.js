// ============================================
// data/transport.js — قسم النقل
// Guide de survie ENSTP
// ============================================
// يحتوي على: نقل جامعي، نقل عمومي، تكاسي جماعية،
//            هيتش/VTC، مترو، قطار، ترامواي،
//            بطاقة سيترام، التنقل بين الولايات،
//            محطة الخروبة، مطار، محطة قطار
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "transport",
  icon: "🚌",
  titleKey: "sectionTransport",
  introKey: "transportIntro",
  type: "items",
  
  items: [
    // ========== 1. النقل الجامعي ==========
    { 
      titleKey: "trBusUniv", 
      icon: "🚐", 
      descKey: "trBusUnivDesc",
      location: "Devant l'école",
      hours: "Horaires affichés à l'entrée",
      map: "ENSTP Garidi Kouba",
      img: "",
      video: ""
    },
    
    // ========== 2. النقل العمومي ==========
    { 
      titleKey: "trBusPublic", 
      icon: "🚌", 
      descKey: "trBusPublicDesc",
      location: "Arrêts autour de l'école",
      map: "arrêt de bus près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 3. سيارات أجرة جماعية ==========
    { 
      titleKey: "trTaxi", 
      icon: "🚕", 
      descKey: "trTaxiDesc",
      location: "Stations de taxi à Kouba",
      map: "station de taxi près de ENSTP Kouba",
      img: "",
      video: ""
    },
    
    // ========== 4. هيتش و VTC ==========
    { 
      titleKey: "trHeetch", 
      icon: "📱", 
      descKey: "trHeetchDesc",
      location: "Partout à Alger",
      map: "Kouba Alger",
      img: "",
      video: ""
    },
    
    // ========== 5. المترو ==========
    { 
      titleKey: "trMetro", 
      icon: "🚇", 
      descKey: "trMetroDesc",
      location: "Station la plus proche : Kouba",
      map: "station métro Kouba Alger",
      img: "",
      video: ""
    },
    
    // ========== 6. القطار ==========
    { 
      titleKey: "trTrain", 
      icon: "🚆", 
      descKey: "trTrainDesc",
      location: "Gares d'Alger",
      map: "gare SNTF Alger",
      img: "",
      video: ""
    },
    
    // ========== 7. الترامواي ==========
    { 
      titleKey: "trTram", 
      icon: "🚊", 
      descKey: "trTramDesc",
      location: "Est d'Alger",
      map: "tramway Alger",
      img: "",
      video: ""
    },
    
    // ========== 8. بطاقة سيترام (مجانية) ==========
    { 
      titleKey: "trSitram", 
      icon: "🎫", 
      descKey: "trSitramDesc",
      location: "Guichets SITRAM",
      procedure: "Carte d'étudiant + photos",
      img: "",
      video: ""
    },
    
    // ========== 9. التنقل بين الولايات ==========
    { 
      titleKey: "trInterWilaya", 
      icon: "🗺️", 
      descKey: "trInterWilayaDesc",
      location: "Gare routière / SNTF",
      map: "gare routière Alger",
      img: "",
      video: ""
    },
    
    // ========== 10. محطة الخروبة ==========
    { 
      titleKey: "trGareRoutiere", 
      icon: "🚏", 
      descKey: "trGareRoutiereDesc",
      location: "El Kharrouba, Alger",
      map: "gare routière Kharouba Alger",
      img: "",
      video: ""
    },
    
    // ========== 11. المطار ==========
    { 
      titleKey: "trAeroport", 
      icon: "✈️", 
      descKey: "trAeroportDesc",
      location: "Dar El Beïda, Alger",
      map: "Aéroport Houari Boumediene Alger",
      img: "",
      video: ""
    },
    
    // ========== 12. محطة القطار ==========
    { 
      titleKey: "trGareTrain", 
      icon: "🚉", 
      descKey: "trGareTrainDesc",
      location: "Agha / Alger Centre",
      map: "gare SNTF Alger Centre",
      img: "",
      video: ""
    }
  ]
});
