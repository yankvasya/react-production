import {ResolveOptions} from "webpack";
import path from "path";
import {TBuildOptions} from "./types/config";

export const buildResolves = (options: TBuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {}
    }
}