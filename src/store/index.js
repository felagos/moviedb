import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { genreReducer, movieReducer } from '../reducers';

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const middlwares = applyMiddleware(thunk);

const reducers = combineReducers({
	genre: genreReducer,
	movie: movieReducer
});

export const store = createStore(reducers, {}, composeEnhancers(middlwares));
