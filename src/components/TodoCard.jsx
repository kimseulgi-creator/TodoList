import React from 'react';

function TodoCard({ title, todo_contents, changeBtn, Complete, handleDelete }) {
  // 한장의 카드 내용 부분
  return (
    <div className="todo-card">
      <h3>{title}</h3>
      <p>{todo_contents.todo}</p>
      <div className="card-button">
        <button type="button" onClick={() => Complete(todo_contents.id)}>
          {changeBtn}
        </button>
        <button type="button" onClick={() => handleDelete(todo_contents.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
