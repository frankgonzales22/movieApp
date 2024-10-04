import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import './InputEmail.css';
import { colorFill, logoFacebook, logoGoogle } from 'ionicons/icons';
import { FcGoogle } from "react-icons/fc";
import { useHistory } from 'react-router-dom';

const InputEmail: React.FC = () => {

    const history = useHistory(); // Hook to programmatically navigate

    const hanndleContinue = () => {
        history.push("/inputPassword");
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
                            style={{ fontWeight: 'normal' }}
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
                            {/* <IonButton  expand="block">
                                <IonIcon icon={logoGoogle} />
                            </IonButton> */}
                            <IonButton expand="block">
                                {/* Render FcGoogle directly */}
                                <FcGoogle size={20} />
                            </IonButton>
                        </IonCol>
                        <IonCol size='3'>
                            <IonButton expand="block" className='fbButton'>
                                <IonIcon color='primary' icon={logoFacebook} />
                            </IonButton>
                        </IonCol>
                        <IonCol size='6'>
                            <IonButton expand="block" className='loginButtons'>
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
