import {RuleSetRule} from "webpack";

export const buildRules = (): RuleSetRule[] => {
    const typescriptRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptRule
    ]
}