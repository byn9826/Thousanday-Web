import { domainUrl, loadFacebookAccountApi } from '../../helpers/config';
export const GET_FACEBOOK_ACCOUNT = "account/GET_FACEBOOK_ACCOUNT";

function getFacebookAccount(data) {
	return {
		type: GET_FACEBOOK_ACCOUNT,
		data
	}
}

export function loadFacebookAccount(token) {
	return function (dispatch) {
		return fetch(domainUrl + loadFacebookAccountApi, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
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
				console.log(json);
				dispatch(getFacebookAccount(json))
			}).catch(() => {
				//error
			});
	}
}