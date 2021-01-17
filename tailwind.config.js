module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};

//['./components/**/*.tsx', './pages/**/*.tsx']
