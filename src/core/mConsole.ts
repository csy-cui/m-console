import { mConsoleImpl, mConsoleOption,globalWindow } from "../impl/console.impl";
import Container from '../view/container.svelte';

export class mConsole implements mConsoleImpl {
    static _instance: mConsole;
    constructor(option: mConsoleOption) {
        if (!!(window as globalWindow).mConsole && mConsole._instance) {
            return mConsole._instance
        }
        this._initView()
        mConsole._instance = this
    }
    private _initView() {
        new Container({
            target: document.body,
        })
    }
}