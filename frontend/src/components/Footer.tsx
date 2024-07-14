import WhiteLogo from '../assets/logo/roulettech-logo-white.svg';
import { EInputType } from '../types/inputTypes';
import { EMenuType } from '../types/menuTypes';
import ActionButton from './common/ActionButton';
import Input from './common/Input';
import Link from './common/Link';

const Footer = () => {

	return (
		<div className={`w-full bg-primary justify-center flex flex-row py-24 px-3 font-body`}>
			<div className={`w-full max-w-7xl grid grid-cols-1 md:grid-cols-3`}>
				<div className={`flex flex-col items-start justify-between py-8`}>
					<div className={`w-1/2 md:w-3/4`}>
						<WhiteLogo />
					</div>
					<p className={`text-white text-base sm:text-base md:text-lg`}>Roulettech Inc, All rights reserved.</p>
				</div>
				<div className={`flex flex-col items-start justify-between py-8`}>
					<Link text='Home' url='/' />
					<Link text='About us' url='/' />
					<Link text='Contact us' url='/' />
				</div>
				<div className={`flex flex-col items-start justify-between gap-y-3 py-8`}>
					<p className={`text-white text-base sm:text-base md:text-xl`}>
					Join our newsletter!
					</p>
					<div className={`flex flex-col gap-y-4 w-full`}>
						<Input type={EInputType.EMAIL} placeholder='john@example.com' />
						<ActionButton text='Subscribe' type={EMenuType.PRIMARY_BUTTON}
							action={() => alert('subscribe')} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;