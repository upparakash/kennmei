import  { useState } from 'react';
import './Header.css';
import logo from "../assets/logo.jpeg"

const  Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  

  const productCategories = [
    { id: 'domestic', name: 'Domestic Use', hasSubmenu: true },
    { id: 'stpDetails', name: 'Sewage Treatment Plant (STP)' },
    { id: 'etpDetails', name: 'Effluent Treatment Plant (ETP)' },
    { id: 'roDetails', name: 'Industrial RO Plant' },
    { id: 'wsDetails', name: 'Water Softners' },
    { id: 'ecDetails', name: 'Environmental Consultancy' },
    { id: 'amcDetails', name: 'AMC For All Types Of Treatment Units' },
    { id: 'allPlantsDetails', name: 'All Types Plants Accessories' },
    { id: 'ccDetails', name: 'CCTV Instalation' },
    { id: 'networkingDetails', name: 'Networking' },
    { id: 'fireDetails', name: 'Fire Alarm' },
    { id: 'intercomDetails', name: 'Intercom' }
  ];

  const domesticProducts = [
    { id: 'primeDetails', name: 'Prime RO UV Water Purifier' },
    { id: 'alkalinePlantdetails', name: 'Polypropylene Sandy Alkaline Water Filter' },
    { id: 'scroDetails', name: 'Sandy Copper RO UV Water Purifier' },
    { id: 'uswpDetails', name: 'Under Sink Water Filter' },
    { id: 'hotwater15', name: 'Geyser 15 Liters Storage' },
    { id: 'hotwater25', name: 'Geyser 25 Liters Storage' },
    { id: 'goldDetails', name: 'Golden Flow Drinking Water' },
    { id: 'silverDetails', name: 'Silver Flow Drinking Water Filter' },
    { id: 'platinumdetails', name: 'Platinum Flow Drinking Water Filter' }
  ];

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
    setSelectedCategory(null);
  };

  const handleCategoryHover = (category) => {
    if (category.hasSubmenu) {
      setSelectedCategory(category.id);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="toll-free">
          Toll Free Number 1800 5723 299
        </div>
      </div>
      <div className="contact-bar">
        <div className="contact-left">74163 11333</div>
        <div className="contact-center">RO Plant, Industrial RO Plant, Commercial R.O. Plant Manufacturer in India</div>
        <div className="contact-right">74164 11333</div>
      </div>
      <div className="main-navbar">
        <div className="logo">
          <img src={logo} alt="Kennwei" />
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li className="dropdown">
              <a href="#" onClick={toggleProductsMenu} className={isProductsOpen ? 'active' : ''}>
                Products <span className="dropdown-icon">▼</span>
              </a>
              {isProductsOpen && (
                <div className="mega-menu">
                  <div className="category-list">
                    <ul>
                      {productCategories.map(category => (
                        <li 
                          key={category.id}
                          onMouseEnter={() => handleCategoryHover(category)}
                          className={selectedCategory === category.id ? 'active' : ''}
                        >
                          <a href={`/${category.id}`}>
                            {category.name}
                            {category.hasSubmenu && <span className="submenu-icon">▶</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedCategory === 'domestic' && (
                    <div className="subcategory-list">
                      <ul>
                        {domesticProducts.map(product => (
                          <li key={product.id}>
                            <a href={`/${product.id}`}>{product.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
            <li><a href="/brochure">Brochure</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="enquire-button">
              <a href="/enquire" className="btn-enquire">Enquire Now</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default  Header;