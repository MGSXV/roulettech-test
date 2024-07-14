import { useNavigate } from "react-router-dom"

const Link = (props: {text: string, url: string, custom_style?: string}) => {
	
	const navigate = useNavigate()

	return (
		<div className={`relative w-fit`}>
			<div onClick={() => navigate(props.url)}
					className={`leading-6 text-standout cursor-pointer text-xl before:bg-standout after:bg-standout
					transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500
					before:absolute before:text-standout before:origin-center before:h-[1px] before:w-0
					hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] 
					after:ease-in-out after:duration-500 after:absolute after:text-standout font-body
					after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0
					after:right-[50%] bg-transparent ${props.custom_style ? props.custom_style : ""}`}>
					<span className="bg-transparent">{props.text}</span>
				</div>
		</div>
	)
}

export default Link