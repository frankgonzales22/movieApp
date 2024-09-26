
import React from 'react';
import { IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { cartOutline } from "ionicons/icons";
import '../ProductsPage.css';  // Create a separate CSS file if needed

interface TraditionalPlansProps {
    product: {
        image: string;
        description: string;
        title: string;
        price: string;
    };
}

const TraditionalPlans: React.FC<TraditionalPlansProps> = ({ product }) => {
    return (
        <React.Fragment>
            <IonCard className='ion-card'>
                <div
                    className='img-style'
                    style={{
                        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${product.image})`,
                    }}
                />
                {/* Top-right content */}
                <div className='top-right_content'>
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
                <IonCardContent className='ion-bottom-text'>
                    <p>{product.description}</p>
                </IonCardContent>
            </IonCard>

            <div style={{ paddingTop: '10px' }}>
                <p color='white' style={{ fontSize: 'x-large' }}>
                    <strong>{product.title}</strong>
                </p>
                <p>
                    <strong>{product.price}</strong>
                </p>
            </div>
        </React.Fragment>
    );
};

export default TraditionalPlans;
