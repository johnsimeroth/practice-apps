import React from 'react';
const { useState, useEffect } = React;
import { Outlet, Link } from 'react-router-dom';

const Form2 = () => {



  return (
    <div>
      <h2>Welcome to form2 brah</h2>
      <button><Link to={'/forms/form1'}>Checkout</Link></button>
    </div>
  )
}

export default Form2;