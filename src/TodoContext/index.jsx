import { createContext, useState } from 'react';
import { useLocalStorage } from '../customHooks/useLocalStorage';
import { TodosError } from '../TodosError';

const TodoContext = createContext();

function TodoProvider(props) {
  // Usaremos nuestro custom hook para manejar el storage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const totalTodo = todos.length;
  // Metodo para filtrar toDos
  const completedTodo = todos.filter((todo) => todo.completed).length;

  let searchedTodo = [];

  if (!search.length >= 1) {
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];

    if (text === '') {
      return alert('Ingrese una tarea por favor shi!');
    }

    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  // Metodo para marcar como completado
  const completeTodos = (text) => {
    // Vamos a encontrar el index dentro del array de todos del todo que tenga text
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    // Creamos un nuevo array
    const newTodos = [...todos];

    // Le asignamos el nuevo valor al array
    newTodos[todoIndex].completed = true;

    // Y actualizamos el estado con el nuevo arreglo
    saveTodos(newTodos);
  };

  // Metodos para eliminar todos
  const deleteTodo = (text) => {
    // Vamos a encontrar el index dentro del array de todos del todo que tenga text
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    // Creamos un nuevo array
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    // Y actualizamos el estado con el nuevo arreglo
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodo,
        completedTodo,
        search,
        setSearch,
        searchedTodo,
        addTodo,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
