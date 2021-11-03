import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import logo from '../../assets/images/cinemacloud.png';
import { Link } from 'react-router-dom';
import { useStore } from '../../services/storage';
import PATH from '../../services/paths';
import SearchForm from './SearchForm';
import MenuMobile from './MenuMobile';

export default function Navbar() {

    const store = useStore()
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, [])

    const showBackgroundClass = offset > 30 ? "nav nav-background" : "";

    return (
        <>
            <nav className={`nav ${showBackgroundClass}`}>
                <div className="nav__content">
                    <Link to={PATH.HOME}>
                        <img
                            className='logo-img'
                            src={logo}
                            alt="cinemacloud"
                        />
                    </Link>
                    <div>
                        <div className='nav__stars'>
                            <h4>Stars: {store.state.favouriteMovieIds.length}</h4>
                        </div>
                    </div>
                    <MenuItems />
                </div>
            </nav>
            <SearchForm />
            <MenuMobile />
        </>
    )
}
