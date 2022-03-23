import { useState } from 'react'
import Navigation from './navigation'
import logo from '../assets/logo.jpg'
import Box from './box'
import ValueShow from './valueshow'
import Form from './form'


function App() {
	const [box, updateBox] = useState([])
	return (
		<div>
			<Navigation>
				<img src={logo} alt='LA MANU BOX' className='app__logo' />
				<h1 className='app__title'><span className="title__color1">B</span>ox<span className="title__color1">M</span>anu</h1>
			</Navigation>
			<div className='app_layout__inner'>
			
				<ValueShow box={box} updateBox={updateBox} />
				<Form />
				<Box box={box} updateBox={updateBox} />
				
			</div>
		
		</div>
	)
}

export default App
