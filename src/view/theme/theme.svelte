
<script>
    export let theme;
</script>

{#if theme == "dark"}
    <style>
        .m_dark_theme_var {
            --panle-background-color-light: #333;
        }
    </style>
{:else}
    <style>
        .m_light_theme_var {
            --panle-background-color-light: #f2f2f2;
        }
    </style>
{/if}
