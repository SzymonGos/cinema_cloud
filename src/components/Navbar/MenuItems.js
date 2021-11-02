import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PATH from '../../services/paths';
import { useStore } from '../../services/storage';

export default function MenuItems() {

    const store = useStore()
    const menu = store.state.isMenuOpen;
    console.log(menu);

    return (
        <>
            <ul className="menu">
                <li className='menu__item'>
                    <FontAwesomeIcon
                        icon={faSearch}
                        onClick={() => store.toggleSearchModal(true)}
                    >
                    </FontAwesomeIcon>
                </li>
                <li className='menu__item'>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        onClick={() => store.toggleMobileMenu(true)}    
                        />
                </li>
            </ul>

            {/* Stars Counter */}
            {/* <div>
                <div className='nav__stars--small-screen'>
                    <h4>Stars: {store.state.favouriteMovieIds.length}</h4>
                </div>
            </div> */}
            
            {/* Menu - Desktop */}
            <ul className="menu--desktop">
                <li className='menu__item'>
                    <Link
                        className='nav__link'
                        to={PATH.MOVIES}
                    >
                        <h3 className='nav__item'>Movies</h3>
                    </Link>
                </li>
                <li className='menu__item'>
                    <FontAwesomeIcon
                        icon={faSearch}
                        onClick={() => store.toggleSearchModal(true)}
                    >
                    </FontAwesomeIcon>
                </li>
                <li className='menu__item'>
                    <Link to={PATH.LOGIN_PANEL}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </Link>
                </li>
            </ul>
        </>
    )
}
