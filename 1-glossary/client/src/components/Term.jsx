import React from 'react';

const Term = ({term}) => {


  return (
    <li>
      <div>
        <h2>{term.name}</h2>
        <h4>{term.definition}</h4>
      </div>
      <button>Edit</button>
    </li>
  );
}

export default Term;