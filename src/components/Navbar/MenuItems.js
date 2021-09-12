import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function MenuItems() {
    return (
        <ul className="menu">
            <li className='menu__item'>
                <h3 className='nav__item'>Movies</h3>
            </li>
            <li className='menu__item'>
                <FontAwesomeIcon
                    icon={faSearch}
                />
            </li>
            <li className='menu__item'>
                <FontAwesomeIcon
                    icon={faUserAlt}
                />
            </li>
        </ul>
    )
}
