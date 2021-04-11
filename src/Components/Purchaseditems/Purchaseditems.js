import React from 'react';
import { useShoppingContext } from '../../Provider';
import './Purchaseditems.css';

const Purchaseditems = ({ id, title, category, price, image }) => {

  const [{ indexCart }, dispatch] = useShoppingContext();

  const RemoveItem = () => {
    dispatch({ type: 'REMOVE_TO_CART', item: { id: id } });
  };

  return (
    <div className="container__items">
      <div className="Purchased__items">
        <img className="Purchased__img" src={image} alt="" />
        <div className="Right__information">
          <h1 className="Purchased__title">{title}</h1>
          <p className="Purchased__category">{category}</p>
          <div className="Purchased__price">
            <strong>{price}</strong>
            <small>$</small>
          </div>
          <button onClick={RemoveItem} className="Purchased__button">Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Purchaseditems;