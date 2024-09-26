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
// import './App.css'

setupIonicReact();

const App: React.FC = () => {
  // const [tabBarSlot, setTabBarSlot] = useState<'bottom' | 'top'>('bottom');

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) {
  //       setTabBarSlot('top'); // Use top slot on larger screens
  //     } else {
  //       setTabBarSlot('bottom'); // Keep bottom slot for mobile
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Check the initial size

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  setupIonicReact();

  return (
    // <IonApp>
    //   <IonReactRouter>
    //     <IonRouterOutlet>
    //       <Route path="/" component={Tabs} />2
    //       <Route exact path="/home/productsPage" component={ProductsPage}/>


    //     </IonRouterOutlet>
    //   </IonReactRouter>
    //   {/* <IonReactRouter>
    //     <IonTabs>
    //       <IonRouterOutlet>
    //         <Route exact path="/">
    //           <Redirect to="/home" />
    //         </Route>
    //         <Route exact path="/home">
    //           <Home />
    //         </Route>
    //         <Route exact path="/transaction">
    //           <Transactions />
    //         </Route>
    //         <Route exact path="/plans">
    //           <Plans />
    //         </Route>
    //         <Route exact path="/account">
    //           <Account />
    //         </Route>
    //         <Route exact path="/home/productsPage">
    //           <ProductsPage />
    //         </Route>

    //       </IonRouterOutlet>

    //       <IonTabBar slot={tabBarSlot} className="web-tab-bar">
    //         <IonTabButton tab="home" href="/home">
    //           <IonIcon aria-hidden="true" icon={homeOutline} />
    //           <IonLabel>Home</IonLabel>
    //         </IonTabButton>
    //         <IonTabButton tab="transaction" href="/transaction">
    //           <IonIcon aria-hidden="true" icon={cartOutline} />
    //           <IonLabel>Transaction</IonLabel>
    //         </IonTabButton>
    //         <IonTabButton tab="plans" href="/plans">
    //           <IonIcon aria-hidden="true" icon={documentTextOutline} />
    //           <IonLabel>Plans</IonLabel>
    //         </IonTabButton>
    //         <IonTabButton tab="account" href="/account">
    //           <IonIcon aria-hidden="true" icon={personOutline} />
    //           <IonLabel>Account</IonLabel>
    //         </IonTabButton>
    //       </IonTabBar>
    //     </IonTabs>
    //   </IonReactRouter> */}
    // </IonApp>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Login} />
          <Route path="/app" component={Tabs} />
          <Route exact path="/productsPage" component={ProductsPage} />
          <Route exact path="/app/tab1/details" component={PlansPage} />
          {/* Add any additional routes here if needed */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
