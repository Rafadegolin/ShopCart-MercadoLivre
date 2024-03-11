import React, { useContext } from 'react';
import './CartItem.css';

import { BsCartDashFill } from 'react-icons/bs';

import formatCurrecy from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';

const CartItem = ({ data }) => {

    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
    }

  return (
    <section className='cart-item'>
       <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt='imagem do produto'
        className='cart-item-image'
       />

       <div className='cart-item-content'>
            <h3 className='cart-item-title'>{title}</h3>
            <h3 className='cart-item-price'>{formatCurrecy(price, 'BRL')}</h3>

            <button type='button' className='button__remove-item' onClick={handleRemoveItem}>
                <BsCartDashFill />
            </button>
       </div>
    </section>
  );
};

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object,
}.isRequired;