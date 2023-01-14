<script>
    import {Color} from "$lib/util"
    import ColorPanel from "$lib/components/ColorPanel.svelte";
    let  colors = [
        new Color("#ff00ff"),
        new Color("#ffff00"),
        new Color("#fffff0"),
        new Color("#ffffff")
    ]
    console.log()
</script>
{#each colors as color}
<ColorPanel color={color.hex}></ColorPanel>{/each}