import './reset.css';
import './App.css';
import { useState } from 'react';
import Layout from './components/Layout';
import List from './components/List';
import Form from './components/Form';

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
        list.isDone == true
          ? { ...list, btnName: 'Unfinished' }
          : { ...list, btnName: 'Complete🎉' }
      );

    console.log(newDoneList);
    setTodoList(newDoneList);
  };

  return (
    <Layout>
      {/* To do list 입력 부분 */}
      <Form
        title={title}
        setTitle={setTitle}
        todo={todo}
        setTodo={setTodo}
        addTodoHandler={addTodoHandler}
      />

      {/* To do list 카드 부분 */}
      <List
        todoList={todoList}
        deleteTodoHandler={deleteTodoHandler}
        completeHandler={completeHandler}
      />
    </Layout>
  );
};

export default App;
