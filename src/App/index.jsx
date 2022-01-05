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
import { ChangeAlertWithStorageListener } from '../ChangeAlert';

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
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodo={totalTodo} completedTodo={completedTodo} />

        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodo={searchedTodo}
        searchText={search}
        totalTodo={totalTodo}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={(searchText) => (
          <p> No hay resultados para {searchText} </p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {/* {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList> */}
      {/* EXISTE OPEN MODAL? true => muestra */}
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
