/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [],
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1DA57A",
            },
            borderRadius: {
                lg: "8px",
            },
        },
    },
    plugins: [],
};
