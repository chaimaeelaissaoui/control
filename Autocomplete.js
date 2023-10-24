
import React  from 'react';
const Autocomplete = ({ suggestions, handleChange }) => {
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
