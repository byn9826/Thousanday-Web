import { CHANGE_ACCOUNT_DATA, CLEAR_ACCOUNT_DATA } from '../actions/account';

const initState = {
	id: null,
	name: null,
	token: null
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
		default:
			return state;
	}
}