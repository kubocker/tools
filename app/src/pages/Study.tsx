/* react */
import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

/* ionic */
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/react';

/* capacitor */
import { Plugins } from '@capacitor/core';

/* app */
import { AppContext } from '../State';
import { authGuard } from '../Routing';

/* others */
import { History } from 'history';


/**
 * Capacitor
 * プラグイン
 */
const {
  // ウェブビュー
  Browser,


} = Plugins;


interface ItemProps extends RouteComponentProps<{ tab: string }> {
    history: History;
  }
  
interface StateProps { }

interface DispatchProps { }

/**
 * プロパティ
 */
interface StudyProps extends 
  ItemProps,
  StateProps,
  DispatchProps
{}

const StudyPage: React.FC<StudyProps> = ({ history, match }) => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    authGuard(dispatch, match, history);

  }, [dispatch, match, history]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>学習</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      </IonContent>
    </IonPage>
  );
}

export default StudyPage;
