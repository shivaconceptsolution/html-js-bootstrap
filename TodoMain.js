import React from 'react';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';

import rootReducer from './Reduxnew/reducers/rootReducers';
import Todo from './Reduxnew/views/Todo';
const store = createStore(rootReducer);
const TodoMain = () => (
<Provider store={store}>
<Todo />
</Provider>
);
export default TodoMain;