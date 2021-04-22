import React from 'react'
import { Wave } from 'react-animated-text';
import './Logo.css'


const Logo = () => {
    return (
        <div className='logo-text'>
            <Wave
            text="FAFAYOUZ"
            effect="stretch"
            effectChange= {2}
            />
        </div>
    )
}

export default Logo;
