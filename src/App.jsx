import './reset.css';
import './App.css';
import { useState } from 'react';
import Layout from './components/Layout';
import TodoCard from './components/TodoCard';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const addTodoHandler = () => {
    const newTodo = {
      id: todoList.length + 1,
      title,
      todo,
      isDone: false,
      btnName: 'Complete🎉',
    };
    setTodoList([...todoList, newTodo]);
    setTitle('');
    setTodo('');
  };

  // 카드 삭제
  const deleteTodoHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  // Working -> Done, Done -> Working
  const completeHandler = (id) => {
    const newDoneList = todoList
      .map((list) =>
        list.id === id ? { ...list, isDone: !list.isDone } : list
      )
      .map((list) =>
        list.isDone == true ? { ...list, btnName: 'Unfinished' } : list
      );

    console.log(newDoneList);
    setTodoList(newDoneList);
  };

  return (
    <Layout>
      {/* To do list 입력 부분 */}

      <div className="card-add">
        <label>
          TITLE
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          TO DO
          <input
            value={todo}
            onChange={(event) => {
              setTodo(event.target.value);
            }}
          />
        </label>
        <button onClick={addTodoHandler}>Add</button>
      </div>

      {/* To do list 카드 부분 */}
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
    </Layout>
  );
};

export default App;
