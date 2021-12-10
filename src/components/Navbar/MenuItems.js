import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faFilm, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import PATH from '../../services/paths';
import { Link } from 'react-router-dom';
import { useStore } from '../../services/storage';

export default function MenuItems() {

    const store = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const userExist = store.state.user;
    

    const flipArrow = isOpen ? 'arrowUp' : 'arrowDown';
    const expandMenu = isOpen ? 'optionsOn' : 'optionsOff';

    const toggleDropDownMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(!isOpen)
        }
    }

    useEffect(() => {
        if (isOpen) return document.addEventListener('click', toggleDropDownMenu);
        return () => {
            document.removeEventListener('click', toggleDropDownMenu);
        }
    }, [isOpen, menuRef])


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

                {!userExist
                    ? <li className='menu__item'>
                        <Link to={PATH.LOGIN_PANEL}>
                            <div className="menu__btn">Login</div>
                        </Link>
                    </li>

                    : <li>
                        <div
                            className="menu__user"
                            ref={menuRef}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <h5>Name</h5>
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className={`menu__arrow ${flipArrow}`} />
                        </div>
                        <div className={`menu__overlay ${expandMenu}`}>
                            <ul className='menu__options'>
                                <Link
                                    to={PATH.USER_PANEL}
                                >
                                    <li>
                                        My Profile
                                    </li>
                                </Link>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </li>}                
            </ul>
        </>
    )
}
