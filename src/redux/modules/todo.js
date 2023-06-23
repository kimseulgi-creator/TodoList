const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const TOGGLE_TODO = 'todo/TOGLE_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// 초기 상태값(state)
const initialState = {
  todo: [],
};

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        todo: action.payload,
      };
    case TOGGLE_TODO:
      return {
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default todo;
