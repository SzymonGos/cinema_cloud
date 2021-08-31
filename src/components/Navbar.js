// TODO 1: add logo / background color (black) on hover / sticky top
// TODO 2: create SearchForm and add to the Navbar / make it responsive

import React from 'react';
import SearchForm from './SearchForm';
import logo from '../assets/images/cinemacloud.png';
export default function Navbar() {
    return (
        <nav>
            <img className='logo-img' src={logo} alt="cinemacloud" />
            <SearchForm />
        </nav>
    )
}
