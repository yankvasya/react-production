export type TBuildMode = 'development' | 'build'

export interface TBuildPaths {
    html: string;
    entry: string;
    output: string;
}

export interface TBuildOptions {
    mode: TBuildMode,
    paths: TBuildPaths,
    isDev: boolean
}