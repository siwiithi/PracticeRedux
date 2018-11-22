import axios from 'axios'
import {
  FETCH_TODO_LIST_REQUEST,
  FETCH_TODO_LIST_SUCCESS,
  FETCH_TODO_LIST_FAILURE,
  ADD_TODO_LIST_REQUEST,
  ADD_TODO_LIST_SUCCESS,
  ADD_TODO_LIST_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from './constants/ActionTypes'

// METHOD: POST
export const addTodo = (text, isCompleted=false) => (dispatch, getState) => {
  dispatch({ type: ADD_TODO_LIST_REQUEST })
  return axios({
    method: 'POST',
    responseType: 'json',
    url: 'http://localhost:3000/todos',
    data: {text, isCompleted},
    
  })
    .then((res) => {
      dispatch({ 
        type: ADD_TODO_LIST_SUCCESS,
        data: res.data 
      })
    })
    .catch((err) => {
      console.log('error', {err})
      dispatch({
        type: ADD_TODO_LIST_FAILURE,
        error: err.error
      })}
    )
}

// METHOD: GET
export const getTodoList = () => (dispatch, getState) => {
  dispatch({ type: FETCH_TODO_LIST_REQUEST })
  return axios({
    method: 'GET',
    responseType: 'json',
    url: 'http://localhost:3000/todos'
  })
    .then((res) => {
      dispatch({
        type: FETCH_TODO_LIST_SUCCESS,
        data: res.data
      })
    })
    .catch(err => 
      dispatch({
        type: FETCH_TODO_LIST_FAILURE,
        error: err.error
      })
    )
}

export const deleteTodo = (id) => (dispatch, getState) => {
  console.log('deleteTodo')
  console.log('url', `http://localhost:3000/todos/${id}`)
  dispatch({ type: DELETE_TODO_REQUEST })
  return axios({
    method: 'DELETE',
    responseType: 'json',
    url: `http://localhost:3000/todos/${id}`
  })
  console.log('url', url)
  .then((res)=> {
    dispatch({
      type: DELETE_TODO_SUCCESS,
      result: res.data
    })
  })
  .catch(err => 
    dispatch({
      type: DELETE_TODO_FAILURE,
      error: err.error
    })
  )
}