import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    entry: "./widget.js",
    output: {
        filename: "chat-widget.js",
        path: path.resolve(__dirname, "dist"),
        library: "ChatWidget",
        libraryTarget: "umd",
        globalObject: "this",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // Handle both JS and TS files
                exclude: /node_modules|examples/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    externals: {
    },
};

export default config;
