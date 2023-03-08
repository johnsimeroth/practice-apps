import React from 'react';

const AddTermForm = () => {


  return (
  <form>
    <input type="text" name="term" className="add-term" required="true" placeholder="Enter a new term" />
    <input type="text" name="definition" className="add-term" required="true" placeholder="...and its meaning" />
    <button type="submit">Add!</button>
  </form>
  );
}

export default AddTermForm;