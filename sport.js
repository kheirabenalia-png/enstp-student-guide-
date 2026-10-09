// ============================================
// data/sport.js — قسم الرياضة
// Guide de survie ENSTP
// ============================================
// يحتوي على: رياضة جامعية، رياضة خارج الإقامة،
//            كرة القدم، الجري، كرة السلة والطائرة
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "sport",
  icon: "⚽",
  titleKey: "sectionSport",
  introKey: "sportIntro",
  type: "items",
  
  items: [
    
    // ========== 1. الرياضة الجامعية ==========
    {
      titleKey: "sportUniv",
      icon: "🎓",
      descKey: "sportUnivDesc",
      img: "",
      video: "",
      extra: "🏆 Organisé par l'ONSU (Office National des Sports Universitaires)",
      details: [
        { icon: "🏀", fr: "Basket", ar: "كرة السلة", en: "Basketball" },
        { icon: "⚽", fr: "Football", ar: "كرة القدم", en: "Football" },
        { icon: "🏐", fr: "Volley", ar: "الكرة الطائرة", en: "Volleyball" },
        { icon: "🏃", fr: "Athlétisme", ar: "ألعاب القوى", en: "Athletics" },
        { icon: "🏓", fr: "Tennis de table", ar: "تنس الطاولة", en: "Table tennis" },
        { icon: "♟️", fr: "Échecs", ar: "الشطرنج", en: "Chess" }
      ],
      inscription: "Inscription via l'ONSU en début d'année universitaire"
    },
    
    // ========== 2. الرياضة خارج الإقامة ==========
    {
      titleKey: "sportHors",
      icon: "🏋️",
      descKey: "sportHorsDesc",
      img: "",
      video: "",
      map: "salle de sport près de ENSTP Garidi Kouba",
      extra: "💪 Salles de sport privées et clubs",
      details: [
        { icon: "🏋️", fr: "Musculation", ar: "كمال الأجسام", en: "Bodybuilding" },
        { icon: "🥊", fr: "Boxe", ar: "الملاكمة", en: "Boxing" },
        { icon: "🤸", fr: "Gymnastique", ar: "الجمباز", en: "Gymnastics" },
        { icon: "🧘", fr: "Yoga", ar: "اليوغا", en: "Yoga" },
        { icon: "🏊", fr: "Natation", ar: "السباحة", en: "Swimming" },
        { icon: "🚴", fr: "Cyclisme", ar: "الدراجات", en: "Cycling" }
      ]
    },
    
    // ========== 3. كرة القدم ==========
    {
      titleKey: "sportFootball",
      icon: "⚽",
      descKey: "sportFootballDesc",
      img: "",
      video: "",
      extra: "⚽ Matchs libres entre étudiants",
      details: [
        { icon: "🕐", fr: "Week-end et jours fériés", ar: "نهاية الأسبوع والأعياد", en: "Weekends and holidays" },
        { icon: "📍", fr: "Terrain de l'école ou de la cité", ar: "ملعب المدرسة أو الإقامة", en: "School or residence field" },
        { icon: "👥", fr: "Organise avec tes amis", ar: "نظّم مع أصدقائك", en: "Organize with friends" }
      ]
    },
    
    // ========== 4. الجري ==========
    {
      titleKey: "sportRunning",
      icon: "🏃",
      descKey: "sportRunningDesc",
      img: "",
      video: "",
      map: "parc près de ENSTP Garidi Kouba",
      extra: "🏃 Cours le matin ou le soir",
      details: [
        { icon: "⏰", fr: "Meilleur moment : 6h-8h ou 17h-19h", ar: "أفضل وقت: 6-8 صباحاً أو 5-7 مساءً", en: "Best time: 6-8 AM or 5-7 PM" },
        { icon: "📍", fr: "Parcs et stades autour de Kouba", ar: "حدائق وملاعب حول القبة", en: "Parks and stadiums around Kouba" },
        { icon: "🥤", fr: "Apporte de l'eau", ar: "أحضر الماء", en: "Bring water" }
      ]
    },
    
    // ========== 5. كرة السلة والطائرة ==========
    {
      titleKey: "sportBasket",
      icon: "🏀",
      descKey: "sportBasketDesc",
      img: "",
      video: "",
      extra: "🏐 Sports collectifs dynamiques",
      details: [
        { icon: "📍", fr: "Terrains de l'école et des cités", ar: "ملاعب المدرسة والإقامات", en: "School and residence courts" },
        { icon: "👥", fr: "Dès 6 joueurs, organise un match", ar: "من 6 لاعبين، نظّم مباراة", en: "From 6 players, organize a match" },
        { icon: "🏆", fr: "Tournois inter-cités possibles", ar: "دورات بين الإقامات ممكنة", en: "Inter-residence tournaments possible" }
      ]
    }
    
  ]
});
