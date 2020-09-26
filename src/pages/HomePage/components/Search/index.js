import React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../../hooks';
import { slug } from '../../../../helpers';
import { SearchContainer, Title, InputSearch, Subtitle } from './styles';

export const Search = () => {
	const history = useHistory();
	const [values, handleChange] = useForm({ search: "" });

	const handleSearch = () => {
		const { search } = values;
		const url = `/search/?query=${slug(search, "+")}`;
		history.push(url);
	}

	const handleKeyUp = (evt) => {
		if (evt.key === "Enter") {
			handleSearch();
		}
	}

	return (
		<SearchContainer>
			<Title>
				<h2>Bienvenidos.</h2>
				<Subtitle>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</Subtitle>
			</Title>
			<InputSearch
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
		</SearchContainer>
	)
}
