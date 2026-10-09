// ============================================
// lang.js — نظام اللغات الثلاث
// Guide de survie ENSTP
// ============================================
// ⚠️ هذا الملف مقسّم على 3 أجزاء (FR, AR, EN)
//    لا تحفظه إلا بعد لصق الأجزاء الثلاثة معاً

const LANG_DATA = {
  fr: {
    // ============ عام ============
    appName: "Guide de survie ENSTP",
    tagline: "Ton premier jour, dans ta poche.",
    back: "← Retour",
    home: "🏠 Accueil",
    search: "🔎 Chercher : salle, prof, service…",
    noResult: "Aucun résultat",
    tryOther: "Essayez un autre mot",
    suggestions: "💡 Essayez :",
    viewMap: "📍 Voir sur Maps",
    viewVideo: "🎥 Voir la vidéo",
    comingSoon: "Bientôt disponible",
    toComplete: "À compléter",
    qrTitle: "📱 QR Code",
    qrScan: "Scannez ce QR code",
    close: "Fermer",
    loading: "Chargement…",

    // ============ الصفحة الرئيسية ============
    welcomeTitle: "Bienvenue",
    welcomeSubtitle: "Tout ce dont tu as besoin pour ton premier jour à l'ENSTP.",
    startBtn: "ابدأ",
    installBtn: "Installer l'app",

    // ============ عناوين الأقسام الرئيسية ============
    sectionEcole: "Mon école",
    sectionProfs: "Mes enseignants",
    sectionAdmin: "Mon administration",
    sectionServices: "Services",
    sectionShopping: "Achats & restauration",
    sectionTransport: "Transport",
    sectionCite: "Cité universitaire",
    sectionNatation: "Natation à Alger",
    sectionSport: "Sport",
    sectionGreen: "Projet vert",
    sectionPodcast: "Podcast étudiant",
    sectionCourses: "Formations",
    sectionAbout: "Qui sommes-nous",

    // ============ 1. مدرستي ============
    ecoleIntro: "Tous les lieux de l'école : salles, amphis, labos, services.",
    ecolePlan: "Plan de l'école",
    ecolePlanDesc: "Clique sur un point pour voir son nom.",
    ecoleSalle: "Où est ma salle ?",
    ecoleSalleDesc: "26 salles de TD numérotées de 1 à 26, réparties sur plusieurs étages.",
    ecoleAmphi: "Amphithéâtres A et B",
    ecoleAmphiDesc: "Deux grands amphithéâtres pour les cours magistraux.",
    ecoleResto: "Restaurant universitaire",
    ecoleRestoDesc: "Repas à tarif étudiant, 3 fois par jour.",
    ecoleFoyer: "Foyer",
    ecoleFoyerDesc: "Espace de détente et de rencontre entre étudiants.",
    ecoleDept: "Départements",
    ecoleDeptPrep: "Cycle préparatoire",
    ecoleDeptPrepDesc: "Deux ans de formation générale après le bac.",
    ecoleDeptMat: "Matériaux & Structures",
    ecoleDeptMatDesc: "Spécialité ingénieur : béton, acier, structures.",
    ecoleDeptInf: "Infrastructures de Base",
    ecoleDeptInfDesc: "Spécialité ingénieur : routes, ouvrages d'art, géotechnique.",
    ecoleLabs: "Laboratoires",
    ecoleLabPhysique: "Laboratoire de Physique",
    ecoleLabPhysiqueDesc: "Expériences de physique générale.",
    ecoleLabChimie: "Laboratoire de Chimie",
    ecoleLabChimieDesc: "Analyses et expériences chimiques.",
    ecoleLabMeca: "Laboratoire de Mécanique des Fluides",
    ecoleLabMecaDesc: "Étude des écoulements et de l'hydraulique.",
    ecoleLabElec: "Laboratoire d'Électricité",
    ecoleLabElecDesc: "Circuits et mesures électriques.",
    ecoleMedecin: "Médecin de l'école",
    ecoleMedecinDesc: "Infirmerie — premiers soins. En cas d'urgence, appeler les secours.",
    ecoleSecu: "Bureau de la sécurité sociale",
    ecoleSecuDesc: "Pour l'affiliation et les remboursements médicaux.",
    ecoleEntrepreneuriat: "Centre d'entrepreneuriat",
    ecoleEntrepreneuriatDesc: "Accompagnement pour créer ton propre projet ou startup.",
    ecoleBiblio: "Bibliothèque",
    ecoleBiblioDesc: "Salles de lecture, prêt de livres et espace de travail.",
    ecoleCite: "Centre de la cité universitaire",
    ecoleCiteDesc: "Gestion des résidences universitaires (Garidi, Saïd Hamdine, Rouiba).",

    // ============ 2. أساتذتي ============
    profsIntro: "Recherche un enseignant par matière ou par nom.",
    profPhysique: "Physique",
    profPhysiqueDesc: "Mécanique, thermodynamique, électricité.",
    profChimie: "Chimie",
    profChimieDesc: "Chimie générale et organique.",
    profAlgebre: "Algèbre",
    profAlgebreDesc: "Algèbre linéaire, matrices, espaces vectoriels.",
    profAnalyse: "Analyse",
    profAnalyseDesc: "Suites, limites, intégrales, équations différentielles.",
    profStats: "Statistiques",
    profStatsDesc: "Probabilités et statistiques appliquées.",
    profFrancais: "Français",
    profFrancaisDesc: "Expression écrite et orale, méthodologie.",
    profAnglais: "Anglais",
    profAnglaisDesc: "Anglais technique et scientifique.",
    profEco: "Économie",
    profEcoDesc: "Économie générale et gestion.",
    profGestion: "Gestion",
    profGestionDesc: "Gestion d'entreprise et de projet.",
    profInfo: "Informatique",
    profInfoDesc: "Programmation et outils informatiques.",

    // ============ 3. إدارتي ============
    adminIntro: "Bureaux administratifs et contacts.",
    adminDirection: "Direction",
    adminDirectionDesc: "Direction générale de l'école.",
    adminScolarite: "Scolarité",
    adminScolariteDesc: "Inscriptions, attestations, relevés de notes.",
    adminDept: "Secrétariats des départements",
    adminDeptDesc: "Un secrétariat par département.",
    adminRH: "Ressources humaines",
    adminRHDesc: "Gestion du personnel.",
    adminFinances: "Finances",
    adminFinancesDesc: "Bourses, paiements, frais.",

    // ============ 4. الخدمات ============
    servicesIntro: "Toutes les démarches administratives et étudiants.",
    srvStage: "Convention de stage",
    srvStageDesc: "Démarches pour obtenir une convention de stage auprès de l'administration.",
    srvSecu: "Sécurité sociale",
    srvSecuDesc: "Inscription et suivi du dossier de sécurité sociale étudiant.",
    srvBiblio: "Adhésion à la bibliothèque",
    srvBiblioDesc: "Inscription gratuite avec carte étudiant + 1 photo.",
    srvClub: "Rejoindre un club",
    srvClubDesc: "Sport, culture, art, entrepreneuriat…",
    srvIqra: "Plateforme Iqra",
    srvIqraDesc: "Accès à la plateforme de lecture numérique.",
    srvAbsence: "Justificatif d'absence",
    srvAbsenceDesc: "Dépôt d'un document médical sous 3 jours au département.",
    srvCarte: "Carte d'étudiant",
    srvCarteDesc: "Délivrée après inscription définitive.",
    srvCartePerdue: "Carte d'étudiant perdue",
    srvCartePerdueDesc: "Déclaration de perte + 2 photos d'identité à la scolarité.",
    srvAttestation: "Attestation de scolarité",
    srvAttestationDesc: "Demande écrite à la scolarité, délai de quelques jours.",
    srvReleve: "Relevé de notes",
    srvReleveDesc: "Document officiel listant toutes tes notes.",
    srvProgress: "Voir mes notes sur Progress",
    srvProgressDesc: "Plateforme en ligne de l'école pour consulter tes notes.",

    // ============ 5. التسوق والأكل ============
    shoppingIntro: "Manger, acheter, se soigner autour de l'école.",
    shopResto: "Restaurants",
    shopRestoDesc: "Restaurants et fast-foods autour de l'école.",
    shopCafe: "Cafés",
    shopCafeDesc: "Pour réviser ou se retrouver entre amis.",
    shopPrint: "Photocopie & impression",
    shopPrintDesc: "Imprimer cours, TD et documents.",
    shopPharma: "Pharmacies",
    shopPharmaDesc: "Pharmacie de garde : demander à la pharmacie la plus proche.",
    shopDocteur: "Médecins",
    shopDocteurDesc: "Généralistes et spécialistes à proximité.",
    shopSecu: "Sécurité sociale (CNAS)",
    shopSecuDesc: "Agence CNAS la plus proche pour tes démarches.",
    shopBenOmar: "Ben Omar — Kouba",
    shopBenOmarDesc: "Centre commercial et d'alimentation à Kouba.",
    shopTchof: "Centre Tchof",
    shopTchofDesc: "Espace commercial et de loisirs.",

    // ============ 6. النقل ============
    transportIntro: "Bus, taxis, métro, train, tramway.",
    trBusUniv: "Bus universitaire",
    trBusUnivDesc: "Bus de l'école desservant les cités universitaires.",
    trBusPublic: "Bus public",
    trBusPublicDesc: "Lignes vers centre-ville, gare routière et métro.",
    trTaxi: "Taxis collectifs",
    trTaxiDesc: "\"Y'sir hitt nrouhou\" — taxis partagés vers le centre. Tarif fixe par place.",
    trHeetch: "Heetch & VTC",
    trHeetchDesc: "Applications de VTC pour te déplacer facilement.",
    trMetro: "Métro d'Alger",
    trMetroDesc: "Station la plus proche de Kouba.",
    trTrain: "Train (SNTF)",
    trTrainDesc: "Gares principales d'Alger et lignes nationales.",
    trTram: "Tramway",
    trTramDesc: "Lignes vers l'est d'Alger.",
    trSitram: "Carte SITRAM (gratuite)",
    trSitramDesc: "Carte de transport gratuite pour les étudiants.",
    trInterWilaya: "Transport entre wilayas",
    trInterWilayaDesc: "Bus et trains vers d'autres régions d'Algérie.",
    trGareRoutiere: "Gare routière (Kharouba)",
    trGareRoutiereDesc: "Départs de bus vers les wilayas.",
    trAeroport: "Aéroport Houari Boumediene",
    trAeroportDesc: "Vols internationaux et nationaux.",
    trGareTrain: "Gare ferroviaire",
    trGareTrainDesc: "Lignes SNTF vers l'est et l'ouest.",

    // ============ 7. الإقامة ============
    citeIntro: "Vie à la cité universitaire.",
    citeGaridi: "Résidence Garidi",
    citeGaridiDesc: "La plus proche de l'ENSTP. Idéale sans voiture.",
    citeSaid: "Résidence Saïd Hamdine",
    citeSaidDesc: "À quelques minutes de bus de l'école.",
    citeRouiba: "Résidence Rouiba",
    citeRouibaDesc: "Plus éloignée. Nécessite un transport quotidien.",
    citeResto: "Restaurant universitaire",
    citeRestoDesc: "Repas à tarif étudiant, 3 fois par jour.",
    citeEtude: "Salles d'étude",
    citeEtudeDesc: "Disponibles dans chaque résidence.",

    // ============ 8. السباحة ============
    natationIntro: "Où nager à Alger.",
    natPiscine: "Piscines",
    natPiscineDesc: "Piscines publiques et privées à Alger.",
    natPlage: "Plages",
    natPlageDesc: "Plages publiques et surveillées.",
    natClub: "Clubs de natation",
    natClubDesc: "Clubs étudiants et associations.",

    // ============ 9. الرياضة ============
    sportIntro: "Sport universitaire et hors campus.",
    sportUniv: "Sport universitaire",
    sportUnivDesc: "Activités proposées par l'ONSU.",
    sportHors: "Sport hors résidence",
    sportHorsDesc: "Salles et clubs privés.",
    sportFootball: "Football",
    sportFootballDesc: "Matchs libres entre étudiants.",
    sportRunning: "Running",
    sportRunningDesc: "Course à pied dans Alger.",
    sportBasket: "Basket / Volley",
    sportBasketDesc: "Sports collectifs.",

    // ============ 10. الأخضر ============
    greenIntro: "Projet vert et recyclage.",
    greenRecy: "Recyclage du papier",
    greenRecyDesc: "Collecte de papier usagé pour le recycler.",
    greenEcologie: "Écologie",
    greenEcologieDesc: "Actions écologiques et sensibilisation.",

    // ============ 11. بودكاست ============
    podcastIntro: "Podcast étudiant ENSTP.",
    podcastEp1: "Épisode 1",
    podcastEp1Desc: "Bienvenue à l'ENSTP — guide du nouvel étudiant.",
    podcastEp2: "Épisode 2",
    podcastEp2Desc: "Vie étudiante et cité universitaire.",
    podcastEp3: "Épisode 3",
    podcastEp3Desc: "Conseils pour réussir sa première année.",

    // ============ 12. دورات ============
    coursesIntro: "Formations et cours pour t'aider.",
    courseMath: "Mathématiques",
    courseMathDesc: "Cours de soutien en analyse et algèbre.",
    coursePhysique: "Physique",
    coursePhysiqueDesc: "Cours de soutien en physique.",
    courseInfo: "Informatique",
    courseInfoDesc: "Initiation à la programmation.",

    // ============ 13. من نحن ============
    aboutIntro: "Un projet étudiant, 100% gratuit.",
    aboutMission: "Notre mission",
    aboutMissionDesc: "Aider chaque nouvel étudiant à s'intégrer rapidement et à ne jamais rester seul face à un problème.",
    aboutTeam: "Notre équipe",
    aboutTeamDesc: "Étudiants de 1ère année Ingénieur, Groupe 2, Infrastructures de Base, promotion 2024/2025.",
    aboutValues: "Nos valeurs",
    aboutValuesDesc: "Entraide, gratuité, respect, transparence, confiance.",
    aboutJoin: "Rejoindre l'équipe",
    aboutJoinDesc: "Contacte-nous via le groupe officiel de la promo.",
    aboutWarning: "Avertissement",
    aboutWarningDesc: "Les informations sont fournies à titre indicatif. Vérifie toujours auprès de l'administration.",
    aboutUpdate: "Dernière mise à jour",
    aboutUpdateDesc: "Octobre 2026 — Version 2.0",

    // ============ الفوتر ============
    footerTitle: "Guide de survie ENSTP",
    footerSub: "Un projet des étudiants de 1ère année Ingénieur, Groupe 2 — Infrastructures de Base.",
    footerFree: "100% gratuit · 3 langues · Hors ligne",
    footerAccess: "Accéder au guide"
  },

  ar: {
    // ============ عام ============
    appName: "دليل البقاء ENSTP",
    tagline: "يومك الأول، في جيبك.",
    back: "→ رجوع",
    home: "🏠 الرئيسية",
    search: "🔎 ابحث: قاعة، أستاذ، خدمة…",
    noResult: "لا توجد نتائج",
    tryOther: "جرّب كلمة أخرى",
    suggestions: "💡 جرّب:",
    viewMap: "📍 عرض على الخريطة",
    viewVideo: "🎥 مشاهدة الفيديو",
    comingSoon: "قريباً",
    toComplete: "يُكمل",
    qrTitle: "📱 رمز QR",
    qrScan: "امسح رمز QR",
    close: "إغلاق",
    loading: "جارٍ التحميل…",

    // ============ الصفحة الرئيسية ============
    welcomeTitle: "مرحباً",
    welcomeSubtitle: "كل ما تحتاجه ليومك الأول في المدرسة.",
    startBtn: "ابدأ",
    installBtn: "ثبّت التطبيق",

    // ============ عناوين الأقسام الرئيسية ============
    sectionEcole: "مدرستي",
    sectionProfs: "أساتذتي",
    sectionAdmin: "إدارتي",
    sectionServices: "الخدمات",
    sectionShopping: "التسوق والأكل",
    sectionTransport: "النقل",
    sectionCite: "الإقامة الجامعية",
    sectionNatation: "السباحة في الجزائر",
    sectionSport: "الرياضة",
    sectionGreen: "المشروع الأخضر",
    sectionPodcast: "بودكاست الطالب",
    sectionCourses: "دورات",
    sectionAbout: "من نحن",

    // ============ 1. مدرستي ============
    ecoleIntro: "كل أماكن المدرسة: القاعات، المدرجات، المخابر، الخدمات.",
    ecolePlan: "خريطة المدرسة",
    ecolePlanDesc: "اضغط على نقطة لرؤية اسم المكان.",
    ecoleSalle: "أين قاعتي؟",
    ecoleSalleDesc: "26 قاعة مرقّمة من 1 إلى 26، موزعة على عدة طوابق.",
    ecoleAmphi: "المدرجان A و B",
    ecoleAmphiDesc: "مدرجان كبيران للمحاضرات.",
    ecoleResto: "المطعم الجامعي",
    ecoleRestoDesc: "وجبات بسعر طلابي، 3 مرات يومياً.",
    ecoleFoyer: "الفوير",
    ecoleFoyerDesc: "فضاء للراحة واللقاء بين الطلاب.",
    ecoleDept: "الأقسام",
    ecoleDeptPrep: "القسم التحضيري",
    ecoleDeptPrepDesc: "سنتان من التكوين العام بعد البكالوريا.",
    ecoleDeptMat: "المواد والهياكل",
    ecoleDeptMatDesc: "تخصص مهندس: الخرسانة، الفولاذ، الهياكل.",
    ecoleDeptInf: "المنشآت القاعدية",
    ecoleDeptInfDesc: "تخصص مهندس: الطرق، المنشآت الفنية، الجيوتقنية.",
    ecoleLabs: "المخابر",
    ecoleLabPhysique: "مخبر الفيزياء",
    ecoleLabPhysiqueDesc: "تجارب الفيزياء العامة.",
    ecoleLabChimie: "مخبر الكيمياء",
    ecoleLabChimieDesc: "تحاليل وتجارب كيميائية.",
    ecoleLabMeca: "مخبر ميكانيك الموائع",
    ecoleLabMecaDesc: "دراسة التدفقات والهيدروليك.",
    ecoleLabElec: "مخبر الكهرباء",
    ecoleLabElecDesc: "الدوائر والقياسات الكهربائية.",
    ecoleMedecin: "طبيب المدرسة",
    ecoleMedecinDesc: "العيادة — الإسعافات الأولية. في الحالات العاجلة، اتصل بالإسعاف.",
    ecoleSecu: "مكتب الضمان الاجتماعي",
    ecoleSecuDesc: "للانتساب والتعويضات الطبية.",
    ecoleEntrepreneuriat: "مركز المقاولاتية",
    ecoleEntrepreneuriatDesc: "مرافقة لإنشاء مشروعك الخاص أو شركتك الناشئة.",
    ecoleBiblio: "المكتبة",
    ecoleBiblioDesc: "قاعات القراءة، استعارة الكتب، وفضاء للعمل.",
    ecoleCite: "مركز الإقامة الجامعية",
    ecoleCiteDesc: "إدارة الإقامات الجامعية (قاريدي، سعيد حمدين، رويسو).",

    // ============ 2. أساتذتي ============
    profsIntro: "ابحث عن أستاذ حسب المادة أو الاسم.",
    profPhysique: "الفيزياء",
    profPhysiqueDesc: "الميكانيك، الديناميكا الحرارية، الكهرباء.",
    profChimie: "الكيمياء",
    profChimieDesc: "الكيمياء العامة والعضوية.",
    profAlgebre: "الجبر",
    profAlgebreDesc: "الجبر الخطي، المصفوفات، الفضاءات الاتجاهية.",
    profAnalyse: "التحليل",
    profAnalyseDesc: "المتتاليات، النهايات، التكاملات، المعادلات التفاضلية.",
    profStats: "الإحصاء",
    profStatsDesc: "الاحتمالات والإحصاء التطبيقي.",
    profFrancais: "الفرنسية",
    profFrancaisDesc: "التعبير الكتابي والشفوي، المنهجية.",
    profAnglais: "الإنجليزية",
    profAnglaisDesc: "الإنجليزية التقنية والعلمية.",
    profEco: "الاقتصاد",
    profEcoDesc: "الاقتصاد العام والتسيير.",
    profGestion: "التسيير",
    profGestionDesc: "إدارة المؤسسات والمشاريع.",
    profInfo: "الإعلام الآلي",
    profInfoDesc: "البرمجة والأدوات المعلوماتية.",

    // ============ 3. إدارتي ============
    adminIntro: "المكاتب الإدارية وجهات الاتصال.",
    adminDirection: "الإدارة",
    adminDirectionDesc: "الإدارة العامة للمدرسة.",
    adminScolarite: "الشؤون الطلابية",
    adminScolariteDesc: "التسجيلات، الشهادات، كشوف النقاط.",
    adminDept: "أمانة الأقسام",
    adminDeptDesc: "أمانة لكل قسم.",
    adminRH: "الموارد البشرية",
    adminRHDesc: "إدارة الموظفين.",
    adminFinances: "المالية",
    adminFinancesDesc: "المنح، المدفوعات، الرسوم.",

    // ============ 4. الخدمات ============
    servicesIntro: "كل الإجراءات الإدارية والطلابية.",
    srvStage: "اتفاقية التربص",
    srvStageDesc: "إجراءات الحصول على اتفاقية تربص من الإدارة.",
    srvSecu: "الضمان الاجتماعي",
    srvSecuDesc: "الانتساب ومتابعة ملف الضمان الاجتماعي الطلابي.",
    srvBiblio: "الانضمام إلى المكتبة",
    srvBiblioDesc: "تسجيل مجاني ببطاقة الطالب + صورة واحدة.",
    srvClub: "الانضمام إلى نادٍ",
    srvClubDesc: "رياضة، ثقافة، فن، مقاولاتية…",
    srvIqra: "منصة اقرأ",
    srvIqraDesc: "الوصول إلى منصة القراءة الرقمية.",
    srvAbsence: "تبرير الغياب",
    srvAbsenceDesc: "تقديم وثيقة طبية خلال 3 أيام إلى القسم.",
    srvCarte: "بطاقة الطالب",
    srvCarteDesc: "تُسلَّم بعد التسجيل النهائي.",
    srvCartePerdue: "ضياع بطاقة الطالب",
    srvCartePerdueDesc: "تصريح بالضياع + صورتان شمسيتان إلى الشؤون الطلابية.",
    srvAttestation: "شهادة مدرسية",
    srvAttestationDesc: "طلب كتابي إلى الشؤون الطلابية، تأخير بضعة أيام.",
    srvReleve: "كشف النقاط",
    srvReleveDesc: "وثيقة رسمية تحتوي على كل نقاطك.",
    srvProgress: "رؤية نقاطي في Progress",
    srvProgressDesc: "منصة المدرسة الإلكترونية للاطلاع على نقاطك.",

    // ============ 5. التسوق والأكل ============
    shoppingIntro: "الأكل، الشراء، العلاج حول المدرسة.",
    shopResto: "مطاعم",
    shopRestoDesc: "مطاعم ووجبات سريعة حول المدرسة.",
    shopCafe: "مقاهي",
    shopCafeDesc: "للمراجعة أو اللقاء مع الأصدقاء.",
    shopPrint: "تصوير وطباعة",
    shopPrintDesc: "طباعة الدروس، الأعمال الموجهة والوثائق.",
    shopPharma: "صيدليات",
    shopPharmaDesc: "المناوبة: اسأل الصيدلية الأقرب.",
    shopDocteur: "أطباء",
    shopDocteurDesc: "عامون وأخصائيون قريبون.",
    shopSecu: "الضمان الاجتماعي (CNAS)",
    shopSecuDesc: "أقرب وكالة CNAS لإجراءاتك.",
    shopBenOmar: "بن عمر — القبة",
    shopBenOmarDesc: "مركز تجاري وغذائي بالقبة.",
    shopTchof: "مركز تشوف",
    shopTchofDesc: "فضاء تجاري وترفيهي.",

    // ============ 6. النقل ============
    transportIntro: "حافلات، تكاسي، مترو، قطار، ترامواي.",
    trBusUniv: "النقل الجامعي",
    trBusUnivDesc: "حافلات المدرسة التي تخدم الإقامات الجامعية.",
    trBusPublic: "النقل العمومي",
    trBusPublicDesc: "خطوط نحو وسط المدينة، المحطة البرية والمترو.",
    trTaxi: "سيارات أجرة جماعية",
    trTaxiDesc: "\"يسير هيتش نروحو\" — تكاسي مشتركة نحو المركز. سعر ثابت للمقعد.",
    trHeetch: "هيتش و VTC",
    trHeetchDesc: "تطبيقات النقل للتنقل بسهولة.",
    trMetro: "مترو الجزائر",
    trMetroDesc: "أقرب محطة من القبة.",
    trTrain: "القطار (SNTF)",
    trTrainDesc: "المحطات الرئيسية في الجزائر والخطوط الوطنية.",
    trTram: "الترامواي",
    trTramDesc: "خطوط نحو شرق الجزائر.",
    trSitram: "بطاقة سيترام (مجانية)",
    trSitramDesc: "بطاقة نقل مجانية للطلبة.",
    trInterWilaya: "التنقل بين الولايات",
    trInterWilayaDesc: "حافلات وقطارات نحو مناطق أخرى من الجزائر.",
    trGareRoutiere: "المحطة البرية (الخروبة)",
    trGareRoutiereDesc: "انطلاقات الحافلات نحو الولايات.",
    trAeroport: "مطار هواري بومدين",
    trAeroportDesc: "رحلات دولية ووطنية.",
    trGareTrain: "محطة القطار",
    trGareTrainDesc: "خطوط SNTF نحو الشرق والغرب.",

    // ============ 7. الإقامة ============
    citeIntro: "الحياة في الإقامة الجامعية.",
    citeGaridi: "إقامة قاريدي",
    citeGaridiDesc: "الأقرب للمدرسة. مثالية لمن لا يملك سيارة.",
    citeSaid: "إقامة سعيد حمدين",
    citeSaidDesc: "على بعد دقائق بالحافلة من المدرسة.",
    citeRouiba: "إقامة رويسو",
    citeRouibaDesc: "أبعد. تتطلب نقلاً يومياً.",
    citeResto: "المطعم الجامعي",
    citeRestoDesc: "وجبات بسعر طلابي، 3 مرات يومياً.",
    citeEtude: "قاعات الدراسة",
    citeEtudeDesc: "متوفرة في كل إقامة.",

    // ============ 8. السباحة ============
    natationIntro: "أين تسبح في الجزائر العاصمة.",
    natPiscine: "مسابح",
    natPiscineDesc: "مسابح عمومية وخاصة في الجزائر.",
    natPlage: "شواطئ",
    natPlageDesc: "شواطئ عمومية ومراقبة.",
    natClub: "أندية السباحة",
    natClubDesc: "أندية للطلاب وجمعيات.",

    // ============ 9. الرياضة ============
    sportIntro: "الرياضة الجامعية وخارج الحرم.",
    sportUniv: "الرياضة الجامعية",
    sportUnivDesc: "أنشطة يوفّرها الديوان الوطني للخدمات الجامعية.",
    sportHors: "رياضة خارج الإقامة",
    sportHorsDesc: "قاعات وأندية خاصة.",
    sportFootball: "كرة القدم",
    sportFootballDesc: "مباريات حرة بين الطلاب.",
    sportRunning: "الجري",
    sportRunningDesc: "الجري على الأقدام في الجزائر.",
    sportBasket: "كرة السلة / الطائرة",
    sportBasketDesc: "رياضات جماعية.",

    // ============ 10. الأخضر ============
    greenIntro: "المشروع الأخضر وإعادة التدوير.",
    greenRecy: "إعادة تدوير الورق",
    greenRecyDesc: "جمع الورق المستعمل لإعادة تدويره.",
    greenEcologie: "الإيكولوجيا",
    greenEcologieDesc: "مبادرات بيئية وتوعية.",

    // ============ 11. بودكاست ============
    podcastIntro: "بودكاست الطالب ENSTP.",
    podcastEp1: "الحلقة 1",
    podcastEp1Desc: "مرحباً بك في المدرسة — دليل الطالب الجديد.",
    podcastEp2: "الحلقة 2",
    podcastEp2Desc: "الحياة الطلابية والإقامة الجامعية.",
    podcastEp3: "الحلقة 3",
    podcastEp3Desc: "نصائح للنجاح في سنتك الأولى.",

    // ============ 12. دورات ============
    coursesIntro: "دورات وتكوينات لمساعدتك.",
    courseMath: "الرياضيات",
    courseMathDesc: "دورات دعم في التحليل والجبر.",
    coursePhysique: "الفيزياء",
    coursePhysiqueDesc: "دورات دعم في الفيزياء.",
    courseInfo: "الإعلام الآلي",
    courseInfoDesc: "مقدمة في البرمجة.",

    // ============ 13. من نحن ============
    aboutIntro: "مشروع طلابي، 100% مجاني.",
    aboutMission: "مهمتنا",
    aboutMissionDesc: "مساعدة كل طالب جديد على الاندماج بسرعة وعدم البقاء وحيداً أمام أي مشكلة.",
    aboutTeam: "فريقنا",
    aboutTeamDesc: "طلاب السنة الأولى مهندس، المجموعة 2، المنشآت القاعدية، دفعة 2024/2025.",
    aboutValues: "قيمنا",
    aboutValuesDesc: "التضامن، المجانية، الاحترام، الشفافية، الثقة.",
    aboutJoin: "انضم إلى الفريق",
    aboutJoinDesc: "تواصل معنا عبر المجموعة الرسمية للدفعة.",
    aboutWarning: "تنبيه",
    aboutWarningDesc: "المعلومات إرشادية. تحقق دائماً من الإدارة.",
    aboutUpdate: "آخر تحديث",
    aboutUpdateDesc: "أكتوبر 2026 — الإصدار 2.0",

    // ============ الفوتر ============
    footerTitle: "دليل البقاء ENSTP",
    footerSub: "مشروع طلاب السنة الأولى مهندس، المجموعة 2 — المنشآت القاعدية.",
    footerFree: "مجاني 100% · 3 لغات · بدون إنترنت",
    footerAccess: "الوصول إلى الدليل"
  },

  en: {
    // ============ General ============
    appName: "ENSTP Survival Guide",
    tagline: "Your first day, in your pocket.",
    back: "← Back",
    home: "🏠 Home",
    search: "🔎 Search: room, teacher, service…",
    noResult: "No results",
    tryOther: "Try another word",
    suggestions: "💡 Try:",
    viewMap: "📍 View on Maps",
    viewVideo: "🎥 Watch video",
    comingSoon: "Coming soon",
    toComplete: "To complete",
    qrTitle: "📱 QR Code",
    qrScan: "Scan this QR code",
    close: "Close",
    loading: "Loading…",

    // ============ Home ============
    welcomeTitle: "Welcome",
    welcomeSubtitle: "Everything you need for your first day at ENSTP.",
    startBtn: "Start",
    installBtn: "Install app",

    // ============ Section titles ============
    sectionEcole: "My school",
    sectionProfs: "My teachers",
    sectionAdmin: "My administration",
    sectionServices: "Services",
    sectionShopping: "Shopping & food",
    sectionTransport: "Transport",
    sectionCite: "Student residence",
    sectionNatation: "Swimming in Algiers",
    sectionSport: "Sport",
    sectionGreen: "Green project",
    sectionPodcast: "Student podcast",
    sectionCourses: "Courses",
    sectionAbout: "Who we are",

    // ============ 1. My school ============
    ecoleIntro: "All school places: rooms, amphis, labs, services.",
    ecolePlan: "School map",
    ecolePlanDesc: "Click a point to see its name.",
    ecoleSalle: "Where is my room?",
    ecoleSalleDesc: "26 TD rooms numbered 1 to 26, on several floors.",
    ecoleAmphi: "Amphitheaters A and B",
    ecoleAmphiDesc: "Two large amphitheaters for lectures.",
    ecoleResto: "University restaurant",
    ecoleRestoDesc: "Student-rate meals, 3 times a day.",
    ecoleFoyer: "Foyer",
    ecoleFoyerDesc: "Relaxation and meeting space for students.",
    ecoleDept: "Departments",
    ecoleDeptPrep: "Preparatory cycle",
    ecoleDeptPrepDesc: "Two years of general training after the baccalaureate.",
    ecoleDeptMat: "Materials & Structures",
    ecoleDeptMatDesc: "Engineering specialty: concrete, steel, structures.",
    ecoleDeptInf: "Infrastructures de Base",
    ecoleDeptInfDesc: "Engineering specialty: roads, bridges, geotechnics.",
    ecoleLabs: "Laboratories",
    ecoleLabPhysique: "Physics Lab",
    ecoleLabPhysiqueDesc: "General physics experiments.",
    ecoleLabChimie: "Chemistry Lab",
    ecoleLabChimieDesc: "Chemical analyses and experiments.",
    ecoleLabMeca: "Fluid Mechanics Lab",
    ecoleLabMecaDesc: "Study of flows and hydraulics.",
    ecoleLabElec: "Electricity Lab",
    ecoleLabElecDesc: "Circuits and electrical measurements.",
    ecoleMedecin: "School doctor",
    ecoleMedecinDesc: "Infirmary — first aid. In emergency, call for help.",
    ecoleSecu: "Social security office",
    ecoleSecuDesc: "For affiliation and medical reimbursements.",
    ecoleEntrepreneuriat: "Entrepreneurship center",
    ecoleEntrepreneuriatDesc: "Support to create your own project or startup.",
    ecoleBiblio: "Library",
    ecoleBiblioDesc: "Reading rooms, book lending, and workspace.",
    ecoleCite: "Student residence center",
    ecoleCiteDesc: "Management of university residences (Garidi, Saïd Hamdine, Rouiba).",

    // ============ 2. Teachers ============
    profsIntro: "Search for a teacher by subject or name.",
    profPhysique: "Physics",
    profPhysiqueDesc: "Mechanics, thermodynamics, electricity.",
    profChimie: "Chemistry",
    profChimieDesc: "General and organic chemistry.",
    profAlgebre: "Algebra",
    profAlgebreDesc: "Linear algebra, matrices, vector spaces.",
    profAnalyse: "Analysis",
    profAnalyseDesc: "Sequences, limits, integrals, differential equations.",
    profStats: "Statistics",
    profStatsDesc: "Probability and applied statistics.",
    profFrancais: "French",
    profFrancaisDesc: "Written and oral expression, methodology.",
    profAnglais: "English",
    profAnglaisDesc: "Technical and scientific English.",
    profEco: "Economics",
    profEcoDesc: "General economics and management.",
    profGestion: "Management",
    profGestionDesc: "Business and project management.",
    profInfo: "Computer Science",
    profInfoDesc: "Programming and IT tools.",

    // ============ 3. Administration ============
    adminIntro: "Administrative offices and contacts.",
    adminDirection: "Direction",
    adminDirectionDesc: "General management of the school.",
    adminScolarite: "Student Affairs",
    adminScolariteDesc: "Enrollments, certificates, transcripts.",
    adminDept: "Department secretaries",
    adminDeptDesc: "One secretary per department.",
    adminRH: "Human Resources",
    adminRHDesc: "Staff management.",
    adminFinances: "Finance",
    adminFinancesDesc: "Scholarships, payments, fees.",

    // ============ 4. Services ============
    servicesIntro: "All administrative and student procedures.",
    srvStage: "Internship agreement",
    srvStageDesc: "Procedures to get an internship agreement from administration.",
    srvSecu: "Social security",
    srvSecuDesc: "Registration and follow-up of the student social security file.",
    srvBiblio: "Library membership",
    srvBiblioDesc: "Free registration with student card + 1 photo.",
    srvClub: "Join a club",
    srvClubDesc: "Sport, culture, art, entrepreneurship…",
    srvIqra: "Iqra platform",
    srvIqraDesc: "Access to the digital reading platform.",
    srvAbsence: "Absence justification",
    srvAbsenceDesc: "Submit a medical document within 3 days to the department.",
    srvCarte: "Student card",
    srvCarteDesc: "Issued after final enrollment.",
    srvCartePerdue: "Lost student card",
    srvCartePerdueDesc: "Loss report + 2 ID photos at Student Affairs.",
    srvAttestation: "School certificate",
    srvAttestationDesc: "Written request to Student Affairs, delay of a few days.",
    srvReleve: "Transcript",
    srvReleveDesc: "Official document listing all your grades.",
    srvProgress: "See my grades on Progress",
    srvProgressDesc: "School's online platform to view your grades.",

    // ============ 5. Shopping & food ============
    shoppingIntro: "Eat, shop, heal around the school.",
    shopResto: "Restaurants",
    shopRestoDesc: "Restaurants and fast-foods around the school.",
    shopCafe: "Cafés",
    shopCafeDesc: "To study or meet with friends.",
    shopPrint: "Photocopy & printing",
    shopPrintDesc: "Print courses, tutorials and documents.",
    shopPharma: "Pharmacies",
    shopPharmaDesc: "On-call pharmacy: ask the nearest pharmacy.",
    shopDocteur: "Doctors",
    shopDocteurDesc: "General practitioners and specialists nearby.",
    shopSecu: "Social security (CNAS)",
    shopSecuDesc: "Nearest CNAS agency for your procedures.",
    shopBenOmar: "Ben Omar — Kouba",
    shopBenOmarDesc: "Shopping and food center in Kouba.",
    shopTchof: "Tchof Center",
    shopTchofDesc: "Shopping and leisure space.",

    // ============ 6. Transport ============
    transportIntro: "Bus, taxis, metro, train, tram.",
    trBusUniv: "University bus",
    trBusUnivDesc: "School bus serving university residences.",
    trBusPublic: "Public bus",
    trBusPublicDesc: "Lines to downtown, bus station and metro.",
    trTaxi: "Shared taxis",
    trTaxiDesc: "\"Y'sir hitt nrouhou\" — shared taxis to the center. Fixed price per seat.",
    trHeetch: "Heetch & VTC",
    trHeetchDesc: "Ride-hailing apps for easy travel.",
    trMetro: "Algiers Metro",
    trMetroDesc: "Nearest station to Kouba.",
    trTrain: "Train (SNTF)",
    trTrainDesc: "Main stations in Algiers and national lines.",
    trTram: "Tramway",
    trTramDesc: "Lines to east Algiers.",
    trSitram: "SITRAM card (free)",
    trSitramDesc: "Free transport card for students.",
    trInterWilaya: "Inter-wilaya transport",
    trInterWilayaDesc: "Buses and trains to other Algerian regions.",
    trGareRoutiere: "Bus station (Kharouba)",
    trGareRoutiereDesc: "Bus departures to the wilayas.",
    trAeroport: "Houari Boumediene Airport",
    trAeroportDesc: "International and domestic flights.",
    trGareTrain: "Train station",
    trGareTrainDesc: "SNTF lines to the east and west.",

    // ============ 7. Student residence ============
    citeIntro: "Life at the university residence.",
    citeGaridi: "Garidi Residence",
    citeGaridiDesc: "Closest to ENSTP. Ideal without a car.",
    citeSaid: "Saïd Hamdine Residence",
    citeSaidDesc: "A few bus minutes from the school.",
    citeRouiba: "Rouiba Residence",
    citeRouibaDesc: "Further away. Requires daily transport.",
    citeResto: "University restaurant",
    citeRestoDesc: "Student-rate meals, 3 times a day.",
    citeEtude: "Study rooms",
    citeEtudeDesc: "Available in each residence.",

    // ============ 8. Swimming ============
    natationIntro: "Where to swim in Algiers.",
    natPiscine: "Swimming pools",
    natPiscineDesc: "Public and private pools in Algiers.",
    natPlage: "Beaches",
    natPlageDesc: "Public and supervised beaches.",
    natClub: "Swimming clubs",
    natClubDesc: "Student clubs and associations.",

    // ============ 9. Sport ============
    sportIntro: "University sport and off-campus.",
    sportUniv: "University sport",
    sportUnivDesc: "Activities offered by ONSU.",
    sportHors: "Sport outside residence",
    sportHorsDesc: "Private gyms and clubs.",
    sportFootball: "Football",
    sportFootballDesc: "Free matches between students.",
    sportRunning: "Running",
    sportRunningDesc: "Running in Algiers.",
    sportBasket: "Basket / Volley",
    sportBasketDesc: "Team sports.",

    // ============ 10. Green ============
    greenIntro: "Green project and recycling.",
    greenRecy: "Paper recycling",
    greenRecyDesc: "Collecting used paper to recycle.",
    greenEcologie: "Ecology",
    greenEcologieDesc: "Environmental actions and awareness.",

    // ============ 11. Podcast ============
    podcastIntro: "ENSTP student podcast.",
    podcastEp1: "Episode 1",
    podcastEp1Desc: "Welcome to ENSTP — new student guide.",
    podcastEp2: "Episode 2",
    podcastEp2Desc: "Student life and university residence.",
    podcastEp3: "Episode 3",
    podcastEp3Desc: "Tips to succeed in your first year.",

    // ============ 12. Courses ============
    coursesIntro: "Courses and training to help you.",
    courseMath: "Mathematics",
    courseMathDesc: "Support courses in analysis and algebra.",
    coursePhysique: "Physics",
    coursePhysiqueDesc: "Support courses in physics.",
    courseInfo: "Computer Science",
    courseInfoDesc: "Introduction to programming.",

    // ============ 13. About ============
    aboutIntro: "A student project, 100% free.",
    aboutMission: "Our mission",
    aboutMissionDesc: "Help every new student integrate quickly and never stay alone facing a problem.",
    aboutTeam: "Our team",
    aboutTeamDesc: "1st year Engineering students, Group 2, Infrastructures de Base, promotion 2024/2025.",
    aboutValues: "Our values",
    aboutValuesDesc: "Mutual aid, free, respect, transparency, trust.",
    aboutJoin: "Join the team",
    aboutJoinDesc: "Contact us via the official class group.",
    aboutWarning: "Warning",
    aboutWarningDesc: "Information is indicative. Always verify with administration.",
    aboutUpdate: "Last update",
    aboutUpdateDesc: "October 2026 — Version 2.0",

    // ============ Footer ============
    footerTitle: "ENSTP Survival Guide",
    footerSub: "A project by 1st year Engineering students, Group 2 — Infrastructures de Base.",
    footerFree: "100% free · 3 languages · Offline",
    footerAccess: "Access the guide"
  }
};

