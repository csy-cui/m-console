

export type globalWindow = Window & { mConsole?: mConsoleImpl }


export interface mConsoleImpl {
    constructor: Function;
    $vnode:any
}

export type mConsoleOption = {

}