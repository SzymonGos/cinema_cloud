import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faFilm, faUser, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import PATH from '../../services/paths';
import { Link, useHistory } from 'react-router-dom';
import { useStore } from '../../services/storage';

export default function MenuItems() {

    const store = useStore();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const user = store.state.storageUser;

    const flipArrow = isOpen ? 'arrowUp' : 'arrowDown';
    const expandMenu = isOpen ? 'optionsOn' : 'optionsOff';

    const toggleDropDownMenu = (e) => {
        if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen) return window.addEventListener('click', toggleDropDownMenu);
        return () => {
            window.removeEventListener('click', toggleDropDownMenu);
        }
    }, [isOpen, menuRef]);

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

                {user
                    ? <li className='menu__item'>
                        <div
                            className="menu__user"
                            ref={menuRef}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                            />
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                className={`menu__arrow ${flipArrow}`} />
                        </div>
                        <div className={`menu__overlay ${expandMenu}`}>
                            <ul className='menu__options'>
                                <li>
                                    <Link to={PATH.USER_PANEL}>
                                        <p>My Profile</p>

                                    </Link>
                                </li>
                                <li onClick={() => {
                                    store.logout();
                                    setIsOpen(!isOpen);
                                }}>
                                    <p>Logout</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    : <li className='menu__item'>
                        <Link to={PATH.LOGIN_PANEL}>
                            <div className="menu__btn">Login</div>
                        </Link>
                    </li>
                }
            </ul>
        </>
    )
}
