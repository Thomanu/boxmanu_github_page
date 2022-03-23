import React, { Component } from "react";


function FurnitureItem({ cover, name, surface }) {
	return (
		<li className='app__furnitureItem'>
			<span className='app__furnitureItem__surface'>{surface} ~ m3</span>
			<img className='app__furnitureItem__cover' src={cover} alt={`${name} cover`} />
			{name}
		
		</li>
	)
}

export default FurnitureItem
