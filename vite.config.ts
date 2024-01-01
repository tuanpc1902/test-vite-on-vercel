import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyLocalesPlugin } from './vite-plugin-copy-locales';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            react(),
            copyLocalesPlugin()
        ],
    };
});
