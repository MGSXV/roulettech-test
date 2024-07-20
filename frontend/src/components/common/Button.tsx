import { EMenuType } from "../../types/menuTypes";

const Button = ({ text, link, type }: { text: string, link: string, type: EMenuType }) => (
	<a href={link}
			className={`group inline-flex items-center gap-x-2 py-2 px-6 font-medium text-sm rounded-full
			focus:outline-none w-full justify-center ${type === EMenuType.PRIMARY_BUTTON ? "bg-standout text-primary" :
			"bg-transparent text-standout border border-standout border-solid hover:bg-standout hover:text-primary"}`}>
		{text}
	</a>
)

export default Button;