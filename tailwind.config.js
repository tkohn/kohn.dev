module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    darkMode: false,
    theme: {
        listStyleType: {
            none: 'decimal',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
