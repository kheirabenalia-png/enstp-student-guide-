// ============================================
// data.js — Guide de survie ENSTP
// Fait par les étudiants de 1ère année Ingénieur
// Groupe 2 — Infrastructures de Base — 2024/2025
// ============================================

const CONFIG = {
  siteName: {
    fr: "Guide de survie ENSTP",
    ar: "دليل البقاء ENSTP",
    en: "ENSTP Survival Guide"
  },
  tagline: {
    fr: "Ton premier jour, dans ta poche.",
    ar: "يومك الأول، في جيبك.",
    en: "Your first day, in your pocket."
  },
  defaultLang: "fr"
};

const SECTIONS = [

  // ========== 1. LES SALLES ==========
  {
    id: "salles",
    icon: "📍",
    title: { fr: "Où est ma salle ?", ar: "أين قاعتي؟", en: "Where is my room?" },
    intro: {
      fr: "26 salles, 2 amphithéâtres (A et B). Trouve ta salle.",
      ar: "26 قاعة، مدرجان (أ و ب). اعرف قاعتك.",
      en: "26 classrooms, 2 amphitheaters (A and B). Find your room."
    },
    items: [
      { title: { fr: "🏛 Amphithéâtre A", ar: "🏛 المدرج أ", en: "🏛 Amphitheater A" },
        desc: { fr: "Cours magistraux. Grand groupe.", ar: "محاضرات. فوج كبير.", en: "Lectures. Large group." } },
      { title: { fr: "🏛 Amphithéâtre B", ar: "🏛 المدرج ب", en: "🏛 Amphitheater B" },
        desc: { fr: "Cours magistraux. Grand groupe.", ar: "محاضرات. فوج كبير.", en: "Lectures. Large group." } },
      { title: { fr: "📚 Salles 1 à 26", ar: "📚 القاعات من 1 إلى 26", en: "📚 Rooms 1 to 26" },
        desc: { fr: "Salles de TD, réparties sur plusieurs étages.", ar: "قاعات الأعمال الموجهة، موزعة على عدة طوابق.", en: "TD rooms, spread over several floors." } },
      { title: { fr: "🔬 Laboratoires", ar: "🔬 المخابر", en: "🔬 Laboratories" },
        desc: { fr: "Physique, chimie, matériaux, géotechnique.", ar: "فيزياء، كيمياء، مواد، جيوتقنية.", en: "Physics, chemistry, materials, geotechnics." } }
    ]
  },

  // ========== 2. LES SERVICES ==========
  {
    id: "services",
    icon: "🆘",
    title: { fr: "J'ai un problème", ar: "عندي مشكلة", en: "I have a problem" },
    intro: {
      fr: "Clique sur ton problème, on te dit où aller.",
      ar: "اضغط على مشكلتك، نخبرك أين تذهب.",
      en: "Click your problem, we tell you where to go."
    },
    tree: [
      { q: { fr: "Justificatif d'absence", ar: "تبرير غياب", en: "Absence justification" },
        a: { service: { fr: "Scolarité / Département", ar: "الشؤون الطلابية / القسم", en: "Student Affairs / Department" },
             procedure: { fr: "Dépose un document médical sous 3 jours.", ar: "قدّم وثيقة طبية خلال 3 أيام.", en: "Submit a medical document within 3 days." } } },
      { q: { fr: "Je suis absent(e)", ar: "أنا غائب", en: "I'm absent" },
        a: { service: { fr: "Département + Délégué", ar: "القسم + المندوب", en: "Department + Delegate" },
             procedure: { fr: "Préviens ton délégué. Justifie au-delà d'1 jour.", ar: "أخبر مندوبك. قدّم تبريراً بعد يوم.", en: "Notify your delegate. Justify beyond 1 day." } } },
      { q: { fr: "Carte d'étudiant", ar: "بطاقة الطالب", en: "Student card" },
        a: { service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
             procedure: { fr: "Délivrée après inscription définitive.", ar: "تُسلَّم بعد التسجيل النهائي.", en: "Issued after final enrollment." } } },
      { q: { fr: "J'ai perdu ma carte", ar: "أضعت بطاقتي", en: "I lost my card" },
        a: { service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
             procedure: { fr: "Déclaration + 2 photos. Frais possibles.", ar: "تصريح + صورتان. رسوم محتملة.", en: "Report + 2 photos. Fees may apply." } } },
      { q: { fr: "Inscription à la bibliothèque", ar: "التسجيل في المكتبة", en: "Library registration" },
        a: { service: { fr: "Bibliothèque", ar: "المكتبة", en: "Library" },
             procedure: { fr: "Carte + photo. Gratuit.", ar: "بطاقة + صورة. مجاني.", en: "Card + photo. Free." } } },
      { q: { fr: "Rejoindre la bibliothèque", ar: "الانضمام للمكتبة", en: "Join the library" },
        a: { service: { fr: "Bibliothèque — Accueil", ar: "المكتبة — الاستقبال", en: "Library — Reception" },
             procedure: { fr: "Formulaire d'adhésion. Carte prête sous 48h.", ar: "استمارة انضمام. البطاقة خلال 48 ساعة.", en: "Membership form. Card ready within 48h." } } },
      { q: { fr: "Voir mes notes", ar: "رؤية نقاطي", en: "See my grades" },
        a: { service: { fr: "Scolarité / Affichage", ar: "الشؤون الطلابية / الإعلان", en: "Student Affairs / Posting" },
             procedure: { fr: "Notes affichées sur panneaux officiels.", ar: "النقاط معلّقة على اللوحات الرسمية.", en: "Grades on official boards." } } },
      { q: { fr: "Problème d'emploi du temps", ar: "مشكلة في الجدول", en: "Schedule problem" },
        a: { service: { fr: "Chef de département", ar: "رئيس القسم", en: "Department head" },
             procedure: { fr: "Demande au délégué, puis au secrétariat.", ar: "اسأل مندوبك ثم الأمانة.", en: "Ask delegate, then secretary." } } },
      { q: { fr: "Problème d'inscription", ar: "مشكلة في التسجيل", en: "Enrollment problem" },
        a: { service: { fr: "Scolarité — Bureau des inscriptions", ar: "الشؤون الطلابية — مكتب التسجيل", en: "Student Affairs — Enrollment" },
             procedure: { fr: "Apporte toutes les pièces de ton dossier.", ar: "أحضر جميع وثائق ملفك.", en: "Bring all your file documents." } } },
      { q: { fr: "Besoin d'une attestation", ar: "أحتاج شهادة", en: "Need a certificate" },
        a: { service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
             procedure: { fr: "Demande écrite. Délai de quelques jours.", ar: "طلب كتابي. تأخير بضعة أيام.", en: "Written request. A few days delay." } } },
      { q: { fr: "Problème de santé", ar: "مشكلة صحية", en: "Health problem" },
        a: { service: { fr: "Infirmerie de l'école", ar: "عيادة المدرسة", en: "School infirmary" },
             procedure: { fr: "Va à l'infirmerie. Urgent : appelle les secours.", ar: "اذهب للعيادة. عاجل: اتصل بالإسعاف.", en: "Go to infirmary. Urgent: call emergency." } } },
      { q: { fr: "Problème de logement", ar: "مشكلة في السكن", en: "Housing problem" },
        a: { service: { fr: "Administration de la cité", ar: "إدارة الحي الجامعي", en: "Residence administration" },
             procedure: { fr: "Va au bureau de la cité avec ta carte.", ar: "اذهب لمكتب الحي ببطاقتك.", en: "Go to residence office with your card." } } }
    ]
  },

  // ========== 3. LES ENSEIGNANTS ==========
  {
    id: "enseignants",
    icon: "👨‍🏫",
    title: { fr: "Mes enseignants", ar: "أساتذتي", en: "My teachers" },
    intro: {
      fr: "Recherche par matière ou par nom.",
      ar: "ابحث حسب المادة أو الاسم.",
      en: "Search by subject or name."
    },
    items: [
      { title: { fr: "Analyse", ar: "التحليل", en: "Analysis" },
        desc: { fr: "Prof. — Sciences de base", ar: "أ. — العلوم الأساسية", en: "Prof. — Basic Sciences" } },
      { title: { fr: "Algèbre", ar: "الجبر", en: "Algebra" },
        desc: { fr: "Prof. — Sciences de base", ar: "أ. — العلوم الأساسية", en: "Prof. — Basic Sciences" } },
      { title: { fr: "RDM (Résistance des Matériaux)", ar: "مقاومة المواد", en: "Strength of Materials" },
        desc: { fr: "Prof. — Matériaux & Structures", ar: "أ. — المواد والهياكل", en: "Prof. — Materials & Structures" } },
      { title: { fr: "Béton Armé", ar: "الخرسانة المسلحة", en: "Reinforced Concrete" },
        desc: { fr: "Prof. — Matériaux & Structures", ar: "أ. — المواد والهياكل", en: "Prof. — Materials & Structures" } },
      { title: { fr: "Topographie", ar: "الطبوغرافيا", en: "Topography" },
        desc: { fr: "Prof. — Topographie", ar: "أ. — الطبوغرافيا", en: "Prof. — Topography" } },
      { title: { fr: "Géotechnique", ar: "الجيوتقنية", en: "Geotechnics" },
        desc: { fr: "Prof. — Infrastructures de Base", ar: "أ. — المنشآت القاعدية", en: "Prof. — Infrastructures de Base" } },
      { title: { fr: "Hydraulique", ar: "الهيدروليك", en: "Hydraulics" },
        desc: { fr: "Prof. — Hydraulique", ar: "أ. — الهيدروليك", en: "Prof. — Hydraulics" } },
      { title: { fr: "Physique", ar: "الفيزياء", en: "Physics" },
        desc: { fr: "Prof. — Sciences de base", ar: "أ. — العلوم الأساسية", en: "Prof. — Basic Sciences" } },
      { title: { fr: "Chimie", ar: "الكيمياء", en: "Chemistry" },
        desc: { fr: "Prof. — Sciences de base", ar: "أ. — العلوم الأساسية", en: "Prof. — Basic Sciences" } },
      { title: { fr: "Informatique", ar: "الإعلام الآلي", en: "Computer Science" },
        desc: { fr: "Prof. — Sciences de base", ar: "أ. — العلوم الأساسية", en: "Prof. — Basic Sciences" } }
    ]
  },

  // ========== 4. CITÉ UNIVERSITAIRE ==========
  {
    id: "cite",
    icon: "🏠",
    title: { fr: "Cité universitaire", ar: "الإقامة الجامعية", en: "Student residence" },
    intro: {
      fr: "3 résidences : Garidi, Saïd Hamdine, Rouiba.",
      ar: "3 إقامات: قاريدي، سعيد حمدين، رويسو.",
      en: "3 residences: Garidi, Saïd Hamdine, Rouiba."
    },
    items: [
      { title: { fr: "🏠 Garidi", ar: "🏠 قاريدي", en: "🏠 Garidi" },
        desc: { fr: "La plus proche de l'ENSTP. Restaurant, laverie.", ar: "الأقرب للمدرسة. مطعم، مصبنة.", en: "Closest to ENSTP. Restaurant, laundry." },
        map: "Cité universitaire Garidi Kouba Alger" },
      { title: { fr: "🏠 Saïd Hamdine", ar: "🏠 سعيد حمدين", en: "🏠 Saïd Hamdine" },
        desc: { fr: "À quelques minutes de bus.", ar: "على بعد دقائق بالحافلة.", en: "A few bus minutes away." },
        map: "Cité universitaire Saïd Hamdine Alger" },
      { title: { fr: "🏠 Rouiba", ar: "🏠 رويسو", en: "🏠 Rouiba" },
        desc: { fr: "Plus éloignée. Nécessite transport.", ar: "أبعد. تتطلب نقلاً.", en: "Further away. Requires transport." },
        map: "Cité universitaire Rouiba Alger" },
      { title: { fr: "🍽 Restaurant universitaire", ar: "🍽 المطعم الجامعي", en: "🍽 University restaurant" },
        desc: { fr: "Repas à tarif étudiant, 3 fois/jour.", ar: "وجبات بسعر طلابي، 3 مرات/يوم.", en: "Student-rate meals, 3 times/day." } },
      { title: { fr: "📚 Salles d'étude", ar: "📚 قاعات الدراسة", en: "📚 Study rooms" },
        desc: { fr: "Disponibles dans chaque résidence.", ar: "متوفرة في كل إقامة.", en: "Available in each residence." } }
    ]
  },

  // ========== 5. TRANSPORT ==========
  {
    id: "transport",
    icon: "🚌",
    title: { fr: "Transport", ar: "النقل", en: "Transport" },
    intro: {
      fr: "Bus scolaires, bus publics, taxis, à pied.",
      ar: "حافلات مدرسية، حافلات عمومية، تكاسي، مشياً.",
      en: "School buses, public buses, taxis, walking."
    },
    items: [
      { title: { fr: "🚌 Bus scolaires ENSTP", ar: "🚌 الحافلات المدرسية", en: "🚌 ENSTP school buses" },
        desc: { fr: "Desservent les principales cités universitaires.", ar: "تخدم أهم الإقامات الجامعية.", en: "Serve main student residences." } },
      { title: { fr: "🚌 Bus publics", ar: "🚌 الحافلات العمومية", en: "🚌 Public buses" },
        desc: { fr: "Arrêts autour de l'école. Vers centre-ville, gare, métro.", ar: "محطات حول المدرسة. نحو المركز، المحطة، المترو.", en: "Stops around school. To downtown, station, metro." },
        map: "arrêt de bus près de ENSTP Kouba" },
      { title: { fr: "🚕 Taxis collectifs", ar: "🚕 التكاسي الجماعية", en: "🚕 Shared taxis" },
        desc: { fr: "« Y'sir hitt nrouhou » — vers le centre. Tarif fixe par place.", ar: "« يسير هيتش نروحو » — نحو المركز. سعر ثابت للمقعد.", en: "\"Y'sir hitt nrouhou\" — to center. Fixed price per seat." },
        map: "station de taxi près de ENSTP Kouba" },
      { title: { fr: "🚶 À pied", ar: "🚶 مشياً", en: "🚶 Walking" },
        desc: { fr: "Itinéraires sécurisés autour du campus.", ar: "مسارات آمنة حول الحرم.", en: "Safe routes around campus." } },
      { title: { fr: "🚇 Métro / Tramway", ar: "🚇 المترو / الترامواي", en: "🚇 Metro / Tram" },
        desc: { fr: "Stations les plus proches de Kouba.", ar: "أقرب محطات من القبة.", en: "Nearest stations to Kouba." },
        map: "station métro Kouba Alger" },
      { title: { fr: "⛽ Stations-service", ar: "⛽ محطات الوقود", en: "⛽ Gas stations" },
        desc: { fr: "Pour les étudiants motorisés.", ar: "للطلاب ذوي السيارات.", en: "For motorized students." },
        map: "station service près de ENSTP Kouba" }
    ]
  },

  // ========== 6. MANGER & ACHATS ==========
  {
    id: "manger",
    icon: "🍽",
    title: { fr: "Manger & s'approvisionner", ar: "الأكل والتسوق", en: "Eating & shopping" },
    intro: {
      fr: "Restaurants, snacks, cafés, supérettes, pharmacies.",
      ar: "مطاعم، وجبات خفيفة، مقاهي، أسواق، صيدليات.",
      en: "Restaurants, snacks, cafés, groceries, pharmacies."
    },
    items: [
      { title: { fr: "🍽 Restaurants & fast-foods", ar: "🍽 مطاعم ووجبات سريعة", en: "🍽 Restaurants & fast-foods" },
        desc: { fr: "Autour de l'école.", ar: "حول المدرسة.", en: "Around the school." },
        map: "restaurant près de ENSTP Kouba" },
      { title: { fr: "🍕 Pizzerias & snacks", ar: "🍕 بيتزا ووجبات خفيفة", en: "🍕 Pizzerias & snacks" },
        desc: { fr: "Repas rapides et pas chers.", ar: "وجبات سريعة وغير مكلفة.", en: "Quick and cheap meals." },
        map: "pizzeria près de ENSTP Kouba" },
      { title: { fr: "☕ Cafés", ar: "☕ مقاهي", en: "☕ Cafés" },
        desc: { fr: "Pour réviser ou se retrouver.", ar: "للمراجعة أو اللقاء.", en: "To study or meet." },
        map: "café près de ENSTP Kouba" },
      { title: { fr: "🥖 Boulangeries", ar: "🥖 مخابز", en: "🥖 Bakeries" },
        desc: { fr: "Sandwichs et pain frais.", ar: "سندويشات وخبز طازج.", en: "Sandwiches and fresh bread." },
        map: "boulangerie près de ENSTP Kouba" },
      { title: { fr: "🛒 Supérettes & épiceries", ar: "🛒 أسواق وبقالات", en: "🛒 Superettes & groceries" },
        desc: { fr: "Pour les achats quotidiens.", ar: "للمشتريات اليومية.", en: "For daily shopping." },
        map: "supérette près de ENSTP Kouba" },
      { title: { fr: "💊 Pharmacies", ar: "💊 صيدليات", en: "💊 Pharmacies" },
        desc: { fr: "De garde : demander à la pharmacie.", ar: "المناوبة: اسأل الصيدلية.", en: "On-call: ask the pharmacy." },
        map: "pharmacie près de ENSTP Kouba" },
      { title: { fr: "🖨 Photocopie & impression", ar: "🖨 تصوير وطباعة", en: "🖨 Photocopy & printing" },
        desc: { fr: "Pour imprimer cours et documents.", ar: "لطباعة الدروس والوثائق.", en: "To print courses and documents." },
        map: "photocopie près de ENSTP Kouba" },
      { title: { fr: "💰 Distributeurs (ATM)", ar: "💰 أجهزة السحب", en: "💰 ATMs" },
        desc: { fr: "Pour retirer de l'argent.", ar: "لسحب الأموال.", en: "To withdraw cash." },
        map: "distributeur automatique près de ENSTP Kouba" }
    ]
  },

  // ========== 7. ALGER ==========
  {
    id: "alger",
    icon: "🗺",
    title: { fr: "Que faire à Alger ?", ar: "ماذا تفعل في الجزائر؟", en: "What to do in Algiers?" },
    intro: {
      fr: "Lieux touristiques et sorties étudiantes.",
      ar: "أماكن سياحية وخرجات طلابية.",
      en: "Tourist spots and student outings."
    },
    items: [
      { title: { fr: "⛪ Notre-Dame d'Afrique", ar: "⛪ سيدة إفريقيا", en: "⛪ Notre-Dame d'Afrique" },
        desc: { fr: "Basilique avec vue sur la baie. ⏱ 1h · 💰 Gratuit.", ar: "كنيسة بإطلالة على الخليج. ⏱ ساعة · 💰 مجاناً.", en: "Basilica with bay view. ⏱ 1h · 💰 Free." },
        map: "Notre-Dame d'Afrique Alger" },
      { title: { fr: "🌿 Jardin d'Essai du Hamma", ar: "🌿 حديقة التجارب", en: "🌿 Jardin d'Essai" },
        desc: { fr: "Jardin botanique. ⏱ 2h · 💰 Petit billet.", ar: "حديقة نباتية. ⏱ ساعتان · 💰 تذكرة صغيرة.", en: "Botanical garden. ⏱ 2h · 💰 Small ticket." },
        map: "Jardin d'Essai du Hamma Alger" },
      { title: { fr: "🏛 La Casbah", ar: "🏛 القصبة", en: "🏛 The Casbah" },
        desc: { fr: "Vieille ville UNESCO. Y aller en groupe.", ar: "مدينة قديمة مصنفة يونسكو. اذهب في مجموعة.", en: "UNESCO old town. Go in group." },
        map: "Casbah d'Alger" },
      { title: { fr: "🏛 Grande Poste", ar: "🏛 البريد المركزي", en: "🏛 Grande Poste" },
        desc: { fr: "Balade centre-ville. ⏱ 2h · 💰 Gratuit.", ar: "نزهة في وسط المدينة. ⏱ ساعتان · 💰 مجاناً.", en: "Downtown walk. ⏱ 2h · 💰 Free." },
        map: "Grande Poste Alger" },
      { title: { fr: "🏛 Maqam Echahid", ar: "🏛 مقام الشهيد", en: "🏛 Martyrs' Memorial" },
        desc: { fr: "Monument avec vue sur Alger.", ar: "نصب بإطلالة على الجزائر.", en: "Monument with view over Algiers." },
        map: "Maqam Echahid Alger" },
      { title: { fr: "🎨 Musées", ar: "🎨 متاحف", en: "🎨 Museums" },
        desc: { fr: "Bardo, Beaux-Arts... Vérifier horaires.", ar: "الباردو، الفنون الجميلة... تحقق من المواعيد.", en: "Bardo, Fine Arts... Check hours." },
        map: "musée Alger" },
      { title: { fr: "🌊 Front de mer", ar: "🌊 الواجهة البحرية", en: "🌊 Seafront" },
        desc: { fr: "Balade au bord de la mer.", ar: "نزهة على البحر.", en: "Walk by the sea." },
        map: "front de mer Alger" }
    ]
  },

  // ========== 8. ÉQUIPE ==========
  {
    id: "equipe",
    icon: "👥",
    title: { fr: "Qui sommes-nous ?", ar: "من نحن؟", en: "Who are we?" },
    intro: {
      fr: "Un projet des étudiants de 1ère année Ingénieur — Groupe 2, Infrastructures de Base, promotion 2024/2025.",
      ar: "مشروع طلاب السنة الأولى مهندس — المجموعة 2، المنشآت القاعدية، دفعة 2024/2025.",
      en: "A project by 1st year Engineering students — Group 2, Infrastructures de Base, 2024/2025."
    },
    items: [
      { title: { fr: "🎯 Notre mission", ar: "🎯 مهمتنا", en: "🎯 Our mission" },
        desc: { fr: "Aider chaque nouvel étudiant à s'intégrer rapidement.", ar: "مساعدة كل طالب جديد على الاندماج بسرعة.", en: "Help every new student integrate quickly." } },
      { title: { fr: "👥 Notre équipe", ar: "👥 فريقنا", en: "👥 Our team" },
        desc: { fr: "1ère année Ingénieur — Groupe 2, Infrastructures de Base, promotion 2024/2025.", ar: "السنة الأولى مهندس — المجموعة 2، المنشآت القاعدية، دفعة 2024/2025.", en: "1st year Engineering — Group 2, Infrastructures de Base, 2024/2025." } },
      { title: { fr: "🤝 Nos valeurs", ar: "🤝 قيمنا", en: "🤝 Our values" },
        desc: { fr: "Entraide · Gratuité · Respect · Transparence · Confiance.", ar: "التضامن · المجانية · الاحترام · الشفافية · الثقة.", en: "Mutual aid · Free · Respect · Transparency · Trust." } },
      { title: { fr: "📢 Rejoindre l'équipe", ar: "📢 انضم إلى الفريق", en: "📢 Join the team" },
        desc: { fr: "Contacte-nous via le groupe officiel de la promo.", ar: "تواصل معنا عبر المجموعة الرسمية للدفعة.", en: "Contact us via the official group." } },
      { title: { fr: "⚠️ Avertissement", ar: "⚠️ تنبيه", en: "⚠️ Disclaimer" },
        desc: { fr: "Informations indicatives. Vérifie auprès de l'administration.", ar: "المعلومات إرشادية. تحقق من الإدارة.", en: "Indicative information. Verify with administration." } },
      { title: { fr: "📅 Dernière mise à jour", ar: "📅 آخر تحديث", en: "📅 Last update" },
        desc: { fr: "Octobre 2026 — Version 1.0", ar: "أكتوبر 2026 — الإصدار 1.0", en: "October 2026 — Version 1.0" } }
    ]
  },

  // ========== 9. QR CODES ==========
  {
    id: "qr",
    icon: "📱",
    title: { fr: "QR Codes", ar: "رموز QR", en: "QR Codes" },
    intro: {
      fr: "QR codes à imprimer et coller dans l'école.",
      ar: "رموز QR للطباعة ولصقها في المدرسة.",
      en: "QR codes to print and paste in the school."
    },
    type: "qr"
  }

];
