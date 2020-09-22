import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer, searchReducer } from '../reducers';

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const middlwares = applyMiddleware(thunk);

const reducers = combineReducers({
	movie: movieReducer,
	search: searchReducer
});

export const store = createStore(reducers, {}, composeEnhancers(middlwares));
