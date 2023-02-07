import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {TBuildEnv} from "./config/build/types/config";

const paths = {
    html:  path.resolve(__dirname, 'public', 'index.html'),
    entry:  path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build') ,
}

export default (env: TBuildEnv): webpack.Configuration =>
    buildWebpackConfig({
        mode: env.mode,
        paths,
        isDev: env.mode === 'development',
        port: env.port ?? 3000,
    })
