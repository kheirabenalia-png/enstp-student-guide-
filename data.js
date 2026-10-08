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
    title: {
      fr: "Où est ma salle ?",
      ar: "أين قاعتي؟",
      en: "Where is my room?"
    },
    intro: {
      fr: "26 salles de cours, 2 amphithéâtres (A et B). Trouve ta salle en un clic.",
      ar: "26 قاعة، مدرجان (أ و ب). اعرف قاعتك بضغطة واحدة.",
      en: "26 classrooms, 2 amphitheaters (A and B). Find your room in one click."
    },
    type: "salles",
    items: [
      {
        title: { fr: "🏛 Amphithéâtres A et B", ar: "🏛 المدرجان أ و ب", en: "🏛 Amphitheaters A and B" },
        desc: {
          fr: "Utilisés pour les cours magistraux (CM). Capacité : grands groupes réunis.",
          ar: "تُستخدم للمحاضرات. السعة: الأفواج الكبيرة مجتمعة.",
          en: "Used for lectures. Capacity: large groups together."
        }
      },
      {
        title: { fr: "📚 26 Salles de TD", ar: "📚 26 قاعة للأعمال الموجهة", en: "📚 26 TD rooms" },
        desc: {
          fr: "Numérotées de 1 à 26. Réparties sur plusieurs étages. Consulte le plan ci-dessous.",
          ar: "مرقّمة من 1 إلى 26. موزعة على عدة طوابق. راجع الخريطة أدناه.",
          en: "Numbered 1 to 26. Spread over several floors. Check the map below."
        }
      },
      {
        title: { fr: "🔬 Salles de TP & Laboratoires", ar: "🔬 قاعات الأعمال التطبيقية والمخابر", en: "🔬 TP rooms & Laboratories" },
        desc: {
          fr: "Physique, chimie, géotechnique, matériaux, topographie, hydraulique.",
          ar: "فيزياء، كيمياء، جيوتقنية، مواد، طبوغرافيا، هيدروليك.",
          en: "Physics, chemistry, geotechnics, materials, topography, hydraulics."
        }
      }
    ]
  },

  // ========== 2. LES SERVICES ==========
  {
    id: "services",
    icon: "🆘",
    title: {
      fr: "Les services",
      ar: "الخدمات",
      en: "Services"
    },
    intro: {
      fr: "Justificatif, absence, carte étudiant, bibliothèque, notes...",
      ar: "تبرير، غياب، بطاقة الطالب، المكتبة، النقاط...",
      en: "Justification, absence, student card, library, grades..."
    },
    type: "tree",
    tree: [
      {
        q: { fr: "J'ai besoin d'un justificatif d'absence", ar: "أحتاج تبرير غياب", en: "I need an absence justification" },
        a: {
          service: { fr: "Scolarité / Département", ar: "الشؤون الطلابية / القسم", en: "Student Affairs / Department" },
          procedure: {
            fr: "Dépose un document médical (ou autre) sous 3 jours. Un formulaire officiel peut être demandé au secrétariat.",
            ar: "قدّم وثيقة طبية (أو غيرها) خلال 3 أيام. قد تُطلب استمارة رسمية من الأمانة.",
            en: "Submit a medical (or other) document within 3 days. An official form may be requested from the secretary."
          }
        }
      },
      {
        q: { fr: "Je suis absent(e) aujourd'hui", ar: "أنا غائب اليوم", en: "I'm absent today" },
        a: {
          service: { fr: "Département + Délégué de promo", ar: "القسم + مندوب الدفعة", en: "Department + Class delegate" },
          procedure: {
            fr: "Préviens ton délégué. Si l'absence dépasse 1 jour, fournis un justificatif à la scolarité.",
            ar: "أخبر مندوبك. إذا تجاوز الغياب يوماً، قدّم تبريراً للشؤون الطلابية.",
            en: "Notify your delegate. If absence exceeds 1 day, provide a justification to student affairs."
          }
        }
      },
      {
        q: { fr: "Ma carte d'étudiant", ar: "بطاقة الطالب", en: "Student card" },
        a: {
          service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
          procedure: {
            fr: "La carte est délivrée après inscription définitive. Elle donne accès à la bibliothèque, aux examens et à la cité universitaire.",
            ar: "تُسلَّم البطاقة بعد التسجيل النهائي. تمنح حق الوصول إلى المكتبة، الامتحانات، والحي الجامعي.",
            en: "The card is issued after final enrollment. It grants access to the library, exams, and student residence."
          }
        }
      },
      {
        q: { fr: "J'ai perdu ma carte d'étudiant", ar: "أضعت بطاقة الطالب", en: "I lost my student card" },
        a: {
          service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
          procedure: {
            fr: "Déclaration de perte + 2 photos d'identité. Frais de renouvellement possibles. Demande un récépissé provisoire.",
            ar: "تصريح بالضياع + صورتان شمسيتان. قد تُطلب رسوم تجديد. اطلب وصل مؤقت.",
            en: "Loss report + 2 ID photos. Renewal fees may apply. Request a temporary receipt."
          }
        }
      },
      {
        q: { fr: "S'inscrire à la bibliothèque", ar: "التسجيل في المكتبة", en: "Register at the library" },
        a: {
          service: { fr: "Bibliothèque universitaire", ar: "المكتبة الجامعية", en: "University library" },
          procedure: {
            fr: "Présente ta carte d'étudiant + 1 photo. Inscription gratuite. Accès aux salles de lecture et au prêt.",
            ar: "قدّم بطاقة الطالب + صورة. التسجيل مجاني. وصول إلى قاعات القراءة والاستعارة.",
            en: "Show your student card + 1 photo. Free registration. Access to reading rooms and lending."
          }
        }
      },
      {
        q: { fr: "Rejoindre la bibliothèque (adhésion)", ar: "الانضمام إلى المكتبة", en: "Join the library" },
        a: {
          service: { fr: "Bibliothèque — Bureau d'accueil", ar: "المكتبة — مكتب الاستقبال", en: "Library — Reception desk" },
          procedure: {
            fr: "Remplis le formulaire d'adhésion. La carte est prête sous 48h. Valable toute l'année.",
            ar: "املأ استمارة الانضمام. البطاقة جاهزة خلال 48 ساعة. صالحة طوال السنة.",
            en: "Fill the membership form. Card ready within 48h. Valid all year."
          }
        }
      },
      {
        q: { fr: "Voir mes notes d'examen", ar: "رؤية نقاط الاختبارات", en: "See my exam grades" },
        a: {
          service: { fr: "Scolarité / Affichage officiel", ar: "الشؤون الطلابية / الإعلان الرسمي", en: "Student Affairs / Official posting" },
          procedure: {
            fr: "Les notes sont affichées sur les panneaux officiels du département et/ou publiées sur la plateforme de l'école.",
            ar: "تُعلَّق النقاط على اللوحات الرسمية للقسم و/أو تُنشر على منصة المدرسة.",
            en: "Grades are posted on official department boards and/or published on the school platform."
          }
        }
      },
      {
        q: { fr: "Je ne comprends pas mon emploi du temps", ar: "لا أفهم جدولي", en: "I don't understand my schedule" },
        a: {
          service: { fr: "Chef de département / Délégué", ar: "رئيس القسم / المندوب", en: "Department head / Delegate" },
          procedure: {
            fr: "Demande à ton délégué de promo. Si le problème persiste, va au secrétariat du département.",
            ar: "اسأل مندوب دفعتك. إذا استمرت المشكلة، اذهب إلى أمانة القسم.",
            en: "Ask your class delegate. If the problem persists, go to the department secretary."
          }
        }
      }
    ]
  },

  // ========== 3. LES ENSEIGNANTS ==========
  {
    id: "enseignants",
    icon: "👨‍🏫",
    title: {
      fr: "Mes enseignants",
      ar: "أساتذتي",
      en: "My teachers"
    },
    intro: {
      fr: "Recherche par matière, par département ou par nom.",
      ar: "ابحث حسب المادة، القسم، أو الاسم.",
      en: "Search by subject, department or name."
    },
    type: "teachers",
    teachers: [
      {
        name: { fr: "Prof. À compléter", ar: "أ. يُكمل لاحقاً", en: "Prof. To complete" },
        subject: { fr: "Analyse", ar: "التحليل", en: "Analysis" },
        department: { fr: "Sciences de base", ar: "العلوم الأساسية", en: "Basic Sciences" },
        grade: { fr: "Grade à compléter", ar: "الرتبة تُكمل", en: "Grade TBC" },
        email: "à-completer@enstp.dz"
      },
      {
        name: { fr: "Prof. À compléter", ar: "أ. يُكمل لاحقاً", en: "Prof. To complete" },
        subject: { fr: "Algèbre", ar: "الجبر", en: "Algebra" },
        department: { fr: "Sciences de base", ar: "العلوم الأساسية", en: "Basic Sciences" },
        grade: { fr: "Grade à compléter", ar: "الرتبة تُكمل", en: "Grade TBC" },
        email: "à-completer@enstp.dz"
      },
      {
        name: { fr: "Prof. À compléter", ar: "أ. يُكمل لاحقاً", en: "Prof. To complete" },
        subject: { fr: "Résistance des Matériaux (RDM)", ar: "مقاومة المواد", en: "Strength of Materials" },
        department: { fr: "Matériaux & Structures", ar: "المواد والهياكل", en: "Materials & Structures" },
        grade: { fr: "Grade à compléter", ar: "الرتبة تُكمل", en: "Grade TBC" },
        email: "à-completer@enstp.dz"
      },
      {
        name: { fr: "Prof. À compléter", ar: "أ. يُكمل لاحقاً", en: "Prof. To complete" },
        subject: { fr: "Béton Armé", ar: "الخرسانة المسلحة", en: "Reinforced Concrete" },
        department: { fr: "Matériaux & Structures", ar: "المواد والهياكل", en: "Materials & Structures" },
        grade: { fr: "Grade à compléter", ar: "الرتبة تُكمل", en: "Grade TBC" },
        email: "à-completer@enstp.dz"
      },
      {
        name: { fr: "Prof. À compléter", ar: "أ. يُكمل لاحقاً", en: "Prof. To complete" },
        subject: { fr: "Topographie", ar: "الطبوغرافيا", en: "Topography" },
        department: { fr: "Topographie", ar: "الطبوغرافيا", en: "Topography" },
        grade: { fr: "Grade à compléter", ar: "الرتبة تُكمل", en: "Grade TBC" },
        email: "à-completer@enstp.dz"
      },
      {
        name: { fr: "Prof. À compléter", ar: "أ. يُكمل لاحقاً", en: "Prof. To complete" },
        subject: { fr: "Géotechnique", ar: "الجيوتقنية", en: "Geotechnics" },
        department: { fr: "Infrastructures de Base", ar: "المنشآت القاعدية", en: "Infrastructures de Base" },
        grade: { fr: "Grade à compléter", ar: "الرتبة تُكمل", en: "Grade TBC" },
        email: "à-completer@enstp.dz"
      }
    ]
  },

  // ========== 4. CITÉ UNIVERSITAIRE ==========
  {
    id: "cite",
    icon: "🏠",
    title: {
      fr: "Vie à la cité universitaire",
      ar: "الحياة في الإقامة الجامعية",
      en: "Student residence life"
    },
    intro: {
      fr: "3 résidences universitaires : Garidi, Saïd Hamdine, Rouiba.",
      ar: "3 إقامات جامعية: قاريدي، سعيد حمدين، رويسو.",
      en: "3 university residences: Garidi, Saïd Hamdine, Rouiba."
    },
    items: [
      {
        title: { fr: "🏠 Résidence Garidi", ar: "🏠 إقامة قاريدي", en: "🏠 Garidi Residence" },
        desc: {
          fr: "La plus proche de l'ENSTP. Idéale pour les étudiants sans voiture. Chambres partagées, restaurant universitaire, laverie.",
          ar: "الأقرب إلى المدرسة. مثالية للطلاب بدون سيارة. غرف مشتركة، مطعم جامعي، مصبنة.",
          en: "Closest to ENSTP. Ideal for students without a car. Shared rooms, university restaurant, laundry."
        },
        map: "Cité universitaire Garidi Kouba Alger"
      },
      {
        title: { fr: "🏠 Résidence Saïd Hamdine", ar: "🏠 إقامة سعيد حمدين", en: "🏠 Saïd Hamdine Residence" },
        desc: {
          fr: "Située à Saïd Hamdine, à quelques minutes de bus de l'école. Grande capacité.",
          ar: "تقع في سعيد حمدين، على بعد دقائق بالحافلة من المدرسة. سعة كبيرة.",
          en: "Located in Saïd Hamdine, a few bus minutes from school. Large capacity."
        },
        map: "Cité universitaire Saïd Hamdine Alger"
      },
      {
        title: { fr: "🏠 Résidence Rouiba", ar: "🏠 إقامة رويسو", en: "🏠 Rouiba Residence" },
        desc: {
          fr: "Située à Rouiba, plus éloignée. Nécessite un transport quotidien (bus/tram).",
          ar: "تقع في رويسو، أبعد. تتطلب نقلاً يومياً (حافلة/ترامواي).",
          en: "Located in Rouiba, further away. Requires daily transport (bus/tram)."
        },
        map: "Cité universitaire Rouiba Alger"
      },
      {
        title: { fr: "🍽 Restaurant universitaire", ar: "🍽 المطعم الجامعي", en: "🍽 University restaurant" },
        desc: {
          fr: "Repas à tarif étudiant, 3 fois par jour. Réservé aux internes sur présentation de la carte de résident.",
          ar: "وجبات بسعر طلابي، 3 مرات يومياً. محجوز للداخليين ببطاقة الإقامة.",
          en: "Student-rate meals, 3 times a day. Reserved for residents with resident card."
        }
      },
      {
        title: { fr: "📚 Salles d'étude", ar: "📚 قاعات الدراسة", en: "📚 Study rooms" },
        desc: {
          fr: "Disponibles dans chaque résidence. Ouvertes jusqu'à 22h.",
          ar: "متوفرة في كل إقامة. مفتوحة حتى 22:00.",
          en: "Available in each residence. Open until 10 PM."
        }
      }
    ]
  },

  // ========== 5. TRANSPORT ==========
  {
    id: "transport",
    icon: "🚌",
    title: {
      fr: "Transport",
      ar: "النقل",
      en: "Transport"
    },
    intro: {
      fr: "Bus scolaires, bus publics, taxis collectifs, à pied.",
      ar: "حافلات مدرسية، حافلات عمومية، تكاسي جماعية، مشياً.",
      en: "School buses, public buses, shared taxis, walking."
    },
    items: [
      {
        title: { fr: "🚌 Bus scolaires ENSTP", ar: "🚌 الحافلات المدرسية", en: "🚌 ENSTP school buses" },
        desc: {
          fr: "Bus de l'école desservant les principales cités universitaires. Horaires affichés à l'entrée.",
          ar: "حافلات المدرسة تخدم أهم الإقامات الجامعية. المواعيد معلّقة على المدخل.",
          en: "School buses serving main student residences. Schedule posted at the entrance."
        }
      },
      {
        title: { fr: "🚌 Bus publics", ar: "🚌 الحافلات العمومية", en: "🚌 Public buses" },
        desc: {
          fr: "Arrêts autour de l'école. Lignes vers centre-ville, gare routière, métro.",
          ar: "محطات حول المدرسة. خطوط نحو وسط المدينة، المحطة البرية، المترو.",
          en: "Stops around the school. Lines to downtown, bus station, metro."
        },
        map: "arrêt de bus près de ENSTP Kouba"
      },
      {
        title: { fr: "🚕 Taxis collectifs", ar: "🚕 التكاسي الجماعية", en: "🚕 Shared taxis" },
        desc: {
          fr: "« يسير هيتش نروحو » — Taxi collectif vers le centre. Tarif fixe par place. Demande le prix avant de monter.",
          ar: "« يسير هيتش نروحو » — تكاسي جماعية نحو المركز. سعر ثابت للمقعد. اسأل عن السعر قبل الركوب.",
          en: "\"Y'sir hitt nrouhou\" — Shared taxi to the center. Fixed price per seat. Ask the price first."
        },
        map: "station de taxi près de ENSTP Kouba"
      },
      {
        title: { fr: "🚶 À pied", ar: "🚶 مشياً", en: "🚶 Walking" },
        desc: {
          fr: "Itinéraires sécurisés autour du campus. Évite les ruelles isolées la nuit.",
          ar: "مسارات آمنة حول الحرم. تجنّب الأزقة المعزولة ليلاً.",
          en: "Safe routes around campus. Avoid isolated alleys at night."
        }
      },
      {
        title: { fr: "🚇 Métro / Tramway", ar: "🚇 المترو / الترامواي", en: "🚇 Metro / Tram" },
        desc: {
          fr: "Stations les plus proches de Kouba. Utile pour rejoindre le centre.",
          ar: "أقرب محطات من القبة. مفيد للوصول إلى المركز.",
          en: "Nearest stations to Kouba. Useful to reach the center."
        },
        map: "station métro Kouba Alger"
      },
      {
        title: { fr: "⛽ Stations-service", ar: "⛽ محطات الوقود", en: "⛽ Gas stations" },
        desc: {
          fr: "Pour les étudiants motorisés. Utiles aussi comme points de repère.",
          ar: "للطلاب ذوي السيارات. مفيدة كمعالم أيضاً.",
          en: "For motorized students. Useful as landmarks too."
        },
        map: "station service près de ENSTP Kouba"
      }
    ]
  },

  // ========== 6. MANGER & ACHATS ==========
  {
    id: "manger",
    icon: "🍽",
    title: {
      fr: "Manger & s'approvisionner",
      ar: "الأكل والتسوق",
      en: "Eating & shopping"
    },
    intro: {
      fr: "Restaurants, snacks, cafés, supérettes, pharmacies.",
      ar: "مطاعم، وجبات خفيفة، مقاهي، أسواق، صيدليات.",
      en: "Restaurants, snacks, cafés, groceries, pharmacies."
    },
    items: [
      {
        title: { fr: "🍽 Restaurants & fast-foods", ar: "🍽 مطاعم ووجبات سريعة", en: "🍽 Restaurants & fast-foods" },
        desc: { fr: "Autour de l'école.", ar: "حول المدرسة.", en: "Around the school." },
        map: "restaurant près de ENSTP Kouba"
      },
      {
        title: { fr: "🍕 Pizzerias & snacks", ar: "🍕 بيتزا ووجبات خفيفة", en: "🍕 Pizzerias & snacks" },
        desc: { fr: "Repas rapides et pas chers.", ar: "وجبات سريعة وغير مكلفة.", en: "Quick and cheap meals." },
        map: "pizzeria près de ENSTP Kouba"
      },
      {
        title: { fr: "☕ Cafés", ar: "☕ مقاهي", en: "☕ Cafés" },
        desc: { fr: "Pour réviser ou se retrouver.", ar: "للمراجعة أو اللقاء.", en: "To study or meet." },
        map: "café près de ENSTP Kouba"
      },
      {
        title: { fr: "🥖 Boulangeries", ar: "🥖 مخابز", en: "🥖 Bakeries" },
        desc: { fr: "Sandwichs et pain frais.", ar: "سندويشات وخبز طازج.", en: "Sandwiches and fresh bread." },
        map: "boulangerie près de ENSTP Kouba"
      },
      {
        title: { fr: "🛒 Supérettes & épiceries", ar: "🛒 أسواق وبقالات", en: "🛒 Superettes & groceries" },
        desc: { fr: "Pour les achats quotidiens.", ar: "للمشتريات اليومية.", en: "For daily shopping." },
        map: "supérette près de ENSTP Kouba"
      },
      {
        title: { fr: "💊 Pharmacies", ar: "💊 صيدليات", en: "💊 Pharmacies" },
        desc: { fr: "Pharmacie la plus proche. De garde : demander à la pharmacie.", ar: "أقرب صيدلية. المناوبة: اسأل الصيدلية.", en: "Nearest pharmacy. On-call: ask the pharmacy." },
        map: "pharmacie près de ENSTP Kouba"
      },
      {
        title: { fr: "🖨 Photocopie & impression", ar: "🖨 تصوير وطباعة", en: "🖨 Photocopy & printing" },
        desc: { fr: "Pour imprimer cours et documents.", ar: "لطباعة الدروس والوثائق.", en: "To print courses and documents." },
        map: "photocopie près de ENSTP Kouba"
      },
      {
        title: { fr: "💰 Distributeurs (ATM)", ar: "💰 أجهزة السحب", en: "💰 ATMs" },
        desc: { fr: "Pour retirer de l'argent.", ar: "لسحب الأموال.", en: "To withdraw cash." },
        map: "distributeur automatique près de ENSTP Kouba"
      }
    ]
  },

  // ========== 7. ALGER ==========
  {
    id: "alger",
    icon: "🗺",
    title: {
      fr: "Que faire à Alger ?",
      ar: "ماذا تفعل في الجزائر العاصمة؟",
      en: "What to do in Algiers?"
    },
    intro: {
      fr: "Lieux touristiques et sorties étudiantes à petit budget.",
      ar: "أماكن سياحية وخرجات طلابية بميزانية صغيرة.",
      en: "Tourist spots and student outings on a small budget."
    },
    items: [
      {
        title: { fr: "⛪ Notre-Dame d'Afrique", ar: "⛪ سيدة إفريقيا", en: "⛪ Notre-Dame d'Afrique" },
        desc: { fr: "Basilique avec vue sur la baie. ⏱ 1h · 💰 Gratuit.", ar: "كنيسة بإطلالة على الخليج. ⏱ ساعة · 💰 مجاناً.", en: "Basilica with bay view. ⏱ 1h · 💰 Free." },
        map: "Notre-Dame d'Afrique Alger"
      },
      {
        title: { fr: "🌿 Jardin d'Essai du Hamma", ar: "🌿 حديقة التجارب", en: "🌿 Jardin d'Essai" },
        desc: { fr: "Jardin botanique. Idéal pour réviser. ⏱ 2h · 💰 Petit billet.", ar: "حديقة نباتية. مثالية للمراجعة. ⏱ ساعتان · 💰 تذكرة صغيرة.", en: "Botanical garden. Ideal for studying. ⏱ 2h · 💰 Small ticket." },
        map: "Jardin d'Essai du Hamma Alger"
      },
      {
        title: { fr: "🏛 La Casbah", ar: "🏛 القصبة", en: "🏛 The Casbah" },
        desc: { fr: "Vieille ville classée UNESCO. Y aller en groupe. ⏱ 2-3h.", ar: "مدينة قديمة مصنفة يونسكو. اذهب في مجموعة. ⏱ 2-3 ساعات.", en: "Old town, UNESCO listed. Go in group. ⏱ 2-3h." },
        map: "Casbah d'Alger"
      },
      {
        title: { fr: "🏛 Grande Poste", ar: "🏛 البريد المركزي", en: "🏛 Grande Poste" },
        desc: { fr: "Balade centre-ville. ⏱ 2h · 💰 Gratuit.", ar: "نزهة في وسط المدينة. ⏱ ساعتان · 💰 مجاناً.", en: "Downtown walk. ⏱ 2h · 💰 Free." },
        map: "Grande Poste Alger"
      },
      {
        title: { fr: "🏛 Maqam Echahid", ar: "🏛 مقام الشهيد", en: "🏛 Martyrs' Memorial" },
        desc: { fr: "Monument avec vue sur Alger. ⏱ 1-2h.", ar: "نصب بإطلالة على الجزائر. ⏱ 1-2 ساعة.", en: "Monument with view over Algiers. ⏱ 1-2h." },
        map: "Maqam Echahid Alger"
      },
      {
        title: { fr: "🎨 Musées", ar: "🎨 متاحف", en: "🎨 Museums" },
        desc: { fr: "Bardo, Beaux-Arts... Vérifier horaires.", ar: "الباردو، الفنون الجميلة... تحقق من المواعيد.", en: "Bardo, Fine Arts... Check hours." },
        map: "musée Alger"
      },
      {
        title: { fr: "🌊 Front de mer", ar: "🌊 الواجهة البحرية", en: "🌊 Seafront" },
        desc: { fr: "Balade au bord de la mer. ⏱ 1-2h · 💰 Gratuit.", ar: "نزهة على البحر. ⏱ 1-2 ساعة · 💰 مجاناً.", en: "Walk by the sea. ⏱ 1-2h · 💰 Free." },
        map: "front de mer Alger"
      }
    ]
  },

  // ========== 8. QUI SOMMES-NOUS ==========
  {
    id: "equipe",
    icon: "👥",
    title: {
      fr: "Qui sommes-nous ?",
      ar: "من نحن؟",
      en: "Who are we?"
    },
    intro: {
      fr: "Un projet des étudiants de 1ère année Ingénieur — Groupe 2, Infrastructures de Base, promotion 2024/2025.",
      ar: "مشروع طلاب السنة الأولى مهندس — المجموعة 2، المنشآت القاعدية، دفعة 2024/2025.",
      en: "A project by 1st year Engineering students — Group 2, Infrastructures de Base, 2024/2025."
    },
    items: [
      {
        title: { fr: "🎯 Notre mission", ar: "🎯 مهمتنا", en: "🎯 Our mission" },
        desc: {
          fr: "Aider chaque nouvel étudiant à s'intégrer rapidement et à ne jamais rester seul face à un problème.",
          ar: "مساعدة كل طالب جديد على الاندماج بسرعة وعدم البقاء وحيداً أمام أي مشكلة.",
          en: "Help every new student integrate quickly and never stay alone facing a problem."
        }
      },
      {
        title: { fr: "👥 Notre équipe", ar: "👥 فريقنا", en: "👥 Our team" },
        desc: {
          fr: "Étudiants de 1ère année Ingénieur — Groupe 2, département Infrastructures de Base (منشآت قاعدية), promotion 2024/2025, à l'ENSTP.",
          ar: "طلاب السنة الأولى مهندس — المجموعة 2، قسم المنشآت القاعدية، دفعة 2024/2025، في المدرسة.",
          en: "1st year Engineering students — Group 2, Infrastructures de Base department, promotion 2024/2025, at ENSTP."
        }
      },
      {
        title: { fr: "🤝 Nos valeurs", ar: "🤝 قيمنا", en: "🤝 Our values" },
        desc: {
          fr: "Entraide · Gratuité · Respect · Transparence · Confiance.",
          ar: "التضامن · المجانية · الاحترام · الشفافية · الثقة.",
          en: "Mutual aid · Free · Respect · Transparency · Trust."
        }
      },
      {
        title: { fr: "📢 Rejoindre l'équipe", ar: "📢 انضم إلى الفريق", en: "📢 Join the team" },
        desc: {
          fr: "Tu veux contribuer ? Filmer, traduire, vérifier, ajouter un lieu... Contacte-nous via le groupe officiel de la promo.",
          ar: "تريد المساهمة؟ تصوير، ترجمة، تحقق، إضافة مكان... تواصل معنا عبر المجموعة الرسمية للدفعة.",
          en: "Want to contribute? Film, translate, verify, add a place... Contact us via the official group."
        }
      },
      {
        title: { fr: "⚠️ Avertissement", ar: "⚠️ تنبيه", en: "⚠️ Disclaimer" },
        desc: {
          fr: "Les informations sont fournies à titre indicatif. Elles peuvent changer. Vérifie toujours auprès de l'administration.",
          ar: "المعلومات إرشادية. قد تتغير. تحقق دائماً من الإدارة.",
          en: "Information is indicative. It may change. Always verify with administration."
        }
      },
      {
        title: { fr: "📅 Dernière mise à jour", ar: "📅 آخر تحديث", en: "📅 Last update" },
        desc: {
          fr: "Octobre 2026 — Version 1.0",
          ar: "أكتوبر 2026 — الإصدار 1.0",
          en: "October 2026 — Version 1.0"
        }
      }
    ]
  }

];

