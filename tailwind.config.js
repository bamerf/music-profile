// @ts-check

/**
 * @type import("tailwindcss/tailwind-config").TailwindConfig
 */

module.exports = {
	mode: "jit",
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// minHeight: {
		// 	"0": "0",
		// 	"1/4": "25%",
		// 	"1/3": "33.3%",
		// 	"1/2": "50%",
		// 	"3/4": "75%",
		// 	"full": "100%",
		// },
		// 	extend: {
		// 		fontFamily: {
		// 			sans: "var(--font-family)",
		// 		},
		// 	},
		// 	borderRadius: {
		// 		DEFAULT: "4px",
		// 		none: "0",
		// 		sm: "4px",
		// 		md: "8px",
		// 		xl: "20px",
		// 		full: "9999px",
		// 	},
		// 	boxShadow: {
		// 		sm: "var(--shadow-sm)",
		// 		DEFAULT: "var(--shadow-sm)",
		// 		md: "var(--shadow-md)",
		// 		lg: "var(--shadow-lg)",
		// 		xl: "var(--shadow-xl)",
		// 	},
		// 	colors: {
		// 		transparent: "transparent",
		// 		white: "var(--white-color)",
		// 		jacksonsPurple: "var(--jacksons-purple-color)",
		// 		royalBlue: "var(--royal-blue-color)",
		// 		fuelYellow: "var(--fuel-yellow-color)",
		// 		radicalRed: "var(--radical-red-color)",
		// 		vistaBlue: "var(--vista-blue-color)",
		// 		trust: {
		// 			blue: "var(--trust-blue-color)",
		// 		},
		// 		primary: {
		// 			DEFAULT: "var(--primary-color)",
		// 			900: "var(--primary-color-900)",
		// 			800: "var(--primary-color-800)",
		// 			700: "var(--primary-color-700)",
		// 			600: "var(--primary-color-600)",
		// 			500: "var(--primary-color-500)",
		// 			400: "var(--primary-color-400)",
		// 			300: "var(--primary-color-300)",
		// 			200: "var(--primary-color-200)",
		// 			100: "var(--primary-color-100)",
		// 			50: "var(--primary-color-50)",
		// 		},
		// 		green: {
		// 			mild: "var(--mild-green-color)",
		// 			jade: "var(--jade-green-color)",
		// 			jungle: "var(--jungle-green-color)",
		// 		},
		// 		grey: {
		// 			DEFAULT: "var(--grey-color-100)",
		// 			900: "var(--grey-color-900)",
		// 			800: "var(--grey-color-800)",
		// 			700: "var(--grey-color-700)",
		// 			600: "var(--grey-color-600)",
		// 			500: "var(--grey-color-500)",
		// 			400: "var(--grey-color-400)",
		// 			300: "var(--grey-color-300)",
		// 			200: "var(--grey-color-200)",
		// 			100: "var(--grey-color-100)",
		// 			50: "var(--grey-color-50)",
		// 		},
		// 		error: {
		// 			DEFAULT: "var(--error-color)",
		// 		},
		// 		warning: {
		// 			DEFAULT: "var(--warning-color)",
		// 		},
		// 		success: {
		// 			DEFAULT: "var(--success-color)",
		// 		},
		// 		info: {
		// 			DEFAULT: "var(--info-color)",
		// 		},
		// 		highlight: {
		// 			DEFAULT: "var(--highlight-color)",
		// 		},
		// 		border: {
		// 			DEFAULT: "var(--border-color)",
		// 		},
		// 		textInverse: {
		// 			DEFAULT: "var(--text-inverse-color)",
		// 		},
		// 	},
		// 	borderColor: (theme) => ({
		// 		...theme("colors"),
		// 		DEFAULT: theme("colors.gray.200", "currentColor"),
		// 	}),
		// 	backgroundColor: (theme) => ({
		// 		...theme("colors"),
		// 	}),
	},
	variants: {},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container-narrow": {
					"maxWidth": "100%",
					"@screen sm": {
						maxWidth: "640px",
					},
					"@screen md": {
						maxWidth: "768px",
					},
					"@screen lg": {
						maxWidth: "1062px",
					},
					"@screen xl": {
						maxWidth: "1062px",
					},
				},
			});
		},
	],
};
