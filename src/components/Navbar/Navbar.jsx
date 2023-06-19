import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import { links } from "../../data"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import MenuItem from "./MenuItem"
import { useSelector } from "react-redux"
import { addToBasket } from "../../reducers/basketSlice"
import { motion } from "framer-motion"
const Navbar = () => {
    const basket = useSelector((state) => state);
    const [itemCount, setItemCount] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);

    useEffect(() => {
        setItemCount(basket.length);
        const totalPrice = basket.reduce((total, item) => total + item.price, 0);
        setItemPrice(totalPrice);
    }, [basket]);
    const [openIndex, setOpenIndex] = useState(null); // Track the index of the open submenu
    const toggleSubMenu = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <div className="Navbar">
            <div
                className="navbar-warpper">
                <div className="toggle-burger"
                    onClick={() => setIsNavShowing(!isNavShowing)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <NavLink to="/" className="nav-logo">
                    <img src="../../src/assets/logo.png" alt="" />
                </NavLink>
                <div className={`nav-menu ${(isNavShowing) ? "open_nav" : "hide_nav"}`}>
                    <div className="hamburger_text">
                        <h2>Menu</h2>
                        <i className="fa-solid fa-circle-xmark" onClick={() => setIsNavShowing(!isNavShowing)}></i>
                    </div>
                    <ul className="nav-menu-item">
                        {links.map(({ name, path, sub_menu, children }, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="menu_lists">

                                    <li className="nav-menu-item-list" onClick={() => toggleSubMenu(index)}>
                                        <NavLink to={path} spy={"true"} smooth={"true"} duration={10} offset={10}
                                            className={({ isActive }) =>
                                                `nav_link ${isActive ? (path != null ? "active_menu" : "") : ""}`
                                            }>{name}
                                            {children && (!isOpen ?
                                                <i className="fa-solid fa-chevron-down"></i> :
                                                <i className="fa-solid fa-chevron-up"></i>)}
                                        </NavLink>
                                    </li>

                                    {isOpen &&
                                        (
                                            <ul className="navbar-submenus">
                                                {
                                                    children?.map((item, index) => {
                                                        return <MenuItem key={index} item={item} onItemClick={() => setIsNavShowing(true)} />
                                                    })
                                                }
                                            </ul>


                                        )
                                    }
                                </div>
                            )
                        })}
                    </ul>
                </div>

                <div className="nav-search">
                    <div className="search-items">

                        <form action="">
                            <input type="text" placeholder="Search" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </form>
                    </div>
                </div>
                <div className="nav-basket">
                    <NavLink to="/basket" className={"basket_anchor"}>
                        <span className="item-count">{itemCount}</span>
                        <i class="fa-solid fa-cart-shopping basket-icon"></i>
                        <p className="basket-price">${itemPrice}</p>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar