export type TBuildMode = 'development' | 'production'

export interface TBuildPaths {
    html: string;
    entry: string;
    output: string;
    src: string;
}

export interface TBuildEnv {
    mode: TBuildMode,
    port: number;
}

export interface TBuildOptions {
    mode: TBuildMode,
    paths: TBuildPaths,
    isDev: boolean,
    port: number
}