// ============================================
// نهاية ملف lang.js
// ============================================
// ✅ الملف مكتمل الآن
// ============================================

// ============================================
// دوال مساعدة للترجمة
// ============================================

/**
 * الحصول على نص مترجم
 * @param {string} key - المفتاح
 * @param {string} lang - اللغة (fr/ar/en)
 * @returns {string} النص المترجم
 */
function t(key, lang) {
  const l = lang || localStorage.getItem('lang') || 'fr';
  const data = LANG_DATA[l] || LANG_DATA.fr;
  return data[key] || LANG_DATA.fr[key] || key;
}

/**
 * الحصول على اللغة الحالية
 * @returns {string} اللغة الحالية (fr/ar/en)
 */
function getCurrentLang() {
  return localStorage.getItem('lang') || 'fr';
}

/**
 * تعيين اللغة الحالية
 * @param {string} lang - اللغة الجديدة
 */
function setCurrentLang(lang) {
  if (['fr', 'ar', 'en'].includes(lang)) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    return true;
  }
  return false;
}

// ============================================
// تصدير للاستخدام في الصفحات الأخرى
// ============================================
if (typeof window !== 'undefined') {
  window.LANG_DATA = LANG_DATA;
  window.t = t;
  window.getCurrentLang = getCurrentLang;
  window.setCurrentLang = setCurrentLang;
}
 
    
