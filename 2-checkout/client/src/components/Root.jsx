// this is basically my app.jsx file, renamed for the multi page router style

import React from 'react';
const { useState, useEffect } = React;
import { Outlet, Link } from 'react-router-dom';
import Home from './Home.jsx';

const Root = () => {

  return (
    <div>
      {/* TODO: add a fake nav bar or something here that's consistent across sub-routes */}
      <h1>say something</h1>
      <Outlet />
    </div>
  )
}

export default Root;