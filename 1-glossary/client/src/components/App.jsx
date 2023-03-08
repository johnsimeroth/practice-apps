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
  const [displayedTerms, setDisplayedTerms] = useState(defaultTerms);
  const [searchVal, setSearchVal] = useState('');
  useEffect(() => {displayTerms()}, [terms, searchVal])
  // useEffect(() => {getAllTerms()}, []);

  const addTerm = (e) => {
    e.preventDefault();
    const newTerm = {
      name: e.target.term.value,
      definition: e.target.definition.value
    }
    setTerms([...terms, newTerm]);
    e.target.reset();
  }

  const displayTerms = () => {
    const newDisplayedTerms = terms.filter(term => term.name.includes(searchVal));
    setDisplayedTerms(newDisplayedTerms);
  }

  return (
    <div>
      <h1>MY GLOSSARY</h1>
      <div><AddTermForm handleSubmit={addTerm} /></div>
      <div><SearchTerms searchVal={searchVal} handleChange={(e) => (setSearchVal(e.target.value))} /></div>
      <div><TermsList terms={displayedTerms} /></div>
    </div>
  );
}

export default App;