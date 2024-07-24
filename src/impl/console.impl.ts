

export type globalWindow = Window & { mConsole?: mConsoleImpl }


export interface mConsoleImpl {
    constructor: Function;
    id: number
}

export type mConsoleOption = {

}