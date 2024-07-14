import { Fragment } from "react/jsx-runtime"
import HeroScetion from "./HeroSection"
import TrustedBy from "./TrustedBy";
import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";

const Home = () => {

	return (
		<Fragment>
			<HeroScetion />
			<TrustedBy />
			<AboutSection />
			<CallToActionSection />
		</Fragment>
	)
}

export default Home;