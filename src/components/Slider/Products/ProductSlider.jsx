import React, { useRef } from "react";
import "./productslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { motion } from "framer-motion";
import { products } from "../../../data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../reducers/basketSlice";
import { useInView } from "react-intersection-observer";

const SimpleSlider = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const settings = {
    spaceBetween: 18,
    slidesPerView: 5
  };

  const [sliderRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px"
  });

  
  return (
    <div className="container">
      <div ref={sliderRef}>
        <Swiper
          className="swiper_item"
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          {...settings}
        >
          <div className="custom-prev-arrow custom-arrow" ref={navigationPrevRef}>
            <i className="fas fa-chevron-left"></i>
          </div>
          {products.map((product, index) => {
            const animationDelay = index * 0.1;

            return (
              <SwiperSlide key={product.id}>
                <Link to={`/catalogue/details/${product.id}`}>
                  <motion.div
                    initial={inView ? { opacity: 0, x: 50 } : { opacity: 0 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: animationDelay }}
                    className="swiper-item-list"
                  >
                    <div className="swiper_image">
                      <img src={product.image} alt="" />
                      <i className="fa-solid fa-cart-shopping basket-icon"></i>
                    </div>
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>
                  </motion.div>
                </Link>
              </SwiperSlide>
            );
          })}
          <div className="custom-next-arrow custom-arrow" ref={navigationNextRef}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSlider;
