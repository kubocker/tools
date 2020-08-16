/* react */
import React from 'react';

/* ionic */
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

/* app */
import './Login.css';


/**
 * ログイン
 */
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ログイン</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        ログイン
      </IonContent>
    </IonPage>

  );
};

export default Login;