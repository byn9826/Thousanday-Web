import { 
	domainUrl, readAccountFacebookApi, readAccountGoogleApi, deleteAccountTokenApi
} from '../../helpers/config';

export const CHANGE_ACCOUNT_DATA = "account/CHANGE_ACCOUNT_DATA";
export const CLEAR_ACCOUNT_DATA = "account/CLEAR_ACCOUNT_DATA";
export const REDIRECT_TO_SIGNUP = "account/REDIRECT_TO_SIGNUP";
export const CLEAR_ACCOUNT_SIGNUP = "account/CLEAR_ACCOUNT_SIGNUP";

export function changeAccountData(data) {
	return {
		type: CHANGE_ACCOUNT_DATA,
		data
	}
}

function redirectToSignup() {
	return {
		type: REDIRECT_TO_SIGNUP
	}
}

export function readAccountData(portal, detail) {
	const apiUrl = portal === 'facebook' ? readAccountFacebookApi : readAccountGoogleApi;
	return function (dispatch) {
		return fetch(domainUrl + apiUrl, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": detail.token, 
				"platform": "website"
			})
		})
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				if (json.id) {
					localStorage.setItem("newId", json.id);
					localStorage.setItem("newToken", detail.token);
					localStorage.setItem("newPlatform", portal);
					if (portal === 'facebook') {
						localStorage.setItem("newName", detail.response.name);
						localStorage.setItem(
							"newAvatar", 
							"http://graph.facebook.com/" + json.id + "/picture?type=square&width=720&height=720"
						);
					} else {
						localStorage.setItem("newName", detail.name);
						localStorage.setItem("newAvatar", detail.imageUrl);
					}
					dispatch(redirectToSignup());
				} else {
					localStorage.setItem("id", json[0]);
					localStorage.setItem("name", json[1]);
					localStorage.setItem("token", json[2]);
					dispatch(changeAccountData(json));
				}
			}).catch(() => {
				//error
			});
	}
}

function clearAccountData() {
	return {
		type: CLEAR_ACCOUNT_DATA
	}
}

export function deleteAccountToken(id, token) {
	return function (dispatch) {
		return fetch(domainUrl + deleteAccountTokenApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				"token": token, 
				"id": id
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then((json) => {
				localStorage.clear();
				dispatch(clearAccountData());
			}).catch(() => {
				//error
			});
	}
}

export function clearAccountSignup() {
	return {
		type: CLEAR_ACCOUNT_SIGNUP
	}
}


