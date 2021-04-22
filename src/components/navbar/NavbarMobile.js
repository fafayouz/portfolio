import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./NavbarMobile.css";
import {Link} from 'react-scroll'

const NavbarMobile = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 25) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const [burgerShow, setBurgerShow] = useState(true);
  const burger = () => {
    setBurgerShow(false);
  };
  const burgerHide = () => {
    setBurgerShow(true);
  };
  return (
    <>
      <div className={navbar ? "Navbar-Mobile2" : "Navbar-Mobile"}>
        <div className="Navbar-Mobile-Logo">
          <Logo />
        </div>
        {burgerShow ? (
          <div onClick={burger} class="menu-toggle">
            <div class="bar"></div>
            <div class="bar-"></div>
            <div class="bar"></div>
          </div>
        ) : (
          <>
            {" "}
            <div onClick={burgerHide} class="menu-toggle-">
              <div class="bar--"></div>
              <div class="bar---"></div>
            </div>
          </>
        )}
      </div>
      {!burgerShow ? (
        <div className="Nav-Mobile">
          <div className="Nav-Mobile-items">
            {" "}
            <Link onClick={burgerHide} smooth={true} duration={500} to='home--id'>Home</Link>
          </div>
          <div className="Nav-Mobile-items">
            {" "}
            <Link onClick={burgerHide} smooth={true} duration={500} to='about--id'>About</Link>
          </div>
          <div className="Nav-Mobile-items">
            {" "}
            <Link onClick={burgerHide} smooth={true} duration={500} to='Skills--id'>Skills</Link>
          </div>
          <div className="Nav-Mobile-items">
            {" "}
            <Link  onClick={burgerHide} smooth={true} duration={500} to='Services--id'>Services</Link>

          </div>
          <div className="Nav-Mobile-items">
            {" "}
            <Link onClick={burgerHide} smooth={true} duration={500} to='Contact--id'>Contact</Link>

          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavbarMobile;
