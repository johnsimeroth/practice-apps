import React from 'react';
import { useState, useEffect } from 'react';
import AddTermForm from './AddTermForm.jsx';
import SearchTerms from './SearchTerms.jsx';

const App = () => {


  return (
    <div>
      <div><AddTermForm /></div>
      <div><SearchTerms /></div>
    </div>
  );
}

export default App;