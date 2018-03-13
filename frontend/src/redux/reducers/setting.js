import { 
	BUILD_SETTING_PAGE, CHANGE_SETTING_ABOUT, CHANGE_SETTING_NAME, 
	CHANGE_SETTING_PROFILE
} from '../actions/setting';

const initState = {
	//store user data
	userData: [],
	//indicate update result
	updateResult: null,
	//store user about info
	userAbout: ""
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_SETTING_PAGE:
			return {
				...state,
				userData: action.data,
				userAbout: action.data.user_about
			};
		case CHANGE_SETTING_ABOUT:
			if (!action.data) {
				action.data = '';
			}
			return {
				...state,
				userAbout: action.data, 
				updateResult: 'Mood updated Successfully!'
			};
		case CHANGE_SETTING_NAME:
			return {
				...state,
				updateResult: 'Name updated Successfully!'
			};
		case CHANGE_SETTING_PROFILE:
			return {
				...state,
				updateResult: 'Profile updated Successfully!'
			};
	default:
		return state;
	}
}