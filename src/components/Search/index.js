import React from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useForm } from '../../hooks';

export const Search = () => {
	const [values, handleChange] = useForm({ search: "" });

	const handleSearch = () => {

	}

	return (
		<div className="search-container" style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg")' }}>
			<div className="search-title">
				<h2>Bienvenidos.</h2>
				<h3>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
			</div>
			<div className="search-input-container">
				<OutlinedInput
					className="search-input"
					type="search"
					name="search"
					value={values.search}
					onChange={handleChange}
					placeholder="Buscar una película, programa de televisión, persona ......"
					onClick={handleSearch}
					endAdornment={
						<InputAdornment position="end">
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
			</div>
		</div>
	)
}