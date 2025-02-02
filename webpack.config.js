const path = require("path");

module.exports = {
    entry: "./widget.js",
    output: {
        filename: "chat-widget.js",
        path: path.resolve(__dirname, "dist"),
        library: "ChatWidget",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
};
