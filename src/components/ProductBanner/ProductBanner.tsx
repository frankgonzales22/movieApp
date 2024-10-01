import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper styles
import georgeImage from '../../assets/images/george.jpg'
import gregory from '../../assets/images/gregory.jpg'
import dom from '../../assets/images/dom.jpg'
import claire from '../../assets/images/claire.jpg'

const ProductBanner = () => {
    return (
        <>
            <Swiper
                // loop={true}
                spaceBetween={10} // Space between the slides
                slidesPerView={2} // Display 2 slides equally per view
                style={{
                    paddingLeft: '8px',
                    paddingRight: '8px',
                }}
                breakpoints={{
                    // When window width is >= 320px, show 2 slides per view
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // When window width is >= 768px, show 2 slides per view
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // When window width is >= 1024px, show 2 slides per view
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide key={0}>
                    <IonCard
                        style={{
                            height: '170px',
                            width: '100%', // Take up full width of the Swiper slide
                            maxWidth: 'none', // Disable maxWidth to ensure equal width
                            padding: '10px', // Optional: Add padding for better spacing
                            position: 'relative', // Maintain stacking context for pseudo-element
                            overflow: 'hidden', // Hide the overlay going beyond the card bounds
                        }}
                    >
                        {/* Background Overlay with Gradient */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${georgeImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0, // Ensure the image stays behind content
                            }}
                        ></div>

                        <IonCardContent
                            style={{
                                textAlign: 'left',
                                marginTop: 'auto',
                                color: '#FFFFFF', // Text color remains white for contrast
                                zIndex: 1, // Ensure the text appears above the background
                                position: 'relative', // Relative to allow z-index control
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add subtle text shadow for better readability
                            }}
                        >
                            <p>
                                <strong>St. George</strong>
                            </p>
                            <p>
                                <strong>1,000/Month</strong>
                            </p>
                            <p>
                                <strong>Traditional Plan</strong>
                            </p>
                        </IonCardContent>
                    </IonCard>

                </SwiperSlide>

                <SwiperSlide key={1}>
                    <IonCard
                        style={{
                            height: '170px',
                            width: '100%', // Take up full width of the Swiper slide
                            maxWidth: 'none', // Disable maxWidth to ensure equal width
                            // border: '1px solid green',
                            display: 'flex', // Use flexbox
                            flexDirection: 'column', // Stack header and content
                            justifyContent: 'space-between', // Push content to top and bottom
                            alignItems: 'flex-start', // Align text to the left
                            padding: '10px', // Optional: Add padding for better spacing

                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${gregory})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0, // Ensure the image stays behind content
                            }}
                        ></div>
                        <IonCardContent style={{
                            textAlign: 'left',
                            marginTop: 'auto',
                            color: '#FFFFFF',
                            zIndex: 1, // Ensure the text appears above the background
                            position: 'relative', // Relative to allow z-index control
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add subtle text shadow for better readability
                        }}
                        >
                            <p>
                                <strong>St. Gregory</strong>
                            </p>
                            <p>
                                <strong>1,100/Month</strong>
                            </p>
                            <p>
                                <strong>Traditional Plan    </strong>
                            </p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard
                        style={{
                            height: '170px',
                            width: '100%', // Take up full width of the Swiper slide
                            maxWidth: 'none', // Disable maxWidth to ensure equal width
                            // display: 'flex', // Use flexbox
                            flexDirection: 'column', // Stack header and content
                            justifyContent: 'space-between', // Push content to top and bottom
                            alignItems: 'flex-start', // Align text to the left
                            padding: '10px', // Optional: Add padding for better spacing

                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${dom})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0, // Ensure the image stays behind content
                            }}
                        ></div>
                        <IonCardContent style={{
                            textAlign: 'left',
                            marginTop: 'auto',
                            color: '#FFFFFF',
                            zIndex: 1, // Ensure the text appears above the background
                            position: 'relative', // Relative to allow z-index control
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add subtle text shadow for better readability
                        }}
                        >
                            <p>
                                <strong>St. Dominique</strong>
                            </p>
                            <p>
                                <strong>1,285/Month</strong>
                            </p>
                            <p>
                                <strong>Traditional Plan    </strong>
                            </p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard
                        style={{
                            height: '170px',
                            width: '100%', // Take up full width of the Swiper slide
                            maxWidth: 'none', // Disable maxWidth to ensure equal width
                            display: 'flex', // Use flexbox
                            flexDirection: 'column', // Stack header and content
                            justifyContent: 'space-between', // Push content to top and bottom
                            alignItems: 'flex-start', // Align text to the left
                            padding: '10px', // Optional: Add padding for better spacing

                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${claire})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0, // Ensure the image stays behind content
                            }}
                        ></div>
                        <IonCardContent style={{
                            textAlign: 'left',
                            marginTop: 'auto',
                            color: '#FFFFFF',
                            zIndex: 1, // Ensure the text appears above the background
                            position: 'relative', // Relative to allow z-index control
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add subtle text shadow for better readability
                        }}
                        >
                            <p>
                                <strong>St. Claire</strong>
                            </p>
                            <p>
                                <strong>1,870/Month</strong>
                            </p>
                            <p>
                                <strong>Traditional Plan    </strong>
                            </p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default ProductBanner;
