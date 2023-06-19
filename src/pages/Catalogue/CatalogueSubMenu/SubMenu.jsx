import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ item, onItemClick }) => {
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
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
                <div className="catalogue_dropdown_menu_item">
                    <div className="catalogue_dropdown_submenu">
                        <div className="dropdown_text">
                            {item.name}
                            <span className="item_count">
                                {item.number_of_items}
                            </span>
                        </div>
                    </div>
                </div>
                {hasChildren && <i class="fa-solid fa-plus"></i>}
            </NavLink>
            {hasChildren && ((submenuVisible) && (
                <ul>
                    {item.children?.map(child => (
                        handleItemClick && <SubMenu key={child.name} item={child} onItemClick={onItemClick} />
                    ))}
                </ul>
            ))}
        </li>
    )
}

export default SubMenu