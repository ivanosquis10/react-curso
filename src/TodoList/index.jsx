import React from 'react';
import './TodoList.css';

function TodoList({
  children,
  error,
  loading,
  searchedTodo,
  totalTodo,
  searchText,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResult,
  render,
}) {
  const renderFuc = render || children;
  return (
    <section className="todo__container">
      {error && onError()}
      {loading && onLoading()}

      {!loading && !totalTodo && onEmptyTodos()}

      {!!totalTodo && !searchedTodo.length && onEmptySearchResult(searchText)}

      {searchedTodo.map(renderFuc)}
    </section>
  );
}

export { TodoList };
