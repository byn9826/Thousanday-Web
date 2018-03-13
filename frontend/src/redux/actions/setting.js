import { 
	domainUrl, readSettingPageApi, updateSettingAboutApi, updateSettingNameApi,
	createSettingProfileApi
} from '../../helpers/config';

export const BUILD_SETTING_PAGE = 'setting/BUILD_SETTING_PAGE';
export const CHANGE_SETTING_ABOUT = 'setting/CHANGE_SETTING_ABOUT';
export const CHANGE_ACCOUNT_NAME = 'account/CHANGE_ACCOUNT_NAME';
export const CHANGE_SETTING_NAME = 'setting/CHANGE_SETTING_NAME';
export const CHANGE_SETTING_PROFILE = 'setting/CHANGE_SETTING_PROFILE';

function buildSettingPage(data) {
	return {
		type: BUILD_SETTING_PAGE,
		data
	};
}

export function readSettingPage(id) {
	return function (dispatch) {
		return fetch(domainUrl + readSettingPageApi + '?id=' + id)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(buildSettingPage(json))
			}).catch(() => {
				//error
			});
	}
}

function changeSettingAbout(data) {
	return {
		type: CHANGE_SETTING_ABOUT,
		data
	};
}

export function updateSettingAbout(id, token, about) {
	return function (dispatch) {
		return fetch(domainUrl + updateSettingAboutApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': id,
				'token': token,
				'about': about
			})
		})
			.then((response => {
				if (response.ok) {
          return true;
        }
			}))
			.then(() => {
				dispatch(changeSettingAbout(about));
			}).catch(() => {
				//error
			});
	}
}

function changeAccountName(data) {
	return {
		type: CHANGE_ACCOUNT_NAME,
		data
	};
}

function changeSettingName() {
	return {
		type: CHANGE_SETTING_NAME
	};
}

function changeSettingProfile() {
	return {
		type: CHANGE_SETTING_PROFILE
	};
}

export function updateSettingName(id, token, name) {
	return function (dispatch) {
		return fetch(domainUrl + updateSettingNameApi, {
			method: 'POST',
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			},
			body: JSON.stringify({
				'user': id,
				'token': token,
				'name': name
			})
		})
			.then((response => {
				if (response.ok) {
					return true;
				}
			}))
			.then(() => {
				localStorage.setItem("name", name);
				dispatch(changeAccountName(name));
				dispatch(changeSettingName());
			}).catch(() => {
				//error
			});
	}
}

export function createSettingProfile(id, token, file) {
	return function (dispatch) {
		const fileData = new FormData();
		fileData.append("file", file, id + '.jpg');
		fileData.append("user", id);
		fileData.append("token", token);
		return fetch(domainUrl + createSettingProfileApi, {
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
				dispatch(changeSettingProfile());
			});
	}
}