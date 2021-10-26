import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PATH from '../../services/paths';

export default function MenuItems() {
    
    return (
        <ul className="menu">
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
