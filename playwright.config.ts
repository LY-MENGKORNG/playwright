import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: ".",
    reporter: [
        ["list"],
        ["html", { open: "never" }],
    ],
    use: {
        baseURL: "http://localhost",
        trace: "on-first-retry",
        screenshot: 'only-on-failure',
    },
    fullyParallel: true,
})
