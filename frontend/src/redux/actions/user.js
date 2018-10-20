import { 
	domainUrl, readUserPageApi, readUserMomentsApi
} from '../../helpers/config';
import processError from '../../helpers/processError';

export const BUILD_USER_PAGE = "user/BUILD_USER_PAGE";
export const CHANGE_USER_MOMENTS = "user/CHANGE_USER_MOMENTS";

function buildUserPage(info, userId) {
	return {
		type: BUILD_USER_PAGE,
		data: {
			info, userId
		}
	};
}

export function readUserPage(id) {
	return function (dispatch) {
		return fetch(domainUrl + readUserPageApi + '?id=' + id)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(buildUserPage(json, parseInt(id)))
			});
	}
}

function changeUserMoments(data) {
	return {
		type: CHANGE_USER_MOMENTS,
		data
	}
}

export function readUserMoments(belong, load) {
	return function (dispatch) {
		return fetch(domainUrl + readUserMomentsApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'belong': belong,
				'load': load
			})
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(changeUserMoments(json));
			});
	}
}