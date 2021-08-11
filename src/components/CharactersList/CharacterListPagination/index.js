import React from 'react';

const CharacterListPagination = ({ handlePagination, next, prev }) => {
  return (
    <div className="character-list__pagination" >
      { prev && <button onClick={() => handlePagination('prev')}>Anterior</button> }
      { next && <button onClick={() => handlePagination('next')}>Siguiente</button> }
    </div>
  );
};

export default CharacterListPagination;