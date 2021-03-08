import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allreducers from './Reducers/combinedReducers';
import {Provider} from 'react-redux';
const store = createStore(allreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/*
const increment = (value) =>{
  return {type: 'INCREMENT', payload:value}
}
const decrement = () =>{
  return {type: 'DECREMENT'}
}
const counterReducer = (state=0, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+ action.payload;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}
let store = createStore(counterReducer)
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(increment(5))*/
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
