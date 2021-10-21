import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../services/storage';

export default function SearchForm() {

    const store = useStore()
    const isModalOpen = store.state.isOpen;
    const [focused, setFocused] = useState(null);

    const toggle = focused ? "form form--active" : "form form--inactive"
    const isActive = (focused == null) ? "form" : toggle;
    const isOpen = isModalOpen ? "overlay" : "overlay hidden";

    return (
        <section className={`${isOpen}`}>
            <form
                autoComplete='off'
                className={`${isActive}`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            >
                <input
                    type="text"
                    placeholder='Look for movies...'
                    className='form__input'

                />
            </form>
            <div
                className='btn-close'
                onClick={() => store.toggleModal()}
            >
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </section>
    )
}