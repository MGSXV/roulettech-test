import { EMenuType, IMenuItem } from "../types/menuTypes";
import Logo from '../assets/logo/roulettech-logo-white.svg';
import { useEffect } from "react";

const NavbarButton = () => (
	<button className={`hs-collapse-toggle size-10 flex justify-center items-center text-base
			font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50
			disabled:pointer-events-none`} type="button" data-hs-collapse="#navbar-collapse"
			aria-controls="navbar-collapse" aria-label="Toggle navigation">
		<svg className={`hs-collapse-open:hidden flex-shrink-0 size-4`}
				xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
				strokeLinejoin="round">
			<line x1="3" x2="21" y1="6" y2="6"/>
			<line x1="3" x2="21" y1="12" y2="12"/>
			<line x1="3" x2="21" y1="18" y2="18"/>
		</svg>
		<svg className="hs-collapse-open:block hidden flex-shrink-0 size-4"
				xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
				strokeLinejoin="round">
			<path d="M18 6 6 18"/>
			<path d="m6 6 12 12"/>
		</svg>
	</button>
)

const MenuItem = ({ item, isLast }: { item: IMenuItem, isLast: boolean }) => (
	item.type === EMenuType.LINK ? (
		<a href={item.link} className={`py-3 px-5 sm:px-3 md:py-4 text-base text-background
				hover:text-neutral-300 focus:outline-none focus:text-neutral-300`}>
			{item.text}
		</a>) : (<div className={`w-full md:w-fit`}>
		<a href={item.link}
				className={`group inline-flex items-center gap-x-2 py-2 px-6 font-medium text-sm rounded-full
				focus:outline-none w-full justify-center ${!isLast ? "mb-4 md:mb-0" : ""}
				${item.type === EMenuType.PRIMARY_BUTTON ? "bg-standout text-primary" :
				"bg-primary text-standout border border-standout border-solid hover:bg-standout hover:text-primary"}`}>
			{item.text}
		</a>
	</div>) 
)

const Header = () => {

	useEffect(() => {
		const toggleButton = document.querySelector('.hs-collapse-toggle');
		const collapseMenu = document.querySelector('#navbar-collapse');
		
		const toggleMenu = () => {
			collapseMenu?.classList.toggle('hidden');
		}

		toggleButton?.addEventListener('click', toggleMenu);

		// Cleanup event listener on unmount
		return () => {
			toggleButton?.removeEventListener('click', toggleMenu);
		}
	}, []);

	const menuItems: IMenuItem[] = [
		{ link: '/', text: 'Home', type: EMenuType.LINK },
		{ link: '/about', text: 'About', type: EMenuType.LINK },
		{ link: '/contact', text: 'Contact', type: EMenuType.LINK },
		{ link: '/login', text: 'Login', type: EMenuType.PRIMARY_BUTTON },
		{ link: '/register', text: 'Register', type: EMenuType.SECONDARY_BUTTON },
	]

	const menuComp = menuItems.map((item, index) => (
		<MenuItem key={index} item={item} isLast={index === menuItems.length - 1} />
	))

	return (
		<header className={`fixed top-4 inset-x-0 flex flex-wrap md:justify-center md:flex-nowrap z-50 w-full`}>
			<nav className={`relative max-w-7xl w-full bg-primary rounded-[30px] py-3 px-5 font-title
					md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-5 font-bold`}
					aria-label="Global">
				<div className={`flex items-center justify-between`}>
					<a href="/" className={`no-underline w-32 md:w-44 text-white`}>
						<Logo />
					</a>
					<div id="nav-btn-container" className={`md:hidden`}>
						<NavbarButton />
					</div>
				</div>
				<div id="navbar-collapse" className={`hs-collapse hidden overflow-hidden transition-all
						duration-300 basis-full grow md:block`}>
					<div className={`flex flex-col md:flex-row md:items-center px-2 py-3 md:py-1
							md:justify-end md:ps-7 lg:gap-x-3 md:gap-x-2 md:gap-y-3
							items-center`}>
						{menuComp}
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header;