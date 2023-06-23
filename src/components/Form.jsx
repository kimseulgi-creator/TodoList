import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todo';
import uuid from 'react-uuid';

function Form() {
  // const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch(); // dispatch 생성

  const newTodo = {
    id: uuid(),
    title,
    todo,
    isDone: false,
    btnName: 'Complete🎉',
  };
  const onClickAddTodoHandler = () => {
    // 유효성 검사
    if (title === '') {
      alert('제목을 입력하세요.');
      return false;
    }
    if (todo === '') {
      alert('To do 내용을 입력하세요.');
      return false;
    }

    dispatch(addTodo(newTodo));
    setTitle('');
    setTodo('');
  };

  return (
    // 카드 add 부분
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
      <button type="button" onClick={onClickAddTodoHandler}>
        Add
      </button>
    </form>
  );
}

export default Form;
