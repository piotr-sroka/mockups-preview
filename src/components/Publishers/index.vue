<template>
    <transition name="fadein">
        <section class="publishers" v-if="show">
            <PublisherLogo v-show="!isCarousel || (isCarousel && publisher.carouselAvailable)" :class="activePublisher === publisher.name ? 'active' : ''" v-for="publisher in publishers" :key="publisher.name" :logo="publisher.logo" :publisher="publisher.name" @click.native="setActivePublisher(publisher.name)" />
        </section>
    </transition>
</template>

<script>
import PublisherLogo from "@/components/PublisherLogo";

export default {
	props: ["show", "setPublisher", "isCarousel"],
	components: {
		PublisherLogo
	},
	data() {
		return {
			publishers: [
				{name: "facebook", logo: "static/facebook_logo.svg", carouselAvailable: true},
				{name: "instagram", logo: "static/instagram_logo.svg", carouselAvailable: true},
				{name: "linkedin", logo: "static/linkedin_logo.svg", carouselAvailable: true},
				{name: "twitter", logo: "static/twitter_logo.svg", carouselAvailable: false},
				{name: "vk", logo: "static/vk_logo.svg", carouselAvailable: true},
				{name: "xing", logo: "static/xing_logo.svg", carouselAvailable: false},
			],
			activePublisher: ""
		};
	},
	methods: {
		setActivePublisher(publisher) {
			this.activePublisher = publisher;
			this.setPublisher(this.activePublisher);
		}
	},
	updated() {
		if (!this.show) this.activePublisher = "";
	}
};
</script>

<style scoped>
.publishers {
	display: flex;
	width: 100%;
	max-width: 390px;
	margin: 0 auto;
	padding: 20px;
	justify-content: space-around;
	box-sizing: border-box;
}
@media screen and (max-width: 960px) {
	.publishers {
		justify-content: center;
		flex-wrap: wrap;
	}
}
.fadein-enter-active,
.fadein-leave-active {
	transition: all 0.5s;
}
.fadein-enter-active {
	transition-delay: 0.5s;
}
.fadein-enter,
.fadein-leave-to {
	margin-top: 80px;
	opacity: 0;
}
</style>
