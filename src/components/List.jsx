import React from 'react';
import TodoCard from './TodoCard';

function List({ todoList, deleteTodoHandler, completeHandler }) {
  return (
    <section className="cards">
      {/* workig 카드 부분 */}
      <div className="working">
        <h2>Working</h2>
        <div className="wrap">
          {todoList
            .filter((trueList) => trueList.isDone === false)
            .map((todo) => {
              return (
                <TodoCard
                  key={todo.id}
                  title={todo.title}
                  todo_contents={todo}
                  handleDelete={deleteTodoHandler}
                  Complete={completeHandler}
                  changeBtn={todo.btnName}
                />
              );
            })}
        </div>
      </div>

      {/* Done 카드 부분 */}
      <div className="done">
        <h2>Done</h2>
        <div className="wrap">
          {todoList
            .filter((trueList) => trueList.isDone === true)
            .map((todo) => {
              return (
                <TodoCard
                  key={todo.id}
                  title={todo.title}
                  todo_contents={todo}
                  handleDelete={deleteTodoHandler}
                  Complete={completeHandler}
                  changeBtn={todo.btnName}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default List;
