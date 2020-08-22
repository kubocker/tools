/* react */
import React, {
  useContext,
  useEffect,
} from 'react';

/* ionic */
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

/* app */
import ExploreContainer from '../components/ExploreContainer';
import { authGuard } from '../Routing';
import './Tab1.scss';

const Tab1: React.FC = () => {

  // useEffect(() => {
  //   authGuard(dispatch, match, history);

  // }, [dispatch, history, match]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
