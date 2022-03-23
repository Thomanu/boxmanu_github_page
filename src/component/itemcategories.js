import React, { Component } from "react";

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='app__categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='app__categories_select'
			>
				<option value=''>---</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser les détails</button>
		</div>
	)
}

export default Categories
