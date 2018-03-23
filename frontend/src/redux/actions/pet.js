import { 
	domainUrl, readPetPageApi, updatePetWatchApi, createPetMomentApi,
	readPetMomentsApi
} from '../../helpers/config';
import processError from '../../helpers/processError';

export const BUILD_PET_PAGE = "pet/BUILD_PET_PAGE";
export const SHOW_ACCOUNT_REQUIRED = "pet/SHOW_ACCOUNT_REQUIRED";
export const CHANGE_PET_WATCH = "pet/CHANGE_PET_WATCH";
export const ADD_PET_MOMENT = "pet/ADD_PET_MOMENT";
export const CHANGE_PET_MOMENTS = "pet/CHANGE_PET_MOMENTS";

function buildPetPage(data) {
	return {
		type: BUILD_PET_PAGE,
		data
	};
}

export function readPetPage(id) {
	return function (dispatch) {
		return fetch(domainUrl + readPetPageApi + '?id=' + id)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(buildPetPage(json))
			});
	}
}

export function showAccountRequired() {
	return {
		type: SHOW_ACCOUNT_REQUIRED
	};
}

function changePetWatch(action, userId) {
	return {
		type: CHANGE_PET_WATCH,
		data: {
			action, userId
		}
	};
}

export function updatePetWatch(userId, userToken, petId, action) {
	return function (dispatch) {
		return fetch(domainUrl + updatePetWatchApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': userId,
				'token': userToken,
				'pet': petId,
				'action': action
			})
		})
			.then(response => {
				if (response.ok) {
          return true;
        }
				processError(response.status);
			})
			.then(() => {
				dispatch(changePetWatch(action, userId));
			});
	}
}

function addPetMoment(info, petId, message) {
	return {
		type: ADD_PET_MOMENT,
		data: {
			info, petId, message
		}
	};
}

export function createPetMoment(userId, userToken, petId, image, message) {
	return function (dispatch) {
		let type = image.type;
		type = type.split("/")[1];
		type = "." + type;
		const fileData = new FormData();
		fileData.append("file", image, type);
		fileData.append("message", message);
		fileData.append("pet", petId);
		fileData.append("user", userId);
		fileData.append("token", userToken);
		return fetch(domainUrl + createPetMomentApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			processData: false,
			body: fileData
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(result => {
				dispatch(addPetMoment(result, petId, message));
			});
	}
}

function changePetMoments(data) {
	return {
		type: CHANGE_PET_MOMENTS,
		data
	}
}

export function readPetMoments(petId, load, add) {
	return function (dispatch) {
		const params = '?add=' + add + '&load=' + load + '&pet=' + petId;
		return fetch(domainUrl + readPetMomentsApi + params)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(changePetMoments(json))
			});
	}
}