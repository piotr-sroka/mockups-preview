<template>
    <div class="social-media-mockup-view smc-product-view mockup-preview">
        <div class="mockup-view">
            <AsyncComponent v-for="selectedMockup in  selectedMockups" :key="selectedMockup" :mockupPath="parsePath(selectedMockup)" :unzippedImages="assets" :assetType="assetType" />
        </div>
    </div>
</template>

<script>
import AsyncComponent from "@/components/AsyncComponent";

export default {
    components: {
        AsyncComponent
    },
    props: ["selectedMockups", "assets", "assetType"],
    data() {
        return {}
    },
    methods: {
        parsePath(path) {
            let parsedPath = path.split("-").map(el => {
                let firstLetter = el.charAt(0).toUpperCase();
                return firstLetter + el.substring(1);
            });
            return parsedPath.join("/");
        }
    },
}
</script>

<style scoped>
.mockup-preview {
    width: 100%;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 2px 1px 2px #d2d2d2;
}
.mockup-select {
    width: 240px;
}
.mockup-select--list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
}
.mockup-type {
    padding: 12px;
    font-size: 1.2em;
    border-bottom: 1px solid #d2d2d2;
    text-transform: capitalize;
    text-align: left;
    cursor: pointer;
    transition: background-color .2s linear;
}
.mockup-type:hover {
	background-color: #c8c8c8;
}
.mockup-view {
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
}
</style>
