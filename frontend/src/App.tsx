import { Fragment } from 'react/jsx-runtime'
import './App.css'
import Header from './components/Header'
import HeroScetion from './components/home/HeroSection'

function App() {

	return (
		<Fragment>
			<Header />
			<HeroScetion />
			<div className='h-96 bg-green-900' id='testing'></div>
			<div className='h-96 bg-green-800'></div>
			<div className='h-96 bg-green-700'></div>
			<div className='h-96 bg-green-600'></div>
			<div className='h-96 bg-green-500'></div>
			<div className='h-96 bg-green-400'></div>
			<div className='h-96 bg-green-300'></div>
			<div className='h-96 bg-green-100'></div>
		</Fragment>
	)
}

export default App
