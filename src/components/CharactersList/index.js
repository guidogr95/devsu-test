import { useEffect, useState } from 'react';
// utils
import axios from 'axios';
// components
import CharacterSearch from './CharacterSearch';
import CharactersContainer from './CharactersContainer';
import CharacterListPagination from './CharacterListPagination';
// styles
import './character-list.css';

const apiUrl = 'https://rickandmortyapi.com/api/character';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({
    prev: null,
    next: null
  })
  const { prev, next } = paginationInfo;
  const [search, setSearch] = useState('');

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  }

  const fetchCharacters = (name) => {
    axios.get(`${apiUrl}${name ? `?name=${encodeURI(name)}` : ''}`)
    .then(res => {
      setPaginationInfo({
        prev: res.data.info.prev,
        next: res.data.info.next
      })
      setCharacters(Array.from(res.data.results));
    })
    .catch(err => {
      setPaginationInfo({
        prev: null,
        next: null
      })
      setCharacters([])
    });;
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const trimmedSearch = search.trim();

    if (trimmedSearch.length > 2) {
      fetchCharacters(search);
    } else if (trimmedSearch.length === 0) {
      fetchCharacters();
    }
  }

  const fetchPage = (url) => {
    return axios.get(url)
  }

  const handlePagination = (to) => {
    fetchPage(paginationInfo[to])
    .then(res => {
      setPaginationInfo({
        prev: res.data.info.prev,
        next: res.data.info.next
      })
      setCharacters(Array.from(res.data.results));
    })
    .catch(err => {
      setPaginationInfo({
        prev: null,
        next: null
      })
      setCharacters([])
    });
  }

  useEffect(() => {
    async function initFetch() {
      fetchCharacters()
    }

    initFetch();
  }, [])

  return (
    <div className="characters-list" >
      <CharacterSearch
        value={search}
        onChange={handleSearchInput}
        onSubmit={handleSubmit}
      />
      <CharactersContainer characters={characters} />
      <CharacterListPagination
        handlePagination={handlePagination}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default CharactersList;