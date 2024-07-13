import { useEffect, type SVGProps } from 'react';
import { cyrcleOverText } from '../../lib/text-styling';
import Button from '../common/Button';
import { EMenuType } from '../../types/menuTypes';

export function MingcuteArrowsDownFill(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M5.94 5.94a1.5 1.5 0 0 1 2.12 0L12 9.878l3.94-3.94a1.5 1.5 0 0 1 2.12 2.122l-5 5a1.5 1.5 0 0 1-2.12 0l-5-5a1.5 1.5 0 0 1 0-2.122Zm0 6a1.5 1.5 0 0 1 2.12 0L12 15.878l3.94-3.94a1.5 1.5 0 0 1 2.12 2.122l-5 5a1.5 1.5 0 0 1-2.12 0l-5-5a1.5 1.5 0 0 1 0-2.122Z"></path></g></svg>);
}

const ScrollDownButton = ({ id }: { id: string }) => {
	const scrollTo = () => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	return (
		<div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
			<div className={`p-2 text-2xl md:text-4xl rounded-full bg-standout cursor-pointer animate-floating`}
				onClick={scrollTo}>
				<MingcuteArrowsDownFill />
			</div>
		</div>
	)
}

const HeroScetion = () => {

	useEffect(() => {
		cyrcleOverText('.main-header')
		cyrcleOverText('.sec-header')
	}, [])

	return (
		<div id='hero-section' className={`flex flex-col relative w-full h-[95vh] select-none bg-primary`}>
			<div className={`w-full h-full flex flex-col justify-center items-center`}>
				<div className={`max-w-7xl w-full flex flex-col items-start mx-2 lg:mx-5 px-4 xl:px-0
						py-32 lg:py-36 gap-y-5`}>
					<h1 className={`font-extrabold font-title text-white text-3xl md:text-6xl uppercase`}>
						<span className={`text-standout main-header text-4xl md:text-7xl`}>ROULETTECH :</span>
						<br />
						<span className={`sec-header`}>Trust is all you need</span>
					</h1>
					<div className={`max-w-7xl font-body`}>
						<p className={`mt-5 text-neutral-400 text-base md:text-lg`}>
							At Roulettech Inc, we're passionate about crafting technology that ignites everyday experiences.
							<br />
							We are the spark that ignites a wave of innovation, empowering our community to thrive.
							<br />
						</p>
					</div>
					<div className={`flex flex-col items-center md:items-start gap-y-3 mt-5`}>
						<h3 className={`text-background text-xl md:text-2xl font-body font-semibold`}>
							Make the call now or start for free!
						</h3>
						<div className={`flex flex-col w-full gap-y-3`}>
							<Button text='Join Us' link='/sign-up' type={EMenuType.PRIMARY_BUTTON} />
							<Button text='Contact Us' link='/contact' type={EMenuType.SECONDARY_BUTTON} />
						</div>
					</div>
				</div>
			</div>
			<ScrollDownButton id='testing' />
		</div>
	)
}

export default HeroScetion;