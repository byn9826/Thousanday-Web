import { GET_FACEBOOK_ACCOUNT } from '../actions/account';

const initState = {
	id: null,
	name: null,
	token: null
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_FACEBOOK_ACCOUNT:
			console.log(action.data);
// 			return {
// 				...state,
// 				id: action.data.id,
// 				name: action.data.name,
// 				token: action.data.token
// 			};
		default:
			return state;
	}
}