import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const myLogger = store => next => action => {
    console.log('%cCurrentState:', 'color:cyan;', store.getState());
    console.log('%cAction:', 'color:crimson;', action);
    next(action);
    console.log('%cnewState:', 'color:lime;', store.getState());
};

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(myLogger);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;