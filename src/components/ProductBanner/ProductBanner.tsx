import { IonCard, IonCardContent } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useHistory } from "react-router-dom"; // Import useHistory
import georgeImage from "../../assets/images/george.jpg";
import gregory from "../../assets/images/gregory.jpg";
import dom from "../../assets/images/dom.jpg";
import claire from "../../assets/images/claire.jpg";
import { Product, products } from "../../pages/ProductsPage/products";

// const productData = [
//   { name: "St. George", price: "1,000/Month", plan: "Traditional Plan", image: georgeImage },
//   { name: "St. Gregory", price: "1,100/Month", plan: "Traditional Plan", image: gregory },
//   { name: "St. Dominique", price: "1,285/Month", plan: "Traditional Plan", image: dom },
//   { name: "St. Claire", price: "1,870/Month", plan: "Traditional Plan", image: claire },
// ];

const ProductBanner = () => {
    const history = useHistory(); // Initialize useHistory hook

    const handleProductClick = (product: Product) => {
        history.push({
            pathname: "/viewproduct",
            state: { product }, // Pass product data as state
        });
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
