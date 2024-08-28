/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
	extend: {
	    colors: {
		'yellow': '#ffe349',
		'light-yellow': '#fff7c9',
		'chinese-black': '#101214',
	    },
	    aspectRatio: {
		'default': '1920/782',
	    },
	}
    },
    plugins: []
};
