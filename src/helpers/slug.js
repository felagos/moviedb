import slugify from 'slugify';

export const slug = (text, delimiter = " - ") => {
	text = text.replace(" ", "-");
	return slugify(text, delimiter).toLowerCase();
}
