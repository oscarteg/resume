import { resolve } from "node:path";
import handlebars from "vite-plugin-handlebars";

export default {
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "src/partials"),
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},
		},
	},
};
