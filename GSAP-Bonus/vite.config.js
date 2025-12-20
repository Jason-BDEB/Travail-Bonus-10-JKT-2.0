import { defineConfig } from "vite";

export default defineConfig({
    base: '/Travail-Bonus-10-JKT-2.0/',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html'
            }
        }
    }
})