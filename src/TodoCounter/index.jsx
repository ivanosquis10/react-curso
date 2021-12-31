import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodo, completedTodo } = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completedTodo} de {totalTodo} TODOs
    </h2>
  );
}

export { TodoCounter };
