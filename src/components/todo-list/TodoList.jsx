import { useContext } from 'react';
import { TodoContext } from '../../App';

export const TodoList = () => {
  const context = useContext(TodoContext);
  console.log(context.todo);
  return (
    <ul>
      {context.todo.map(({ id, text }) => (
        <li key={id}>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};
