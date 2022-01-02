import React from 'react';
import { useTodos } from '../customHooks/useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function App() {
  const {
    error,
    loading,
    searchedTodo,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodo,
    completedTodo,
    search,
    setSearch,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodo={totalTodo} completedTodo={completedTodo} />

        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodo.length && <EmptyTodos />}

        {searchedTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* EXISTE OPEN MODAL? true => muestra */}
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
