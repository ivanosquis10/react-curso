import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodo, completedTodo }) {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodo} de {totalTodo} TODOs
    </h2>
  );
}

export { TodoCounter };
