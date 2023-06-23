import React from 'react';
import TodoCard from './TodoCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../redux/modules/todo';
import { styled } from 'styled-components';

const CdBox = styled.section`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const WkBox = styled.div`
  margin-bottom: 100px;

  &.working h2 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #525b76;
  }

  &.working a {
    text-decoration: underline;
  }

  & hr {
    margin-bottom: 30px;
  }
`;

const DnBox = styled.div`
  margin-bottom: 70px;

  &.done h2 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #525b76;
  }
  &.done a {
    text-decoration: underline;
  }
  & hr {
    margin-bottom: 30px;
  }
`;
function List({ setTodoList }) {
  const dispatch = useDispatch();
  const todoStore = useSelector((state) => state.todo.todo);
  const completeHandler = (id) => {
    const newDoneList = todoStore
      .map((list) =>
        list.id === id ? { ...list, isDone: !list.isDone } : list
      )
      .map((list) =>
        list.isDone
          ? { ...list, btnName: 'Unfinished' }
          : { ...list, btnName: 'Complete🎉' }
      );
    dispatch(toggleTodo(newDoneList));
  };
  // Working -> Done, Done -> Working

  return (
    <CdBox className="cards">
      {/* workig 카드 부분 */}
      <WkBox className="working">
        <h2>Working</h2>
        <hr />
        <div className="wrap">
          {todoStore
            .filter((trueList) => trueList.isDone === false)
            .map((todoItem) => {
              return (
                <TodoCard
                  key={todoItem.id}
                  title={todoItem.title}
                  todoItem={todoItem}
                  setTodoList={setTodoList}
                  todo_contents={todoItem.todo}
                  Complete={completeHandler}
                  changeBtn={todoItem.btnName}
                />
              );
            })}
        </div>
      </WkBox>

      {/* Done 카드 부분 */}
      <DnBox className="done">
        <h2>Done</h2>
        <hr />
        <div className="wrap">
          {todoStore
            .filter((trueList) => trueList.isDone === true)
            .map((todoItem) => {
              return (
                <TodoCard
                  key={todoItem.id}
                  title={todoItem.title}
                  todoItem={todoItem}
                  todo_contents={todoItem.todo}
                  Complete={completeHandler}
                  changeBtn={todoItem.btnName}
                />
              );
            })}
        </div>
      </DnBox>
    </CdBox>
  );
}

export default List;
