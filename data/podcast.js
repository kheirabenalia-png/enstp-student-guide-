// ============================================
// data/podcast.js — قسم بودكاست الطالب
// Guide de survie ENSTP
// ============================================
// يحتوي على: حلقات البودكاست
// ⚠️ أضف روابط YouTube لاحقاً في حقل video
// ============================================

window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: "podcast",
  icon: "🎙️",
  titleKey: "sectionPodcast",
  introKey: "podcastIntro",
  type: "items",
  
  items: [
    
    // ========== 1. الحلقة 1 ==========
    {
      titleKey: "podcastEp1",
      icon: "🎙️",
      descKey: "podcastEp1Desc",
      img: "",
      video: "",          // ⬅️ ضع هنا معرّف فيديو YouTube (مثل: "dQw4w9WgXcQ")
      videoType: "youtube",
      duration: "15 min",
      speaker: "À compléter",
      extra: "🎧 Disponible sur YouTube"
    },
    
    // ========== 2. الحلقة 2 ==========
    {
      titleKey: "podcastEp2",
      icon: "🎙️",
      descKey: "podcastEp2Desc",
      img: "",
      video: "",
      videoType: "youtube",
      duration: "20 min",
      speaker: "À compléter",
      extra: "🎧 Disponible sur YouTube"
    },
    
    // ========== 3. الحلقة 3 ==========
    {
      titleKey: "podcastEp3",
      icon: "🎙️",
      descKey: "podcastEp3Desc",
      img: "",
      video: "",
      videoType: "youtube",
      duration: "18 min",
      speaker: "À compléter",
      extra: "🎧 Disponible sur YouTube"
    }
    
  ]
});
