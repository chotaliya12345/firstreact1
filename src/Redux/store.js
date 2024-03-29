import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './Action';

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk)) 

    return store;
}