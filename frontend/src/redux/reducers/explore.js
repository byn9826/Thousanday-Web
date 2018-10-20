import { 
	CHANGE_EXPLORE_TYPE, CHANGE_EXPLORE_NATURE, CHANGE_EXPLORE_MOMENTS
} from '../actions/explore';
import buildGallery from '../../helpers/buildGallery';

const initState = {
	type: null,
	nature: null,
	momentsData: [],
	load: 0,
	locker: false
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_EXPLORE_TYPE:
			return {
				...state,
				type: action.data,
				momentsData: [],
				load: 0
			}
		case CHANGE_EXPLORE_NATURE:
			return {
				...state,
				nature: action.data,
				momentsData: [],
				load: 0
			}
		case CHANGE_EXPLORE_MOMENTS:
			const newMoments = action.data.load === 0 ? 
				buildGallery(action.data.momentsData) :
				state.momentsData.concat(buildGallery(action.data.momentsData));
			return {
				...state,
				momentsData: newMoments,
				type: action.data.type,
				nature: action.data.nature,
				load: action.data.load + 1,
				locker: action.data.momentsData.length !== 20
			}
		default:
			return state;
	}
}