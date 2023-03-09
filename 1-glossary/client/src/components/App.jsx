import React from 'react';
import { useState, useEffect } from 'react';
import AddTermForm from './AddTermForm.jsx';
import SearchTerms from './SearchTerms.jsx';
import TermsList from './TermsList.jsx';
import { getTerms, postTerm, putTerm } from './requestHandler.js';





const App = () => {


  // STATES AND EFFECTS

  const [terms, setTerms] = useState([]);
  const [displayedTerms, setDisplayedTerms] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  useEffect(() => {displayTerms()}, [terms, searchVal])
  useEffect(() => {getTerms().then(updateTermsList)}, []);


  // HELPER FUNCTIONS

  const updateTermsList = (res) => (setTerms(res.data));


  const displayTerms = () => {
    const newDisplayedTerms = terms.filter(term => term.name.includes(searchVal));
    setDisplayedTerms(newDisplayedTerms);
  }


  // EVENT HANDLERS

  const addTerm = (e) => {
    e.preventDefault();
    const newTerm = {
      name: e.target.term.value,
      definition: e.target.definition.value
    }
    postTerm(newTerm)
      .then(updateTermsList)
      .catch(err => console.log('error adding term: ' + err));
    e.target.reset();
  }


  const editTerm = (e, term) => {
    let updatedTerm = {...term};
    updatedTerm.name = prompt('Edit the term name: ', term.name);
    updatedTerm.definition = prompt('Edit the definition: ', term.definition);
    putTerm(updatedTerm)
      .then(updateTermsList)
      .catch(err => console.log('error updating term: ' + err));
  }


  // JSX ELEMENT TO RETURN

  return (
    <div>
      <h1>MY GLOSSARY</h1>
      <div><AddTermForm handleSubmit={addTerm} /></div>
      <div><SearchTerms searchVal={searchVal} handleChange={(e) => (setSearchVal(e.target.value))} /></div>
      <div><TermsList terms={displayedTerms} handleEdit={editTerm}/></div>
    </div>
  );
}

export default App;