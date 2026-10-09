// ============================================
// data/shopping.js — قسم التسوق والأكل
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "shopping",
  icon: "🍽️",
  titleKey: "sectionShopping",
  introKey: "shoppingIntro",
  type: "items",
  items: [
    { titleKey: "shopResto", icon: "🍽️", descKey: "shopRestoDesc", img: "", video: "", map: "restaurant près de ENSTP Garidi Kouba", budget: "💰 Petit budget", hours: "11h - 23h" },
    { titleKey: "shopCafe", icon: "☕", descKey: "shopCafeDesc", img: "", video: "", map: "café près de ENSTP Garidi Kouba", budget: "💰 Petit budget", hours: "7h - 23h" },
    { titleKey: "shopPrint", icon: "🖨️", descKey: "shopPrintDesc", img: "", video: "", map: "photocopie impression près de ENSTP Garidi Kouba", budget: "💰 5-10 DA / page", hours: "8h - 20h" },
    { titleKey: "shopPharma", icon: "💊", descKey: "shopPharmaDesc", img: "", video: "", map: "pharmacie près de ENSTP Garidi Kouba", hours: "8h - 20h" },
    { titleKey: "shopDocteur", icon: "👨‍⚕️", descKey: "shopDocteurDesc", img: "", video: "", map: "médecin près de ENSTP Garidi Kouba", hours: "9h - 17h" },
    { titleKey: "shopSecu", icon: "💼", descKey: "shopSecuDesc", img: "", video: "", map: "CNAS près de ENSTP Garidi Kouba", hours: "8h - 16h" },
    { titleKey: "shopBenOmar", icon: "🛒", descKey: "shopBenOmarDesc", img: "", video: "", map: "Ben Omar Kouba Alger", hours: "9h - 21h" },
    { titleKey: "shopTchof", icon: "🏬", descKey: "shopTchofDesc", img: "", video: "", map: "Centre Tchof Alger", hours: "10h - 22h" }
  ]
});
