import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import React from 'react';
import './AccountInformation.css';
import { products } from '../../ProductsPage/products';
import { createOutline, exit, exitOutline, qrCode } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface AccountInformationProps {
    customerInfo: {
        firstName: string;
        middleName: string;
        lastName: string;
        emailAddress: string;
        phoneNumber: string;
    };
}

const AccountInformation: React.FC = () => {
    const captions = [
        'First Name',
        'Middle Name',
        'Last Name',
        'Email Address',
        'Phone Number'
    ];

    const customerInfo = {
        firstName: 'Peter',
        middleName: 'Nuan',
        lastName: 'Go',
        emailAddress: 'Baldwinr@gmail.com',
        phoneNumber: '+639875647728'
    };

    const customerValues = [
        customerInfo.firstName,
        customerInfo.middleName,
        customerInfo.lastName,
        customerInfo.emailAddress,
        customerInfo.phoneNumber
    ];

    const history = useHistory(); // Hook to programmatically navigate

    const handleReferral = () => {
        history.push("/qrReferral");
    };
    return (
        <IonPage className='acct-info'>
            <IonHeader className='account-info'>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/app/tab4"
                            color="light"
                            text={isPlatform('android') ? 'Back' : 'Back'}
                            style={{ textTransform: 'none' }}
                        />
                    </IonButtons>
                    <IonTitle>Account Information</IonTitle>
                    <IonButtons slot="end" >
                        <IonButton color={'light'} style={{ marginTop: '-5px' }}>
                            <IonIcon icon={createOutline}  />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

                <div className="avatar-wrapper">
                    <IonAvatar className="toolbar-avatar">
                        <img alt="User Avatar" src={products[2].image} />
                    </IonAvatar>
                </div>
            </IonHeader>

            <IonContent >
                <div style={{ marginTop: '100px' }}>
                    {captions.map((caption, index) => (
                        <IonItem key={index} lines='full'>
                            <IonLabel color={'medium'}>{caption}</IonLabel>
                            <IonLabel slot='end'>{customerValues[index]}</IonLabel>
                        </IonItem>
                    ))}
                </div>
                <div style={{ marginTop: '20px' }}>
                    <IonItem lines='full' detail onClick={handleReferral}>
                        <IonIcon icon={qrCode} style={{ marginRight: '10px' }} />

                        <IonLabel color={'medium'}>
                            Referrals
                        </IonLabel>
                    </IonItem>
                </div>
                <div className="button-container">
                    <IonButton fill='outline' color={'danger'}>
                        <IonIcon icon={exitOutline} style={{ marginRight: '10px' }} />

                        Request to delete my account
                    </IonButton>
                </div>

            </IonContent>
        </IonPage >
    );
};

export default AccountInformation;
