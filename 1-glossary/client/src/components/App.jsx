import React from 'react';
import { useState, useEffect } from 'react';
import AddTermForm from './AddTermForm.jsx';
import SearchTerms from './SearchTerms.jsx';
import TermsList from './TermsList.jsx';

const defaultTerms = [
  {name: 'word1', definition: 'def1'},
  {name: 'word2', definition: 'def2'},
  {name: 'word3', definition: 'def3'},
];

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