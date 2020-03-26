module.exports = {

    // ------------------- nur Warnungen wenn Lint meckert -----------------
    lintOnSave: 'warning',
    devServer: {
        overlay: {
            warnings: false,
            errors: true
        }
    },

    // ------------------- Styles in jeder Komponente laden ----------------
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/main.scss";`
            }
        }
    }

};