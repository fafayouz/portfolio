import React, { useState } from "react";
import {Link} from 'react-scroll'
import Logo from "../Logo/Logo";
import "./Navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
    
    const changeBackground = ()=> {
        if(window.scrollY >= 25){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
    
  return (
    <>
    <div className='Navbar-Container'>
      <div className={navbar ? 'Navbar2' : 'Navbar'}>
        
                
        <div className="Navbar-Logo">
          <Logo />
        </div>
        <div className="Navbar-Items">
          <Link smooth={true} duration={500} to='home--id'>Home</Link>
          <Link smooth={true} duration={500} to='about--id'>About</Link>
          <Link smooth={true} duration={500} to='Skills--id'>Skills</Link>
          <Link smooth={true} duration={500} to='Services--id'>Services</Link>
          <Link smooth={true} duration={500} to='Contact--id'>Contact</Link>
        </div>
        
      </div>
      </div>
    </>
    
  );
};

export default Navbar;


