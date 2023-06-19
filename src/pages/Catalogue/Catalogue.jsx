import { Link, NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Products from "../../components/Products/Products";
import "./catalogue.css";
import { categories } from "../../data";
import { useState } from "react";
import SubMenu from "./CatalogueSubMenu/SubMenu";

const Catalogue = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open submenu
  const toggleSubMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <Layout>
      <div className="Catalogue container">
        <div className="catalogue_wrapper row">
          <div className="catalogue_left col-md-4">
            <div className="catalogue_dropdown">
              {categories.map((category, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="dropdown_item">
                    <div className="catalogue_dropdown_title" onClick={() => toggleSubMenu(index)}>
                      <NavLink
                        to={category.path}
                        spy={"true"}
                        smooth={"true"}
                        duration={10}
                        offset={10}
                        className={({ isActive }) =>
                          `nav_link ${isActive ? (category.path != null ? "active_menu" : "") : ""}`
                        }
                      >
                        <div className="dropdown_text">
                          {category.name}
                          <span className="item_count">{category.number_of_items}</span>
                        </div>
                        {category.children && (
                          !isOpen ? (
                            <i className="fa-solid fa-plus"></i>
                          ) : (
                            <i className="fa-solid fa-minus"></i>
                          )
                        )}
                      </NavLink>
                    </div>
                    {isOpen && (
                      <div className="catalogue_dropdown_menu">
                        {category.children?.map((children, subIndex) => (
                          <SubMenu key={subIndex} item={children} onItemClick={() => setOpenIndex(index)} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="catalogue_right col-md-8">
            <div className="products">
              
              <div className="product_items">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalogue;
