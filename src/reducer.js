import {
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAILURE,
  ADD_TODO_LIST_SUCCESS,
  ADD_TODO_LIST_FAILURE,
  DELETE_TODO_SUCCESS
} from './constants/ActionTypes'

const initialState = {
  todos: [{
    text: '',
    isCompleted: false
  }]
}

const getTodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.data
        ]
      }
    case FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        todos: action.data.map((item) => ({
          id: item.id,
          isCompleted: item.isCompleted,
          text: item.text
        }))
      }
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [
          ...state.todos
        ]
    }
    default: {
      return state
    }
  }
}

export default getTodoListReducer