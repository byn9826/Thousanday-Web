import { GET_MOMENT_DATA } from '../actions/moment';

const initState = {
	id: null,
	momentData: [],
	familyData: [],
	likeData: [],
	commentData: [],
	showConfirm: false,
	commentLocker: false,
	commentAdded: 0,
	//indicate load comment for how manytimes
	commentLoad: 0
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case GET_HOME_DATA:
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