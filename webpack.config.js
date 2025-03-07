const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(mp3)$/, // 🎵 Handle MP3 files
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/", // Moves files to dist/assets/
                            publicPath: "assets/", // Access via "assets/YOUR_PHONE_LINGING.mp3"
                        },
                    },
                ],
            },
        ],
    },
};
