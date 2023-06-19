import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./products.css";
import { products } from "../../data";
import { useEffect } from "react";

const Products = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1 }); // Start with opacity: 1 for all items
      await controls.start((i) => ({
        opacity: 1, // Ensure opacity: 1 before animating y
        y: 0,
        transition: { delay: i * 0.1 }, // Add delay based on index
      }));
    };

    sequence();
  }, [controls]);

  return (
    <div className="product_list">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className="product_list_item"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={index}
        >
          <Link to={`/catalogue/details/${product.id}`}>
            <div className="product_image">
              <img src={product.image} alt="" />
              <i className="fa-solid fa-cart-shopping basket-icon"></i>
            </div>
            <h5 className="product_title">{product.title}</h5>
            <p className="product_price">{product.price}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
