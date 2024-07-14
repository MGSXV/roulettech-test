import { ElementType } from 'react'
import Airbnb from '../../assets/clients/airbnb-2-logo.svg'
import CocaCola from '../../assets/clients/coca-cola-logo.svg'
import Figma from '../../assets/clients/figma-1-logo.svg'
import MasterCard from '../../assets/clients/mastercard-2-logo.svg'
import McDonalds from '../../assets/clients/mcdonald-s-15-logo.svg'
import Shell from '../../assets/clients/shell-logo.svg'
import Slack from '../../assets/clients/slack-logo.svg'
import Tinder from '../../assets/clients/tinder-1-logo.svg'

const Client = ({ name, Logo }: { name: string, Logo: ElementType}) => {
	return (
		<div className={`hover:grayscale-0 grayscale cursor-pointer`}>
			<div className={`w-full`}>
				<Logo width="100%" height="100px" />
			</div>
			<p className={`text-center text-lg capitalize font-body font-semibold mt-3`}>
				{name}
			</p>
		</div>
	)

}

const TrustedBy = () => {

	const clients = [
		{ id: 'airbnb', src: Airbnb },
		{ id: 'cocacola', src: CocaCola },
		{ id: 'figma', src: Figma },
		{ id: 'mastercard', src: MasterCard },
		{ id: 'mcdonalds', src: McDonalds },
		{ id: 'shell', src: Shell },
		{ id: 'slack', src: Slack },
		{ id: 'tinder', src: Tinder },
	  ];

	return (
		<div id="trusted-by-section" className={`w-full flex flex-col max-w-7xl mx-3 lg:mx-auto py-28
			bg-background`}>
			<h1 className={'text-center font-title font-extrabold text-4xl text-primary'}>
				We love our job!
				<br />
				That's why we are trusted by the best companies in the world.
			</h1>
			<p className={`text-center mt-5 text-2xl font-body font-semibold`}>
				Take a look at some of the companies that loved us back:
			</p>
			<div className={`w-full py-10 px-3 mt-7 grid grid-cols-2 md:grid-cols-4 gap-5`}>
				{clients.map((client, index) => (
					<Client key={index} name={client.id} Logo={client.src as ElementType} />
				))}
			</div>
		</div>
	)
}

export default TrustedBy;