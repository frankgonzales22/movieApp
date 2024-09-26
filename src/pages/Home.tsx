import { IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css'
import './Global.css'
// import '@ionic/react/css/core.css';
// import '../theme/variables.csss';

import { search, notificationsOutline } from 'ionicons/icons';
import HeaderGreetings from '../components/HeaderGreeting/HeaderGreetings';
import HomeCard from '../components/HomeCard/HomeCard';
import TitleViewAll from '../components/TitleViewAll/TitleViewAll';
import Banner from '../components/Banner/Banner';
import ProductBanner from '../components/ProductBanner/ProductBanner';
import EServices from '../components/EServices/EServices';
const Home: React.FC = () => {


  return (
    <IonPage >
      {/* <IonHeader  >
        <IonToolbar >
          <IonTitle   >
            Home
          </IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <IonContent > 
          <HeaderGreetings/>
          <HomeCard />
          <Banner />
          <TitleViewAll title="Products"/>
          <ProductBanner />
          <TitleViewAll title="eServices"/>
         <EServices />
      </IonContent>
    </IonPage>
  );
};

export default Home;


