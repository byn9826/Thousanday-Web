import { 
	BUILD_PET_PAGE, SHOW_ACCOUNT_REQUIRED, CHANGE_PET_WATCH, ADD_PET_MOMENT, CHANGE_PET_MOMENTS
} from '../actions/pet';
import { domainUrl } from '../../helpers/config';
import { noGetAbility } from '../../helpers/noToInfo';
import buildGallery from '../../helpers/buildGallery';

const initState = {
	//indicate pet belong to current user or not
	petOwner: false,
	//store data for one pet
	petData: {},
	//store data for pet's family
	familyData: [],
	//store data for pets friend
	friendData: [],
	//store data for image gallery
	galleryData: [],
	//indicate load how many times
	load: 1,
	//indicate could load more or not
	locker: false,
	//indicate add how many images
	add: 0,
	//store all watcher of current pet
	watchData: [],
	//indicate notice user login or not
	loginRequired: false,
	//trigger reset function for post image
	reset: 0,
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_PET_PAGE:
			action.data[0]['owner_id'] = parseInt(action.data[0]['owner_id']);
			action.data[0]['relative_id'] = action.data[0]['relative_id'] === null ? 
				null : parseInt(action.data[0]['relative_id']);
      return {
				...state,
				petData: action.data[0],
				familyData: action.data[1],
				friendData: action.data[2],
				locker: action.data[3].length !== 20,
				galleryData: buildGallery(action.data[3]),
				watchData: action.data[4].map(function(watch) {
					return parseInt(watch.user_id);
				})
			};
		case SHOW_ACCOUNT_REQUIRED:
			return {
				...state,
				loginRequired: true
			}
		case CHANGE_PET_WATCH:
			return {
				...state,
				watchData: action.data.action === 1 ?
					[...state.watchData, action.data.userId] :
					state.watchData.filter(function(watch) { return watch !== action.data.userId })
			};
		case ADD_PET_MOMENT:
			const newMoment = [
				domainUrl + "/public/pet/" + action.data.petId + "/moment/" + action.data.info[1],
				action.data.message,
				"/moment/" + action.data.info[0]
			];
			if (action.data.info.length === 3) {
				const ability = noGetAbility(action.data.info[2]);
				const newAbility = {...state.petData};
				newAbility[ability] = parseInt(state.petData[ability]) + 1;
				return {
					...state,
					galleryData: [newMoment, ...state.galleryData],
					reset: state.reset + 1,
					add: state.add + 1,
					petData: newAbility
				}
			} else {
				return {
					...state,
					galleryData: [newMoment, ...state.galleryData],
					reset: state.reset + 1,
					add: state.add + 1
				}
			}
		case CHANGE_PET_MOMENTS:
			const newData = buildGallery(action.data);
			return {
				...state,
				galleryData: state.galleryData.concat(newData),
				load: state.load + 1,
				locker: newData.length !== 20
			};
		default:
			return state;
	}
}