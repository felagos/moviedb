import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mediaReducer, searchReducer } from '../reducers';

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const middlwares = applyMiddleware(thunk);

const reducers = combineReducers({
	media: mediaReducer,
	search: searchReducer,
});

export const store = createStore(reducers, {}, composeEnhancers(middlwares));
