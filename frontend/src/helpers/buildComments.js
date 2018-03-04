import { domainUrl } from './config.js';

export default function buildComments(data) {
	return data.map(function(comment) {
		return [
			comment.comment_content,
			domainUrl + "/img/user/" + comment.user_id + ".jpg",
			"/user/" + comment.user_id,
			new Date(comment.comment_time).toISOString().substring(0, 10)
		];
	});
}