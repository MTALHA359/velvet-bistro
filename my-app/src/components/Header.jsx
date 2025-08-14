// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../index.css';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-bg"></div>
//       <div className="container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           <img src="/logo.png" alt="Restaurant Logo" className="logo-img" />
//           <span className="logo-text">Velvet Bistro</span>
//         </Link>

//         {/* Navigation */}
//         <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
//           <ul className="nav-list">
//             {['Home', 'Menu', 'Reservations', 'Events'].map((item) => (
//               <li key={item}>
//                 <Link to={`/${item.toLowerCase()}`} className="nav-link">
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Actions */}
//         <div className="actions">
//           <button className="search-btn" onClick={toggleSearch}>
//             <svg
//               className="search-icon"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//           <div className={`search-bar ${isSearchOpen ? 'search-bar-open' : ''}`}>
//             <input type="text" placeholder="Search Menu..." className="search-input" />
//           </div>
//           <Link to="/reservations" className="cta-btn">
//             Reserve Now
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button className="mobile-toggle" onClick={toggleMobileMenu}>
//           <svg
//             className="menu-icon"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="header-bg"></div>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/LOGO.png" alt="Restaurant Logo" className="logo-img" />
          <span className="logo-text">Velvet Bistro</span>
        </Link>

        {/* Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {['Home', 'Menu', 'About', 'Reservations', 'Events'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="actions">
          <button className="search-btn" onClick={toggleSearch}>
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className={`search-bar ${isSearchOpen ? 'search-bar-open' : ''}`}>
            <input type="text" placeholder="Search Menu..." className="search-input" />
          </div>
          <Link to="/reservations" className="cta-btn">
            Reserve Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;