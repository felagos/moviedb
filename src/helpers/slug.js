import slugify from 'slugify';

export const slug = (text, delimiter = " - ") => {
	return slugify(text, delimiter).toLowerCase();
}
