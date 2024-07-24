import { CommonBuilder } from "../common/Common";
import { LogStore } from "../store/store";

export class Log extends CommonBuilder {
    originalConsole: Console = window.console
    constructor() {
        super(LogStore)
        this.isReady = true
        this._beforeBuild()
    }
    _beforeBuild() {
    }
}