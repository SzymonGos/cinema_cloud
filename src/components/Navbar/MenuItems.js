import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faFilm, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PATH from '../../services/paths';
import { useStore } from '../../services/storage';

export default function MenuItems() {

    const store = useStore()
    const menu = store.state.isMenuOpen;
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    const flipArrow = isOpen ? 'arrowUp' : 'arrowDown';
    const dropMenu = isOpen ? 'optionsOn' : 'optionsOff';
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
                {/* Login Button */}
                {/* <li className='menu__item'>                                         
                    <Link to={PATH.LOGIN_PANEL}>
                        <div className="menu__btn">Login</div>
                    </Link>
                </li> */}
                {/* User Button */}
                <li>
                    <div
                        className="menu__user"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <h5>Name</h5>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className={`menu__arrow ${flipArrow}`} />
                    </div>
                    <div className={`menu__overlay ${dropMenu}`}>
                        <ul className='menu__options'>
                            <li>
                                <Link 
                                    to={PATH.USER_PANEL}
                                    onClick={() => setIsOpen(!isOpen)}>
                                    My Profile
                                </Link>
                            </li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    )
}
