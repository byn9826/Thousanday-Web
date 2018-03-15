import { domainUrl, createAddPetApi } from '../../helpers/config';

export const CHANGE_ADD_DETAIL = 'add/CHANGE_ADD_DETAIL';
export const CHANGE_ADD_UPDATE = 'add/CHANGE_ADD_UPDATE';
export const REDIRECT_TO_USER = 'add/REDIRECT_TO_USER';

export function changeAddDetail(type, value) {
	return {
		type: CHANGE_ADD_DETAIL,
		data: {
			type, value
		}
	};
}

export function changeAddUpdate(data) {
	return {
		type: CHANGE_ADD_UPDATE,
		data
	};
}

function redirectToUser() {
	return {
		type: REDIRECT_TO_USER
	}
}

export function createAddPet(
	petName, petGender, petType, petNature, petAvatar, userId, userToken
) {
	return function (dispatch) {
		const fileData = new FormData();
		fileData.append("name", petName);
		fileData.append("gender", petGender);
		fileData.append("type", petType);
		fileData.append("nature", petNature);
		fileData.append("file", petAvatar, ".png");
		fileData.append("user", userId);
		fileData.append("token", userToken);
		return fetch(domainUrl + createAddPetApi, {
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
					return true;
				}
			})
			.then(() => {
				dispatch(redirectToUser());
			});
	}

}