
<script>
    export let theme;
</script>

{#if theme == "dark"}
    <style>
        .m_theme_var {
            --panle-background-color-light: #333333;
            --tab-header-active-background: #a3a3a3;
            --tab-header-default-background: #f1f1f1;
            --tab-header-border: #cccccc;
        }
        </style>
{:else}
<style>
    .m_theme_var {
            --panle-background-color-light: #ffffff;
            --tab-header-active-background: #cccccc;
            --tab-header-default-background: #f1f1f1;
            --tab-header-border: #cccccc;
        }
    </style>
{/if}
