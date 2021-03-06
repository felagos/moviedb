import React from 'react';
import PropTypes from 'prop-types';
import { MediaCard } from '../MediaCard';
import { MediaList } from './styles';

export const ListMedia = React.memo(
	({ data, title, type }) => {

		let cards = [];
		if (type === "movie")
			cards = data.map((item, idx) => (<MediaCard key={idx} item={item} type={type} />))

		if (type === "iframes")
			cards = data.map((item, idx) => (<iframe key={idx} title={item.name} width="560" height="315" src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ padding: "10px" }}></iframe>))

		return (
			<>
				<h2>{title}</h2>
				<MediaList>
					{cards.length === 0 ? <h3>No se encontraron resultados</h3> : cards}
				</MediaList>
			</>

		)
	}
);

ListMedia.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['movie', 'iframes']).isRequired
};
