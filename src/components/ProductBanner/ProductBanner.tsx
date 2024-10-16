import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useHistory } from "react-router-dom";
import { Product, products } from "../../pages/ProductsPage/products";
import { Storage } from '@ionic/storage';

// Your product images here...
import georgeImage from "../../assets/images/george.jpg";
import gregory from "../../assets/images/gregory.jpg";
import dom from "../../assets/images/dom.jpg";
import claire from "../../assets/images/claire.jpg";

const ProductBanner: React.FC = () => {
    const [storage, setStorage] = useState<Storage | null>(null);
    const history = useHistory();

    useEffect(() => {
        const initStorage = async () => {
            const storage = new Storage();  // No arguments passed
            await storage.create();         // Create the storage instance
            setStorage(storage);            // Set the storage in state
        };
        initStorage();
    }, []);

    const handleProductClick = async (product: Product) => {
        if (storage) {
            await storage.set('selectedProduct', product); // Store product in Ionic Storage
            history.push('/viewproduct'); // Navigate to view product
        }
    };

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={2}
            style={{ paddingLeft: "8px", paddingRight: "8px" }}
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 2, spaceBetween: 10 },
            }}
        >
            {products.map((product, index) => (
                <SwiperSlide key={index} onClick={() => handleProductClick(product)}>
                    <IonCard
                        style={{
                            height: "170px",
                            width: "100%",
                            maxWidth: "none",
                            padding: "10px",
                            ...(index % 2 !== 0
                                ? {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                }
                                : {
                                    position: "relative",
                                    overflow: "hidden",
                                }),
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${product.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                zIndex: 0,
                            }}
                        ></div>
                        <IonCardContent
                            style={{
                                textAlign: "left",
                                marginTop: "auto",
                                color: "#FFFFFF",
                                zIndex: 1,
                                position: "relative",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                            }}
                        >
                            <p>
                                <strong>{product.title}</strong>
                            </p>
                            <p>
                                <strong>{product.price}</strong>
                            </p>
                            <p>
                                Traditional Plan
                            </p>
                        </IonCardContent>
                    </IonCard>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductBanner;
