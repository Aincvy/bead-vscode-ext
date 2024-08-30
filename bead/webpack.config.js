const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
    // const mode = 'development';
    const mode = argv.mode;
    const isProduction = mode === 'production';

    return {
        entry: './src/extension.ts',
        target: 'node',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'extension.js',
            libraryTarget: 'commonjs2',
            devtoolModuleFilenameTemplate: '../[resource-path]'
        },
        devtool: isProduction ? false : 'source-map',
        mode,
        externals: {
            vscode: 'commonjs vscode'
        },
        resolve: {
            extensions: ['.ts', '.js'] 
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin({
                handler(percentage, message, ...args) {
                    console.log(`${(percentage * 100).toFixed(2)}%`, message, ...args);
                },
            }),
        ],
    };
};