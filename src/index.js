import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './scss/main.scss'
import 'slick-carousel/slick/slick.css'
import { BrowserRouter as  Router } from 'react-router-dom'
// import 'slick-carousel/slick/slick-theme.css'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'),
)
