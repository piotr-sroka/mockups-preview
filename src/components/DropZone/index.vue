<template>
    <transition name="fade">
        <label class="drop-zone" :class="isDragOver ? 'hover' : ''" for="drop-input" @dragover.stop.prevent="onDrag" @drop.stop.prevent="onDrop" @dragleave="onDrag">
                <div class="upload-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve" class="">
                        <g><g><g id="backup">
                                <path d="M494.7,255C476.85,168.3,400.35,102,306,102c-73.95,0-137.7,40.8-168.3,102C58.65,214.2,0,277.95,0,357    c0,84.15,68.85,153,153,153h331.5c71.4,0,127.5-56.1,127.5-127.5C612,316.2,558.45,260.1,494.7,255z M357,331.5v102H255v-102    h-76.5L306,204l127.5,127.5H357z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#C7C7C7"/>
                        </g></g></g>
                    </svg>
                    <p class="upload-icon--title">upload asset</p>
                </div>
                <input id="drop-input" class="drop-input" type="file" @change.stop.prevent="onDrop" multiple accept="image/gif, image/x-png, image/jpeg, image/png, video/mp4, zip, application/octet-stream, application/zip, application/x-zip, application/x-zip-compressed" />
        </label>
    </transition>
</template>

<script>
export default {
    props: ["onDropFiles"],
    data() {
        return {
            isDragOver: false
        }
    },
    methods: {
        onDrag(e) {
            this.isDragOver = e.type === "dragover" ? true : false;
        },
        onDrop(e) {
            this.isDragOver = false;
            let files = e.target.files || e.dataTransfer.files;
            this.onDropFiles(files);
        }
    }
};
</script>

<style scoped>
.drop-zone {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d8d8d8;
    transition: background-color .4s linear;
    cursor: pointer;
}
.drop-zone:hover, .drop-zone.hover {
    background-color: #2a2a2a;
}
.upload-icon {
    width: 200px;
    height: 200px;
}
.upload-icon--title {
    color: #9e9e9e;
    transition: color .4s linear;
    text-align: center;
}
.drop-zone:hover .upload-icon--title, .drop-zone.hover .upload-icon--title {
    color: #d3d3d3;
}
svg {
    max-width: 100%;
    max-height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.drop-input {
	display: none;
}
</style>
