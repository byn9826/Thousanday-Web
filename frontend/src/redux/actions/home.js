import { domainUrl, readHomeMomentsApi } from '../../helpers/config';
import processError from '../../helpers/processError';

export const CHANGE_HOME_MOMENTS = "home/CHANGE_HOME_MOMENTS";

function changeHomeMoments(data) {
	return {
		type: CHANGE_HOME_MOMENTS,
		data
	}
}

export function readHomeMoments(load) {
	return function (dispatch) {
		return fetch(domainUrl + readHomeMomentsApi + '?load=' + load)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				processError(response.status);
			})
			.then(json => {
				dispatch(changeHomeMoments(json))
			});
	}
}