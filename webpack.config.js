let path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        //[name] 的意思就是 entry 的名字
        // index: './pages/index/index.js',
        // ConsoleApp: './pages/ConsoleApp/ConsoleApp.js',
        // ReactApp: './pages/ReactApp/ReactApp.js',
        product: "./product.js",
        demo5: "./demo.js"
        // vendor: ['jquery', 'lodash'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //path: './dist/',
        //publicPath: '/assets/',
        //publicPath: 'http://localhost:9000/images/',
        //filename: 'bundle.js',
        //chunkFilename: '[name].bundle.js',
        //[name] ，它會被 entry 中的 key 換掉
        //[chunkhash] 則可讓瀏覽器知道是否需要重新載入檔案
        //filename: 'js/[name].[chunkhash].bundle.js',
        //filename: devMode ? 'js/[name].bundle.js' : 'js/[chunkhash].bundle.js',
        filename: '[name].bundle.js',
        //filename: 'demo1.bundle.js',
        //output.publicPath The publicPath specifies the public URL address of the output files
        //publicPath: "",
        //publicPath: ASSET_PATH,
        //publicPath: 'http://localhost:8080/scripts/',

    },
    // 把 webpack runtime 也打包成一支 runtime.bundle.js
    // runtimeChunk: {
    //     name: 'runtime',
    // },
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    },
    //mode: 'development',
    mode: 'development',
    devtool: 'eval-cheap-module-source-map', //'hidden-source-map',
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    //MiniCssExtractPlugin.loader, //'css-loader'
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        //compact: true,
                        //configFile: './.babelrc.json'
                        configFile: './babel.config.js'
                        //cwd: './',
                    }

                }
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './demo.htm', //path.join(__dirname, 'src', 'index.htm'),
            filename: './demo.bundle.htm',
            chunks: ['demo5'],
            //inject: false,
            inject: 'body',
            // alwaysWriteToDisk: true
            title: 'ConsoleApp666',
            /*
            因为和 webpack 4 的兼容性问题，chunksSortMode 参数需要设置为 none
            https://github.com/jantimon/html-webpack-plugin/issues/870
            */
            chunksSortMode: 'none',
        }),
    ],
    //增加一個給devserver的設定
    devServer: {
        //代表的是 Web Server 運行起來的根目錄 contentBase
        //告诉服务器从哪个目录中提供内容 也可以从多个目录提供内容
        //contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')]
        contentBase: path.resolve(__dirname, 'dist'),
        // contentBasePublicPath: '/serve-content-base-at-this-url',
        //设置为 true 时，此选项绕过主机检查 CORS
        //disableHostCheck: true
        compress: false,
        port: 9006,
        //quiet: true, // lets WebpackDashboard do its thing --quiet
        //contentBase: './dist',
        historyApiFallback: {
            index: "/demo.bundle.htm"
            // rewrites: [{
            //         from: /^\/$/,
            //         to: '/index.bundle.htm'
            //     },
            //     {
            //         from: /^\/subpage/,
            //         to: '/views/subpage.html'
            //     },
            //     {
            //         from: /./,
            //         to: '/views/404.html'
            //     }
            // ]
        },
        //Enables Hot Module Replacement 
        //hotOnly: true,
        //启用 webpack 的 模块热替换 功能：
        //注意，必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR
        //hot: true,
        //watchContentBase: true,
        //如果 output.filename 设置为 'bundle.js' ，devServer.filename 用法如下
        //现在只有在请求 /bundle.js 时候，才会编译 bundle。
        //当启用 devServer.lazy 时，dev-server 只有在请求时才编译包
        //(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为惰性模式
        // lazy: true,
        // filename: 'bundle.js',
        //指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下
        //host: '0.0.0.0'

        //告诉 dev-server 在 server 启动后打开浏览器
        // open: true,
        // openPage: '/dist/index2.html',
        //open:'Google Chrome'

        //https: true
        //以上设置使用了自签名证书，但是你可以提供自己的：
        // https: {
        //     key: fs.readFileSync('/path/to/server.key'),
        //     cert: fs.readFileSync('/path/to/server.crt'),
        //     ca: fs.readFileSync('/path/to/ca.pem'),
        //   }

        //publicPath: '/assets/'
    },
}