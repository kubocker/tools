/* react */
import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router';

/* ionic */
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { home, search, cog, triangle, ellipse, square } from 'ionicons/icons';

/* app */
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';


/**
 * Props
 */
interface ItemProps extends RouteComponentProps<{ tab: string }> {

}

/**
 * 
 * @param param0 
 */
const Tabs = ({ history, match }: ItemProps) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/tab1" component={Tab1} exact={true} />
        <Route path="/app/tab2" component={Tab2} exact={true} />
        <Route path="/app/tab3" component={Tab3} />
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/app/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>日記</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/app/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>学習</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/app/tab3">
          <IonIcon icon={square} />
          <IonLabel>宝くじ</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs;

