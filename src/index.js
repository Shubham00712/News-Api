import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import news from './reducer';


const thunk=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action ==='function'){
    action(dispatch)
    return
  }
  next(action)
}

const store=createStore(news,applyMiddleware(thunk));
console.log(store)

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);