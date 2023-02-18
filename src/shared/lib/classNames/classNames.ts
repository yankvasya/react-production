type TMods = Record<string, boolean>
export const classNames = (classes: string, mods?: TMods, additions?: string[]) => {
    return [
        classes,
        mods && Object.entries(mods).filter(([, value]) => value).map(([key]) => key),
        additions?.join(' ')
    ].join(' ').trim()
}