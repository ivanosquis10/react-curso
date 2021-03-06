import React, { useState } from 'react';
import './form.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="valueForm">Add a TODO</label>
      <textarea
        id="valueForm"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Make a cake..."
      ></textarea>
      <div className="container__btn">
        <button className="btn btn__cancel" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn__add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
