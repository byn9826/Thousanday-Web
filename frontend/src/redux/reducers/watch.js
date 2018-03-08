import { 
	BUILD_WATCH_PAGE, CHANGE_WATCH_PET, CHANGE_WATCH_MOMENTS, CHANGE_PETS_LOAD
} from '../actions/watch';
import buildGallery from '../../helpers/buildGallery';

const initState = {
	//store pets data on watch list
	petsList: [],
	//store pet has been unwatched
	unwatch: [],
	//indicate load pet list for how many times
	loadPets: 1,
	//store pets id on watch list
	watchList: null,
	//store list moments to show
	galleryData: [],
	//indicate which list to show
	loadList: "watch",
	//indicate could load more images or not
	locker: false,
	//indicate click load for how many times
	load: 1
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_WATCH_PAGE:
			return {
				...state,
				petsList: action.data[2],
				watchList: action.data[0],
				galleryData: buildGallery(action.data[1]),
				locker: action.data[1].length !== 20
			};
		case CHANGE_WATCH_PET:
			return {
				...state,
				unwatch: action.data.action === 0 ? 
					[...state.unwatch, action.data.petId] : 
					state.unwatch.filter(id => { id !== action.data.petId; })
			};
		case CHANGE_WATCH_MOMENTS:
			return {
				...state,
				galleryData: action.data.load === 0 ?
					buildGallery(action.data.moments) :
					state.galleryData.concat(buildGallery(action.data.moments)),
				load: action.data.load + 1,
				locker: action.data.moments.length !== 20,
				loadList: action.data.loadList
			};
		case CHANGE_PETS_LOAD:
			return {
				...state,
				loadPets: state.loadPets + 1
			};
		default:
			return state;
	}
}

