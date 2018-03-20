import { 
	CHANGE_ACCOUNT_DATA, CLEAR_ACCOUNT_DATA, REDIRECT_TO_SIGNUP, CLEAR_ACCOUNT_SIGNUP
} from '../actions/account';
import { CHANGE_ACCOUNT_NAME } from '../actions/setting';

const initState = {
	id: null,
	name: null,
	token: null,
	redirectSignup: false
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_ACCOUNT_DATA:
			if (state.id === null && action.data[0] !== null) {
				return {
					...state,
					id: parseInt(action.data[0]),
					name: action.data[1],
					token: action.data[2]
				};	
			}
		case CLEAR_ACCOUNT_DATA:
			return {
				...state,
				id: null,
				name: null,
				token: null
			};
		case CHANGE_ACCOUNT_NAME:
			return {
				...state,
				name: action.data
			};
		case REDIRECT_TO_SIGNUP:
			return {
				...state,
				redirectSignup: true
			};
		case CLEAR_ACCOUNT_SIGNUP:
			return {
				...state,
				redirectSignup: false
			}
		default:
			return state;
	}
}

