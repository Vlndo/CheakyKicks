import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px'
        }}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
