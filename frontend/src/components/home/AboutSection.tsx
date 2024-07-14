import Workers from '../../assets/images/corporate-workers.jpg'
import { EMenuType } from '../../types/menuTypes';
import Button from '../common/Button';

const AboutSection = () => {
	return (
		<div className={`w-full flex flex-col items-center py-28 bg-primary`}>
			<div className={`flex flex-col lg:flex-row-reverse w-full max-w-7xl mx-3 lg:mx-auto gap-10`}>
				<div className={`flex items-center justify-center w-full lg:w-1/2 px-3`}>
					<div className={`flex items-center justify-center h-fit w-10/12 bg-standout blob-border-1`}>
						<div className={`w-full  overflow-hidden blob-border-2 border-4 border-solid
								border-standout`}>
							<img src={Workers} alt="corporate-workers"
								className={``}/>
						</div>
					</div>
				</div>
				<div className={`flex flex-col items-start justify-center w-full lg:w-1/2 px-10 h-full gap-10`}>
					<h1 className={`font-title text-standout text-4xl font-extrabold`}>
						Who are we?
					</h1>
					<p className={`font-body text-background text-xl text-justify leading-relaxed`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Sed viverra tellus in hac. Tempor nec feugiat nisl pretium fusce id velit ut. Libero enim sed faucibus turpis. 
					</p>
					<div className={`w-full`}>
						<Button text="Learn more" type={EMenuType.PRIMARY_BUTTON} link='/about' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSection;