import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/pet-care-scheduler/",
    build: { sourcemap: false },
    plugins: [react()],
});