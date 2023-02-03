import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {TBuildMode} from "./config/build/types/config";

const paths = {
    html:  path.resolve(__dirname, 'public', 'index.html'),
    entry:  path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build') ,
}

const mode: TBuildMode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config