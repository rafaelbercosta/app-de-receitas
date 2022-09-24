import React, { useState } from 'react';
import storage from '../services/Storage';

const MINIMUM_PASSWORD_LENGTH = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setFunctions = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = ({ target }) => {
    setFunctions[target.name](target.value);
  };

  const handleClick = () => {
    storage('user', { email });
    storage('mealsToken', 1);
    storage('drinksToken', 1);
  };

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isDisabled = password.length <= MINIMUM_PASSWORD_LENGTH
  || !emailRegex.test(email);

  return (
    <section>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </section>
  );
}

export default Login;
