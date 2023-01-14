<script>
    export let color = "#ffffff"
    console.log(color)
</script>

<div class="color-panel" style={`--color: ${color}`}>{color}</div>

<style>
    .color-panel {
        background: var(--color);
    }
</style>