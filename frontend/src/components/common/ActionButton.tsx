import { EMenuType } from "../../types/menuTypes";

const ActionButton = ({ text, type, action }: { text: string, type: EMenuType, action: Function }) => (
	<button onClick={() => action()}
			className={`group inline-flex items-center gap-x-2 py-2 px-6 font-medium rounded-full
			focus:outline-none w-full justify-center text-lg
			${type === EMenuType.PRIMARY_BUTTON ? "bg-standout text-primary" :
			"bg-primary text-standout border border-standout border-solid hover:bg-standout hover:text-primary"}`}>
		{text}
	</button>
)

export default ActionButton;