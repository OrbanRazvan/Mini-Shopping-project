import React from 'react';
import './Items.css';
import { useShoppingContext } from '../../Provider';


const Items = ({ id, title, category, price, image }) => {

  const [{ indexCart }, dispatch] = useShoppingContext();

  const AddCart = () => {
    dispatch({ type: 'ADD_TO_CART', item: { id: id, title: title, category: category, price: price, image: image } })
  };

  return (
    <div className="Items">
      <h1 className="Items__title">{title}</h1>
      <p className="Items__category">{category}</p>
      <img className="Items__img" src={image} alt="" />
      <div className="Items__price">
        <strong>{price}</strong>
        <small>$</small>
      </div>
      <button onClick={AddCart} className="item__button">Add Cart</button>
    </div>
  )
}

export default Items;