import React from 'react';
import { HomeLayout } from '../components/HomeLayout';

export const HomePage = () => {
	return (
		<HomeLayout>
			<div className="home-section">
				<h2>Popular</h2>
			</div>
			<div className="home-section">
				<h2>Proximamente</h2>
			</div>
			<div className="home-section">
				<h2>Tendencias</h2>
			</div>
		</HomeLayout>
	)
}
