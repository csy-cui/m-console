import { ConsleMethods } from "../../../types/message";
import { CommonBuilder } from "../common/Common";
import { LogStore } from "../store/store";
import { MethodsControll } from "./methods";

export const originalConsole: Console = window.console

export class Log extends CommonBuilder {
    type = "console"
    targetConsole: Record<ConsleMethods, Function> | {} = {}
    methodList: ConsleMethods[] = []
    constructor() {
        super(LogStore)
        this.isReady = true
        this._beforeBuild()
    }
    _beforeBuild() {
        this.methodList = Object.keys(originalConsole) as Array<ConsleMethods>
        this._build()
    }
    _build() {
        for (let index = 0; index < this.methodList.length; index++) {
            const method = this.methodList[index];
            Object.defineProperty(this, method, {
                get() {
                    return function (...args: any[]) {
                        originalConsole[method].apply(null, args)
                        MethodsControll[method].call(null, args as any)
                    }
                },
                set() {
                    throw new Error('不可以重置方法：' + method)
                },
            })
        }
        this._afterBuild()
    }
    _afterBuild(){
        window.console = this as any
    }

}