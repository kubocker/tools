/* firebase */
import * as firebase from 'firebase/app';

/* app */
import { FirebaseApp } from './firebaseApp';

/**
 * 認証が取れているのか
 */
export function hasExistingSession() {
  return new Promise((resolve) => {
    FirebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

/**
 * ユーザー情報
 * 取得
 */
export async function getUser() {

  const user = FirebaseApp.auth().currentUser;
  if (!user) {
    return null;
  }
  return user!;
}

/**
 * 登録 / サインアップ
 */
export async function signUp({ name, email, password }: { name: string, email: string, password: string }): Promise<firebase.User> {
  await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
  const user = await FirebaseApp.auth().createUserWithEmailAndPassword(email, password);
  return user.user!;
}


/**
 * ログイン
 */
export async function signIn (email: string, password: string): Promise<firebase.User> {
  await FirebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  const user = await FirebaseApp.auth().signInWithEmailAndPassword(email, password);
  return user.user!;

}

/**
 * ログアウト / サインアウト
 */
export function signOut() {
  return FirebaseApp.auth().signOut();
}

/**
 * メールアドレス
 * 変更
 */
export function sendPasswordResetEmail(email: string) {
  return FirebaseApp.auth().sendPasswordResetEmail(email);
}
