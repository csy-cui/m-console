import { Store } from "../store/store"

export class CommonBuilder {
    isReady: boolean = false
    store: Store;
    constructor(store: Store) {
        this.store = store
    }
    destory() {
        this.store.clear()
        this.isReady = false
    }
}