import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Plans from './pages/Plans';
import Transactions from './pages/Transactions';
import { useEffect, useState } from 'react';
import Account from './pages/Account';
import { cart, cartOutline, documentAttachOutline, documentOutline, documentTextOutline, home, homeOutline, person, personOutline } from 'ionicons/icons';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Tabs from './Tabs';
import Login from './pages/Login';
import PlansPage from './pages/PlansPage/PlansPage';
import AccountInformation from './pages/Account/AccountInformation/AccountInformation';
import QRReferralPage from './pages/Account/QRReferralPage/QRReferralPage';
import InputPassword from './pages/Login/InputPassword/InputPassword';
import InputEmail from './pages/Login/InputEmail/InputEmail';
// import './App.css'

setupIonicReact();

const App: React.FC = () => {

  setupIonicReact();

  return (

    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={InputEmail} />
          <Route path="/app" component={Tabs} />
          <Route exact path="/productsPage" component={ProductsPage} />
          <Route exact path="/accountInformation" component={AccountInformation} />
          <Route exact path="/qrReferral" component={QRReferralPage} />
          <Route exact path="/inputPassword" component={InputPassword} />
 
          {/* Add any additional routes here if needed */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
