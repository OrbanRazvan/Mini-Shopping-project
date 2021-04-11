import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(auth => {
      history.push('/');
    }).catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then(auth => {
      if (auth) {
        history.push('/');
      }
    }).catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link className="login__logo" to="/home">
        <h1>OShop</h1>
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={signIn} type="submit" className="login__singInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to OShop`s Conditions of Use & Sale
        </p>
        <button onClick={register} className="login__registerButton">Create your OShop account</button>
      </div>
    </div>
  )
}

export default Login;