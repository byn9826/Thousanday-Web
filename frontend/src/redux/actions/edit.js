import { 
	domainUrl, readEditPageApi, updateEditNameApi, updateEditProfileApi,
	deleteEditRelativeApi, readEditSearchApi, createEditRelativeApi, updateEditTransferApi,
	updateEditRelationApi
} from '../../helpers/config';

export const BUILD_EDIT_PAGE = 'edit/BUILD_EDIT_PAGE';
export const CHANGE_EDIT_UPDATE = 'edit/CHANGE_EDIT_UPDATE';
export const CHANGE_EDIT_NAME = 'edit/CHANGE_EDIT_NAME';
export const CHANGE_EDIT_REMOVE = 'edit/CHANGE_EDIT_REMOVE';
export const REMOVE_EDIT_RELATIVE = 'edit/REMOVE_EDIT_RELATIVE';
export const CHANGE_EDIT_ADD = 'edit/CHANGE_EDIT_ADD';
export const RESET_EDIT_SEARCH = 'edit/RESET_EDIT_SEARCH';
export const CHANGE_EDIT_SEARCH = 'edit/CHANGE_EDIT_SEARCH';
export const ADD_EDIT_RELATIVE = 'edit/ADD_EDIT_RELATIVE';
export const CHANGE_EDIT_OWNERSHIP = 'edit/CHANGE_EDIT_OWNERSHIP';
export const CHANGE_EDIT_TRANSFER = 'edit/CHANGE_EDIT_TRANSFER';
export const CHANGE_EDIT_END = 'edit/CHANGE_EDIT_END';
export const REDIRECT_TO_HOME = 'edit/REDIRECT_TO_HOME';

function buildEditPage(data) {
	return {
		type: BUILD_EDIT_PAGE,
		data
	};
}

export function readEditPage(petId, userId) {
	return function (dispatch) {
		return fetch(domainUrl + readEditPageApi + '?pet=' + petId + '&user=' + userId)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(buildEditPage(json))
			}).catch(() => {
				//error
			});
	}
}

export function changeEditUpdate(data) {
	return {
		type: CHANGE_EDIT_UPDATE,
		data
	}
}

function changeEditName(data) {
	return {
		type: CHANGE_EDIT_NAME,
		data
	}
}

export function updateEditName(userId, userToken, petId, petName) {
	return function (dispatch) {
		return fetch(domainUrl + updateEditNameApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
				"name": petName
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(changeEditName(petName));
			}).catch(() => {
				//error
			});
	}
}

export function updateEditProfile(userId, userToken, petId, file) {
	return function (dispatch) {
		const formData = new FormData();
		formData.append('file', file, petId + ".png");
		formData.append('user', userId);
		formData.append('token', userToken);
		formData.append('pet', petId);
		return fetch(domainUrl + updateEditProfileApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			processData: false,
			body: formData
		})
			.then(response => {
				if (response.ok) {
					return true;
				}
			})
			.then(() => {
				dispatch(changeEditUpdate('Avatar updated successfully!'));
			});
	}
}

export function changeEditRemove() {
	return {
		type: CHANGE_EDIT_REMOVE
	}	
}

function removeEditRelative() {
	return {
		type: REMOVE_EDIT_RELATIVE
	}	
}

export function deleteEditRelative(userId, userToken, petId) {
	return function (dispatch) {
		return fetch(domainUrl + deleteEditRelativeApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(removeEditRelative());
			}).catch(() => {
				//error
			});
	}
}

export function changeEditAdd() {
	return {
		type: CHANGE_EDIT_ADD
	}	
}

export function resetEditSearch() {
	return {
		type: RESET_EDIT_SEARCH
	}
}	

function changeEditSearch(searchId, searchData) {
	return {
		type: CHANGE_EDIT_SEARCH,
		data: {
			searchId, searchData
		}
	}
}

export function readEditSearch(searchId) {
	return function (dispatch) {
		return fetch(domainUrl + readEditSearchApi + '?id=' + searchId)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(changeEditSearch(searchId, json))
			}).catch(() => {
				//error
			});
	}
}

function addEditRelative() {
	return {
		type: ADD_EDIT_RELATIVE
	}
}

export function createEditRelative(userId, userToken, petId, searchId) {
	return function (dispatch) {
		return fetch(domainUrl + createEditRelativeApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
				"add": searchId
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(addEditRelative());
			}).catch(() => {
				//error
			});
	}
}

export function changeEditOwnership() {
	return {
		type: CHANGE_EDIT_OWNERSHIP
	}
}

function changeEditTransfer() {
	return {
		type: CHANGE_EDIT_TRANSFER
	}
}

export function updateEditTransfer(userId, userToken, petId, relativeId) {
	return function (dispatch) {
		return fetch(domainUrl + updateEditTransferApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
				"relative": relativeId
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(changeEditTransfer());
			}).catch(() => {
				//error
			});
	}
}

export function changeEditEnd() {
	return {
		type: CHANGE_EDIT_END
	}
}

export function redirectToHome() {
	return {
		type: REDIRECT_TO_HOME
	}
}

export function updateEditRelation(userId, userToken, petId) {
	return function (dispatch) {
		return fetch(domainUrl + updateEditRelationApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": userToken,
				"user": userId,
				"pet": petId,
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(redirectToHome());
			}).catch(() => {
				//error
			});
	}
}