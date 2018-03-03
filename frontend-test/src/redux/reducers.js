import { combineReducers } from 'redux';
import home from './reducers/home';
import account from './reducers/account';

export default combineReducers({
	home,
	account
});