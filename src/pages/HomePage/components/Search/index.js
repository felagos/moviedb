import React from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../../hooks';
import { slug } from '../../../../helpers';

import './styles.scss';

export const Search = () => {
	const history = useHistory();
	const [values, handleChange] = useForm({ search: "" });

	const handleSearch = () => {
		const { search } = values;
		const url = `/search/?query=${slug(search, "+")}`;
		history.push(url);
	}

	const handleKeyUp = (evt) => {
		if(evt.key === "Enter") {
			handleSearch();
		}
	}

	return (
		<div className="search-container" style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg")' }}>
			<div className="search-title">
				<h2>Bienvenidos.</h2>
				<h3>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
			</div>
			<div className="search-input-container">
				<OutlinedInput
					autoComplete="off"
					className="search-input"
					type="search"
					name="search"
					value={values.search}
					onChange={handleChange}
					onKeyUp={handleKeyUp}
					placeholder="Buscar una película, programa de televisión, persona ......"
					endAdornment={
						<InputAdornment position="end">
							<IconButton onClick={handleSearch}>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
			</div>
		</div>
	)
}
