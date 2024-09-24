import React from 'react';
import { FaCheck, FaTrash, FaUndo } from 'react-icons/fa';
import { postedAt } from '../../utils/formattedDate';

type TodoItemProps = {
  onDelete: (todoId: number) => void;
  onCompleted: (todoId: number) => void;
};

type IProps = Todo & TodoItemProps;

const TodoItem: React.FC<IProps> = ({
  id,
  task,
  completed,
  createdAt,
  onDelete,
  onCompleted,
}) => {
  return (
    <>
      <div className="todo-item">
        <div className="todo__info">
          <div
            className={`${
              completed ? ' todo-item__tasks-complete' : 'todo-item__tasks'
            } `}
          >
            {task}
          </div>

          <div className="todo-item__deadline">
            {postedAt({ date: createdAt })}
          </div>
        </div>

        <div className="todo-item__action">
          <button
            onClick={() => onDelete(id ? id : 0)}
            title="Hapus"
            type="button"
            className="btn btn-danger btn-md rounded"
          >
            <FaTrash />
          </button>
          <button
            onClick={() => onCompleted(id ? id : 0)}
            title={`${completed ? 'Tandai belum selesai' : 'Tandai selesai'} `}
            type="button"
            className="btn btn-warning btn-md rounded"
          >
            {completed ? <FaUndo color="fff" /> : <FaCheck color="fff" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
