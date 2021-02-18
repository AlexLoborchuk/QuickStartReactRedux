import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

import loginReducer from './reducer/login_reducer';
import userReducer from './reducer/user_reducer';
import commonReducer from './reducer/common_reducer';
import profileReducer from './reducer/profile_reducer';
import authReducer from './reducer/auth_reducer'

let reducers = combineReducers({
	common: commonReducer,
	login: loginReducer,
	profile: profileReducer,
	user_info: userReducer,
	form: formReducer,
	auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;
