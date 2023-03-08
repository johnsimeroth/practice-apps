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

  const [terms, setTerms] = useState(defaultTerms);
  // useEffect(() => {getAllTerms()}, []);

  const addTerm = (e) => {
    e.preventDefault();
    console.log(` term: ${e.target.term.value} definition: ${e.target.definition.value}`);
  }

  return (
    <div>
      <h1>MY GLOSSARY</h1>
      <div><AddTermForm handleSubmit={addTerm} handle /></div>
      <div><SearchTerms /></div>
      <div><TermsList terms={terms} /></div>
    </div>
  );
}

export default App;