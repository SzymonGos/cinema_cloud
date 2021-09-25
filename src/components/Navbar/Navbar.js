import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import logo from '../../assets/images/cinemacloud.png';
import { Link } from 'react-router-dom';
import { useState as useGlobalState } from '@hookstate/core';
import { starCount, increaseStarCount } from '../../services/storage';
import PATH from '../../services/paths';

export default function Navbar() {

    const [offset, setOffset] = useState(0);
    const global = useGlobalState(starCount);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, [])

    const showBackgroundClass = offset > 30 ? "nav nav-background" : "";

    return (
        <nav className={`nav ${showBackgroundClass}`}>
            <div className="nav__content">
                <Link 
                to={PATH.HOME}
                >
                    <img
                        className='logo-img'
                        src={logo}
                        alt="cinemacloud"
                    />
                </Link>
                <div>
                    <button
                        type='button'
                        onClick={() => increaseStarCount()}
                    >
                        Add Star
                    </button>
                    <div>
                        <h4>Stars: {global.get()}</h4>
                    </div>
                </div>
                <MenuItems />
            </div>
        </nav>
    )
}
