import React, { useCallback, useRef } from 'react';
import { todoApi } from '../store';
import { Todo } from '../models';

export default function Home() {
  const { data: todos } = todoApi.useGetAllQuery();
  const [updateTodo] = todoApi.useUpdateTodoMutation();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();
  const [addTodo] = todoApi.useAddTodoMutation();

  const onToggle = useCallback(
    (todo: Todo) => updateTodo({ ...todo, done: !todo.done }),
    [updateTodo]
  );

  const onDelete = useCallback((todo: Todo) => deleteTodo(todo), [deleteTodo]);

  const textRef = useRef<HTMLInputElement>(null);

  const onAdd = useCallback(
    () => addTodo(textRef.current!.value ?? ''),
    [addTodo]
  );

  return (
    <div className="h-screen">
      <main className="h-full flex justify-center items-center p-40">
        <div className="todos">
          {todos?.map((todo) => (
            <React.Fragment key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => onToggle(todo)}
                />
                <span>{todo.text}</span>
              </div>
              <button onClick={() => onDelete.bind(null, todo)}>Delete</button>
            </React.Fragment>
          ))}
        </div>
        <div className="add">
          <input type="text" ref={textRef} />
          <button onClick={onAdd}>Add</button>
        </div>
      </main>
    </div>
  );
}
