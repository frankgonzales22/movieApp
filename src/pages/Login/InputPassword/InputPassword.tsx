import { IonButton, IonContent, IonFooter, IonGrid, IonIcon, IonInput, IonInputPasswordToggle, IonLoading, IonPage, IonRow, IonText } from '@ionic/react';
import { chevronBackOutline, colorFill, eye } from 'ionicons/icons';
import React from 'react';
import './InputPassword.css'
import { useHistory } from 'react-router-dom';
const InputPassword: React.FC = () => {

    const history = useHistory(); // Hook to programmatically navigate

    const hanndleContinue = () => {
        history.push("/app");
    };

    return (
        <IonPage className='input-password'>
            <IonContent className='input-password' >
                {/* Fixed Segment Title and Description Section */}
                <div className="segment-section">
                    <IonButton
                        color="none" routerLink="/" routerDirection="back" fill='clear' style={{ marginLeft: '-25px' }}>
                        <div className="qr-referral-circular-icon">
                            <IonIcon className="icon" icon={chevronBackOutline} />
                        </div>
                    </IonButton>
                </div>

                <IonGrid style={{
                    fontWeight: '600',
                    margin: '0 20px 20px 20px',
                    fontSize: '20px'
                }}>
                    {/* Center the "Welcome to eStore Mobile" text */}
                    <IonRow >
                        <IonText>Enter your Password</IonText>
                    </IonRow>
                    <IonRow style={{
                        marginTop: '15px'
                    }}>
                        <IonInput
                            fill="outline"
                            color={'medium'}
                            placeholder="*****"
                            class="custom"
                            maxlength={20}
                            type="password"
                            style={{
                                fontWeight: 'normal',
                                height: '10px'
                            }}
                        >
                            <IonInputPasswordToggle slot="end" color={'medium'}> </IonInputPasswordToggle>

                        </IonInput>
                    </IonRow>
                    <IonRow style={{
                        marginTop: '12px',
                        marginLeft: '5px'
                    }}>
                        <IonText
                            color={'medium'}
                            style={{
                                fontSize: '13px',
                            }}>Forgot Password?</IonText>
                    </IonRow>
                </IonGrid>

            </IonContent>

            {/* Button at the bottom */}
            <IonFooter
                className="custom-footer"
                style={{
                    backgroundColor : 'white'
                }}
            >
                <IonButton
                    onClick={hanndleContinue}
                    id='open-loading'
                    expand="block"
                    className='loginButtons'
                    style={{
                        marginBottom: '20px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        minHeight: '50px'
                    }}>
                    Continue
                </IonButton>
                <IonLoading trigger="open-loading" message="Logging in..." duration={900} />

            </IonFooter>
        </IonPage>
    );
};

export default InputPassword;
