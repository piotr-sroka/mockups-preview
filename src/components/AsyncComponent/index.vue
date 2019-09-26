<template>
  <transition name="simple-mockup-fade">
    <component :is="mockupPreview" :assets="unzippedImages" :assetType="assetType" ></component>
    <!-- <FacebookDesktop :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Facebook/Desktop'" />
    <FacebookMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Facebook/Mobile'" />
    <FacebookStory :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Facebook/Story'" />
    <FacebookCarousel :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Facebook/Carousel'" />
    <FacebookCarouselMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Facebook/Carousel/Mobile'" />
    <InstagramStandard :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Instagram/Standard'" />
    <InstagramStory :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Instagram/Story'" />
    <LinkedinDesktop :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Linkedin/Desktop'" />
    <LinkedinMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Linkedin/Mobile'" />
    <LinkedinCarousel :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Linkedin/Carousel'" />
    <LinkedinCarouselMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Linkedin/Carousel/Mobile'" />
    <TwitterDesktop :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Twitter/Desktop'" />
    <TwitterMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Twitter/Mobile'" />
    <VkDesktop :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Vk/Desktop'" />
    <VkMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Vk/Mobile'" />
    <VkCarousel :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Vk/Carousel'" />
    <VkCarouselMobile :assets="unzippedImages" :assetType="assetType" v-if="mockupPath === 'Vk/Carousel/Mobile'" /> -->

  </transition>
</template>

<script>
import debounce from "debounce";

// import FacebookDesktop from "@/components/Mockup/Facebook/Desktop";
// import FacebookMobile from "@/components/Mockup/Facebook/Mobile";
// import FacebookStory from "@/components/Mockup/Facebook/Story";
// import FacebookCarousel from "@/components/Mockup/Facebook/Carousel";
// import FacebookCarouselMobile from "@/components/Mockup/Facebook/Carousel/Mobile";

// import LinkedinDesktop from "@/components/Mockup/Linkedin/Desktop";
// import LinkedinMobile from "@/components/Mockup/Linkedin/Mobile";
// import LinkedinCarousel from "@/components/Mockup/Linkedin/Carousel";
// import LinkedinCarouselMobile from "@/components/Mockup/Linkedin/Carousel/Mobile";

// import InstagramStandard from "@/components/Mockup/Instagram/Standard";
// import InstagramStory from "@/components/Mockup/Instagram/Story";

// import TwitterDesktop from "@/components/Mockup/Twitter/Desktop";
// import TwitterMobile from "@/components/Mockup/Twitter/Mobile";

// import VkDesktop from "@/components/Mockup/Vk/Desktop";
// import VkMobile from "@/components/Mockup/Vk/Mobile";
// import VkCarousel from "@/components/Mockup/Vk/Carousel";
// import VkCarouselMobile from "@/components/Mockup/Vk/Carousel/Mobile";

export default {
	props: ["mockupPath", "unzippedImages", "assetType"],
	components: {
		// FacebookDesktop,
		// FacebookMobile,
		// FacebookStory,
		// FacebookCarousel,
		// FacebookCarouselMobile,
		// InstagramStandard,
		// InstagramStory,
		// LinkedinDesktop,
		// LinkedinMobile,
		// LinkedinCarousel,
		// LinkedinCarouselMobile,
		// TwitterDesktop,
		// TwitterMobile,
		// VkDesktop,
		// VkMobile,
		// VkCarousel,
		// VkCarouselMobile
	},
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