import { combineReducers } from 'redux';
import account from './reducers/account';
import home from './reducers/home';
import pet from './reducers/pet';
import user from './reducers/user';
import moment from './reducers/moment';

export default combineReducers({
	account,
	home,
	moment,
	pet,
	user
});