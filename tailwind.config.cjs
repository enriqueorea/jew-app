/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
			},
		},
	},
	plugins: [],
};

module.exports = config;
