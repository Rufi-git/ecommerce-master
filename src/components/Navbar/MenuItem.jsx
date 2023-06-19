import { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ item, onItemClick }) => {
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const showSubMenu = item.showChildrens
    const handleItemClick = (event) => {
        onItemClick(item);
        setSubmenuVisible(!submenuVisible)
    }
    return (
        <li className="submenu_list">
            {item.image && <img src={item.image} width={"400px"} alt={item.name} className="submenu_image" />}
            <NavLink
                spy={"true"} smooth={"true"} duration={10} offset={10}
                to={item.path} onClick={handleItemClick} className="item_name">
                {item.name}
                {hasChildren && <i className="fa-solid fa-chevron-down"></i>}
            </NavLink>
            {hasChildren && ((submenuVisible || showSubMenu) && (
                <ul>
                    {item.children.map(child => (
                        handleItemClick && <MenuItem key={child.name} item={child} onItemClick={onItemClick} />
                    ))}
                </ul>
            ))}
        </li>
    )
}

export default MenuItem