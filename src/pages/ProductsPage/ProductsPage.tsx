import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { chevronBackOutline, cartOutline } from "ionicons/icons";
import './ProductsPage.css';  // Import the external CSS
import georgeImage2 from '../../assets/images/george2.jpg'
import gregory from '../../assets/images/gregory.jpg'
import dom from '../../assets/images/dom.jpg'
import claire from '../../assets/images/claire.jpg'
import { products } from './products';
import TraditionalPlans from './TraditionalPlans/TraditionalPlans';
import CremationalPlans from './CremationalPlans/CremationalPlans';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cremationProducts } from './cremationProducts';

const ProductsPage: React.FC = () => {
    const segment1Values = ["segment 1 - aa", "segment 1 - bb", "segment 1 - cc"];
    const segment2Values = ["segment 2 - xx", "segment 2 - yy", "segment 2 - zz"];
    const segment3Values = ["segment 3 - xx", "segment 3 - yy", "segment 3 - zz"];

    const [selectedSegment, setSelectedSegment] = useState<string>("segment2");
    const [segmentValues, setSegmentValues] = useState<any>(segment2Values);
    // const [segmentTitle, setSegmentTitle] = useState<string>("Show All");
    const [segmentTitle, setSegmentTitle] = useState<string>("Traditional Plans");
    // const [segmentDescription, setSegmentDescription] = useState<string>("Description for Show All");
    const [segmentDescription, setSegmentDescription] = useState<string>("St. Peter Pre-paid DeathCare Plans that offer anti-inflation benefits and ensure you receive a lifetime Memorial Service Package of your choice.");

    function toggleSegment(selectedSegment?: string) {
        console.log("Selected segment is: " + selectedSegment);

        if (selectedSegment === "segment1") {
            setSegmentValues(segment1Values);
            setSegmentTitle("Show All");
            setSegmentDescription("Description for Show All");
        }
        else if (selectedSegment === "segment2") {
            setSegmentValues(segment2Values);
            setSegmentTitle("Traditional Plans");
            setSegmentDescription("St. Peter Pre-paid DeathCare Plans that offer anti-inflation benefits and ensure you receive a lifetime Memorial Service Package of your choice.");
        }
        else if (selectedSegment === "segment3") {
            setSegmentValues(segment3Values);
            setSegmentTitle("Cremation Plans");
            setSegmentDescription("The best and most affordable cremation products and services to its valued customers with all the flexibility that we, Filipinos, look for in a cremation plan.");
        }
        else {
            console.log("Invalid selected segment: " + selectedSegment);
        }
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };

    const handleSwiperProgress = (swiper: any) => {
        swiper.slides.forEach((slide: any, index: number) => {
            const slideProgress = slide.progress;
            const scale = 1 - Math.min(Math.abs(slideProgress) * 0.3, 0.3);  // Max zoom out to 70% of the original size
            // Apply scale only to the outer slide container, not the image itself
            slide.style.transform = `scale(${scale})`;
        });
    };


    return (
        <IonPage >
            <IonContent className='ion-content background-content'>
                {/* Fixed Segment Title and Description Section */}
                <div className="segment-section scroll-y">
                    <IonButton color="none" routerLink="/app" routerDirection="back" fill='clear' style={{ marginLeft: '-25px' }}>
                        <div className="circular-icon ">
                            <IonIcon className="icon" icon={chevronBackOutline} />
                        </div>
                    </IonButton>
                    <div className='segment_Title'>
                        {segmentTitle}
                    </div>
                    <div className='segment_description'>
                        <p>{segmentDescription}</p>
                    </div>
                </div>

                {/* Scrollable Content */}
                {/* <div className="scrollable-content"> */}
                <div className="segment-container ">
                    <div className="page-container">
                        <div className="fixed-segment">
                            <IonSegment
                                value={selectedSegment}
                                onIonChange={(e: any) => {
                                    const selected = e.detail.value;
                                    setSelectedSegment(selected);
                                    toggleSegment(selected);
                                }}
                            >
                                {/* <IonSegmentButton value="segment1">
                                    <IonLabel>Show All</IonLabel>
                                </IonSegmentButton> */}
                                <IonSegmentButton value="segment2">
                                    <IonLabel>Traditional Plans</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="segment3">
                                    <IonLabel>Cremation Plans</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </div>

                        <div className="scrollable-content">
                            {selectedSegment == 'segment2' &&
                                <div style={{ backgroundColor: 'white', paddingTop: '15px' }}>
                                    {products.map((product, index) => (
                                        <TraditionalPlans key={index} product={product} />
                                    ))}
                                </div>
                            }
                            {selectedSegment == 'segment3' &&
                                <div style={{ backgroundColor: 'white', paddingTop: '15px' }}>
                                    {/* <CremationalPlans key={0} product={products[0]} /> */}
                                    <Swiper
                                        spaceBetween={-20}
                                        // onSlideChange={handleSlideChange}
                                        onProgress={handleSwiperProgress}
                                        centeredSlides={true}
                                        slidesPerView={1.4}  // Adjust for how many slides are visible
                                        watchSlidesProgress={true}  // Enables slide progress tracking
                                    >
                                        {cremationProducts.map((product, index) => (
                                            <SwiperSlide key={index}>
                                                <CremationalPlans product={product} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </IonContent>
        </IonPage>

    );
};

export default ProductsPage;
