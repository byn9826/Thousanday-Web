import { GET_HOME_DATA } from '../actions/home';

const initState = {
	homeData: null,
	load: 0
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_HOME_DATA:
			console.log(action.homeData);
			return {
				...state,
				load: state.load + 1,
				homeData: action.homeData
			};
		default:
			return state;
	}
}