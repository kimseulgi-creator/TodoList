import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todo';
import { Link } from 'react-router-dom';

function TodoCard({ title, todo_contents, changeBtn, todoItem, Complete }) {
  const todoStore = useSelector((state) => state.todo.todo);
  // 카드 삭제
  const dispatch = useDispatch();
  const deleteTodoHandler = (id) => {
    const confirmDelete = window.confirm('해당 To do를 삭제하시겠습니까?');

    if (confirmDelete) {
      const newTodoList = todoStore.filter((todo) => todo.id !== id);
      dispatch(deleteTodo(newTodoList));
    } else {
      return false;
    }
  };

  // 한장의 카드 내용 부분
  return (
    <div className="todo-card">
      <h3>{title}</h3>
      <p>{todo_contents}</p>
      <p>
        <Link to={`/about/${todoItem.id}`}>상세보기</Link>
      </p>
      <div className="card-button">
        <button type="button" onClick={() => Complete(todoItem.id)}>
          {changeBtn}
        </button>
        <button type="button" onClick={() => deleteTodoHandler(todoItem.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
