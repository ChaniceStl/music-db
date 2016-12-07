import React from 'react'
import {render} from 'react-dom'

const App = (props) => (
	<div>
		<h1> Hey </h1>
	</div>
)

render(
	<App/>,
	document.getElementById('app')
	)