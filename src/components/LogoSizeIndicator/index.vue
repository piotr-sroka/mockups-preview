<template>
    <div class="logo-size-indicator" :style="style"></div>    
</template>

<script>
export default {
    props: ["left", "top", "width", "height"],
    computed: {
        style() {
            return `left: ${this.left}; top: ${this.top}; width: ${this.width}; height: ${this.height}`;
        }
    }
}
</script>

<style scoped>
    .logo-size-indicator {
        background-color: #d97077;
        opacity: .6;
        position: absolute;
        pointer-events: none;
    }
</style>