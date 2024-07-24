import { CommitMessage } from "../../../types/message"

class Store {
    collection: Array<CommitMessage> = []
    namespace?: string
    constructor(namespace?: string) {
        this.namespace = namespace
    }
    push(item: CommitMessage) {
        this.collection.push(item)
    }
    clear() {
        this.collection = []
    }
    get size() {
        return this.collection.length
    }
}

export const NetworkStore = new Store('network')
export const LogStore = new Store('log')
export const StorageStore = new Store('storage')