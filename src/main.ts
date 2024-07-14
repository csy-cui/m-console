import { mConsole } from "./core/mConsole";

if(window){
    (window as any)['MConsole'] = mConsole
}

export default mConsole