
export type ConsleMethods = keyof typeof console

export type CommitMessage = {
    type: ConsleMethods,
    args: Array<String>
}
