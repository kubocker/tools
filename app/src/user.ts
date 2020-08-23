/* firebase */
import * as firebase from 'firebase/app';

/* app */
import { FirebaseApp } from './firebaseApp';

/**
 * セッション確認
 */
export function hasExistingSession() {
  return new Promise((resolve) => {
    FirebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
  });
}

/**
 * ユーザー取得
 */
export async function getUser() {
  const user = FirebaseApp.auth().currentUser;
  if (!user) {
    return null;
  }
  return user!;
}

/**
 * ログイン / サインイン
 * @param email    - メールアドレス
 * @param password - パスワード
 */
export async function login (email: string, password: string): Promise<firebase.User> {
  await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  const user = await FirebaseApp.auth().signInWithEmailAndPassword(email, password);

  return user.user!;
}

/**
 * 登録
 * @param param0 
 */
export async function signup({ name, email, password }: { name: string, email: string, password: string }): Promise<firebase.User> {
  await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  const user = await FirebaseApp.auth().createUserWithEmailAndPassword(email, password);
  // Create the associated user table
  await FirebaseApp.firestore().collection("users").doc(user.user!.uid).set({
    bio: ''
  });

  console.log('Created user data');

  return user.user!;
}

/**
 * ログアウト / サインアウト
 */
export function logout() {
  return FirebaseApp.auth().signOut();
}

/**
 * メールアドレス変更
 * @param email - メールアドレス
 */
export function sendPasswordResetEmail(email: string) {
  return FirebaseApp.auth().sendPasswordResetEmail(email);
}
