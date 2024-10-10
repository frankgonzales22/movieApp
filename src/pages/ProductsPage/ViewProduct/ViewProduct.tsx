import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { cartOutline, chevronBackOutline } from 'ionicons/icons';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Product } from '../products';
import TitleViewAll from '../../../components/TitleViewAll/TitleViewAll';
import freeLook from '../../../assets/png/svg/prelook.png'
import transfer from '../../../assets/png/svg/transfer.png'
import assignability from '../../../assets/png/svg/assign.png'
import './ViewProduct.css'

interface LocationState {
    product?: Product; // Make product optional to avoid runtime errors when there's no state
}
const ViewProduct: React.FC = () => {
    const location = useLocation<LocationState>();
    const { product } = location.state || {}; // Retrieve product data from location.state


    const planBenefits = [
        {
            title: 'Memorial Service',
            content: "A memorial service from our accredited mortuary for a chapel viewing of four (4) days or for viewing outside of our accredited mortuary, at your or your beneficiary's expense, for nine (9) days. The memorial service may only be availed 30 days after the date of effectivity of the plan."
        },
        {
            title: 'Insurance coverages',
            content: "The following insurance coverages if you are in good health and you are between the insurable ages of 18 to 60 years (not beyond your 60th birthday) at the time of purchase of your plan:Cash Assistance – your beneficiaries shall receive an amount equivalent to the Gross Contract Price if you die within 10 years from the date of effectivity of the plan and you have not reached the age of 65 upon death. Payment of Unpaid Balance – the unpaid balance of your plan will be considered fully paid if you die while paying for this plan and you have not reached the age of 65 upon death. Waiver of Installment – you will be exempted from paying the balance of your plan if you suffer from an uninterrupted disability of at least six (6) months during the paying period and you have not reached the age of 60 at the start of your disability."
        },
        {
            title: 'Accidental Death and Dismemberment',
            content: "If you are in good health and you are between the insurable ages of 18 to 55 years (not beyond your 55th birthday) at the time of purchase of your plan. You or your beneficiaries shall be entitled to cash, based on a schedule, if you die or become dismembered due to an accident during the paying period and you have not reached the age of 60 upon death/accident."
        }
    ]

    const planFeatures = [
        {
            title: 'Transferability',
            image: transfer
        },
        {
            title: 'Assignability',
            image: assignability
        },
        {
            title: 'Free-look Period',
            image: freeLook
        },

    ]

    const checkboxRef = useRef<HTMLIonCheckboxElement>(null);

    const handleItemClick = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = !checkboxRef.current.checked; // Toggle the checkbox state
        }
    };



    return (
        <IonPage >
            <IonContent className='viewProduct'>

                <div style={{ display: 'block', width: 'inherit' }}>
                    <IonCard
                        className='ion-card'
                        style={{ height: '400px', marginTop: '-2px' }}
                    >

                        <div
                            className='img-style'
                            style={{
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${product?.image})`,
                            }}
                        />
                        {/* Top-right content */}
                        <div style={{ paddingLeft: '10px' }}>
                            <IonButton color="none" routerLink="/app" routerDirection="back" fill='clear' style={{ marginLeft: '-25px' }}>
                                <div className="circular-icon ">
                                    <IonIcon className="icon" icon={chevronBackOutline} />
                                </div>
                            </IonButton>
                        </div>
                        <div className='top-right_content' style={{ marginTop: '10px' }}>

                            <IonButton
                                className="custom-button"
                                fill="clear"  // This removes the default Ionic background
                            >
                                Compare Plans
                            </IonButton>

                            <div className="circular-icon">
                                <IonIcon className="icon" icon={cartOutline} />
                            </div>
                        </div>

                        {/* Bottom text content */}

                    </IonCard>
                </div>

                <IonItem lines="none" style={{ marginTop: '10px' }}>
                    <IonLabel>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{product?.title}</h1>
                        <h6>{product?.description}</h6>
                    </IonLabel>
                </IonItem>

                <div style={{ marginTop: '18px' }}>
                    <TitleViewAll title="Plan Benefits" />
                </div>

                <IonAccordionGroup expand="inset" style={{ margin: '15px' }}>
                    {planBenefits.map((benefit, index) => (
                        <IonAccordion style={{ marginBottom: '10px' }} key={index} value={`accordion-${index}`}>
                            <IonItem slot="header" color="light">
                                <IonLabel>{benefit.title}</IonLabel>
                            </IonItem>
                            <div className="ion-padding" slot="content" style={{ padding: '10px' }}>
                                {benefit.content}
                            </div>
                        </IonAccordion>
                    ))}
                </IonAccordionGroup>

                <div >
                    <TitleViewAll title="Plan Features" />
                </div>

                <IonGrid>
                    <IonRow>
                        {planFeatures.map((feature, index) => (
                            <IonCol key={index} size="4"> {/* Adjust size if needed */}
                                <IonCard
                                    style={{
                                        // padding: "15px",
                                        paddingTop: '10px',
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        height: "120px", // Ensures all cards have equal height
                                    }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            height: "50px", // Adjust height if needed
                                            backgroundImage: `url(${feature.image})`,
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    ></div>

                                    {/* Title */}
                                    <IonCardContent>
                                        <p>
                                            <strong>{feature.title}</strong>
                                        </p>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                <div style={{
                    margin: '5px',
                    padding: ".5rem"
                }}>
                    <IonRow >
                        <IonCol>
                            <strong>Plan Price</strong>
                        </IonCol>

                    </IonRow>
                </div>
                <div className='price'>
                    <IonItem lines="none"  >
                        <IonLabel slot='start'>Spot-cash Payment</IonLabel>
                        <IonLabel slot='end'>₱47,700</IonLabel>
                    </IonItem>
                </div>
                <div style={{
                    margin: '5px',
                    padding: ".5rem"
                }}>
                    <IonRow >
                        <IonCol >
                            <strong style={{
                                fontSize: '.9rem'
                            }}>Pay the following installments for 5 years.</strong>
                        </IonCol>

                    </IonRow>
                </div>
                <div className='price'>
                    <IonItem lines="none"  >
                        <IonLabel slot='start'>Annualy</IonLabel>
                        <IonLabel slot='end'>₱10,600</IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel slot='start'>Semi-Annualy</IonLabel>
                        <IonLabel slot='end'>₱5,620</IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel slot='start'>Quarterly</IonLabel>
                        <IonLabel slot='end'>₱2,915</IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                        <IonLabel slot='start'>Monthly</IonLabel>
                        <IonLabel slot='end'>₱1,000</IonLabel>
                    </IonItem>
                </div>

                <IonItem button onClick={handleItemClick} detail={false}>
                    <IonCheckbox ref={checkboxRef} slot="start" aria-label="Toggle task completion" />
                    <div style={{ marginLeft: '5px', fontSize: '11px' }}>
                        I have read and understood the
                        <span style={{ color: 'blue', }}> BENEFITS AND FEATURES </span>
                        of the plan.
                    </div>
                </IonItem>

            </IonContent>


            <IonFooter style={{ display: 'flex', padding: 0, height  : isPlatform('android') ? '50px' : '' }} >
                <IonButton
                    fill="clear"
                    style={{
                        flex: '1',
                        height: '100%',
                        width: '100%',
                        color: 'black',
                        textTransform: 'none',  // Disable text capitalization
                    }}
                >
                    <IonIcon className="icon" icon={cartOutline} />
                    Add to Cart
                </IonButton>
                <IonButton
                    fill="clear"
                    style={{
                        flex: '1',
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#177D54',
                        color: '#fff',
                        textTransform: 'none',  // Disable text capitalization
                    }}
                >
                    Buy Now
                </IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default ViewProduct;
