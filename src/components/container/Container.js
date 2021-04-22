import React from 'react'
import './Container.css'
import {Link} from 'react-scroll'

import Profil from './Profil.jpg'

const Container = () => {
    
    return (
        <>
            <div id='home--id'></div>
            <div className='Container'>
                
                <div className='Container-Image'>
                    <img src={Profil} />
                </div>
                <div className='Container-Title'>
                <span>YOU HAVE A PROJECT AND WANT <br></br> <span className='ask-color'>YOUR OWN SITE ?</span></span>
                </div>
                <div className='Container-BTN'>
                    <Link smooth={true} duration={700} to='about--id'>Let's Star</Link>
                </div>
            </div>
        </>
    )
}

export default Container
