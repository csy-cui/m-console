
<script>
    import { setContext } from "svelte";
    import Button from "./button.svelte";
    import Theme from "./theme/theme.svelte";

    export let NetworkStore;
    export let LogStore;
    export let StorageStore;
    export const networkStore = setContext("NetworkStore", NetworkStore);
    export const logStore = setContext("LogStore", LogStore);
    export const storageStore = setContext("StorageStore", StorageStore);

    let theme = "light";

    function renderPanle(node){
    }
    
</script>
<!-- 主题组件，避免产生css文件 -->
<Theme bind:theme={theme}/>
<!-- 悬浮按钮 -->
<Button></Button>
<!-- 面板 -->
<div use:renderPanle id="_mConsole_panle" class="m-panle m_theme_var">
    <div class="m-panle-content"></div>
</div>

<style scoped>

    .m-panle {
        position: fixed;
        z-index: 99999;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
    }
    .m-panle-content {
        width: 100%;
        height: 80%;
        background: var(--panle-background-color-light);
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>
