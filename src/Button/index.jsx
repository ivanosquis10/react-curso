import React from 'react';
import { Modal } from '../Modal';
import './Button.css';

const Button = ({ toggleShow }) => {
  return (
    <Modal>
      <div className="Button">
        <h3>Al parecer hay cambios</h3>
        <p> ¿te gustaria refrescar?</p>
        <button onClick={() => toggleShow(false)}>Refrescar</button>
      </div>
    </Modal>
  );
};

export { Button };
