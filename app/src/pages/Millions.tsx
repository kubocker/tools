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


/**
 * URL
 */
const url = 'https://takarakuji.rakuten.co.jp/backnumber/';



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
        <h2>結果</h2>
        <IonList>
          <IonItem onClick={ async () => {
              console.log('click loto6');
              /**
               * ロト6
               * 遷移
               */
              await Browser.open({ url: `${url}loto6/` });
          }}>
            <IonLabel>ロト6</IonLabel>
          </IonItem>
          <IonItem onClick={ async () => {
              console.log('click numbers4');
              /**
               * ナンバーズ4
               * 遷移
               */
              await Browser.open({ url: `${url}numbers4/`})
          }}>
            <IonLabel>ナンバーズ4</IonLabel>
          </IonItem>
          <IonItem onClick={ async () => {
              console.log('click numbers3');
              /**
               * ナンバーズ3
               * 遷移
               */
              await Browser.open({ url: `${url}numbers3/`})
          }}>
            <IonLabel>ナンバーズ3</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );

}

export default MillionsPage;