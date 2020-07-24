export function formatDate( format: string, date: string ): string {
	// format 2017-12-31

	let year = date.substr(0,4);
	let month = date.substr(5,2);
	let day = date.substr(8,2);

	return jQuery.datepicker.formatDate( format, new Date( year, month - 1, day ) );
}