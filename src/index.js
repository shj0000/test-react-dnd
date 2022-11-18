
	import { render } from 'react-dom'
	import MyFirstGrid from './grid'
	import './default.css'

	function App() {
		return (
			<div className="App">
				<MyFirstGrid>
				</MyFirstGrid>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
