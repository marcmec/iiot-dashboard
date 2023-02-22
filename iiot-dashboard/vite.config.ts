import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
    return defineConfig({
        plugins: [react()],
    });
};
