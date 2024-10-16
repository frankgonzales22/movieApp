import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCheckbox, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { cartOutline, chevronBackOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'; // Import useLocation
import { Product } from '../products';
import TitleViewAll from '../../../components/TitleViewAll/TitleViewAll';
import freeLook from '../../../assets/png/svg/prelook.png'
import transfer from '../../../assets/png/svg/transfer.png'
import assignability from '../../../assets/png/svg/assign.png'
import './ViewProduct.css'
import { Storage } from '@ionic/storage';

interface LocationState {
    product?: Product; // Make product optional to avoid runtime errors when there's no state
}
const ViewProduct: React.FC = () => {


    const planBenefits = [
        {
            title: 'Memorial Service',
            content: "A memorial service from our accredited mortuary for a chapel viewing of four (4) days or for viewing outside of our accredited mortuary, at your or your beneficiary's expense, for nine (9) days. The memorial service may only be availed 30 days after the date of effectivity of the plan."
        },
        {
            title: 'Insurance coverages',
            content: `The following insurance coverages if you are in good health and you are between the insurable ages of 18 to 60 years (not beyond your 60th birthday) at the time of purchase of your plan:<br/><br/>
            <b>Cash Assistance</b> – your beneficiaries shall receive an amount equivalent to the Gross Contract Price if you die within 10 years from the date of effectivity of the plan and you have not reached the age of 65 upon death.<br/><br/>
            <b>Payment of Unpaid Balance</b> – the unpaid balance of your plan will be considered fully paid if you die while paying for this plan and you have not reached the age of 65 upon death.<br/><br/>
            <b>Waiver of Installment</b> – you will be exempted from paying the balance of your plan if you suffer from an uninterrupted disability of at least six (6) months during the paying period and you have not reached the age of 60 at the start of your disability.`
        },
        {
            title: 'Accidental Death and Dismemberment',
            content: "If you are in good health and you are between the insurable ages of 18 to 55 years (not beyond your 55th birthday) at the time of purchase of your plan. You or your beneficiaries shall be entitled to cash, based on a schedule, if you die or become dismembered due to an accident during the paying period and you have not reached the age of 60 upon death/accident."
        }
    ]

    const planFeatures = [
        {
            title: 'Transferability',
            image: transfer,
            caption: 'You may transfer your plan to another living person.'
        },
        {
            title: 'Assignability',
            image: assignability,
            caption: 'You may assign the plan to any deceased person, however, any insurance coverage provided to the transferor shall automatically terminate, provided that the balance, if any, is paid before the service is rendered.'
        },
        {
            title: 'Free-look Period',
            image: freeLook,
            caption: 'You may cancel the plan within 15 days from the date of effectivity of the plan and you will receive a refund of your payment in full.'
        },

    ]

    const [isChecked, setIsChecked] = useState(false);

    const handleItemClick = () => {
        setIsChecked(prevChecked => !prevChecked);  // Toggle the checkbox state
    };

    const [selectedPayment, setSelectedPayment] = useState<string>('spot-cash'); // Default selected payment option
    const handlePaymentClick = (payment: string) => {
        if (selectedPayment === payment) {
            setSelectedPayment(''); // Deselect if the same payment is clicked
        } else {
            setSelectedPayment(payment); // Select the clicked payment
        }
    };
    const isSelected = (payment: string) => selectedPayment === payment;



    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const handleCardClick = (title: string) => {
        // Toggle selected card
        setSelectedCard((prev) => (prev === title ? null : title));
    };



 
    const [storage, setStorage] = useState<Storage | null>(null);
    const [product, setProduct] = useState<Product | null>(null);
    const history = useHistory();
    const location = useLocation<LocationState>();

    useEffect(() => {
        const initStorage = async () => {
            const storageInstance = new Storage();
            await storageInstance.create();
            setStorage(storageInstance);

            // Retrieve product from storage when initialized
            const storedProduct = await storageInstance.get('selectedProduct');
            setProduct(storedProduct);
        };

        initStorage();
    }, []);

    // Optionally, you could still retrieve from location.state for fallback
    useEffect(() => {
        if (!product && location.state?.product) {
            setProduct(location.state.product);
        }
    }, [location.state, product]);

    const handleBuyNow = () => {
        history.push("/paymentSummary");
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
                            <div
                                className="ion-padding"
                                slot="content"
                                style={{ padding: '10px' }}
                                dangerouslySetInnerHTML={{ __html: benefit.content }} // Render HTML content
                            />
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
                                    onClick={() => handleCardClick(feature.title)}
                                    style={{
                                        paddingTop: '10px',
                                        textAlign: 'center',
                                        borderRadius: '8px',
                                        height: '120px',
                                        border: selectedCard === feature.title ? '2px solid #FF7043' : 'none',
                                        backgroundColor: selectedCard === feature.title ? '#FEC7B6' : 'white',
                                        transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
                                    }}
                                >
                                    {/* Image */}
                                    <div
                                        style={{
                                            height: '50px',
                                            backgroundImage: `url(${feature.image})`,
                                            backgroundSize: 'contain',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
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

                {selectedCard && (
                    <IonCard
                        // onClick={() => console.log(feature.title)}
                        style={{
                            padding: "10px",
                            margin: '10px',
                        }}
                    >
                        <div >
                            {planFeatures.find((feature) => feature.title === selectedCard)?.caption}
                        </div>
                    </IonCard>
                )}



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
                    <IonItem
                        lines="none"
                        onClick={() => handlePaymentClick('spot-cash')}
                        className={isSelected('spot-cash') ? 'selected' : ''}
                    >
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
                    <IonItem
                        lines="none"
                        onClick={() => handlePaymentClick('annual')}
                        className={isSelected('annual') ? 'selected' : ''}
                    >
                        <IonLabel slot='start'>Annualy</IonLabel>
                        <IonLabel slot='end'>₱10,600</IonLabel>
                    </IonItem>
                    <IonItem
                        lines="none"
                        onClick={() => handlePaymentClick('semi-annual')}
                        className={isSelected('semi-annual') ? 'selected' : ''}
                    >
                        <IonLabel slot='start'>Semi-Annualy</IonLabel>
                        <IonLabel slot='end'>₱5,620</IonLabel>
                    </IonItem>
                    <IonItem
                        lines="none"
                        onClick={() => handlePaymentClick('quarterly')}
                        className={isSelected('quarterly') ? 'selected' : ''}

                    >
                        <IonLabel slot='start' >Quarterly</IonLabel>
                        <IonLabel slot='end'>₱2,915</IonLabel>
                    </IonItem>
                    <IonItem
                        lines="none"
                        onClick={() => handlePaymentClick('monthly')}
                        className={isSelected('monthly') ? 'selected' : ''}
                    >
                        <IonLabel slot='start'>Monthly</IonLabel>
                        <IonLabel slot='end'>₱1,000</IonLabel>
                    </IonItem>
                </div>

                <IonItem button onClick={handleItemClick} detail={false} lines='none'>
                    <IonCheckbox onClick={handleItemClick} checked={isChecked} onIonChange={handleItemClick} slot="start" aria-label="Toggle task completion" />
                    <div style={{ marginLeft: '5px', fontSize: '11px' }}>
                        I have read and understood the
                        <span style={{ color: 'blue', }}> BENEFITS AND FEATURES </span>
                        of the plan.
                    </div>
                </IonItem>
            </IonContent>


            <IonFooter style={{ display: 'flex', padding: 0, height: isPlatform('android') ? '50px' : '' }} >
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
                    onClick={handleBuyNow}
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
