import { EInputType } from "../../types/inputTypes"
import GoogleAuth from "../common/GoogleAuth"
import Input from "../common/Input"
import Link from "../common/Link"
import SignupImg from "../../assets/images/sign-up.png"
import axios from "axios"
import { API_URL, SEP } from "../../conf/globals"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

const SignupForm = () => {

	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const signupHandler = async (e: any) => {
		e.preventDefault()
		const usernameField = document.querySelector('#username') as HTMLInputElement
		const emailField = document.querySelector('#email') as HTMLInputElement
		const passwordField = document.querySelector('#password') as HTMLInputElement
		try {
			const email = emailField.value
			const password = passwordField.value
			const username = usernameField.value
			const response = await axios.post(`${API_URL}${SEP}signup`, {username, email, password})
			localStorage.setItem('auth_token', response.data.token)
			setUser({id: response.data.id,username: response.data.username as string, email: response.data.email as string})
			navigate('/profile')
			console.log(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	return  (
		<div className={`flex flex-col items-start justify-center gap-y-3 w-full`}>
			<div className={`flex flex-col w-full gap-y-2`}>
				<label className={`text-lg font-body font-semibold text-background cursor-pointer peer-focus:text-standout`}
					id="username-label" htmlFor="username">
					Username:
				</label>
				<Input placeholder="MGSXV" type={EInputType.TEXT} id="username" />
			</div>
			<div className={`flex flex-col w-full gap-y-2`}>
				<label className={`text-lg font-body font-semibold text-background cursor-pointer peer-focus:text-standout`}
					id="email-label" htmlFor="email">
					Email:
				</label>
				<Input placeholder="selkhamlichi97@gmail.com" type={EInputType.EMAIL} id="email" />
			</div>
			<div className={`flex flex-col w-full gap-y-2`}>
				<label className={`text-lg font-body font-semibold text-background cursor-pointer peer-focus:text-standout`}
					id="password-label" htmlFor="password">
					Password:
				</label>
				<Input placeholder="password" type={EInputType.PASSWORD} id="password" />
			</div>
			<div className={`flex flex-col w-full gap-y-3`}>
				<button className={`bg-standout text-primary font-body font-semibold text-lg py-2
						rounded-full mt-3`} onClick={(e) => signupHandler(e)}>
					Sign up
				</button>
			</div>
		</div>
	)
}

const Signup = () => {
	return (
		<div className={`flex flex-col items-center justify-center w-full h-fit min-h-[80vh] py-28 bg-primary`}>
			<div className={`w-full max-w-7xl h-full px-5 py-12 flex flex-col md:flex-row gap-8`}>
				<div className={`flex flex-col w-full md:w-1/2 gap-y-5 items-center justify-center`}>
					<h1 className={`font-title font-bold text-4xl text-background text-center`}>
						Create an account
					</h1>
					<h2 className={`font-body text-start text-background text-base flex flex-row items-center gap-1`}>
						Already have an account?<Link text="Login" url="/login" custom_style="text-sm md:text-base lg:text-xl" />
					</h2>
					<GoogleAuth />
					<SignupForm />
				</div>
				<div className={`flex flex-col w-full md:w-1/2 gap-y-5 items-center justify-center`}>
					<img src={SignupImg} alt="sign-up" />
				</div>
			</div>
		</div>
	)
}

export default Signup