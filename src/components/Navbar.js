// TODO 1: add logo / background color (black) on hover / sticky top
// TODO 2: create SearchForm and add to the Navbar / make it responsive

import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import logo from '../assets/images/cinemacloud.png';


export default function Navbar() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    },[])

    return (
        <nav className={`${offset > 50 ? "nav nav-background" : "nav"}`}>
            <div className="navbar-content">
                <img className='logo-img' src={logo} alt="cinemacloud" />
                <SearchForm />
            </div>
        </nav>
    )
}
