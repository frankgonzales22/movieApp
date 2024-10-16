import React, { useState } from 'react';
import {
    IonAccordion,
    IonAccordionGroup,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar,
    IonList,
    IonImg,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import { PaymentChannel, paymentLogos, paymentMethods } from './paymentLogos';
import { pmethodLabels } from './pmethodLabels'; // Import the labels



const SelectPaymentMethod: React.FC = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentChannel | null>(null); // Updated type

    const handlePaymentSelect = (value: PaymentChannel) => {
        setSelectedPaymentMethod(value);
    };

    // Group payment methods by pmethod for displaying in accordions
    const groupedPaymentMethods = paymentMethods.reduce((groups, method) => {
        if (!groups[method.pmethod]) {
            groups[method.pmethod] = [];
        }
        groups[method.pmethod].push(method);
        return groups;
    }, {} as { [key: string]: typeof paymentMethods });

    return (
        <IonPage>
            <IonHeader className='payment-summary'>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton
                            defaultHref="/paymentSummary"
                            color="light"
                        // text={isPlatform('android') ? 'Back' : 'Back'}
                        // style={{ textTransform: 'none' }}
                        />
                    </IonButtons>
                    <IonTitle>Select Payment Method</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonAccordionGroup expand="inset" style={{ margin: '15px' }}>
                    {Object.keys(groupedPaymentMethods).map((pmethod) => (
                        <IonAccordion key={pmethod}>
                            <IonItem slot="header" color="light">
                                <IonLabel>{pmethodLabels[pmethod] || pmethod}</IonLabel> {/* Display human-readable labels */}
                            </IonItem>
                            <IonList slot="content">
                                <IonRadioGroup value={selectedPaymentMethod}>
                                    {groupedPaymentMethods[pmethod].map((method) => (
                                        <IonItem
                                            key={method.pchannel}
                                            onClick={() => handlePaymentSelect(method.pchannel)}
                                            button
                                        >
                                            <IonRadio slot="start" value={method.pchannel} />
                                            &nbsp;
                                            <IonImg
                                                src={paymentLogos[method.pchannel]}
                                                style={{
                                                    width: '50px',
                                                    height: 'auto',
                                                    marginRight: '10px'
                                                }} />
                                        </IonItem>
                                    ))}
                                </IonRadioGroup>
                            </IonList>
                        </IonAccordion>
                    ))}
                </IonAccordionGroup>
            </IonContent>
        </IonPage>
    );
};

export default SelectPaymentMethod;
