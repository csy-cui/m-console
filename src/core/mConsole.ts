import { mConsoleImpl, mConsoleOption, globalWindow } from "../impl/console.impl";
import Container from '../view/container.svelte';
import { Log } from "./console/index";
import { LogStore, StorageStore, NetworkStore } from './store/store'

export class mConsole implements mConsoleImpl {
    static _instance: mConsole;
    Log = new Log();
    $vnode: any;
    constructor(option: mConsoleOption) {
        //单例模式
        if (!!(window as globalWindow).mConsole && mConsole._instance) {
            return mConsole._instance
        }
        this._initView()
        mConsole._instance = this
    }
    private _initView() {
        this.$vnode = new Container({
            target: document.body,
            props: {
                LogStore,
                NetworkStore,
                StorageStore
            }
        })
    }
}
