const months = ["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];
const fullMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const castToMonthDay = date => {
	if (!date) return "";
	const tokens = date.split("-");
	const year = tokens[0];
	const month = parseInt(tokens[1]) - 1;
	const day = tokens[2];

	return `${months[month]} ${day}, ${year}`;
};

export const getYear = date => {
	const tokens = date.split("-");
	return tokens[0];
}

export const getFullDate = date => {
	if (!date) return "";
	const tokens = date.split("-");
	const year = tokens[0];
	const month = parseInt(tokens[1]) - 1;
	const day = tokens[2];

	return `${day} ${fullMonths[month]} del ${year}`;
}