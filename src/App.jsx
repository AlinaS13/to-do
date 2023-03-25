import { Wrap } from 'App.styled';
import { NavBar } from 'components/header/header';
import { Section } from 'components/section';
import { TodoForm } from 'components/todo-form';
import { TodoList } from 'components/todo-list/TodoList';
import { createContext, useState } from 'react';

export const TodoContext = createContext();
export const App = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <NavBar />
      <Section title="Todo List">
        <TodoContext.Provider value={{ todo, setTodo }}>
          <Wrap>
            <TodoForm />
            <TodoList />
          </Wrap>
        </TodoContext.Provider>
      </Section>
    </div>
  );
};
