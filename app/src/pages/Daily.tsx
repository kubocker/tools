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
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


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
interface DailyProps extends 
  ItemProps,
  StateProps,
  DispatchProps
{}

const DailyPage: React.FC<DailyProps> = ({ history, match }) => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    authGuard(dispatch, match, history);

  }, [dispatch, match, history]);

  const state = {
    targetDay: 1,
    targetMonth: '2019-10-01',
  }

  // const handleState = (data) => {
  //   this.setState(data)
  // }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>日々</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
}

export default DailyPage;
