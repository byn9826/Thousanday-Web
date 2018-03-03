import { domainUrl, loadMomentDataApi } from '../../helpers/config';

export const GET_MOMENT_DATA = "moment/GET_MOMENT_DATA";

function getMomentData(data) {
	return {
		type: GET_MOMENT_DATA,
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
				dispatch(getMomentData(json))
			}).catch(() => {
				//error
			});
	}
}