import { 
	BUILD_USER_PAGE, CHANGE_USER_MOMENTS
} from '../actions/user';
import { domainUrl } from '../../helpers/config';
import buildGallery from '../../helpers/buildGallery';

const initState = {
	//store user data
	userData: [],
	//store relative data
	relativeData: [],
	//store pets list
	petsData: [],
	//store moment images
	momentData: [],
	//indicate load moment how many times
	load: 1,
	//indicate could load more images or not
	locker: false,
	//store pet list
	belongData: []
}

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_USER_PAGE:
			let relativeData = [];
			action.data.info[1].forEach(function(pet) {
				if (pet.relative_id !== null) {
					relativeData.push(
						parseInt(pet.relative_id) === action.data.userId ? 
							parseInt(pet.owner_id) : parseInt(pet.relative_id)
					);
				}	
			});
			action.data.info[0].user_id = parseInt(action.data.info[0].user_id);
      return {
				...state,
				userData: action.data.info[0],
				petsData: action.data.info[1],
				belongData: action.data.info[3],
				momentData: buildGallery(action.data.info[2]),
				locker: action.data.info[2].length !== 20,
				relativeData: [...new Set(relativeData)]
			};
		case CHANGE_USER_MOMENTS:
			return {
				...state,
				momentData: state.momentData.concat(buildGallery(action.data)),
				load: state.load + 1,
				locker: action.data.length !== 20
			}
		default:
			return state;
	}
}