import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Container from '../components/container/Container'
import Footer from '../components/footer/Footer'
import Services from '../components/Services/Services'
import Skills from '../components/skills/Skills'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbar/NavbarMobile'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }


const Home = () => {

    return (
        <>
            <Desktop><Navbar/></Desktop>        
            <Mobile> <NavbarMobile/> </Mobile>
            <Container/>
            <About/>
            <Skills/>
            <Services/>
            <Contact/>     
            <Footer/>
        </>
    )
}

export default Home
