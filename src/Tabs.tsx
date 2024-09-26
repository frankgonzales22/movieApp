import { IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { homeOutline, cartOutline, documentTextOutline, personOutline } from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Transactions from './pages/Transactions';

const Tabs: React.FC = () => {
    setupIonicReact();

    return (
        <IonTabs>
            <IonRouterOutlet>
                {/* <Route exact path="/app" render={() => <Redirect to="/app/home" />} /> */}
                <Route exact path="/app">
                    <Redirect to="/app/tab1" />
                </Route>
                {/* <Route exact path="/app" render={() => <Redirect to="/app/home" />} /> */}
                <Route exact path="/app/tab1" component={Home} />
                <Route exact path="/app/tab2" component={Transactions} />
                <Route  path="/app/tab3" component={Plans} />
                <Route exact path="/app/tab4" component={Account} />
                {/* Removed ProductsPage from here */}
            </IonRouterOutlet>

            <IonTabBar slot={'bottom'} >
                <IonTabButton tab="/app" href="/app/tab1">
                    <IonIcon aria-hidden="true" icon={homeOutline} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="/transaction" href="/app/tab2">
                    <IonIcon aria-hidden="true" icon={cartOutline} />
                    <IonLabel>Transaction</IonLabel>
                </IonTabButton>
                <IonTabButton tab="/plans" href="/app/tab3">
                    <IonIcon aria-hidden="true" icon={documentTextOutline} />
                    <IonLabel>Plans</IonLabel>
                </IonTabButton>
                <IonTabButton tab="/account" href="/app/tab4">
                    <IonIcon aria-hidden="true" icon={personOutline} />
                    <IonLabel>Account</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Tabs;
