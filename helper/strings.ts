/**
 * Return a pixel string -> 4px
 *
 * @param number
 * @returns {string}
 */
export function toPixel( number ) {
	return number + 'px';
}

/**
 * Javascript version of sprintf
 *
 * Usage: Format( '{0} is {1}', 'ES6', 'Awesome' );
 *
 * @param {String} format
 * @returns {*}
 */
export function Format( format ) {
	let args = Array.prototype.slice.call( arguments, 1 );
	return format.replace( /{(\d+)}/g, function( match, number ) {
		return typeof args[ number ] !== 'undefined'
			? args[ number ]
			: match
			;
	} );
}

export function isFloat( value, decimal_point_regex ) {
	let regex = new RegExp( "^[0-9]+((\." + decimal_point_regex + ")[0-9]+)?$" );

	return value.match( regex );
}