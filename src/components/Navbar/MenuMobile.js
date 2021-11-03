import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../services/storage';

export default function MenuMobile() {

  const store = useStore();
  const menu = store.state.isMenuOpen;
  
  const isMenuOpen = menu ? "menu__overlay-mobile" : "menu__overlay-mobile--hide";
  return (
    <section className={`${isMenuOpen}`}>
      <div className="btn-close">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => store.toggleMobileMenu(false)}
        />
      </div>
    </section>
  )
}
