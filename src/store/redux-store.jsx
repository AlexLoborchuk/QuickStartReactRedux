import {createStore, combineReducers} from 'redux';
import loginReducer from './reducer/login_reducer';
import userReducer from './reducer/user_reducer'
import commonReducer from './reducer/common_reducer'

let reducers = combineReducers({
	common: commonReducer,
	login: loginReducer,
	user_info: userReducer
});

let store = createStore(reducers);


export default store;