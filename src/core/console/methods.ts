import { originalConsole } from "./index"

type Parmas = Array<keyof any>

class Methods {
    log(parms: Parmas) {
        // document.write(JSON.stringify(parms))
    }
    warn(parms: Parmas) { }
    assert(parms: Parmas) { }
    clear(parms: Parmas) { }
    count(parms: Parmas) { }
    countReset(parms: Parmas) { }
    debug(parms: Parmas) { }
    dir(parms: Parmas) { }
    dirxml(parms: Parmas) { }
    error(parms: Parmas) { }
    group(parms: Parmas) { }
    groupCollapsed(parms: Parmas) { }
    groupEnd(parms: Parmas) { }
    info(parms: Parmas) { }
    table(parms: Parmas) { }
    time(parms: Parmas) { }
    timeEnd(parms: Parmas) { }
    timeLog(parms: Parmas) { }
    timeStamp(parms: Parmas) { }
    trace(parms: Parmas) { }
    profile(parms: Parmas) { }
    profileEnd(parms: Parmas) { }
}
export const MethodsControll = new Methods()