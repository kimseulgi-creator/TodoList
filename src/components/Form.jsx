import React from 'react';

function Form({ title, setTitle, todo, setTodo, addTodoHandler }) {
  return (
    <form className="card-add">
      {/* Title 입력부분 */}
      <label>
        TITLE
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>

      {/* Todo 입력부분 */}
      <label>
        TO DO
        <input
          type="text"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
      </label>
      <button type="button" onClick={addTodoHandler}>
        Add
      </button>
    </form>
  );
}

export default Form;
