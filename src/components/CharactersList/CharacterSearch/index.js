import './character-search.css'

const CharacterSearch = ({ search, onChange, onSubmit }) => {
  return (
    <div className="character-list__search" >
      <form onSubmit={onSubmit}>
        <label htmlFor="search" >Buscar por nombre</label>
        <input
          type="search"
          id="search"
          onChange={onChange}
          value={search}
          name="search"
        />
        <button type="submit" >
          buscar
        </button>
      </form>
    </div>
  );
};

export default CharacterSearch;