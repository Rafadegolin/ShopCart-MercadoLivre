import React, { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(AppContext)

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <input 
        type='search' 
        value={searchValue}
        placeholder='Buscar produtos' 
        className='search__input' 
        required 
        onChange={(e) => setSearchValue(e.target.value)} 
      />
      
      <button type='submit' className='search__button'> 
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;