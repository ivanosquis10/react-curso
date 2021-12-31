import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    // !openModal ? setOpenModal(true) : setOpenModal(false);

    // Otra forma de hacerlo es:
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
