<script>
    import { setContext } from "svelte";
    import Button from "./button.svelte";

    export let NetworkStore;
    export let LogStore;
    export let StorageStore;
    export const networkStore = setContext("NetworkStore", NetworkStore);
    export const logStore = setContext("LogStore", LogStore);
    export const storageStore = setContext("StorageStore", StorageStore);

    // console.log(NetworkStore,LogStore,StorageStore)
</script>

<Button></Button>

<div></div>
