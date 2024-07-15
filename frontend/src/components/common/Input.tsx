import { EInputType } from "../../types/inputTypes";

const Input = ({ type, placeholder, id }: { type: EInputType, placeholder: string, id?: string }) => {
	return (
		<input type={type} placeholder={placeholder} id={id ? id : ''} required
			className={`bg-transparent outline-none text-white font-body w-full px-5 py-2 text-lg
				border-2 border-white border-solid rounded-full focus:border-standout`} />
	)
}

export default Input;