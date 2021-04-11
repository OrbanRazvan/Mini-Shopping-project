import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useShoppingContext } from '../../Provider';
import { auth } from '../../firebase';


const Navbar = () => {

  const [{ indexCart, user }] = useShoppingContext();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <h1>OShop</h1>
      </div>
      <div className="Navbar__component">
        <Link className="Navbar__component__link" to="/" >T-shirt</Link>
        <Link className="Navbar__component__link" to="/shorts" >Shorts</Link>
        <Link className="Navbar__component__link" to="/boots" >Football boots</Link>
      </div>
      <div className="Navbar__cart">
        <div className="Navbar__signIn">
          <Link onClick={handleAuthentication} className="Navbar__sign" id="Navbar__name" to={user ? '/' : '/login'}>{user ? 'Hello, ' + user.email.split("@")[0] : ''}</Link>
          <Link onClick={handleAuthentication} className="Navbar__sign" to={user ? '/' : '/login'}>{user ? 'Sign out' : 'Sign in'}</Link>
        </div>
        <Link className="Navbar__shoppingLink" to="/checkout">
          <ShoppingCartIcon className="Navbar__shoppingCart" />
        </Link>
        <span>{indexCart.length}</span>
      </div>
    </div>
  )
}

export default Navbar;