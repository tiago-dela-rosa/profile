import React from 'react';
import BoloPadoca from '../assets/bolodepadoca.jpg';
import './Bolopadoca.css';

export default function Home(){
	
	let hiddenContent = {}
	hiddenContent.profile = 'bolodepadoca.com/profile'
	hiddenContent.tindev = 'bolodepadoca.com/tindev'

	console.table(hiddenContent);

	return (
		<div id="container">
			<img src={BoloPadoca} alt="Bolo de Padoca" />
		</div>
	)
}