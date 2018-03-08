import { 
	domainUrl, readRequestPageApi, deleteRequestUserApi, createRequestUserApi
} from '../../helpers/config';

export const BUILD_REQUEST_PAGE = "request/BUILD_REQUEST_PAGE";
export const CHANGE_REQUEST_USER = "request/CHANGE_REQUEST_USER";

function buildRequestPage(data) {
	return {
		type: BUILD_REQUEST_PAGE,
		data
	};
}

export function readRequestPage(id) {
	return function (dispatch) {
		return fetch(domainUrl + readRequestPageApi + '?id=' + id)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(buildRequestPage(json))
			}).catch(() => {
				//error
			});
	}
}

function changeRequestUser(index) {
	return {
		type: CHANGE_REQUEST_USER,
		data: index
	};
}

export function updateRequestUser(petId, index, userId, userToken, action) {
	return function (dispatch) {
		const apiUrl = action === 0 ? deleteRequestUserApi : createRequestUserApi;
		return fetch(domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'pet': petId
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(changeRequestUser(index));
			}).catch(() => {
				//error
			});
	}
}