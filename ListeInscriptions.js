import React, { useState, useEffect } from 'react';

const ListeInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('votre_url_de_l_api')
      .then(response => response.json())
      .then(data => setInscriptions(data))
      .catch(error => console.error('Erreur lors de la récupération des inscriptions:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInscriptions = inscriptions.filter((inscription) =>
    inscription.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par ville"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredInscriptions.map((inscription, index) => (
          <li key={index}>
            {inscription.ville} - {inscription.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeInscriptions;
