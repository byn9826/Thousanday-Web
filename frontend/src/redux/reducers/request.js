import { 
	BUILD_REQUEST_PAGE, CHANGE_REQUEST_USER
} from '../actions/request';

const initState = {
	//store request list
	requestData: [],
	//store accept list
	acceptList: []
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_REQUEST_PAGE:
			return {
				...state,
				requestData: action.data
			};
		case CHANGE_REQUEST_USER:
			return {
				...state,
				requestData: state.requestData.filter((request, index) => { 
						return index !== action.data
					})
			};
		default:
			return state;
	}
}
