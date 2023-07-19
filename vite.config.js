import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

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
        compact: resolve(__dirname, "compact.html"),
      },
    },
  },
};
