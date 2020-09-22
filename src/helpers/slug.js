import slugify from 'slugify';

export const slugUrl = (...text, delimiter = " - ") => {
	return slugify(text.join(" "), delimiter).toLowerCase();
}
