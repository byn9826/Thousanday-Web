import { 
	domainUrl, loadFacebookAccountApi, loadGoogleAccountApi
} from '../../helpers/config';

export const SET_ACCOUNT_DATA = "account/SET_ACCOUNT_DATA";

function setAccountData(data) {
	return {
		type: SET_ACCOUNT_DATA,
		data
	}
}

export function fetchAccountData() {
	//get stored user id, name from local, and treat as logged in user
	if (localStorage.getItem("id")) {
		const id = localStorage.getItem("id");
		const name = localStorage.getItem("name");
		return setAccountData([id, name]);
	}
}

export function loadAccountData(portal, token) {
	const apiUrl = portal === 'facebook' ? loadFacebookAccountApi : loadGoogleAccountApi;
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
				dispatch(setAccountData(json));
			}).catch(() => {
				//error
			});
	}
}
