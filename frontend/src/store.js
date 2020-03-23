import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const INITIALSTATE = {};

const MIDDLEWARE = [thunk];

const store = createStore(
    rootReducer,
    INITIALSTATE,
    composeWithDevTools(applyMiddleware(...MIDDLEWARE))
);

export default store;