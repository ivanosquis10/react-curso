import React from 'react';
import './loading.css';

const TodosLoading = () => {
  return (
    <div className="loading__container">
      {/* <span className="LoadingTodo-completeIcon"></span> */}
      <p className="loading__text">Cargando TODOs...</p>
      {/* <span className="LoadingTodo-deleteIcon"></span> */}
    </div>
  );
};

export { TodosLoading };
