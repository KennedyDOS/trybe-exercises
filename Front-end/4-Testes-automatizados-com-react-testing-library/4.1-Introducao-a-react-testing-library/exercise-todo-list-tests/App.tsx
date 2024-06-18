import React, { useState } from 'react';
import InputTodo from './exercise-todo-list-ts/src/InputTodo';
import Item from './exercise-todo-list-ts/src/Item';

function App() {
  const [listTodo, setListTodo] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setListTodo((prevState) => [...prevState, todo]);
  };

  const removeTodo = (indexTodo: number) => {
    setListTodo((prevState) => prevState.filter((_, index) => index !== indexTodo));
  };

  return (
    <main className="App">
      <InputTodo addTodo={ addTodo } />
      <ul>
        { listTodo.map((todo, index) => (
          <li key={ index }>
            <Item content={ todo } />
            <button
              type="button"
              onClick={ () => removeTodo(index) }
            >
              Remover
            </button>
          </li>
        )) }
      </ul>
    </main>
  );
}

export default App;
