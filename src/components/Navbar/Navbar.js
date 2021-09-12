import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import logo from '../../assets/images/cinemacloud.png';


export default function Navbar() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, [])

    return (
        <nav className={`${offset > 50 ? "nav nav-background" : "nav"}`}>
            <div className="nav__content">
                <img className='logo-img' src={logo} alt="cinemacloud" />
                <MenuItems />
            </div>
        </nav>
    )
}
