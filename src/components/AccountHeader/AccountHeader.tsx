import { IonAvatar, IonCol, IonGrid, IonIcon, IonLabel, IonRow, IonToolbar } from '@ionic/react';
import { chevronForwardOutline, shieldCheckmarkOutline, shieldCheckmarkSharp } from 'ionicons/icons';
import React from 'react';
import './AccountHeader.css';
import { products } from '../../pages/ProductsPage/products';

const AccountHeader: React.FC = () => {
    const handleEndClick = () => {
        console.log("End button clicked");
    };

    return (
        <IonToolbar className='account-header'>
            <IonGrid>
                <IonRow className="ion-align-items-center" style={{ padding: '40px 15px 10px 15px' }}>
                    {/* Avatar and Info Column */}
                    <IonCol size="10"  style={{ display: 'flex', alignItems: 'center' }}>
                        <IonAvatar className="profile-avatar">
                            <img alt="User Avatar" src={products[2].image} />
                        </IonAvatar>
                        <IonLabel onClick={handleEndClick} style={{ flex: 1 }}>
                            <div className="account-info" style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                <div className="account-name">Peter N. Go</div>
                                <div className="account-email">peterng@gmail.com</div>
                                <div className="account-plan" style={{ display: 'flex', alignItems: 'center' }}>
                                    <IonIcon icon={shieldCheckmarkSharp} style={{marginRight: '2px' }} />
                                    <div>Verified Plan</div>
                                </div>
                            </div>
                        </IonLabel>
                    </IonCol>

                    {/* Chevron Icon Column */}
                    <IonCol size="2" className="ion-text-center ion-align-self-center" style={{ padding: '0' }}>
                        <IonIcon icon={chevronForwardOutline} className="chevron-icon" onClick={handleEndClick} style={{flex : 1}} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
    );
};

export default AccountHeader;
