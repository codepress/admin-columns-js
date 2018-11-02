export function getOffset( el ) {
	let rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	return {
		top : Math.round( rect.top + scrollTop ),
		left : Math.round( rect.left + scrollLeft )
	};
}