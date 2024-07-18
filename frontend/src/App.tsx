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
import UserProvider, { UserContext } from './context/UserContext'
import { useContext } from 'react'
import Profile from './components/profile/Profile'

function App() {

	const { user } = useContext(UserContext) || { user: null }

	// console.log('app', user)

	return (
		<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={!user ? <About /> : <Profile />} />
					<Route path='/contact' element={!user ? <Contact /> : <Profile />} />
					<Route path='/login' element={!user ? <Login /> : <Profile />} />
					<Route path='/sign-up' element={!user ? <Signup /> : <Profile />} />
					<Route path='/forgot-password' element={!user ? <ForgotPassword /> : <Profile />} />
					<Route path='/profile' element={user ? <Profile /> : <Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			<Footer />
		</Router>
	)
}

export default App
