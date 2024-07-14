

export type globalWindow = Window & { mConsole?: mConsoleImpl }


export interface mConsoleImpl {
    constructor: Function,
}

export type mConsoleOption = {

}