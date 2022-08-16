import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.scss'
import './app.css'
import { App } from './Pages'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import rootReducer from "./reducers";
// import { legacy_createStore, applyMiddleware } from 'redux';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = legacy_createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk))
// );

ReactDOM.render(
        <App />
    ,
    document.getElementById('root'));

