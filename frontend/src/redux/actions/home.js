export const GET_HOME_DATA = "home/GET_HOME_DATA";

function getHomeData(homeData) {
	return {
		type: GET_HOME_DATA,
		homeData
	}
}

export function loadHomeData(load) {
	return function (dispatch) {
		return fetch('https://smilings.me/index/read?load=' + load)
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