import { 
	domainUrl, readUserPageApi, readUserMomentsApi
} from '../../helpers/config';

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
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(buildUserPage(json, parseInt(id)))
			}).catch(() => {
				//error
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
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(changeUserMoments(json));
			}).catch(() => {
				//error
			});
		
		
	}
}