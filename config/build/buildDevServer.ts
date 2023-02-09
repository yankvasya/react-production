import { Configuration as DevServerConfig } from 'webpack-dev-server'
import {TBuildOptions} from "./types/config";
export const buildDevServer = (options: TBuildOptions): DevServerConfig => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}