// ============================================
// QR CODES
// ============================================
const QR_LIST = [
  { id: "01", label: { fr: "Accueil", ar: "الرئيسية", en: "Home" }, url: "index.html" },
  { id: "02", label: { fr: "Où est ma salle ?", ar: "أين قاعتي؟", en: "Where is my room?" }, url: "guide.html#salles" },
  { id: "03", label: { fr: "Les services", ar: "الخدمات", en: "Services" }, url: "guide.html#services" },
  { id: "04", label: { fr: "Mes enseignants", ar: "أساتذتي", en: "My teachers" }, url: "guide.html#enseignants" },
  { id: "05", label: { fr: "Cité universitaire", ar: "الإقامة الجامعية", en: "Student residence" }, url: "guide.html#cite" },
  { id: "06", label: { fr: "Transport", ar: "النقل", en: "Transport" }, url: "guide.html#transport" },
  { id: "07", label: { fr: "Manger & achats", ar: "الأكل والتسوق", en: "Eating & shopping" }, url: "guide.html#manger" },
  { id: "08", label: { fr: "Que faire à Alger ?", ar: "ماذا تفعل في الجزائر؟", en: "What to do in Algiers?" }, url: "guide.html#alger" },
  { id: "09", label: { fr: "Qui sommes-nous ?", ar: "من نحن؟", en: "Who are we?" }, url: "guide.html#equipe" }
];
