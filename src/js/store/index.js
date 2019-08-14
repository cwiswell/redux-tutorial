import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';
import thunk from 'redux-thunk';

// used to make it work with redux devtools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;