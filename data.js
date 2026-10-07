// ============================================
// ملف البيانات — Guide de survie ENSTP
// عدّل هنا فقط — لا تلمس guide.html
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
  color: "#c2410c",
  defaultLang: "fr",
  // رابط Google Sheets للجداول (اتركه فارغاً إذا لم يكن جاهزاً)
  scheduleSheetURL: "",
  // رقم واتساب للنادي أو المجموعة
  whatsappGroup: ""
};

// ============================================
// الأقسام الرئيسية
// ============================================

const SECTIONS = [

  // ========== 1. OÙ EST MA SALLE ? ==========
  {
    id: "salle",
    icon: "📍",
    title: {
      fr: "Où est ma salle ?",
      ar: "أين قاعتي؟",
      en: "Where is my room?"
    },
    intro: {
      fr: "Trouve ton groupe, ton emploi du temps, tes salles et tes amphis.",
      ar: "اعرف فوجك، جدولك، قاعاتك، ومدرجاتك.",
      en: "Find your group, schedule, rooms and amphitheaters."
    },
    items: [
      {
        title: {
          fr: "🎓 Mon groupe",
          ar: "🎓 فوجي",
          en: "🎓 My group"
        },
        desc: {
          fr: "Chaque étudiant appartient à un groupe (ex : G1, G2, G3). Ton groupe est affiché dans l'emploi du temps officiel. Si tu ne le connais pas, demande à la scolarité.",
          ar: "كل طالب ينتمي إلى فوج (مثل: G1، G2، G3). فوجك مذكور في الجدول الرسمي. إذا لم تعرفه، اسأل الشؤون الطلابية.",
          en: "Each student belongs to a group (e.g. G1, G2, G3). Your group is shown in the official schedule. If you don't know it, ask student affairs."
        }
      },
      {
        title: {
          fr: "🗓 Mon emploi du temps",
          ar: "🗓 جدولي",
          en: "🗓 My schedule"
        },
        desc: {
          fr: "Consulte le planning officiel de ta promo et de ton groupe. Il est affiché à l'entrée du département et publié en ligne.",
          ar: "راجع الجدول الرسمي لدفعتك وفوجك. معلّق على مدخل القسم ومنشور على الإنترنت.",
          en: "Check your year's and group's official schedule. It's posted at the department entrance and published online."
        },
        link: {
          fr: "Voir le planning officiel",
          ar: "عرض الجدول الرسمي",
          en: "View official schedule"
        },
        url: "#schedule"
      },
      {
        title: {
          fr: "🏛 Amphithéâtres",
          ar: "🏛 المدرجات",
          en: "🏛 Amphitheaters"
        },
        desc: {
          fr: "Amphi A, Amphi B, Amphi C — utilisés pour les cours magistraux (CM). Les grands groupes y assistent ensemble.",
          ar: "مدرج أ، ب، ج — تُستخدم للمحاضرات. الأفواج الكبيرة تحضرها معاً.",
          en: "Amphi A, B, C — used for lectures. Large groups attend together."
        }
      },
      {
        title: {
          fr: "📚 Salles de TD",
          ar: "📚 قاعات الأعمال الموجهة",
          en: "📚 TD rooms"
        },
        desc: {
          fr: "Salles pour les Travaux Dirigés (TD) — groupes réduits. Numérotées (Salle 1, 2, 13...).",
          ar: "قاعات الأعمال الموجهة (TD) — أفواج صغيرة. مرقّمة (قاعة 1، 2، 13...).",
          en: "Rooms for Tutorials (TD) — small groups. Numbered (Room 1, 2, 13...)."
        }
      },
      {
        title: {
          fr: "🔬 Salles de TP & Laboratoires",
          ar: "🔬 قاعات الأعمال التطبيقية والمخابر",
          en: "🔬 TP rooms & Laboratories"
        },
        desc: {
          fr: "Pour les Travaux Pratiques (TP) : physique, chimie, géotechnique, matériaux, topographie, hydraulique.",
          ar: "للأعمال التطبيقية (TP): فيزياء، كيمياء، جيوتقنية، مواد، طبوغرافيا، هيدروليك.",
          en: "For Practical Work (TP): physics, chemistry, geotechnics, materials, topography, hydraulics."
        }
      }
    ]
  },

  // ========== 2. MES ENSEIGNANTS ==========
  {
    id: "profs",
    icon: "👨‍🏫",
    title: {
      fr: "Qui sont mes enseignants ?",
      ar: "من هم أساتذتي؟",
      en: "Who are my teachers?"
    },
    intro: {
      fr: "Fiches d'enseignants par département et par module.",
      ar: "بطاقات الأساتذة حسب القسم والمادة.",
      en: "Teacher cards by department and module."
    },
    items: [
      {
        title: {
          fr: "📋 Fiche type",
          ar: "📋 قالب البطاقة",
          en: "📋 Card template"
        },
        desc: {
          fr: "Nom · grade · département · module · spécialité · mini-CV · photo (optionnelle) · contact institutionnel.",
          ar: "الاسم · الرتبة · القسم · المادة · التخصص · سيرة مختصرة · صورة (اختياري) · بريد مهني.",
          en: "Name · rank · department · module · specialty · mini-CV · photo (optional) · institutional contact."
        }
      },
      {
        title: {
          fr: "⚠️ Règle importante",
          ar: "⚠️ قاعدة مهمة",
          en: "⚠️ Important rule"
        },
        desc: {
          fr: "Aucun numéro personnel sans autorisation écrite. Contact = email institutionnel uniquement.",
          ar: "لا نرقام شخصية بدون إذن مكتوب. التواصل = بريد مهني فقط.",
          en: "No personal numbers without written permission. Contact = institutional email only."
        }
      },
      {
        title: {
          fr: "🏛 Départements",
          ar: "🏛 الأقسام",
          en: "🏛 Departments"
        },
        desc: {
          fr: "Génie Civil · Routes et Ouvrages d'Art · Hydraulique · Géotechnique · Topographie · Sciences de base.",
          ar: "الهندسة المدنية · الطرق والمنشآت الفنية · الهيدروليك · الجيوتقنية · الطبوغرافيا · العلوم الأساسية.",
          en: "Civil Engineering · Roads & Bridges · Hydraulics · Geotechnics · Topography · Basic Sciences."
        }
      }
    ]
  },

  // ========== 3. J'AI UN PROBLÈME ==========
  {
    id: "probleme",
    icon: "🆘",
    title: {
      fr: "J'ai un problème : à qui m'adresser ?",
      ar: "عندي مشكلة: بمن أتصل؟",
      en: "I have a problem: who to contact?"
    },
    intro: {
      fr: "Arbre d'orientation : clique sur ton problème, on te dit où aller.",
      ar: "شجرة توجيه: اضغط على مشكلتك، نخبرك أين تذهب.",
      en: "Guidance tree: click your problem, we tell you where to go."
    },
    tree: [
      {
        q: { fr: "J'ai un problème administratif", ar: "عندي مشكلة إدارية", en: "I have an administrative problem" },
        a: {
          service: { fr: "Scolarité / Administration", ar: "الشؤون الطلابية / الإدارة", en: "Student Affairs / Administration" },
          procedure: {
            fr: "Va au guichet avec ta carte d'étudiant et tous les documents liés au problème.",
            ar: "اذهب إلى الشباك ببطاقتك وجميع الوثائق المتعلقة بالمشكلة.",
            en: "Go to the desk with your student card and all related documents."
          }
        }
      },
      {
        q: { fr: "J'ai un problème concernant mon emploi du temps", ar: "عندي مشكلة في جدولي", en: "I have a schedule problem" },
        a: {
          service: { fr: "Chef de département / Secrétariat pédagogique", ar: "رئيس القسم / الأمانة البيداغوجية", en: "Department head / Academic secretary" },
          procedure: {
            fr: "Apporte ton groupe et une copie du planning. Le secrétariat corrige et republie.",
            ar: "أحضر فوجك ونسخة من الجدول. الأمانة تصحح وتنشر من جديد.",
            en: "Bring your group and a copy of the schedule. The secretary fixes and republishes."
          }
        }
      },
      {
        q: { fr: "Je suis absent(e)", ar: "أنا غائب", en: "I am absent" },
        a: {
          service: { fr: "Département + Scolarité", ar: "القسم + الشؤون الطلابية", en: "Department + Student Affairs" },
          procedure: {
            fr: "Dépose un justificatif (médical ou autre) sous quelques jours. Au-delà, l'absence devient non justifiée.",
            ar: "قدّم مبرراً (طبي أو غيره) خلال أيام. بعدها تصبح الغيبة غير مبررة.",
            en: "Submit a justification (medical or other) within a few days. After that, the absence becomes unjustified."
          }
        }
      },
      {
        q: { fr: "J'ai perdu ma carte", ar: "أضعت بطاقتي", en: "I lost my card" },
        a: {
          service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
          procedure: {
            fr: "Déclaration de perte + 2 photos d'identité. Frais de renouvellement possibles.",
            ar: "تصريح بالضياع + صورتان شمسيتان. قد تُطلب رسوم تجديد.",
            en: "Loss report + 2 ID photos. Renewal fees may apply."
          }
        }
      },
      {
        q: { fr: "J'ai un problème avec mon inscription", ar: "عندي مشكلة في تسجيلي", en: "I have an enrollment problem" },
        a: {
          service: { fr: "Scolarité — Bureau des inscriptions", ar: "الشؤون الطلابية — مكتب التسجيل", en: "Student Affairs — Enrollment office" },
          procedure: {
            fr: "Apporte toutes les pièces de ton dossier d'inscription (originaux + copies).",
            ar: "أحضر جميع وثائق ملف تسجيلك (الأصل + نسخة).",
            en: "Bring all documents from your enrollment file (originals + copies)."
          }
        }
      },
      {
        q: { fr: "J'ai besoin d'une attestation", ar: "أحتاج شهادة", en: "I need a certificate" },
        a: {
          service: { fr: "Scolarité", ar: "الشؤون الطلابية", en: "Student Affairs" },
          procedure: {
            fr: "Demande écrite ou formulaire selon la procédure. Prévoir un délai de quelques jours.",
            ar: "طلب كتابي أو استمارة حسب الإجراء. توقّع تأخيراً من بضعة أيام.",
            en: "Written request or form per procedure. Allow a few days delay."
          }
        }
      },
      {
        q: { fr: "Je ne comprends pas mon emploi du temps", ar: "لا أفهم جدولي", en: "I don't understand my schedule" },
        a: {
          service: { fr: "Chef de département / Délégué de promo", ar: "رئيس القسم / مندوب الدفعة", en: "Department head / Class delegate" },
          procedure: {
            fr: "Demande au délégué de ta promo, puis au secrétariat du département.",
            ar: "اسأل مندوب دفعتك، ثم أمانة القسم.",
            en: "Ask your class delegate, then the department secretary."
          }
        }
      },
      {
        q: { fr: "J'ai un problème avec un enseignant", ar: "عندي مشكلة مع أستاذ", en: "I have a problem with a teacher" },
        a: {
          service: { fr: "Chef de département", ar: "رئيس القسم", en: "Department head" },
          procedure: {
            fr: "Prends rendez-vous avec le chef de département. Reste factuel et respectueux.",
            ar: "خذ موعداً مع رئيس القسم. كن موضوعياً ومحترماً.",
            en: "Make an appointment with the department head. Stay factual and respectful."
          }
        }
      },
      {
        q: { fr: "J'ai un problème de santé", ar: "عندي مشكلة صحية", en: "I have a health problem" },
        a: {
          service: { fr: "Infirmerie de l'école / Médecin", ar: "عيادة المدرسة / الطبيب", en: "School infirmary / Doctor" },
          procedure: {
            fr: "Va à l'infirmerie. Si urgent, appelle les secours. Préviens ton délégué.",
            ar: "اذهب إلى العيادة. إذا كان الأمر عاجلاً، اتصل بالإسعاف. أخبر مندوبك.",
            en: "Go to the infirmary. If urgent, call emergency. Notify your delegate."
          }
        }
      },
      {
        q: { fr: "J'ai un problème de logement (cité)", ar: "عندي مشكلة في السكن", en: "I have a housing problem" },
        a: {
          service: { fr: "Administration de la cité universitaire", ar: "إدارة الحي الجامعي", en: "Student housing administration" },
          procedure: {
            fr: "Va au bureau de la cité avec ta carte de résident.",
            ar: "اذهب إلى مكتب الحي ببطاقة الإقامة.",
            en: "Go to the residence office with your resident card."
          }
        }
      }
    ]
  },

  // ========== 4. TRANSPORT ==========
  {
    id: "transport",
    icon: "🚌",
    title: {
      fr: "Transport",
      ar: "النقل",
      en: "Transport"
    },
    intro: {
      fr: "Bus, taxis, itinéraires à pied, autres moyens.",
      ar: "حافلات، تكاسي، مسارات على الأقدام، وسائل أخرى.",
      en: "Bus, taxis, walking routes, other means."
    },
    items: [
      {
        title: { fr: "🚌 Bus", ar: "🚌 الحافلة", en: "🚌 Bus" },
        desc: {
          fr: "Arrêts autour de l'école. Lignes vers centre-ville, gare routière, métro.",
          ar: "محطات حول المدرسة. خطوط نحو وسط المدينة، المحطة البرية، المترو.",
          en: "Stops around the school. Lines to downtown, bus station, metro."
        },
        map: "arrêt de bus près de ENSTP Kouba"
      },
      {
        title: { fr: "🚕 Taxis", ar: "🚕 سيارة أجرة", en: "🚕 Taxis" },
        desc: {
          fr: "Stations de taxi les plus proches. Demande le prix avant de monter.",
          ar: "أقرب محطات التاكسي. اتفق على السعر قبل الركوب.",
          en: "Nearest taxi stations. Ask the price before getting in."
        },
        map: "station de taxi près de ENSTP Kouba"
      },
      {
        title: { fr: "🚶 À pied", ar: "🚶 مشياً", en: "🚶 Walking" },
        desc: {
          fr: "Itinéraires sécurisés à pied autour du campus. Évite les ruelles isolées la nuit.",
          ar: "مسارات آمنة مشياً حول الحرم. تجنّب الأزقة المعزولة ليلاً.",
          en: "Safe walking routes around campus. Avoid isolated alleys at night."
        },
        map: "ENSTP Garidi Kouba Alger"
      },
      {
        title: { fr: "🚇 Métro / Tramway", ar: "🚇 المترو / الترامواي", en: "🚇 Metro / Tramway" },
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
          fr: "Pour les étudiants motorisés. Utile aussi comme repère.",
          ar: "للطلاب ذوي السيارات. مفيدة كمعلم أيضاً.",
          en: "For motorized students. Also useful as a landmark."
        },
        map: "station service près de ENSTP Kouba"
      },
      {
        title: { fr: "🚗 Covoiturage", ar: "🚗 المشاركة في السيارة", en: "🚗 Carpooling" },
        desc: {
          fr: "Organise-toi avec des étudiants de ta ville. Le réseau ENSTP peut aider.",
          ar: "نسّق مع طلاب من ولايتك. شبكة ENSTP قد تساعد.",
          en: "Organize with students from your city. The ENSTP network can help."
        }
      }
    ]
  },

  // ========== 5. MANGER ==========
  {
    id: "manger",
    icon: "🍽",
    title: { fr: "Manger", ar: "الأكل", en: "Eating" },
    intro: {
      fr: "Où manger avec un petit budget.",
      ar: "أين تأكل بميزانية صغيرة.",
      en: "Where to eat on a small budget."
    },
    items: [
      {
        title: { fr: "🍽 Restaurants & fast-foods", ar: "🍽 مطاعم ووجبات سريعة", en: "🍽 Restaurants & fast-foods" },
        desc: { fr: "Autour de l'école.", ar: "حول المدرسة.", en: "Around the school." },
        map: "restaurant près de ENSTP Kouba"
      },
      {
        title: { fr: "🍕 Pizzerias & snacks", ar: "🍕 بيتزا ووجبات خفيفة", en: "🍕 Pizzerias & snacks" },
        desc: { fr: "Repas rapides.", ar: "وجبات سريعة.", en: "Quick meals." },
        map: "pizzeria près de ENSTP Kouba"
      },
      {
        title: { fr: "☕ Cafés", ar: "☕ مقاهي", en: "☕ Cafés" },
        desc: { fr: "Pour réviser ou se retrouver.", ar: "للمراجعة أو اللقاء.", en: "To study or meet." },
        map: "café près de ENSTP Kouba"
      },
      {
        title: { fr: "🥖 Boulangeries", ar: "🥖 مخابز", en: "🥖 Bakeries" },
        desc: { fr: "Sandwichs et pain pas chers.", ar: "سندويشات وخبز رخيص.", en: "Cheap sandwiches and bread." },
        map: "boulangerie près de ENSTP Kouba"
      },
      {
        title: { fr: "🍽 Restaurant universitaire (cité)", ar: "🍽 المطعم الجامعي (الحي)", en: "🍽 University restaurant (residence)" },
        desc: {
          fr: "Repas à tarif étudiant. Réservé aux internes ou sur carte.",
          ar: "وجبات بسعر طلابي. محجوز للداخليين أو ببطاقة.",
          en: "Meals at student rates. For residents or card holders."
        }
      }
    ]
  },

  // ========== 6. SPORT & VIE ÉTUDIANTE ==========
  {
    id: "sport",
    icon: "⚽",
    title: { fr: "Sport & Vie étudiante", ar: "الرياضة والحياة الطلابية", en: "Sport & Student life" },
    intro: {
      fr: "Clubs gratuits, rencontres, activités.",
      ar: "أندية مجانية، لقاءات، أنشطة.",
      en: "Free clubs, meetings, activities."
    },
    items: [
      {
        title: { fr: "🏃 ENSTP Running Club", ar: "🏃 نادي الجري", en: "🏃 ENSTP Running Club" },
        desc: { fr: "Rendez-vous devant l'entrée. Horaires affichés.", ar: "اللقاء أمام المدخل. المواعيد معلنة.", en: "Meet at the entrance. Times posted." }
      },
      {
        title: { fr: "⚽ Football", ar: "⚽ كرة القدم", en: "⚽ Football" },
        desc: { fr: "Match libre le week-end sur le terrain de l'école.", ar: "مباراة حرة نهاية الأسبوع في ملعب المدرسة.", en: "Free match on weekends on the school field." }
      },
      {
        title: { fr: "🏀 Basket / 🏐 Volley", ar: "🏀 كرة السلة / 🏐 الكرة الطائرة", en: "🏀 Basket / 🏐 Volley" },
        desc: { fr: "Dès 6 inscrits, un créneau est créé.", ar: "بمجرد 6 مسجلين، يُنشأ توقيت.", en: "From 6 registrations, a slot is created." }
      },
      {
        title: { fr: "🎭 Clubs culturels", ar: "🎭 أندية ثقافية", en: "🎭 Cultural clubs" },
        desc: { fr: "Théâtre, musique, débats.", ar: "مسرح، موسيقى، مناظرات.", en: "Theater, music, debates." }
      },
      {
        title: { fr: "🤝 Parrainage ancien ↔ nouveau", ar: "🤝 رعاية قديم ↔ جديد", en: "🤝 Mentoring old ↔ new" },
        desc: { fr: "Chaque nouvel étudiant a un grand frère / grande sœur de 2e année.", ar: "كل طالب جديد له أخ/أخت كبيرة من السنة الثانية.", en: "Each new student has a 2nd year buddy." }
      }
    ]
  },

  // ========== 7. ALGER ==========
  {
    id: "alger",
    icon: "🗺",
    title: { fr: "Alger", ar: "الجزائر العاصمة", en: "Algiers" },
    intro: { fr: "Mini-guide étudiant.", ar: "دليل طلابي مصغّر.", en: "Mini student guide." },
    items: [
      {
        title: { fr: "⛪ Notre-Dame d'Afrique", ar: "⛪ سيدة إفريقيا", en: "⛪ Notre-Dame d'Afrique" },
        desc: { fr: "Basilique avec vue sur la baie. ⏱ 1 h · 💰 gratuit.", ar: "كنيسة بإطلالة على الخليج. ⏱ ساعة · 💰 مجاناً.", en: "Basilica with bay view. ⏱ 1h · 💰 free." },
        map: "Notre-Dame d'Afrique Alger"
      },
      {
        title: { fr: "🌿 Jardin d'Essai du Hamma", ar: "🌿 حديقة التجارب", en: "🌿 Jardin d'Essai" },
        desc: { fr: "Grand jardin botanique. ⏱ 2 h · 💰 petit billet.", ar: "حديقة نباتية كبيرة. ⏱ ساعتان · 💰 تذكرة صغيرة.", en: "Large botanical garden. ⏱ 2h · 💰 small ticket." },
        map: "Jardin d'Essai du Hamma Alger"
      },
      {
        title: { fr: "🏛 La Casbah", ar: "🏛 القصبة", en: "🏛 The Casbah" },
        desc: { fr: "Vieille ville classée UNESCO. Y aller en groupe.", ar: "المدينة القديمة المصنفة يونسكو. اذهب في مجموعة.", en: "Old town, UNESCO listed. Go in a group." },
        map: "Casbah d'Alger"
      },
      {
        title: { fr: "🏛 Grande Poste", ar: "🏛 البريد المركزي", en: "🏛 Grande Poste" },
        desc: { fr: "Balade centre-ville. ⏱ 2 h · 💰 gratuit.", ar: "نزهة في وسط المدينة. ⏱ ساعتان · 💰 مجاناً.", en: "Downtown walk. ⏱ 2h · 💰 free." },
        map: "Grande Poste Alger"
      },
      {
        title: { fr: "🏛 Maqam Echahid", ar: "🏛 مقام الشهيد", en: "🏛 Martyrs' Memorial" },
        desc: { fr: "Monument avec vue sur Alger. ⏱ 1-2 h.", ar: "نصب بإطلالة على الجزائر. ⏱ 1-2 ساعة.", en: "Monument with view over Algiers. ⏱ 1-2h." },
        map: "Maqam Echahid Alger"
      },
      {
        title: { fr: "🎨 Musées", ar: "🎨 متاحف", en: "🎨 Museums" },
        desc: { fr: "Bardo, Beaux-Arts… vérifier horaires.", ar: "الباردو، الفنون الجميلة… تحقق من المواعيد.", en: "Bardo, Fine Arts… check hours." },
        map: "musée Alger"
      }
    ]
  }

];

