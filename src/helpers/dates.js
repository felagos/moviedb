const months = ["En", "Feb", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];

export const castToMonthDay = date => {
	if(!date) return "";
	const tokens = date.split("-");
	const year = tokens[0];
	const month = parseInt(tokens[1]);
	const day = tokens[2];

	return `${months[month]} ${day}, ${year}`;
};


export const getYear = date => {
	const tokens = date.split("-");
	return tokens[0];
}
