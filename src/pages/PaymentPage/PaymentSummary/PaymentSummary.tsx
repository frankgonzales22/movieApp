import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonText, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { chevronForward, colorFill, createOutline, listCircle, notificationsOutline, receiptOutline } from 'ionicons/icons';
import React from 'react';
import { products } from '../../ProductsPage/products';
import image from '../../../assets/images/george.jpg';
import gcash from '../../../assets/png/svg/GCash-Logo.png';
import './PaymentSummary.css'
import { useHistory } from 'react-router-dom';

const PaymentSummary: React.FC = () => {
    const history = useHistory(); // Initialize useHistory hook

    const handleChoosePmethod = () => {
        history.push({
            pathname: "/paymentMethod",
        });
    };
    return (
        <IonPage>
            <IonHeader className='payment-summary'>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/viewproduct"
                            color="light"
                        // text={isPlatform('android') ? 'Back' : 'Back'}
                        // style={{ textTransform: 'none' }}
                        />
                    </IonButtons>
                    <IonTitle>Payment Summary</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" >
                <IonItem
                    className="personal-info-item"
                    button={true}
                    detail={false}
                    lines='none'
                    style={{ marginTop: '25px' }}
                >
                    <div
                        className="unread-indicator-wrapper"
                        slot="start"></div>
                    <IonLabel>
                        <strong>Personal Information</strong>
                        <IonNote>Peter N. Go</IonNote>
                        <br />
                        <IonNote>(+63) 912 123 1234</IonNote>
                        <br />
                        <IonNote>peterng@stpeter.com</IonNote>
                        <br />
                    </IonLabel>
                    <div className="metadata-end-wrapper" slot="end">
                        <IonIcon color="medium" icon={chevronForward} size='12px'></IonIcon>
                    </div>
                </IonItem>

                <IonItem className="personal-info-item" button={true} detail={false} lines='none'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                        {/* Order Summary above */}
                        <strong style={{ marginBottom: '10px' }}>Order Summary</strong>

                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            {/* Image */}
                            <div
                             className="unread-indicator-wrapper" 
                             slot="start" 
                             style={{ 
                                marginRight: '10px',
                             }}>
                                <div
                                    style={{
                                        height: '100px',    // Adjust the height
                                        width: '100px',     // Add width to make the image visible
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius : '10px'
                                    }}
                                />
                            </div>

                            {/* Label and price */}
                            <IonLabel style={{ flexGrow: 1 }}>
                                <strong>St. George</strong>
                                <IonNote>₱1,100</IonNote>
                            </IonLabel>
                        </div>
                    </div>

                    <div className="metadata-end-wrapper" slot="end">
                        <IonIcon color="medium" icon={chevronForward} size='12px'></IonIcon>
                    </div>
                </IonItem>

                <IonItem className="personal-info-item" button={true} detail={false} lines='none' onClick={handleChoosePmethod}>
                    <div className="unread-indicator-wrapper" slot="start">
                        <IonIcon
                            aria-hidden="true"
                            icon={receiptOutline}
                            className="mr"
                            style={{ height: '40px', width: '28px', marginRight: '10px', color: 'green' }}
                        />
                    </div>
                    <IonLabel>
                        <strong>Select Payment Method</strong>
                    </IonLabel>
                    <div
                        style={{
                            height: '30px',    // Adjust the height
                            width: '100px',     // Add width to make the image visible
                            backgroundImage: `url(${gcash})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            color: 'blue'
                        }}
                    />
                    <div className="metadata-end-wrapper" slot="end">

                        <IonIcon color="medium" icon={chevronForward} size='12px'></IonIcon>
                    </div>
                </IonItem>
                <IonItem className="personal-info-item" button={true} detail={false} lines='none'>
                    <div className="unread-indicator-wrapper" slot="start">
                        <IonIcon
                            aria-hidden="true"
                            icon={receiptOutline}
                            className="mr"
                            style={{ height: '40px', width: '28px', marginRight: '10px', color: 'green' }}
                        />
                    </div>
                    <IonLabel >
                        <strong>Total Payable Amount</strong>
                    </IonLabel>

                    <div slot="end"
                        style={{
                            color: 'green',
                            fontSize: '1.2rem'
                        }}>
                        <p>₱ 1,100</p>
                    </div>
                </IonItem>

            </IonContent>
            <IonFooter
                className="custom-footer"
                style={{
                    backgroundColor: 'white'
                }}
            >
                <IonButton
                    onClick={() => console.log('s')}
                    id='open-loading'
                    expand="block"
                    className='loginButtons'
                    style={{
                        marginBottom: '20px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        minHeight: '50px'
                    }}>
                    Proceed to Payment
                </IonButton>

            </IonFooter>
        </IonPage>
    );
};

export default PaymentSummary;