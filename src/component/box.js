import React, { Component } from "react";
import { useState } from 'react'

import Display from './boxdisplay'

function Box({ box, updateBox }) {
	const [isShowing, setisShowing] = useState(true)
	const total = box.reduce(
		(acc, boxType) => acc + boxType.amount * boxType.surface,
		0
	)
	return isShowing ? (
		<div className='app__cart'>
			<button
				className='app__cart__togglebutton'
				onClick={() => setisShowing(false)}
			>
				Fermer
			</button>
			{box.length > 0 ? (
				<div>
					<h2>Détails de votre box :</h2>
					<ul>
						{box.map(({ name, surface, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {surface} m3 x {amount}
							</div>
						))}
					</ul>
					<h3>Surface de vos biens : {total} m3</h3>
					<Display total={total}/>
					<button onClick={() => updateBox([])}>Reinitialisation</button>
				</div>
			) : (
				<div>Sélectionnez un bien pour commencer votre estimation</div>
			)}
		</div>
	) : (
		<div className='app__cart__closed'>
			<button
				className='app__cart__togglebutton'
				onClick={() => setisShowing(true)}
			>
			    Détails de votre Box
			</button>
		</div>
	)
}

export default Box
