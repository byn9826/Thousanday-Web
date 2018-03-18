import { 
	BUILD_EDIT_PAGE, CHANGE_EDIT_UPDATE, CHANGE_EDIT_NAME, CHANGE_EDIT_REMOVE,
	REMOVE_EDIT_RELATIVE, CHANGE_EDIT_ADD, RESET_EDIT_SEARCH, CHANGE_EDIT_SEARCH,
	ADD_EDIT_RELATIVE, CHANGE_EDIT_OWNERSHIP, CHANGE_EDIT_TRANSFER, CHANGE_EDIT_END,
	REDIRECT_TO_HOME
} from '../actions/edit';

const initState = {
	//store pet data
	petData: {},
	//store pet name
	petName: "",
	//indicate update info
	updateResult: null,
	//show end relation box
	showEnd: false,
	//show add relative box
	showAdd: false,
	//content in search bar
	search: "",
	//store search data
	searchData: null,
	//show remove relative box
	showRemove: false,
	//show transfer box
	showTransfer: false,
	dataLoaded: false,
	redirectHome: false
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_EDIT_PAGE:
			return {
				...state,
				petData: action.data,
				petName: action.data.pet_name,
				dataLoaded: true
			};
		case CHANGE_EDIT_UPDATE:
			return {
				...state,
				updateResult: action.data
			};
		case CHANGE_EDIT_NAME:
			return {
				...state,
				petName: action.data,
				updateResult: 'Name updated Successfully!'
			};
		case CHANGE_EDIT_REMOVE:
			return {
				...state,
				showRemove: !state.showRemove
			};
		case REMOVE_EDIT_RELATIVE:
			return {
				...state,
				showRemove: false,
				updateResult: 'Successfully removed relative!',
				petData: { ...state.petData, relative_id: null }
			};
		case CHANGE_EDIT_ADD:
			return {
				...state,
				showAdd: !state.showAdd,
				search: '',
				searchData: null
			};
		case RESET_EDIT_SEARCH:
			return {
				...state,
				search: '',
				searchData: null
			};
		case CHANGE_EDIT_SEARCH:
			return {
				...state,
				search: action.data.searchId,
				searchData: action.data.searchData
			};
		case ADD_EDIT_RELATIVE:
			return {
				...state,
				showAdd: false,
				search: '',
				searchData: null,
				updateResult: 'Request sent successfully!'
			};
		case CHANGE_EDIT_OWNERSHIP:
			return {
				...state,
				showTransfer: !state.showTransfer
			};
		case CHANGE_EDIT_TRANSFER:
			return {
				...state,
				showTransfer: false,
				petData: { 
					...state.petData, 
					owner_id: state.petData.relative_id,
					relative_id: state.petData.owner_id
				},
				updateResult: 'Successfully transferred ownership!'
			};
		case CHANGE_EDIT_END:
			return {
				...state,
				showEnd: !state.showEnd
			};
		case REDIRECT_TO_HOME:
			return {
				...state,
				redirectHome: true
			}
		default:
			return state;
	}
}