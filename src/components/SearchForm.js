import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function SearchForm() {
    return (
        <div className="icon-group">
            <span className='icon-group__item'>
            <FontAwesomeIcon 
            icon={faSearch}             
            />
            </span>
            <span className='icon-group__item'>
            <FontAwesomeIcon 
            icon={faUserAlt}             
            />
            </span>
        </div>
    )
}
