import React from 'react';

export const Search = () => {
	return (
		<div className="search-container" style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg")' }}>
			<div className="search-title">
				<h2>Bienvenidos.</h2>
				<h3>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
			</div>
			<div className="search-input-container">
				<input className="search-input" type="search" placeholder="Buscar una película, programa de televisión, persona ......" />
			</div>
		</div>
	)
}
