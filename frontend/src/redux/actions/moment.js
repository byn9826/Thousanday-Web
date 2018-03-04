import { 
	domainUrl, readMomentPageApi, deleteMomentPageApi, updateMomentLikeApi, 
	readMomentCommentsApi, createMomentCommentApi
} from '../../helpers/config';

export const BUILD_MOMENT_PAGE = "moment/BUILD_MOMENT_PAGE";
export const SHOW_MOMENT_DELETE = "moment/SHOW_MOMENT_DELETE";
export const REDIRECT_USER_PAGE = "moment/REDIRECT_USER_PAGE";
export const CHANGE_MOMENT_LIKE = "moment/CHANGE_MOMENT_LIKE";
export const CHANGE_MOMENT_COMMENTS = "moment/CHANGE_MOMENT_COMMENTS";
export const SHOW_COMMENT_EMPTY = "moment/SHOW_COMMENT_EMPTY";
export const ADD_MOMENT_COMMENT = "moment/ADD_MOMENT_COMMENT";

function buildMomentPage(data) {
	return {
		type: BUILD_MOMENT_PAGE,
		data
	};
}

export function readMomentPage(id) {
	return function (dispatch) {
		return fetch(domainUrl + readMomentPageApi + '?id=' + id)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(buildMomentPage(json))
			}).catch(() => {
				//error
			});
	}
}

export function showMomentDelete() {
	return {
		type: SHOW_MOMENT_DELETE
	}
}

function redirctUserPage() {
	return {
		type: REDIRECT_USER_PAGE
	}
}

export function deleteMomentPage(userId, userToken, momentId, petId) {
	return function (dispatch) {
		return fetch(domainUrl + deleteMomentPageApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'moment': momentId,
				'pet': petId
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(redirctUserPage());
			}).catch(() => {
				//error
			});
	}
}

function changeMomentLike(action, userId) {
	return {
		type: CHANGE_MOMENT_LIKE,
		data: {
			action, userId
		}
	}
}

export function updateMomentLike(userId, userToken, momentId, action) {
	return function (dispatch) {
		return fetch(domainUrl + updateMomentLikeApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'moment': momentId,
				'action': action
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(changeMomentLike(action, userId));
			}).catch(() => {
				//error
			});
	}
}

function changeMomentComments(data) {
	return {
		type: CHANGE_MOMENT_COMMENTS,
		data
	};
}

export function readMomentComments(momentId, commentLoad, commentAdded) {
	return function (dispatch) {
		const apiParams = '?id=' + momentId + '&load=' + commentLoad + '&add=' + commentAdded;
		return fetch(domainUrl + readMomentCommentsApi + apiParams)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(changeMomentComments(json))
			}).catch(() => {
				//error
			});
	}
}

export function showCommentEmpty() {
	return {
		type: SHOW_COMMENT_EMPTY
	};
}

function addMomentComment(userId, content) {
	const data = [
		content,
		domainUrl + '/img/user/' + userId + '.jpg',
		'/user/' + userId,
		new Date().toISOString().substring(0, 10)
	];
	return {
		type: ADD_MOMENT_COMMENT,
		data
	};
}

export function createMomentComment(userId, userToken, momentId, content) {
	return function (dispatch) {
		return fetch(domainUrl + createMomentCommentApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'moment': momentId,
				'content': content
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(addMomentComment(userId, content));
			}).catch(() => {
				//error
			});
	}
}





