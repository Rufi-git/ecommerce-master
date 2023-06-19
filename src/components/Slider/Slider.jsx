import React from 'react'
import { Link } from 'react-router-dom';

const Slider = (slider) => {
    return (
        <div className="home_slider">
            <img src={slider.image} alt="" />
            <div className="slider-text">
                <h1>{slider.title}</h1>
                <h4>{slider.description}</h4>
                <div className="collection_btn">
                    <Link to={slider.buttonLink}>Shop new collection</Link>
                </div>
            </div>
        </div>
    )
}

export default Slider