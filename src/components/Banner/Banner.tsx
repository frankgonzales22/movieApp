import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import '@ionic/react/css/ionic-swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <>
            <Swiper
                loop={true}
                initialSlide={0} /* Start from the first slide */
                watchOverflow={true} /* Ensures proper behavior when slides are fewer than viewport */
                spaceBetween={10} /* Small positive space for smooth transitions */
                slidesPerView={1} /* Show a portion of the next slide */
                centeredSlides={true} /* Disable centered slides to remove extra space */
                style={{
                    marginLeft : '10px',
                    marginTop: '10px',
                    paddingLeft: '0px', /* Remove padding on the left to avoid extra space */
                    paddingRight: '8px',
                }}

                breakpoints={{
                    // When window width is >= 320px, show 2 slides per view
                    320: {
                        slidesPerView: 1.1,
                    },
                    // When window width is >= 768px, show 2 slides per view
                    768: {
                        slidesPerView: 1.1,
                    },
                    // When window width is >= 1024px, show 2 slides per view
                    1024: {
                        slidesPerView: 1.1,
                    },
                }}
            >
                <SwiperSlide>
                    <IonCard style={{
                        background: 'linear-gradient(to right, rgba(23, 125, 84, 1), rgba(30, 182, 121, 1), rgba(23, 125, 84, 1))',
                        width: '100%'
                    }}>
                        <IonCardHeader style={{ textAlign: 'left' }}>
                            <IonCardTitle style={{ fontSize: 'larger', color: 'white' }}>
                                Connect your Account to eStore 1
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent style={{ textAlign: 'left', marginTop: '-15px', color: 'white' }}>
                            <p>Applicable only to traditionally-bought Life Plans</p>
                            <p><strong>Learn how</strong></p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard
                        style={{
                            background: 'linear-gradient(to right, rgba(23, 125, 84, 1), rgba(30, 182, 121, 1), rgba(23, 125, 84, 1))',
                            width: '100%'
                        }}
                    >
                        <IonCardHeader style={{ textAlign: 'left' }}>
                            <IonCardTitle style={{ fontSize: 'larger', color: 'white' }}>
                                Connect your Account to eStore 2
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent style={{ textAlign: 'left', marginTop: '-15px', color: 'white' }}>
                            <p>Applicable only to traditionally-bought Life Plans</p>
                            <p><strong>Learn how</strong></p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard
                        style={{
                            background: 'linear-gradient(to right, rgba(23, 125, 84, 1), rgba(30, 182, 121, 1), rgba(23, 125, 84, 1))',
                            width: '100%'
                        }}
                    >
                        <IonCardHeader style={{ textAlign: 'left' }}>
                            <IonCardTitle style={{ fontSize: 'larger', color: 'white' }}>
                                Connect your Account to eStore 3
                            </IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent style={{ textAlign: 'left', marginTop: '-15px', color: 'white' }}>
                            <p>Applicable only to traditionally-bought Life Plans</p>
                            <p><strong>Learn how</strong></p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
