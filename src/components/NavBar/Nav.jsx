import { Hamburger, NavMenu, MenuPage } from "../../Index";
import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/component styling/nav.css";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const container = useRef();
  const hamburgerMenuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useGSAP(() => {
    gsap.to("nav", {
      backgroundColor: "#fff",
      borderBottom: "1px solid #D3D3D3",
      duration: 0.2,
      scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -1%",
        end: "top -2%",
        scrub: 0.8,
      },
    });
  }, []);
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
      <nav ref={container}>
        <div className="navBar">
          <div className="nav-brand">
            <img id="logo" src="Logo.png" alt="logo" />
            <h1>Shubham Enterprises</h1>
          </div>
          <NavMenu />
        </div>
        <Hamburger togMenu={toggleMenu} op={isOpen} rf={hamburgerMenuRef} />
        <MenuPage op={isOpen} rf={menuRef} />
      </nav>
    </>
  );
};

export default Nav;
