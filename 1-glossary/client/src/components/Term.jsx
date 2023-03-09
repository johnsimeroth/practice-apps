import React from 'react';

const Term = ({term, handleEdit}) => {


  return (
    <li>
      <div>
        <h2>{term.name}</h2>
        <h4>{term.definition}</h4>
      </div>
      <button onClick={(e) => handleEdit(e, term)}>Edit</button>
    </li>
  );
}

export default Term;