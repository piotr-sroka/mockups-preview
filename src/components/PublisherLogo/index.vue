<template>
    <div class="publisher-logo">
        <img class="publisher-logo--image" :src="logo" />
    </div>
</template>

<script>
export default {
    props: ["logo", "publisher"],
    methods: {
        onDrop(e) {
            this.ondrop(e, this.publisher);
        }
    }
};
</script>

<style scoped>
.publisher-logo {
	width: 60px;
	height: 60px;
	cursor: pointer;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s linear;
    opacity: .6;
    filter: grayscale(100%);
    transform: scale(.8);
}
.publisher-logo:hover, .publisher-logo.active {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1);
}
.publisher-logo--image {
	max-width: 100%;
	max-height: 100%;
}
.drop-input {
	display: none;
}
@media screen and (max-width: 960px) {
    .publisher-logo {
        /* padding: 20px; */
    }    
}
</style>

