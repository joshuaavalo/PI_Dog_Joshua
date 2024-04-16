import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // Llamar a la función de búsqueda del componente padre
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre de raza..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;