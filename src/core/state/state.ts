import { CommitMessage } from "../../../types/message"

class State {
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

export const NetworkState = new State('network')
export const LogState = new State('log')
export const StorageState = new State('storage')