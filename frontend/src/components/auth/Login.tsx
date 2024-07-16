import { useEffect } from "react";
import { EInputType } from "../../types/inputTypes";
import Input from "../common/Input";
import client1 from "../../assets/images/client-01.jpg";
import client2 from "../../assets/images/client-02.jpg";
import client3 from "../../assets/images/client-03.jpg";
import client4 from "../../assets/images/client-04.jpg";
import GoogleAuth from "../common/GoogleAuth";

const LoginForm = () => {

	useEffect(() => {

		const focusEmail = () => {
			const email = document.querySelector("#email-label") as HTMLInputElement
			const password = document.querySelector("#password-label") as HTMLInputElement
			email.classList.add("text-standout")
			email.classList.remove("text-background")
			password.classList.add("text-background")
			password.classList.remove("text-standout")
		}

		const focusPassword = () => {
			const email = document.querySelector("#email-label") as HTMLInputElement
			const password = document.querySelector("#password-label") as HTMLInputElement
			password.classList.add("text-standout")
			password.classList.remove("text-background")
			email.classList.add("text-background")
			email.classList.remove("text-standout")
		}

		document.title = "Login"
		const email = document.querySelector("#email-label") as HTMLInputElement
		const password = document.querySelector("#password-label") as HTMLInputElement
		const email_input = document.querySelector("#login-email") as HTMLInputElement
		const password_input = document.querySelector("#login-password") as HTMLInputElement
		email.addEventListener("click", () => focusEmail())
		password.addEventListener("click", () => focusPassword())
		email_input.addEventListener("focus", () => focusEmail())
		password_input.addEventListener("focus", () => focusPassword())
		return () => {
			email.removeEventListener("click", () => focusEmail())
			password.removeEventListener("click", () => focusPassword())
			email_input.removeEventListener("focus", () => focusEmail())
			password_input.removeEventListener("focus", () => focusPassword())
		}
	}, [])

	return (
		<div className={`flex flex-col items-start justify-center gap-y-3`}>
			<div className={`flex flex-col w-full gap-y-2`}>
				<label className={`text-lg font-body font-semibold text-background cursor-pointer peer-focus:text-standout`}
					id="email-label" htmlFor="login-email">
					E-mail
				</label>
				<Input type={EInputType.EMAIL} id="login-email" placeholder="selkhamlich97@gmail.com" />
			</div>
			<div className={`flex flex-col w-full gap-y-2`}>
				<label className={`text-lg font-body font-semibold text-background cursor-pointer focus-within:text-standout`}
					id="password-label" htmlFor="login-password">
					Password:
				</label>
				<Input type={EInputType.PASSWORD} id="login-password" placeholder="Password" />
			</div>
			<div className={`flex flex-col w-full gap-y-3`}>
				<button className={`bg-standout text-primary font-body font-semibold text-lg py-2
						rounded-full mt-3`}>
					Login
				</button>
			</div>
			<div className={`flex flex-col md:flex-row w-full items-center justify-between gap-y-2`}>
				<div className={`flex items-center gap-x-2`}>
					<input type="checkbox" id="remember-me" className={`peer h-5 w-5 border-2 border-white
						rounded-md bg-white appearance-none focus:outline-none`} />
					<label htmlFor="remember-me" className={`text-background font-body font-semibold text-lg
							select-none`}>
						Remember me
					</label>
				</div>
				<a href="/forgot-password" className={`text-standout text-lg font-body font-semibold`}>
					Forgot password?
				</a>
			</div>
		</div>
	)
}

const Client = ({name, picture, job, quote}: {name: string, picture: string, job: string, quote: string}) => {
	return (
		<div className={`flex flex-col md:flex-row items-center rounded-3xl md:rounded-full gap-4 w-full bg-gray-800 px-5 py-3 select-none`}>
			<div>
				<img src={picture} alt={name} className="size-16 min-w-16 min-h-16 rounded-full" />
			</div>
			<div>
				<h3 className="text-background font-body font-semibold text-lg">{quote}</h3>
				<p className="text-background font-body font-semibold capitalize">{`${name}, ${job}`}</p>
			</div>
		</div>
	)
}

const Login = () => {

	const clients = [
		{name: "Kevin", picture: client1, job: "Online store owner", quote: "Everything about this is just perfect!"},
		{name: "Fatima", picture: client2, job: "Baker", quote: "I have no words for this!"},
		{name: "Omar", picture: client3, job: "Entrepreneur", quote: "God! I love these guys!"},
		{name: "sara", picture: client4, job: "Small business owner", quote: "This application made my life easier!"},
	]

	const clientsList = clients.map((client, index) => (
		<Client key={index} name={client.name} picture={client.picture} job={client.job} quote={client.quote} />
	))

	return (
		<div className={`flex flex-col items-center justify-center w-full h-fit min-h-[80vh] py-28 bg-primary`}>
			<div className={`w-full max-w-7xl h-full px-5 py-12 flex flex-col md:flex-row gap-8`}>
				<div className={`flex flex-col w-full md:w-1/2 gap-y-5`}>
					<LoginForm />
					{/* <div className="bg-white h-full w-[1px]"></div> */}
					<hr className="bg-white" />
					<GoogleAuth />
				</div>
				<div className={`flex flex-col items-center justify-between w-full md:w-1/2 gap-y-5`}>
					{clientsList}
				</div>
			</div>
		</div>
	)
}

export default Login;