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
  
  // 3. أنشئ الحساب
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  // 4. حدّث الاسم
  await updateProfile(user, { displayName: name });
  
  // 5. احفظ البيانات في Firestore
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: email,
    name: name,
    wilaya: wilaya,
    year: year,
    groupe: groupe,
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
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

// ============================================
// الحصول على المستخدم الحالي
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

// تصدير
export { 
  registerUser, loginUser, logoutUser,
  getUserData, getCurrentUser, onAuthChange
};
