import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoppingContext } from '../../Provider';
import { SubtotalCartItem, TotalCartItem } from '../../reducer';
import Purchaseditems from '../Purchaseditems/Purchaseditems';
import './Checkout.css';
import BgImg from '../../Images/background.jpg';

const Checkout = ({ id, title, category, price, image }) => {

  const [{ indexCart, user }, dispatch] = useShoppingContext();
  const [active, setActive] = useState(false);

  const RemoveAll = () => {
    dispatch({ type: 'REMOVE_TO_CART', item: { id: id = 0 } })
  }

  const changeEmoji = () => {
    setActive(!active);
  };

  return (
    <div className="checkout">
      {indexCart?.length === 0 ? (
        <div className="checkout__empty">
          <img src={BgImg} alt="/" />
          <div className="Cart__empty__message">
            <h1>Your Cart is empty, you are not a true football fan {active ? (
              <strong className="emoji">🤙</strong>
            ) : (
              <strong className="emoji">😥 </strong>
            )}</h1>
          </div>
          <div className="checkout__empty__message">
            <h1 className="checkout__empty__message__h1">Your favorite teams are just a click away</h1>
            <Link to="/">
              <button onMouseLeave={changeEmoji} onMouseEnter={changeEmoji} className="checkout__button">Continue Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="checkout__items">
          <div className="checkout__left">
            <h3 className="user__auth">{user ? 'Hello, ' + user.email.split("@")[0] : ''}</h3>
            {indexCart.map((item, key) => (
              <Purchaseditems key={key} id={item.id} title={item.title} category={item.category} price={item.price} image={item.image} />
            ))}
          </div>
          <div className="checkout__right__container">
            <div className="checkout__right">
              <p >Subtotal ({indexCart.length} items):<strong>${SubtotalCartItem(indexCart)}</strong></p>
              <p> Your Discount ticket: <strong>5%</strong></p>
              <p> Total: <strong>${TotalCartItem(indexCart)}</strong> </p>
            </div>
            <div className="checkout__continue">
              <Link to="/">
                <button className="checkout__right__button">Continue Shopping</button>
              </Link>
              <Link to="/">
                <button onClick={RemoveAll} className="remove__all">Remove all</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout;