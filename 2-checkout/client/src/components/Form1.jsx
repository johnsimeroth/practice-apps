import React from 'react';
const { useState, useEffect } = React;
import { Outlet, Link } from 'react-router-dom';

const Form1 = () => {



  return (
    <form>
      <h1>Please create an account to continue</h1>
      <h5>you know, just so we can get our hooks into you</h5>
      <label>
        Full name
        <input type="text" name="name" required={true} />
      </label>
      <label>
        Email address
        <input type="email" name="email" required={true} />
      </label>
      <label>
        Create a password
        <input type="password" name="password1" required={true} />
      </label>
      <label>
        Confirm your password
        <input type="password" name="password2" required={true} />
      </label>
      <h2>Welcome to form1 baby</h2>
      <button type="submit"><Link to={'/forms/form2'}>next</Link></button>
    </form>
  )
}

export default Form1;