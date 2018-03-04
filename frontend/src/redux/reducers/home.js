import { CHANGE_HOME_MOMENTS } from '../actions/home';
import buildGallery from '../../helpers/buildGallery';

const initState = {
	//store moments data
	data: [],
	//record load number
	load: 0,
	//allow load or not
	locker: false
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_HOME_MOMENTS:
			const newData = buildGallery(action.data);
			return {
				...state,
				load: state.load + 1,
				data: state.data.concat(newData),
				locker: newData.length !== 20
			};
		default:
			return state;
	}
}