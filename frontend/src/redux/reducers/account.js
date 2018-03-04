import { CHANGE_ACCOUNT_DATA } from '../actions/account';

const initState = {
	id: null,
	name: null,
	token: null
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_ACCOUNT_DATA:
			if (state.id === null) {
				return {
					...state,
					id: parseInt(action.data[0]),
					name: action.data[1],
					token: action.data[2]
				};	
			}
			break;
		default:
			return state;
	}
}