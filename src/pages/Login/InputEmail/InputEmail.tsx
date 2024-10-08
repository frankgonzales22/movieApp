import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import './InputEmail.css';
import { colorFill, logoFacebook, logoGoogle } from 'ionicons/icons';
import { FcGoogle } from "react-icons/fc";
import { useHistory } from 'react-router-dom';

import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { GOOGLE_AUTH_ID } from '../../../googleAuthId';

const InputEmail: React.FC = () => {
    GoogleAuth.initialize({
        clientId: GOOGLE_AUTH_ID,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });
    const history = useHistory(); // Hook to programmatically navigate

    const hanndleContinue = () => {
        history.push("/inputPassword");
    };


    const signIn = async () => {
        console.log('eti')
        try {
          const result = await GoogleAuth.signIn();
          console.info('result', result);
    
          if (result) {
            history.push({
              pathname: '/inputPassword',
              state: {
                name: result.name ,
                image: result.imageUrl,
                email: result.email,
              },
            });
          }
        } catch (error) {
          console.error('Google Sign-In failed', error);
        }
      };
    
    return (
        <IonPage>
            <IonContent className="input-email">
                <div className='img-style'>
                    <div><i>Nawa'y bawat pamilya ay may St. Peter Life Plan</i></div>
                </div>

                <IonGrid style={{
                    fontWeight: '600',
                    margin: '40px 20px 20px 20px'
                }}>
                    {/* Center the "Welcome to eStore Mobile" text */}
                    <IonRow className="centered-row">
                        <IonText style={{ fontSize: '1.5rem', marginBottom: '20px' }} className="centered-text">
                            Welcome to eStore Mobile
                        </IonText>
                    </IonRow>

                    <IonRow>
                        <IonInput
                            aria-label="peter@email.com"
                            fill="outline"
                            color={'medium'}
                            placeholder="peter@gmail.com"
                            // class="custom"
                            maxlength={20}
                            style={{ 
                                fontWeight: 'normal' ,
                                //  border : '1px solid black', 
                                //  padding : '5px'
                                }}
                            
                        />
                    </IonRow>

                    <IonRow className="centered-row continue" style={{ marginTop: '10px' }}>
                        <IonButton
                            onClick={hanndleContinue}
                            className='loginButtons'
                            style={{
                                flex: 1,
                                minHeight: '50px'
                            }}>
                            Continue
                        </IonButton>
                        
                    </IonRow>

                    {/* Center the "or" text */}
                    <IonRow className="centered-row or">
                        <IonText
                            className="centered-text"
                            style={{
                                fontWeight: 'normal',
                                color: 'darkgray'
                            }}
                        >
                            or
                        </IonText>
                    </IonRow>

                    <IonRow className='sso-buttons'>
                        <IonCol size='3'>
     
                            <IonButton expand="block">
                                <FcGoogle size={20} />
                            </IonButton>
                        </IonCol>
                        <IonCol size='3'>
                            <IonButton expand="block" className='fbButton'>
                                <IonIcon color='primary' icon={logoFacebook} />
                            </IonButton>
                        </IonCol>
                        <IonCol size='6'>
                            <IonButton expand="block" className='loginButtons' onClick={signIn}>
                                Guest
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="centered-row or" style={{ marginTop: '40px' }}>
                        <IonText
                            className="centered-text"
                            style={{
                                fontWeight: 'normal',
                                color: 'darkgray',
                                fontSize: '12px'
                            }}
                        >
                            By continuing, you agree to St.Peter’s&nbsp;
                            <span style={{ color: 'blue' }}>Terms of Service</span>
                            &nbsp;and acknowledge that you’ve read our <span style={{ color: 'blue' }}>Privacy Policy</span>.
                        </IonText>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default InputEmail;
