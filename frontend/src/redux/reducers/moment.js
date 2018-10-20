import { 
	BUILD_MOMENT_PAGE, SHOW_MOMENT_DELETE, REDIRECT_USER_PAGE, CHANGE_MOMENT_LIKE,
	CHANGE_MOMENT_COMMENTS, SHOW_COMMENT_EMPTY, ADD_MOMENT_COMMENT
} from '../actions/moment';
import buildComments from '../../helpers/buildComments';

const initState = {
	momentData: [],
	familyData: [],
	likeData: [],
	commentData: [],
	showConfirm: false,
	commentLocker: false,
	commentAdded: 0,
	commentLoad: 0,
	commentError: null,
	redirectUser: false
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case BUILD_MOMENT_PAGE:
			const likeData = action.data[2].map(function(like) {
				return parseInt(like.user_id);
			});
			const commentData = buildComments(action.data[3]);
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
		case SHOW_MOMENT_DELETE:
			return {
				...state,
				showConfirm: true
			};
		case REDIRECT_USER_PAGE:
			return {
				...state,
				redirectUser: true
			};
		case CHANGE_MOMENT_LIKE:
			return {
				...state,
				likeData: action.data.action === 1 ?
					[...state.likeData, action.data.userId] :
					state.likeData.filter(function(like) { return like !== action.data.userId })
			};
		case CHANGE_MOMENT_COMMENTS:
			const newComments = buildComments(action.data);
			return {
				...state,
				commentData: [...state.commentData, ...newComments],
				commentLoad: state.commentLoad + 1,
				commentLocker: action.data.length !== 10
			};
		case SHOW_COMMENT_EMPTY:
			return {
				...state,
				commentError: "Comment can′t be empty"
			};
		case ADD_MOMENT_COMMENT:
			return {
				...state,
				commentData: [action.data, ...state.commentData],
				commentError: null,
				commentAdded: state.commentAdded + 1
			};
		default:
			return state;
	}
}