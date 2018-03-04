import { domainUrl, loadMomentDataApi } from '../../helpers/config';

export const SET_MOMENT_DATA = "moment/SET_MOMENT_DATA";
export const SHOW_MOMENT_DELETE = "moment/SHOW_MOMENT_DELETE";

export function showMomentDelete() {
	return {
		type: SHOW_MOMENT_DELETE
	}
}

function setMomentData(data) {
	return {
		type: SET_MOMENT_DATA,
		data
	}
}

export function loadMomentData(id) {
	return function (dispatch) {
		return fetch(domainUrl + loadMomentDataApi + '?id=' + id)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(setMomentData(json))
			}).catch(() => {
				//error
			});
	}
}