import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type TodoEmptyProps = { text: string; image: string };

const TodoEmpty: React.FC<TodoEmptyProps> = ({ text, image }) => {
  return (
    <div className="app-todolist-empty">
      <LazyLoadImage
        alt={text}
        src={image}
        loading="lazy"
        effect="blur"
        className="img-fluid app-todolist-empty__image"
      />

      <div className="app-todolist-empty__text">{text}</div>
    </div>
  );
};

export default TodoEmpty;
