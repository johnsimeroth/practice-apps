import React from 'react';
import Term from './Term.jsx';

const TermsList = ({terms}) => {


  return (
    <ul>
      {terms.map(term => <Term term={term} />)}
    </ul>
  );
}

export default TermsList;