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
  IonLabel
} from '@ionic/react';
import { home, search, cog } from 'ionicons/icons';

/* app */
import Home from './pages/Home';
import Search from './pages/Search';
import Settings from './pages/Settings';
import MillionsPage  from './pages/Millions';

interface ItemProps extends RouteComponentProps<{ tab: string }> {
}

const Tabs = ({ history, match }: ItemProps) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        {/* 日々 / Daily */}
        <Route path="/app/home" component={Home} exact={true} />

        {/* 学習 / Study */}
        <Route path="/app/search" component={Search} exact={true} />

        {/* 資産 / Millions */}
        <Route path="/app/millions" component={MillionsPage} />

        {/* 設定 / Settings */}
        <Route path="/app/settings" component={Settings} />
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/app/home">
          <IonIcon icon={home} />
          <IonLabel>ホームホーム</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/app/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="millions" href="/app/millions">
          <IonIcon icon={cog} />
          <IonLabel>宝くじ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/app/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs;