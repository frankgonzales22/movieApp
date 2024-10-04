import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import InputEmail from './Login/InputEmail/InputEmail';

const Login: React.FC = () => {
    const navigation = useIonRouter()

    const doLogin = () => {
        navigation.push('/app', 'root', 'replace')
    }


    return (
        <IonPage>
        
            <IonContent className="ion-padding">
                    <InputEmail />
            </IonContent>
        </IonPage>
    );
};

export default Login; 