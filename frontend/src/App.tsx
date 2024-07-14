import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'
import NotFound from './components/404'

function App() {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
