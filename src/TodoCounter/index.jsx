import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodo, completedTodo, loading }) {
  return (
    <h2 className={`todo__counter ${loading && 'todo__counter--loading'}`}>
      Has completado {completedTodo} de {totalTodo} TODOs
    </h2>
  );
}

export { TodoCounter };
