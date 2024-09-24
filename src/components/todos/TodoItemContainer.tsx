import * as React from 'react';
import TodoItem from './TodoItem';

type IProps = {
  todos: Todo[];
  onDelete: (todoId: number) => void;
  onCompleted: (todoId: number) => void;
};

const TodoItemContainer: React.FC<IProps> = ({
  todos,
  onDelete,
  onCompleted,
}) => {
  return (
    <>
      <div className="todo-item-container">
        {todos.map((todo, index) => (
          <TodoItem
            key={+index}
            {...todo}
            onDelete={onDelete}
            onCompleted={onCompleted}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItemContainer;
