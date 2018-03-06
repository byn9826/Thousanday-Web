import { 
	domainUrl, readExploreMomentsApi
} from '../../helpers/config';

export const CHANGE_EXPLORE_TYPE = "explore/CHANGE_EXPLORE_TYPE";
export const CHANGE_EXPLORE_NATURE = "explore/CHANGE_EXPLORE_NATURE";
export const CHANGE_EXPLORE_MOMENTS = "explore/CHANGE_EXPLORE_MOMENTS";

function changeExploreMoments(momentsData, type, nature, load) {
	return {
		type: CHANGE_EXPLORE_MOMENTS,
		data: {
			momentsData, type, nature, load
		}
	}
}

export function readExploreMoments(type, nature, load) {
	return function (dispatch) {
		const apiParams = '?load=' + load + '&nature=' + nature + '&type=' + type;
		return fetch(domainUrl + readExploreMomentsApi + apiParams)
			.then((response => {
				return response.json();
			}))
			.then((json) => {
				dispatch(changeExploreMoments(json, type, nature, load))
			}).catch(() => {
				//error
			});
	}
}

export function selectExploreType(type, nature, newType) {
	if (newType === -1) {
		return {
			type: CHANGE_EXPLORE_TYPE,
			data: null
		}
	} else if (nature === null) {
		return {
			type: CHANGE_EXPLORE_TYPE,
			data: newType
		}
	} else {
		return readExploreMoments(newType, nature, 0);
	}
}

export function selectExploreNature(nature, type, newNature) {
	if (newNature === -1) {
		return {
			type: CHANGE_EXPLORE_NATURE,
			data: null
		}
	} else if (type === null) {
		return {
			type: CHANGE_EXPLORE_NATURE,
			data: newNature
		}
	} else {
		return readExploreMoments(type, newNature, 0);
	}
}