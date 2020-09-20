import slugify from 'slugify';

export const slugUrl = (...text) => {
	return slugify(text.join(' '), '-').toLowerCase();
}
