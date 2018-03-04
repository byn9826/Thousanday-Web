import { domainUrl, loadHomeDataApi } from '../../helpers/config';

export const SET_HOME_DATA = "home/SET_HOME_DATA";

function setHomeData(data) {
	return {
		type: SET_HOME_DATA,
		data
	}
}

export function loadHomeData(load) {
	return function (dispatch) {
		return fetch(domainUrl + loadHomeDataApi + '?load=' + load)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(setHomeData(json))
			}).catch(() => {
				//error
			});
	}
}