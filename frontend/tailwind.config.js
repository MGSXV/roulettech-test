/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./index.html"
	],
	theme: {
		extend: {
			fontFamily: {
				'title': ['"Roboto"', 'sans-serif'],
				'body': ['"Nunito"', 'sans-serif'],
			},
			colors: {
				black: '#000',
				white: '#fff',
				primary: '#1c1c1c',
				background: '#fafaff',
				success: '#0b6e4f',
				info: '#00bcbf',
				warning: '#f95738',
				danger: '#dd1c1a',
				standout: '#ff0'
			}
		},
	},
	plugins: [],
}

