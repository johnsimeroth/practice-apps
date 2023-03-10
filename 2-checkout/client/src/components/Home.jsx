import React from 'react';
const { useState, useEffect } = React;
import { Outlet, Link } from 'react-router-dom';

const Home = () => {



  return (
    <div>
      <h2>Your cart:</h2>
      <h4>Item: Roast Beef Sandwich QTY: 1</h4>
      <h4>Total Price: $8,742,685,425.74 </h4>
      {/* <button onClick={(e) => handleClick(e, 'form1')}><Link to={}>Checkout</Link></button> */}
      <button><Link to={'forms/form1'}>Checkout</Link></button>
    </div>
  )
}

export default Home;