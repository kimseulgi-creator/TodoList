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

  // 카드 add 부분
  const addTodoHandler = () => {
    const newTodo = {
      id: new Date(),
      title,
      todo,
      isDone: false,
      btnName: 'Complete🎉',
    };

    // 유효성 검사
    if (title === '') {
      alert('제목을 입력하세요.');
      return false;
    }
    if (todo === '') {
      alert('To do 내용을 입력하세요.');
      return false;
    }

    setTodoList([...todoList, newTodo]);
    setTitle('');
    setTodo('');
  };

  // 카드 삭제
  const deleteTodoHandler = (id) => {
    const confirmDelete = window.confirm('해당 To do를 삭제하시겠습니까?');
    if (confirmDelete) {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    } else {
      return false;
    }
  };

  // Working -> Done, Done -> Working
  const completeHandler = (id) => {
    const newDoneList = todoList
      .map((list) =>
        list.id === id ? { ...list, isDone: !list.isDone } : list
      )
      .map((list) =>
        list.isDone === true
          ? { ...list, btnName: 'Unfinished' }
          : { ...list, btnName: 'Complete🎉' }
      );

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
