import React, { useState } from 'react';
import './CommentsList.css';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="comments-container">
      <h2>Список комментариев</h2>
      {comments.length === 0 ? (
        <p>Комментариев нет</p>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              {comment.text}
              <button onClick={() => handleDelete(comment.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
