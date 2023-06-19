import { useParams } from "react-router-dom";
import { products } from "../../data";
import "./productdetail.css"
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../reducers/basketSlice';
import { useAlert } from 'react-alert';

const ProductDetail = () => {
    const alert = useAlert();

    const dispatch = useDispatch();

    const handleAddToBasket = (product) => {
        for (let i = 0; i < itemCount; i++) {
            dispatch(addToBasket(product))
            setItemCount(1);
        }
        itemCount==1 && alert.show(itemCount+'  Item added to basket');
        itemCount>1 && alert.show(itemCount+'  Items added to basket');
    };



    const { id } = useParams();
    const singleProduct = products.find((product) => product.id === Number(id));
    const [itemCount, setItemCount] = useState(1);
    const handleDown = () => {
        if (itemCount > 1)
            setItemCount(itemCount - 1);
    }

    return (
        <Layout>
            <div className="container">
                <div className="row gap-4">
                    <div className="col-md-4">
                        <div className="product_slider_item">
                            <img src={singleProduct.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product_details">
                            <div className="details_item">
                                <p className="product_code">
                                    Product code: 011-1
                                </p>
                                <h1>
                                    Rotating lounge chair
                                </h1>
                                <div className="stars">
                                    <div className="star_collection">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <span className="star_review">(3 customer reviews)</span>
                                </div>
                                <div className="item_price">${singleProduct.price}</div>
                                <div className="item_title">{singleProduct.description}</div>
                                <div className="item_colors">
                                    <span className="item_color_text">Color</span>
                                    <ul className="prod_colors">
                                        <li className="prod_colors_list">Black</li>
                                        <li className="prod_colors_list">White</li>
                                        <li className="prod_colors_list">Brown</li>
                                        <li className="prod_colors_list">Gray</li>
                                    </ul>
                                </div>

                                <div className="addToCart">
                                    <div className="counter">
                                        <button onClick={handleDown}>-</button>
                                        <input type="text" value={itemCount} />
                                        <button onClick={() => setItemCount(itemCount + 1)}>+</button>
                                    </div>
                                    <button className="addToBasket" onClick={() => handleAddToBasket(singleProduct)}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
