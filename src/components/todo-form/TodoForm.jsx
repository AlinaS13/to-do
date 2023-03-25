import { useContext } from 'react';
import { Button, Input, FormWrap } from './TodoForm.styled';
import { TodoContext } from 'App';
import { nanoid } from 'nanoid';
import AddSVG from 'assest/addSVG';

export const TodoForm = () => {
  const { setTodo } = useContext(TodoContext);
  const handleSubmit = event => {
    event.preventDefault();
    const todo = event.target.elements.name.value;
    setTodo(prevTodo => [
      ...prevTodo,
      {
        text: todo,
        id: nanoid(),
      },
    ]);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrap>
        <AddSVG></AddSVG>
        <Input
          type="text"
          name="name"
          required
          //   defaultValue={}
        />
        <Button type="submit">Add todo</Button>
      </FormWrap>
    </form>
  );
};
