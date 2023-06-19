import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './basket.css';
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAlert } from 'react-alert';
import Layout from '../../components/Layout/Layout';
import { deleteFromBasket } from '../../reducers/basketSlice';
const Basket = () => {
    const alert = useAlert();
    const basket = useSelector((state) => state);

    const totalPrice = basket.reduce((total, product) => total + product.price, 0);

    const handleCompleteOrder = () => {
        basket.forEach((product) => {
            dispatch(deleteFromBasket(product.id));
        });

        alert.show("Your order has been completed successfully")
    };
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(deleteFromBasket(id));
        alert.show("Item removed from basket")
    }

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start(i => ({
                y: 0,
                opacity: 1,
                transition: {
                    delay: i * 0.1,
                },
            }));
        }
    }, [controls, inView]);
    return (
        <Layout>
            <div className="basket-container">
                <h2 className="basket-title">Basket</h2>

                {basket.length === 0 ? (
                    <p className="basket-empty">No items in the basket</p>
                ) : (
                    <motion.div className="basket-items" ref={ref}>
                        {basket.map((product, index) => (
                            <motion.div
                                key={index}
                                className="basket-item"
                                initial={{ opacity: 0, y: 50 }}
                                animate={controls}
                                custom={index}
                            >
                                <button className="item-remove" onClick={() => handleRemove(product.id)}>
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                                <img className="item-image" src={product.image} alt={product.title} />
                                <div className="item-details">
                                    <h3 className="item-title">{product.title}</h3>
                                    <p className="item-price">${product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {basket.length > 0 && (
                    <div className="basket-footer">
                        <p className="total-price">Total Price: ${totalPrice}</p>
                        <button className="complete-order-button" onClick={handleCompleteOrder}>
                            Complete Order
                        </button>
                    </div>
                )}
            </div>
        </Layout>

    );
};

export default Basket;
