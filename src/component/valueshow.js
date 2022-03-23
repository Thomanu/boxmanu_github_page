import React, { Component } from "react";
import { useState } from 'react'
import { itemList } from '../bdd/itemList'
import Item from './item'
import ItemCategories from './itemcategories'


function ValueShow({ box, updateBox }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = itemList.reduce(
		(acc, item) =>
			acc.includes(item.category) ? acc : acc.concat(item.category),
		[]
	)

	function addToBox(name, surface) {
		const currentFurnitureSaved = box.find((item) => item.name === name)
		if (currentFurnitureSaved) {
			const boxFilteredCurrentItem = box.filter(
				(item) => item.name !== name
			)
			updateBox([
				...boxFilteredCurrentItem,
				{ name, surface, amount: currentFurnitureSaved.amount + 1 }
			])
		} else {
			updateBox([...box, { name, surface, amount: 1 }])
		}
	}

	return (
		<div className='app__shoppingList'>
			<ItemCategories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='app__boxList'>
				{itemList.map(({ id, cover, name, surface, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<Item
								cover={cover}
								name={name}
								surface={surface}
							/>
							<button onClick={() => addToBox(name, surface)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ValueShow
