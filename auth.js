// ============================================
// auth.js — نظام المصادقة
// ENSTP Forum
// ============================================

import { 
  auth, db, isEnstpEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  doc, setDoc, getDoc, serverTimestamp
} from './firebase-config.js';

// ============================================
// التسجيل
// ============================================
async function registerUser(email, password, name, wilaya, year, groupe) {
  // 1. تحقق من البريد
  if (!isEnstpEmail(email)) {
    throw new Error('Email doit être @enstp.edu.dz');
  }
  
  // 2. تحقق من كلمة السر
  if (password.length < 6) {
    throw new Error('Mot de passe : minimum 6 caractères');
  }
  
  // 3. تحقق من الاسم
  if (!name || name.trim().length < 2) {
    throw new Error('Nom complet requis');
  }
  
  // 4. تحقق من الولاية
  if (!wilaya) {
    throw new Error('Wilaya requise');
  }
  
  // 5. أنشئ الحساب
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  // 6. حدّث الاسم في Auth
  await updateProfile(user, { displayName: name });
  
  // 7. احفظ في Firestore
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: email.toLowerCase().trim(),
    name: name.trim(),
    wilaya: wilaya,
    year: year || '',
    groupe: groupe || '',
    role: 'student',
    createdAt: serverTimestamp()
  });
  
  return user;
}

// ============================================
// الدخول
// ============================================
async function loginUser(email, password) {
  if (!isEnstpEmail(email)) {
    throw new Error('Email doit être @enstp.edu.dz');
  }
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// ============================================
// الخروج
// ============================================
async function logoutUser() {
  await signOut(auth);
}

// ============================================
// الحصول على بيانات المستخدم
// ============================================
async function getUserData(uid) {
  if (!uid) return null;
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

// ============================================
// المستخدم الحالي
// ============================================
function getCurrentUser() {
  return auth.currentUser;
}

// ============================================
// مستمع حالة الدخول
// ============================================
function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export { 
  registerUser, 
  loginUser, 
  logoutUser,
  getUserData, 
  getCurrentUser, 
  onAuthChange
};
