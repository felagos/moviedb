import React from 'react';
import PropTypes from 'prop-types';
import { MediaCard } from '../MediaCard';
import Icon from '@material-ui/core/Icon';

export const ListMedia = ({ media }) => {
	const handleDownScroll = (evt) => {
		const btn = evt.target.parentNode;
		btn.nextElementSibling.scrollLeft -= 300
	}

	const handleUpScroll = (evt) => {
		const btn = evt.target.parentNode;
		btn.previousElementSibling.scrollLeft += 300
	}

	return (
		<div className="media-carousel">
			<div className="media-btn-carousel">
				<Icon className="media-icon-carousel" fontSize="large" onClick={handleDownScroll}>arrow_back_ios</Icon>
			</div>
			<div className="media-list-container">
				{
					media.map((item, idx) => (
						<MediaCard key={idx} item={item} />
					))
				}
			</div>
			<div className="media-btn-carousel" >
				<Icon className="media-icon-carousel" fontSize="large" onClick={handleUpScroll}>arrow_forward_ios</Icon>
			</div>
		</div>

	)
}

ListMedia.propTypes = {
	media: PropTypes.arrayOf(PropTypes.object).isRequired
};
