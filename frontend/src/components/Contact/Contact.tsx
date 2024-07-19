import type { SVGProps } from 'react';
import Input from '../common/Input';
import { EInputType } from '../../types/inputTypes';
import ActionButton from '../common/ActionButton';
import { EMenuType } from '../../types/menuTypes';
import { useForm, ValidationError } from '@formspree/react';

export function MaterialSymbolsMail(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"></path></svg>);
}

export function IcOutlinePhone(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1"></path></svg>);
}

const ContactForm = () => {

	const [state, handleSubmit] = useForm("Roulettech");

	return (
		<div className={`w-full h-full border-2 border-standout border-solid rounded-3xl p-5`}>
			<div className={`flex flex-col w-full h-full justify-center gap-y-8`}>
				<form action='https://formspree.io/f/movajaqy' method='POST'
					className={`w-full flex flex-col gap-y-8`}>
					<Input id='email' type={EInputType.EMAIL} placeholder='Email address' />
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<textarea placeholder='Message' id='message' name='message'
						className={`bg-transparent outline-none text-white font-body w-full flex-1 px-5 py-2
						text-lg border-2 border-white border-solid rounded-3xl focus:border-standout`}
						></textarea>
					<ValidationError prefix="Message" field="message" errors={state.errors} />
					<button type="submit" disabled={state.submitting}
						className={`group inline-flex items-center gap-x-2 py-2 px-6 font-medium rounded-full
							focus:outline-none w-full justify-center text-lg bg-standout text-primary`}>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

const Contact = () => {
	return (
		<div id='hero-section' className={`flex flex-col relative w-full h-fit min-h-[80vh] bg-primary`}>
			<div className={`flex flex-col lg:flex-row w-full h-full max-w-7xl py-28 mx-5 lg:mx-auto gap-8`}>
				<div className={`flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full gap-8 justify-center items-start`}>
					<h1 className={`text-standout font-title text-4xl font-extrabold`}>
						We are always here to help you!
					</h1>
					<p className={`text-background font-body text-2xl text-justify`}>
						By default, this contact form will send an email to me (<span className={`text-standout`}>selkhamlichi97@gmail.com</span>), I will be happy to hear from you.
						You can use this form to invite me to the next step in the hiring process, this is will tell you a lot about the quality of my work. 
						<br />
					</p>
					<h2 className={`text-standout font-title text-2xl font-bold	`}>
						You can also reach out here:
					</h2>
					<div className={`flex flex-col w-full gap-y-3 -mt-5`}>
						<p className={`text-white text-xl font-body flex flex-row items-center gap-x-3`}>
							<span className={`text-standout w-fit`}><MaterialSymbolsMail /></span>
							 selkhamlichi97@gmail.com
						</p>
						<p className={`text-white text-xl font-body flex flex-row items-center gap-x-3`}>
							<span className={`text-standout w-fit`}><IcOutlinePhone /></span>
							 +212 6 29 63 60 02
						</p>
					</div>
				</div>
				<div className={`w-full lg:w-1/2 h-1/2 lg:h-full`}>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default Contact;