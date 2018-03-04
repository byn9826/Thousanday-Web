import { 
	domainUrl, readAccountFacebookApi, readAccountGoogleApi
} from '../../helpers/config';

export const CHANGE_ACCOUNT_DATA = "account/CHANGE_ACCOUNT_DATA";

export function changeAccountData(data) {
	return {
		type: CHANGE_ACCOUNT_DATA,
		data
	}
}

export function readAccountData(portal, token) {
	const apiUrl = portal === 'facebook' ? readAccountFacebookApi : readAccountGoogleApi;
	return function (dispatch) {
		return fetch(domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": token, 
				"platform": "website"
			})
		})
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				localStorage.setItem("id", json[0]);
				localStorage.setItem("name", json[1]);
				localStorage.setItem("token", json[2]);
				dispatch(changeAccountData(json));
			}).catch(() => {
				//error
			});
	}
}
