import React from 'react';
import Term from './Term.jsx';

const TermsList = ({terms, handleEdit}) => {


  return (
    <ul>
      {terms.map(term => <Term key={term._id} term={term} handleEdit={handleEdit} />)}
    </ul>
  );
}

export default TermsList;