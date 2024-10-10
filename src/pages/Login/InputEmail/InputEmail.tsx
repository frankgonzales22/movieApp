import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonLoading, IonPage, IonRow, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './InputEmail.css';
import { colorFill, logoFacebook, logoGoogle } from 'ionicons/icons';
import { FcGoogle } from "react-icons/fc";
import { useHistory } from 'react-router-dom';

import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { FACEBOOK_APP_ID, GOOGLE_AUTH_ID } from '../../../googleAuthId';
import { Device, DeviceInfo } from "@capacitor/device";

import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';

// Declare window.FB globally to avoid TypeScript error
declare global {
    interface Window {
        FB: any;
    }
}

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


    const [user, setUser] = useState<{ email?: string; name?: string; imageUrl?: string }>({});


    const signIn = async () => {
        const result = await GoogleAuth.signIn();
        // const deviceInfo = await Device.getInfo();
        // if ((deviceInfo as unknown as DeviceInfo).platform === "web") {
        //     await GoogleAuth.signIn();
        // }
        // if (result) {
        //     console.log('result', result)
        //     history.push({
        //         pathname: '/app/tab1',
        //         state: {
        //             name: result.name,
        //             image: result.imageUrl,
        //             email: result.email,
        //         },
        //     });
            history.push("/inputPassword");

        // }
        // try {


        // } catch (error) {
        //     console.error('Google Sign-In failed', error);
        // }
        // history.push("/inputPassword");
    };

    const loadFacebookSDK = () => {
        return new Promise((resolve, reject) => {
            if (document.getElementById('facebook-jssdk')) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            script.onload = () => {
                if (window.FB) {
                    window.FB.init({
                        appId: FACEBOOK_APP_ID,
                        autoLogAppEvents: true,
                        xfbml: true,
                        version: 'v12.0',
                    });
                    resolve(true);
                } else {
                    reject('Facebook SDK not loaded.');
                }
            };
            script.onerror = () => reject('Facebook SDK load error.');
            document.body.appendChild(script);
        });
    };

    // Load Facebook SDK when the component is mounted
    useEffect(() => {
        loadFacebookSDK().catch(error => console.error(error));
    }, []);

    const facebookSignIn = async () => {
        try {
            if (!window.FB) {
                console.error('Facebook SDK not loaded');
                return;
            }

            window.FB.login(
                (response: any) => {

                    if (response.authResponse) {
                        // Fetch user info from Facebook Graph API
                        fetch(
                            `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${response.authResponse.accessToken}`
                        )
                            .then((res) => res.json())
                            .then((data) => {
                                console.log('datass', data)
                                setUser({
                                    name: data.name,
                                    email: data.email,
                                    imageUrl: data.picture?.data?.url,
                                });

                                history.push({
                                    pathname: '/app/tab1',
                                    state: {
                                        name: data.name,
                                        email: data.email,
                                        imageUrl: data.picture?.data?.url,
                                    },
                                });
                            }
                            );
                    }
                },
                { scope: 'email,public_profile' }
            );
        } catch (error) {
            console.error('Facebook Sign-In failed', error);
        }
    };

    const facebookSignIn1 = async () => {
        try {
            const FACEBOOK_PERMISSIONS = ['email', 'public_profile'];

            // Perform login
            const result: FacebookLoginResponse = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

            if (result.accessToken) {
                const accessToken = result.accessToken.token;

                // Fetch user info from Facebook Graph API
                const response = await fetch(
                    `https://graph.facebook.com/me?fields=id,name,email,picture.width(200).height(200)&access_token=${accessToken}`
                )
                const data = await response.json()

                console.log('Facebook data', data)

                // Proceed with navigation after login
                history.push({
                    pathname: '/app/tab1',
                    state: {
                        name: data.name,
                        email: data.email,
                        imageUrl: data.picture?.data?.url,
                    },
                });
            } else {
                console.error('Facebook login failed: No access token');
            }
        } catch (error) {
            console.error('Facebook Sign-In failed', error);
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
                                fontWeight: 'normal',
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

                            <IonButton expand="block"
                                onClick={signIn}>
                                <FcGoogle size={20} />
                            </IonButton>

                        </IonCol>
                        <IonCol size='3'>
                            <IonButton expand="block" className='fbButton' onClick={facebookSignIn1}>
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
