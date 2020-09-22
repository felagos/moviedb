import React from 'react';

export const ListIframe = ({ data, title }) => {
	return (
		<>
			<h2>{title}</h2>
			<div className="media-list-container iframe">
				{
					data.map((r, idx) => (
						<iframe key={idx} title={r.name} width="560" height="315" src={`https://www.youtube.com/embed/${r.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{padding: "10px"}}></iframe>
					))
				}
			</div>
		</>
	)
}
