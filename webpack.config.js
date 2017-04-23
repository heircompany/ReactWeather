const
webpack = require("webpack"),
path = require("path");
module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    output: {
        path: path.resolve(__dirname),
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "app"),
            path.resolve(__dirname, "public"),
            "node_modules"],
        alias: {
            Main: path.resolve(__dirname, "app/components/Main.jsx"),
            Nav: path.resolve(__dirname, "app/components/Nav.jsx"),
            Weather: path.resolve(__dirname, "app/components/Weather.jsx"),
            WeatherForm: path.resolve(__dirname, "app/components/WeatherForm.jsx"),
            WeatherMessage: path.resolve(__dirname, "app/components/WeatherMessage.jsx"),
            About: path.resolve(__dirname, "app/components/About.jsx"),
            Examples: path.resolve(__dirname, "app/components/Examples.jsx"),
            Modal: path.resolve(__dirname, "app/components/Modal.jsx"),
            openWeatherMap: path.resolve(__dirname, "app/api/openWeatherMap.jsx"),
            applicationStyles: path.resolve(__dirname, "app/styles/app.scss")
        },
        extensions: [" ", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "cheap-module-eval-source-map"
};
