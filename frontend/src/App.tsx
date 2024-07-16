import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home/Home'
import NotFound from './components/404'
import About from './components/about/About'
import Contact from './components/Contact/Contact'
import Login from './components/auth/Login'
import ForgotPassword from './components/auth/ForgotPassword'
import Signup from './components/auth/Sign-up'

function App() {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/login' element={<Login />} />
				<Route path='/sign-up' element={<Signup />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
