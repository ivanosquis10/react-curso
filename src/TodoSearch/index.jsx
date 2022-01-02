import React from 'react';
import './TodoSearch.css';

function TodoSearch({ search, setSearch }) {
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
