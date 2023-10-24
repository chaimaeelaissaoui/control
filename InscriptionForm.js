import React, { useState } from 'react';

const Autocomplete = ({ suggestions, handleChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleChange(e);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestions
          .filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
