import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { search, setSearch } = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="todo__search"
      placeholder="Search a task..."
      value={search}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
