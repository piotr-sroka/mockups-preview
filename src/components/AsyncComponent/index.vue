<template>
  <transition name="simple-mockup-fade">
    <component :is="mockupPreview" :assets="unzippedImages" :assetType="assetType" ></component>
  </transition>
</template>

<script>
import debounce from "debounce";

export default {
	props: ["mockupPath", "unzippedImages", "assetType"],
	data() {
		return {
			mockupPreview: null
		};
	},
	computed: {
		loader() {
		    return () => import("@/components/Mockup/" + this.mockupPath);
		}
	},
	methods: {
		loadMockup() {
			this.loader().then(() => {
			    this.mockupPreview = () => this.loader();
			}).catch(err => {
			    console.log(err);
			});
		}
	},
	mounted() {
		this.loadMockup();
	}
};
</script>

<style scoped>
.simple-mockup-fade-enter-active,
.simple-mockup-fade-leave-active {
    transition: all 0.5s linear;
}
.simple-mockup-fade-enter-active {
    /* transition-delay: .5s; */
}
.simple-mockup-fade-enter,
.simple-mockup-fade-leave-to {
    margin-top: -40px;
	opacity: 0;
}
</style>