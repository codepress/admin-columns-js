export function removeParameterFromUrl(url, parameter) {
	return url
		.replace(new RegExp('[?&]' + parameter + '=[^&#]*(#.*)?$'), '$1')
		.replace(new RegExp('([?&])' + parameter + '=[^&]*&'), '$1');
}