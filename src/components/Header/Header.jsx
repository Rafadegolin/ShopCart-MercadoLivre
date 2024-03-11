import React from 'react';
import './Header.css';

// Components
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>

        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;