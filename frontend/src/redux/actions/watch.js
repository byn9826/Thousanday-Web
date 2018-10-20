import { 
	domainUrl, readWatchPageApi, deleteWatchPetApi, createWatchPetApi,
	readWatchMomentsApi
} from '../../helpers/config';
import processError from '../../helpers/processError';

export const BUILD_WATCH_PAGE = "watch/BUILD_WATCH_PAGE";
export const CHANGE_WATCH_PET = "watch/CHANGE_WATCH_PET";
export const CHANGE_WATCH_MOMENTS = "watch/CHANGE_WATCH_MOMENTS";
export const CHANGE_PETS_LOAD = "watch/CHANGE_PETS_LOAD";

function buildWatchPage(data) {
	return {
		type: BUILD_WATCH_PAGE,
		data
	};
}

export function readWatchPage(id) {
	return function (dispatch) {
		return fetch(domainUrl + readWatchPageApi + '?id=' + id)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(buildWatchPage(json))
			});
	}
}

function changeWatchPet(action, petId) {
	return {
		type: CHANGE_WATCH_PET,
		data: {
			action, petId
		}
	};
}

export function updateWatchPet(userId, userToken, petId, action) {
	return function (dispatch) {
		const apiUrl = action === 0 ? deleteWatchPetApi : createWatchPetApi;
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
			.then(response => {
				if (response.ok) {
          return true;
        }
				processError(response.status);
			})
			.then(() => {
				dispatch(changeWatchPet(action, petId));
			});
	}
}

function changeWatchMoments(moments, load, loadList) {
	return {
		type: CHANGE_WATCH_MOMENTS,
		data: {
			moments, load, loadList
		}
	};
}

export function readWatchMoments(lists, load, loadList, userId) {
	return function (dispatch) {
		return fetch(domainUrl + readWatchMomentsApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'list': lists,
				'load': load,
				'route': loadList,
				'user': userId
			})
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(changeWatchMoments(json, load, loadList));
			});
	}
}

export function changePetsLoad() {
	return {
		type: CHANGE_PETS_LOAD
	};
}