
<script>
    export let theme;
</script>

{#if theme == "dark"}
    <style>
        .m_theme_var {
            --panle-background-color-light: #333333;
        }
    </style>
{:else}
    <style>
        .m_theme_var {
            --panle-background-color-light: #ffffff;
        }
    </style>
{/if}
