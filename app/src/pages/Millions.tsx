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
  IonList
} from '@ionic/react';

/* app */
import { AppContext } from '../State';
import { authGuard } from '../Routing';

/* others */
import { History } from 'history';


interface ItemProps extends RouteComponentProps<{ tab: string }> {
  history: History;
}

interface StateProps { }

interface DispatchProps { }

/**
 * プロパティ
 */
interface MillionsProps extends 
  ItemProps,
  StateProps,
  DispatchProps
{}


const MillionsPage: React.FC<MillionsProps> = ({ history, match }) => {
  const { dispatch } = useContext(AppContext);

  /**
   * 認証
   * セッション確認
   */
  useEffect(() => {
    authGuard(dispatch, match, history);
  }, [dispatch, match, history]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>宝くじ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );

}

export default MillionsPage;