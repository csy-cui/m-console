import { ConsleMethods } from "../../../types/message";
import { CommonBuilder } from "../common/Common";
import { LogStore } from "../store/store";

export class Log extends CommonBuilder {
    type = "console"
    originalConsole: Console = window.console
    targetConsole: Record<ConsleMethods, Function> | {} = {}
    methodList: ConsleMethods[] = []
    constructor() {
        super(LogStore)
        this.isReady = true
        this._beforeBuild()
    }
    _beforeBuild() {
        this.methodList = Object.keys(this.originalConsole) as Array<ConsleMethods>
        this._build()
    }
    _build() {
        // for (let index = 0; index < this.methodList.length; index++) {
        //     const method = this.methodList[index];
        //     if (this[method]) {
        //         this[method] = (...args) => {
        //             const 
        //             this.originalConsole[method].apply(args)
        //         }
        //     }
        // }
    }
    log() { }
    warn() { }
    assert() { }
    clear() { }
    count() { }
    countReset() { }
    debug() { }
    dir() { }
    dirxml() { }
    error() { }
    group() { }
    groupCollapsed() { }
    groupEnd() { }
    info() { }
    table() { }
    time() { }
    timeEnd() { }
    timeLog() { }
    timeStamp() { }
    trace() { }
    profile() { }
    profileEnd() { }
}