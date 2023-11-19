/* ---------------------------------- React --------------------------------- */
import React, { useEffect, useState } from "react";

/* ---------------------------- React Router Dom ---------------------------- */
import { NavLink } from "react-router-dom";

const Header = () => {
  /* ------------------------------- Local State ------------------------------ */
  const [menuVisible, setMenuVisible] = useState(false);

  /* ---------------------- Close Mobile Menu With Scrool --------------------- */
  useEffect(() => {
    if (menuVisible) {
      const handleScroll = () => {
        if (window.scrollY >= 200) {
          setMenuVisible(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [menuVisible]);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <h3 className="logo">Nasscorp</h3>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink>Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink>Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink>Contact</NavLink>
              </li>
            </ul>
            <div className="user-area">
              <div className="search icon ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4601 10.3185L15.7639 14.6223C15.9151 14.7737 16.0001 14.979 16 15.193C15.9999 15.407 15.9148 15.6122 15.7635 15.7635C15.6121 15.9147 15.4068 15.9997 15.1928 15.9996C14.9788 15.9995 14.7736 15.9144 14.6223 15.7631L10.3185 11.4593C9.03194 12.4558 7.41407 12.9247 5.79403 12.7707C4.17398 12.6167 2.67346 11.8513 1.59771 10.6302C0.521957 9.40911 -0.0482098 7.82408 0.00319691 6.19754C0.0546036 4.57101 0.723722 3.02514 1.87443 1.87443C3.02514 0.723722 4.57101 0.0546036 6.19754 0.00319691C7.82408 -0.0482098 9.40911 0.521957 10.6302 1.59771C11.8513 2.67346 12.6167 4.17398 12.7707 5.79403C12.9247 7.41407 12.4558 9.03194 11.4593 10.3185H11.4601ZM6.4003 11.1993C7.67328 11.1993 8.89412 10.6936 9.79425 9.79345C10.6944 8.89332 11.2001 7.67248 11.2001 6.3995C11.2001 5.12652 10.6944 3.90568 9.79425 3.00554C8.89412 2.10541 7.67328 1.59972 6.4003 1.59972C5.12732 1.59972 3.90648 2.10541 3.00634 3.00554C2.10621 3.90568 1.60052 5.12652 1.60052 6.3995C1.60052 7.67248 2.10621 8.89332 3.00634 9.79345C3.90648 10.6936 5.12732 11.1993 6.4003 11.1993Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="cart  icon ">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_964_18909)">
                    <path
                      d="M5.33229 14.9336C5.92139 14.9336 6.39896 14.4561 6.39896 13.867C6.39896 13.2779 5.92139 12.8003 5.33229 12.8003C4.74319 12.8003 4.26562 13.2779 4.26562 13.867C4.26562 14.4561 4.74319 14.9336 5.33229 14.9336Z"
                      fill="white"
                    />
                    <path
                      d="M12.801 14.9336C13.3901 14.9336 13.8677 14.4561 13.8677 13.867C13.8677 13.2779 13.3901 12.8003 12.801 12.8003C12.2119 12.8003 11.7344 13.2779 11.7344 13.867C11.7344 14.4561 12.2119 14.9336 12.801 14.9336Z"
                      fill="white"
                    />
                    <path
                      d="M14.9333 2.66678H3.104L2.66667 0.426775C2.64173 0.304495 2.57471 0.19483 2.47726 0.11687C2.37981 0.0389102 2.25811 -0.00240773 2.13333 0.000108501H0V1.06678H1.696L3.73333 11.3068C3.75827 11.4291 3.82529 11.5387 3.92274 11.6167C4.02019 11.6946 4.1419 11.736 4.26667 11.7334H13.8667V10.6668H4.704L4.26667 8.53344H13.8667C13.99 8.53646 14.1105 8.49665 14.2077 8.4208C14.305 8.34496 14.3729 8.23775 14.4 8.11744L15.4667 3.31744C15.4845 3.23831 15.4841 3.15614 15.4655 3.07719C15.4468 2.99824 15.4103 2.9246 15.3589 2.86185C15.3075 2.79911 15.2424 2.74893 15.1687 2.71512C15.0949 2.68132 15.0144 2.66478 14.9333 2.66678ZM13.44 7.46678H4.064L3.31733 3.73344H14.2667L13.44 7.46678Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_964_18909">
                      <rect width="16" height="14.9334" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                className="burger-menu "
                onClick={() => setMenuVisible(!menuVisible)}
              >
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.572266 0H23.4294V2.28571H0.572266V0ZM6.28655 5.71429H23.4294V8H6.28655V5.71429ZM13.4294 11.4286H23.4294V13.7143H13.4294V11.4286Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </div>
        <div className={menuVisible ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-list">
            <li className="mobile-item">
              <NavLink> Home</NavLink>
            </li>
            <li className="mobile-item">
              <NavLink> Product</NavLink>
            </li>
            <li className="mobile-item">
              <NavLink> Pricing</NavLink>
            </li>
            <li className="mobile-item">
              <NavLink> Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
