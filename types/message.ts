

export type ConsleMethods = keyof Omit<typeof console, 'Console'>

export type CommitMessage = {
    type: ConsleMethods,
    args: Array<String>
}
