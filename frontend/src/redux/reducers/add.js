import { 
	CHANGE_ADD_DETAIL, CHANGE_ADD_UPDATE, REDIRECT_TO_USER
} from '../actions/add';

const initState = {
	//indicate update result
	updateResult: null,
	//store avatar image
	createAvatar: null,
	//store pet gender
	createGender: null,
	//store create type
	createType: null,
	//store create nature
	createNature: null,
	redirectUser: false
};


export default function reducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_ADD_DETAIL:
			const newState = { ...state };
			newState['create' + action.data.type] = action.data.value;
			return newState;
		case CHANGE_ADD_UPDATE:
			return {
				...state,
				updateResult: action.data
			};
		case REDIRECT_TO_USER:
			return {
				...state,
				redirectUser: true
			};
		default:
			return state;
	}
}

    
            
            
            
            