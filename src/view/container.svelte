
<script>
    import { setContext } from "svelte";
    import Button from "./button.svelte";
    import Theme from "./theme/theme.svelte";
    import Log from "./log/index.svelte";
    import Network from "./network/index.svelte";

    export let NetworkStore;
    export let LogStore;
    export let StorageStore;
    export const networkStore = setContext("NetworkStore", NetworkStore);
    export const logStore = setContext("LogStore", LogStore);
    export const storageStore = setContext("StorageStore", StorageStore);

    let theme = "light";

    function renderPanle(node){
    }

    let activeTab = 0;
    const tabs = [
        { name: 'Log', component: Log },
        { name: 'Network', component: Network },
    ];
    
</script>
<!-- 主题组件，避免产生css文件 -->
<Theme bind:theme={theme}/>
<!-- 悬浮按钮 -->
<Button></Button>
<!-- 面板 -->
<div use:renderPanle id="_mConsole_panle" class="m-panle m_theme_var">
    <div class="m-panle-content">
        <div class="tab-component">
            <div class="tab-header">
              {#each tabs as tab, i}
                <button
                  class:active={activeTab === i}
                  on:click={() => (activeTab = i)}>{tab.name}</button>
              {/each}
            </div>
          
            <div class="tab-content">
              <svelte:component this={tabs[activeTab].component} />
            </div>
          </div>
    </div>
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

    .tab-header {
        display: flex;
        border-bottom: 1px solid var(--tab-header-border);
    }

    .tab-header button {
        padding: 10px 20px;
        border: none;
        background-color: var(--tab-header-default-background);
        cursor: pointer;
    }

    .tab-header button.active {
        background-color: var(--tab-header-active-background);
    }

    .tab-content {
        padding: 20px;
    }
</style>
