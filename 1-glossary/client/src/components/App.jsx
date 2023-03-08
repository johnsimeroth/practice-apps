import React from 'react';
import { useState, useEffect } from 'react';
import AddTermForm from './AddTermForm.jsx';
import SearchTerms from './SearchTerms.jsx';
import TermsList from './TermsList.jsx';

const defaultTerms = ['word1', 'word2', 'word3'];

const App = () => {


  return (
    <div>
      <div><AddTermForm /></div>
      <div><SearchTerms /></div>
      <div><TermsList terms={defaultTerms} /></div>
    </div>
  );
}

export default App;