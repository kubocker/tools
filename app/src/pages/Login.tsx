/* react */
import React, {
  useContext,
  useState,
  useCallback,
  useRef,
  FormEvent,
  KeyboardEvent,
} from 'react';
import { RouteComponentProps } from 'react-router';

/* ionic */
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonButtons,
  IonBackButton,
  IonLoading,
  IonCol,
  IonRow,
  IonText,
} from '@ionic/react';

/* app */
import './Login.scss';

import { AppContext, Actions, } from '../State';
import { signIn } from '../user';


/* others */
import { History } from 'history';

/**
 * プロパティ
 * 定義
 */
interface ItemProps extends RouteComponentProps<{ tab: string }> {
  history: History
}

/**
 * 
 */

/**
 * ログインエラー
 * 定義
 */
interface LoginErrors {
  // コード番号
  code: number;

  // エラー内容
  message: string;
}

/**
 * ログイン
 * ページ
 */
const LoginPage = ({ history, match }: ItemProps) => {

  /**
   * dispatch
   */
  const { dispatch } = useContext(AppContext);

  // const [username, setUsername] = useState('');
  // const [usernameError, setUsernameError] = useState(false);

  /**
   * メールアドレス 
   */
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  /**
   * パスワード
   */
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  /**
   * フォーム
   */
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<LoginErrors | null>(null);

  /**
   * ローディング
   */
  const [showLoading, setShowLoading] = useState(false);


  /**
   * ログインする
   * @param e イベント
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      try {
        setShowLoading(true);

        const user = await signIn(email, password);
        dispatch({ type: Actions.LoggedIn, user });

        // タブ1
        // 遷移へ
        history.push('/app/tab1', { direction: 'forward' });
        setShowLoading(false);

      } catch (e) {
        await setFormErrors(e);
        await setShowLoading(false);
      }

    }
   
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={'/'} />
          </IonButtons>
          <IonTitle>ログイン</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
        isOpen={showLoading}
        message="ログイン中..."
        onDidDismiss={() => setShowLoading(false)}
        />

        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={handleSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">メールアドレス</IonLabel>
              <IonInput
              name="email"
              type="email"
              value={email}
              spellCheck={false}
              autocapitalize="off"
              required
              onIonChange={e => setEmail(e.detail.value!)}
              >
              </IonInput>
            </IonItem>

            {formSubmitted && emailError && <IonText color="danger">
              <p className="ion-padding-start">
                メールアドレス必須です
              </p>
            </IonText>}

            <IonItem>
              <IonLabel position="stacked" color="primary">パスワード</IonLabel>
              <IonInput
              name="password"
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              >
              </IonInput>
            </IonItem>

            {formSubmitted && passwordError && <IonText color="danger">
              <p className="ion-padding-start">
               パスワード必須です 
              </p>
            </IonText>}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">ログイン</IonButton>
            </IonCol>
            <IonCol>
              <IonButton routerLink="/signup" color="light" expand="block">Signup</IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>

  );
};

export default LoginPage;