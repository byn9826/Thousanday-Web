import { combineReducers } from 'redux';
import account from './reducers/account';
import home from './reducers/home';
import moment from './reducers/moment';

export default combineReducers({
	account,
	home,
	moment
});