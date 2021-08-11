// component
import Character from '../Character';
// styles
import './characters-container.css';

const CharactersContainer = ({ characters }) => {
  return (
    <div className="characters-container" >
      { characters.length > 0 
        ? characters.map(character => <Character key={character.id} {...character} />)
        : <h2>No existen personajes que coincidan con el criterio</h2>
      }
    </div>
  );
};

export default CharactersContainer;