import { EInputType } from "../../types/inputTypes"
import GoogleAuth from "../common/GoogleAuth"
import Input from "../common/Input"
import Link from "../common/Link"
import SignupImg from "../../assets/images/sign-up.png"

const SignupForm = () => {
	return  (
		<div className={`flex flex-col items-start justify-center gap-y-3 w-full`}>
			<div className={`flex flex-col w-full gap-y-2`}>
				<label className={`text-lg font-body font-semibold text-background cursor-pointer peer-focus:text-standout`}
					id="email-label" htmlFor="full-name">
					Full name:
				</label>
				<Input placeholder="Soufiane Elkhamlichi" type={EInputType.TEXT} id="full-name" />
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
					id="email-label" htmlFor="email">
					Password:
				</label>
				<Input placeholder="password" type={EInputType.PASSWORD} id="email" />
			</div>
			<div className={`flex flex-col w-full gap-y-3`}>
				<button className={`bg-standout text-primary font-body font-semibold text-lg py-2
						rounded-full mt-3`}>
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