import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import React from 'react';
import './QRReferralPage.css'
import { chevronBackOutline } from 'ionicons/icons';


const QRReferralPage: React.FC = () => {

    return (
        <IonPage className='qr-referral'>
            <IonContent className='qr-referral ion-content background-content'>
                {/* Fixed Segment Title and Description Section */}
                <div className="qr-referral segment-section">
                    <IonButton color="none" routerLink="/accountInformation" routerDirection="back" fill='clear' style={{ marginLeft: '-25px' }}>
                        <div className="qr-referral-circular-icon ">
                            <IonIcon className="icon" icon={chevronBackOutline} />
                        </div>
                    </IonButton>
                
                </div>

                <div>
                    ts
                </div>
            </IonContent>
        </IonPage>
    );
};

export default QRReferralPage;