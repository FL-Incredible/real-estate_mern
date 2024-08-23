import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import homeReducer from './reducers/home';
import authReducer from './reducers/auth';
import landReducer from './reducers/lands';

// combine all the above reducers to the store
const reducer = combineReducers({
	homes: homeReducer,
	auth: authReducer,
	lands: landReducer,
});

const initialState = {
	homes: []
};

// user redux thunk for making async calls
// const middleware = [thunk];

// create the redux store
const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
