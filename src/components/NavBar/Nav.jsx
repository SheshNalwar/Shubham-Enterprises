import { Hamburger, NavMenu, MenuPage } from "../../Index";
import React, { useState, useEffect, useRef } from "react";
import "../../css/component styling/nav.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="navBar">
          <div className="nav-brand">
            <img id="logo" src="Logo.png" alt="logo" />
            <h1>Shubham Enterprises</h1>
          </div>
          <NavMenu />
        </div>
        <Hamburger togMenu={toggleMenu} op={isOpen} rf={hamburgerMenuRef} />
        <MenuPage op={isOpen} rf={menuRef} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Nav;
