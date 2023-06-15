import React from 'react';

function TodoCard(props) {
  return (
    <div className="todo-card">
      <h3>{props.title}</h3>
      <p>{props.todo_contents.todo}</p>
      <div className="card-button">
        <button onClick={() => props.Complete(props.todo_contents.id)}>
          {props.changeBtn}
        </button>
        <button onClick={() => props.handleDelete(props.todo_contents.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
