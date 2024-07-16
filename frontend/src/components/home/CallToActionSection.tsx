import { EMenuType } from "../../types/menuTypes";
import Button from "../common/Button";

const CallToActionSection = () => {
	return (
		<div className={`w-full flex flex-col max-w-7xl mx-3 lg:mx-auto py-28 bg-background
			items-center justify-center`}>
			<h1 className={'text-center font-title font-extrabold text-3xl md:text-4xl text-primary'}>
				Make the right choice!
				<br />
				Be one of our happy customers now.
			</h1>
			<p className={`text-center mt-5 text-lg md:text-2xl font-body font-semibold`}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio delectus quidem quod reprehenderit temporibus enim tenetur amet repudiandae sunt! Ab soluta totam molestiae eaque incidunt facere odit cum! Quo, cupiditate.
			</p>
			<div className={`flex flex-col md:flex-row items-center justify-center mt-10 w-10/12 md:w-3/4 bg-primary py-14 px-10
				rounded-3xl gap-6 border-3 border-solid border-standout`}>
				<div className={`w-52`}>
					<Button text="Get started" type={EMenuType.PRIMARY_BUTTON} link="/sign-up" />
				</div>
				<div className={`w-52`}>
					<Button text="Contact us" type={EMenuType.SECONDARY_BUTTON} link="/contact" />
				</div>
			</div>
		</div>
	)
}

export default CallToActionSection;