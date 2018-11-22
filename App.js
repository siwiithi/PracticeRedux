import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import getTodoListReducer from './src/reducer'
import TodoListContainer from './src/todoList'
import {name as PracticeRedux} from './app.json';
import thunk from 'redux-thunk';

const store = createStore(getTodoListReducer, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <TodoListContainer />
  </Provider>
)

AppRegistry.registerComponent(PracticeRedux, () => App)