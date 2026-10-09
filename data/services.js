// ============================================
// data/services.js — قسم الخدمات
// Guide de survie ENSTP
// ============================================
// يحتوي على: اتفاقية التربص، الضمان الاجتماعي،
//            الانضمام للمكتبة، النادي، منصة اقرأ،
//            تبرير الغياب، بطاقة الطالب، ضياعها،
//            شهادة مدرسية، كشف النقاط، Progress
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "services",
  icon: "📋",
  titleKey: "sectionServices",
  introKey: "servicesIntro",
  type: "items",
  
  items: [
    // ========== 1. اتفاقية التربص ==========
    { 
      titleKey: "srvStage", 
      icon: "📝", 
      descKey: "srvStageDesc",
      location: "Scolarité ou département",
      procedure: "Demande écrite + justificatif de l'entreprise",
      delay: "3-5 jours",
      img: "",
      video: ""
    },
    
    // ========== 2. الضمان الاجتماعي ==========
    { 
      titleKey: "srvSecu", 
      icon: "💼", 
      descKey: "srvSecuDesc",
      location: "Bureau de la sécurité sociale (sur le campus)",
      procedure: "Carte d'étudiant + photos + formulaire",
      delay: "Variable",
      img: "",
      video: ""
    },
    
    // ========== 3. الانضمام للمكتبة ==========
    { 
      titleKey: "srvBiblio", 
      icon: "📖", 
      descKey: "srvBiblioDesc",
      location: "Bibliothèque universitaire",
      procedure: "Carte d'étudiant + 1 photo",
      delay: "Immédiat",
      img: "",
      video: ""
    },
    
    // ========== 4. الانضمام إلى نادٍ ==========
    { 
      titleKey: "srvClub", 
      icon: "🎭", 
      descKey: "srvClubDesc",
      location: "Selon le club",
      procedure: "Contacter le responsable du club",
      delay: "Variable",
      img: "",
      video: ""
    },
    
    // ========== 5. منصة اقرأ ==========
    { 
      titleKey: "srvIqra", 
      icon: "📱", 
      descKey: "srvIqraDesc",
      location: "En ligne",
      procedure: "Inscription via la plateforme",
      delay: "Immédiat",
      link: "https://iqra.dz",
      img: "",
      video: ""
    },
    
    // ========== 6. تبرير الغياب ==========
    { 
      titleKey: "srvAbsence", 
      icon: "📅", 
      descKey: "srvAbsenceDesc",
      location: "Département / Scolarité",
      procedure: "Justificatif médical sous 3 jours",
      delay: "48-72h",
      img: "",
      video: ""
    },
    
    // ========== 7. بطاقة الطالب ==========
    { 
      titleKey: "srvCarte", 
      icon: "💳", 
      descKey: "srvCarteDesc",
      location: "Scolarité",
      procedure: "Après inscription définitive",
      delay: "Quelques jours",
      img: "",
      video: ""
    },
    
    // ========== 8. ضياع بطاقة الطالب ==========
    { 
      titleKey: "srvCartePerdue", 
      icon: "🆘", 
      descKey: "srvCartePerdueDesc",
      location: "Scolarité",
      procedure: "Déclaration de perte + 2 photos d'identité",
      delay: "1-2 semaines",
      img: "",
      video: ""
    },
    
    // ========== 9. شهادة مدرسية ==========
    { 
      titleKey: "srvAttestation", 
      icon: "📜", 
      descKey: "srvAttestationDesc",
      location: "Scolarité",
      procedure: "Demande écrite (formulaire)",
      delay: "2-3 jours",
      img: "",
      video: ""
    },
    
    // ========== 10. كشف النقاط ==========
    { 
      titleKey: "srvReleve", 
      icon: "📊", 
      descKey: "srvReleveDesc",
      location: "Scolarité",
      procedure: "Demande écrite",
      delay: "2-3 jours",
      img: "",
      video: ""
    },
    
    // ========== 11. Progress (النقاط أونلاين) ==========
    { 
      titleKey: "srvProgress", 
      icon: "💻", 
      descKey: "srvProgressDesc",
      location: "En ligne",
      procedure: "Identifiant fourni par la scolarité",
      delay: "Immédiat",
      link: "https://progress.enstp.dz",
      img: "",
      video: ""
    }
  ]
});
