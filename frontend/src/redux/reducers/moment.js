import { SET_MOMENT_DATA, SHOW_MOMENT_DELETE } from '../actions/moment';
import { domainUrl } from '../../helpers/config.js';

const initState = {
	id: null,
	momentData: [],
	familyData: [],
	likeData: [],
	commentData: [],
	showConfirm: false,
	commentLocker: false,
	commentAdded: 0,
	commentLoad: 0,
	commentError: null
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case SHOW_MOMENT_DELETE:
			return {
				...state,
				showConfirm: true
			};
		case SET_MOMENT_DATA:
			const likeData = action.data[2].map(function(like) {
				return parseInt(like.user_id);
			});
			const commentData = action.data[3].map(function(comment) {
				return [
					comment.comment_content,
					domainUrl + "/img/user/" + comment.user_id + ".jpg",
					"/user/" + comment.user_id,
					new Date(comment.comment_time).toISOString().substring(0, 10)
        ];
			});
			return {
				...state,
				momentData: action.data[0],
				familyData: [
					parseInt(action.data[1].owner_id) || null, 
					parseInt(action.data[1].relative_id) || null, 
				],
				likeData,
				commentData,
				commentLocker: action.data[3].length !== 5
			};
		default:
			return state;
	}
}