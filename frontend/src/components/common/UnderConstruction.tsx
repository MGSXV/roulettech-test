import Lottie from "lottie-web"
import { useEffect, useRef } from "react"
import Button from "./Button"
import { EMenuType } from "../../types/menuTypes"

const UnderConstruction = () => {

	const containerRef = useRef<HTMLDivElement>(null!)
	useEffect(() => {
		import("../../assets/lotties/unser-construction.json").then(animation => {
			if (containerRef.current) {
				Lottie.loadAnimation({
					container: containerRef.current,
					renderer: 'svg',
					loop: true,
					autoplay: true,
					animationData: animation.default
				
				})
			}
		})
		return () => {
			Lottie.destroy()
		}
	}, [])

	return (
		<div className={`w-full max-w-7xl flex flex-col flex-1 items-center justify-center`}>
			<h1 className={`text-4xl font-title font-extrabold`}>
			We have not got to this stage yet!
			</h1>
			<div ref={containerRef} className={`w-1/2`}></div>
			<div className={``}>
				<Button text="Take me home" link="/" type={EMenuType.PRIMARY_BUTTON} />
			</div>
		</div>
	)
}

export default UnderConstruction;