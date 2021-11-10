import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faFilm } from '@fortawesome/free-solid-svg-icons';
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
            <ul className="menu--desktop">
                <li className='menu__item'>
                    <Link
                        className='nav__link'
                        to={PATH.MOVIES}
                    >
                        <FontAwesomeIcon
                            style={{ fontSize: '1.3rem' }}
                            icon={faFilm}
                        />
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
                    {/* Add user Profile Panel */}
                    <Link to={PATH.LOGIN_PANEL}>
                        <div className="menu__btn">Login</div>
                    </Link>
                </li>
            </ul>
        </>
    )
}
