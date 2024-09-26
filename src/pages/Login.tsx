import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
    const navigation = useIonRouter()

    const doLogin = () => {
        navigation.push('/app', 'root', 'replace')
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand='full' onClick={() => doLogin()}>
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login; 