// ============================================
// QR CODES
// ============================================
const QR_LIST = [
  { id: "01", label: { fr: "Accueil", ar: "الرئيسية", en: "Home" }, url: "index.html" },
  { id: "02", label: { fr: "Trouver ma salle", ar: "أين قاعتي", en: "Find my room" }, url: "guide.html#salle" },
  { id: "03", label: { fr: "Mes enseignants", ar: "أساتذتي", en: "My teachers" }, url: "guide.html#profs" },
  { id: "04", label: { fr: "J'ai un problème", ar: "عندي مشكلة", en: "I have a problem" }, url: "guide.html#probleme" },
  { id: "05", label: { fr: "Transport", ar: "النقل", en: "Transport" }, url: "guide.html#transport" },
  { id: "06", label: { fr: "Manger", ar: "الأكل", en: "Eating" }, url: "guide.html#manger" },
  { id: "07", label: { fr: "Sport", ar: "الرياضة", en: "Sport" }, url: "guide.html#sport" },
  { id: "08", label: { fr: "Alger", ar: "الجزائر", en: "Algiers" }, url: "guide.html#alger" }
];
<p>
  Nous sommes <strong>des étudiants de 3<sup>ème</sup> année — département
  Infrastructures de Base (منشآت قاعدية)</strong> à l'ENSTP. Ce guide est
  un projet bénévole, né de notre propre expérience : nous sommes passés par là,
  et nous voulons faciliter l'arrivée des nouvelles promotions.
</p>
<p>
  Notre mission : <strong>aider chaque nouvel étudiant à s'intégrer rapidement</strong>
  et à ne jamais rester seul face à un problème. Nous ne sommes pas une structure
  officielle de l'école — nous sommes des étudiants qui aident d'autres étudiants.
</p>
