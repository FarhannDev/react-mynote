import React from 'react';

type IProps = { heading: string };

const TodoHeading: React.FC<IProps> = ({ heading }) => (
  <h1 className="todo-heading">{heading}</h1>
);
export default TodoHeading;
