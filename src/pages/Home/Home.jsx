import { Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import "./home.css"
import Slider from "../../components/Slider/Slider";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { sliders } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import SimpleSlider from "../../components/Slider/Products/ProductSlider";

const Home = () => {
    const NextButton = ({ onClick }) => {
        return (
            <button onClick={onClick} className="control-arrow next-arrow">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        );
    };

    // Custom arrow component for the previous button
    const PrevButton = ({ onClick }) => {
        return (
            <button onClick={onClick} className="control-arrow prev-arrow">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
        );
    };
    return (
        <Layout>
            <div className="Home">
                <div className="home_images">
                    <Carousel
                        transitionTime={1000}
                        renderArrowNext={(onClickHandler, hasNext) =>
                            hasNext && <NextButton onClick={onClickHandler} />
                        }
                        renderArrowPrev={(onClickHandler, hasPrev) =>
                            hasPrev && <PrevButton onClick={onClickHandler} />
                        }
                        autoFocus={true} showStatus={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        autoPlay={true}
                        swipeable={true}>
                        {sliders.map(({ image, title, description, buttonLink }, index) => {
                            return <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            >
                                <Slider key={index} image={image} title={title} description={description} buttonLink={buttonLink} />

                            </motion.div>
                        })}
                    </Carousel>
                    <div className="home_item">
                        <motion.div className="home_item_list"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        >
                            <img src="../../../src/assets/image7.jpg" alt="" />
                            <div className="image_text">
                                <h4>Exclusive interior items</h4>
                                <p>Innovative forms & premium materials</p>
                            </div>
                        </motion.div>
                        <motion.div className="home_item_list"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        >
                            <img src="../../../src/assets/image8.jpg" alt="" />
                            <div className="image_text">
                                <h4>Up to 75% OFF</h4>
                                <p>For home decor & accessories</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="slider_icon">
                    <ul className="slider_item">
                        <li className="slider_item_list">
                            <i class="fa-solid fa-shield"></i>
                            <p className="item_text">Secure payments</p>
                        </li>
                        <li className="slider_item_list">
                            <i class="fa-solid fa-rotate-left"></i>
                            <p className="item_text">30 days return period</p>
                        </li>
                        <li className="slider_item_list">
                            <i class="fa-solid fa-phone"></i>
                            <p className="item_text">24/7 customer support</p>
                        </li>
                        <li className="slider_item_list">
                            <i class="fa-solid fa-truck"></i>
                            <p className="item_text">Flexible shipping</p>
                        </li>
                    </ul>
                </div>

                <section className="new_products">
                    <div className="new_title">
                        <h2>What's new</h2>
                    </div>
                    <div className="products_slide">
                        <SimpleSlider/>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Home