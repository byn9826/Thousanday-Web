import { domainUrl, loadHomeDataApi } from '../../helpers/config';

export const GET_HOME_DATA = "home/GET_HOME_DATA";

function getHomeData(data) {
	return {
		type: GET_HOME_DATA,
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
				dispatch(getHomeData(json))
			}).catch(() => {
				//error
			});
	}
}