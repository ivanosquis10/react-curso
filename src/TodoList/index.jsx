import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul className="todo__container">{props.children}</ul>
    </section>
  );
}

export { TodoList };
