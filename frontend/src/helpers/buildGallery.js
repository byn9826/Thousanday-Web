import { domainUrl } from './config.js';

export default function buildGallery(data) {
	return data.map(function(image) {
		return [
			domainUrl + '/public/pet/' + image.pet_id + '/moment/' + image.image_name,
			image.moment_message,
			'/moment/' + image.moment_id
		];
	});
}