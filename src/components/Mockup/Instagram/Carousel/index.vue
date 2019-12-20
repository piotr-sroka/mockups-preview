<template>
  <article class="smc-mockup smc-mockup-instagram smc-mockup-instagram--carousel">
    <i class="smc-instagram-logo-bar"></i>
    <div class="smc-mockup-top">
        <img class="smc-mockup-logo" src="https://hp-shopper.com/static/img/HP_Blue_RGB.png" alt="">
        <div class="smc-mockup-top--page">
            <p class="smc-page-title" dir="auto">HP</p>
        </div>
        <span class="smc-btn smc-instagram-btn smc-more-options">Sponsored
            <i></i>
        </span>
    </div>
    <div class="smc-mockup-media">
        <Carousel publisher="instagram" mode="desktop" :assets="assets" :assetType="assetType" />
        <!-- <img class="smc-mockup-media-image" :src="assets[0]" alt="" v-if="assetType === 'image'">
        <video preload="metadata" loop="" class="smc-mockup-media-video" v-if="assetType === 'video'" @click="onSmcPlayVideoClick">
            <source :src="assets[0]">
        </video>
        <span class="smc-btn smc-play-btn smc-no-events" v-if="assetType === 'video'"></span> -->
    </div>
    <div class="smc-instagram-learn-more">
        <span class="smc-btn">Learn More</span>
        <i class="smc-btn"></i>
    </div>
    <div class="smc-instagram-icons">
        <i class="smc-btn smc-instagram-love"></i>
        <i class="smc-btn smc-instagram-comment"></i>
        <div class="smc-instagram-carousel-indicator">
            <ul class="smc-carousel-indicator">
                <li class="smc-carousel-indicator--dot" :class="selectedCarouselDot === index ? 'active' : ''" v-for="(asset, index) in assets" :key="index" :id="`dot-${index}`"></li>
            </ul>
        </div>
    </div>
    <div class="smc-instagram-footer">
        <p class="smc-instagram-likes">
            <i></i>416 likes</p>
        <p class="smc-instagram-message" dir="auto">
            <span class="smc-instagram-message--acc" dir="auto">HP</span>Ladda ner "The Cybersecurity Field Manual" för att lära dig hur du skyddar din verksamhet.</p>
    </div>
  </article>
</template>

<script>
import Carousel from '@/components/Mockup/Carousel';
export default {
    components: {
        Carousel
    },
    props: ["assets", "assetType"],
    data() {
        return {
            selectedCarouselDot: 0
        }
    },
	methods: {
		onSmcPlayVideoClick(e) {
			document.querySelectorAll("video").forEach(function(video) {
				if (e.currentTarget != video) {
					if (video.parentNode.querySelector(".smc-play-btn")) {
						video.parentNode.querySelector(".smc-play-btn").classList.remove("hidden");
					}
					try {
						video.parentNode.querySelector(".smc-instagram-story--progress span").classList.add("smc-paused");
					} catch (err) {}
					video.pause();
				}
			});
			if (e.currentTarget.paused) {
				e.currentTarget.parentNode.querySelector(".smc-play-btn").classList.add("hidden");
				e.currentTarget.play();
			} else {
				e.currentTarget.parentNode.querySelector(".smc-play-btn").classList.remove("hidden");
				e.currentTarget.pause();
			}
        },
        onCarouselItemChanged(index) {
            this.selectedCarouselDot = index;
        }
    },
    created() {
        this.$on("carousel-item-changed", this.onCarouselItemChanged);
    }
};
</script>

<style scoped>
    .smc-instagram-icons {
        position: relative;
    }
    .smc-instagram-carousel-indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .smc-carousel-indicator {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .smc-carousel-indicator--dot {
        width: 5px;
        height: 5px;
        background-color: #cccccc;
        margin: 1px;
        border-radius: 50%;
        transition: all .2s linear;
        transform-origin: center;
        opacity: .6;
    }
    .smc-carousel-indicator--dot.active {
        background-color: #1c466d;
        opacity: 1;
        margin: 3px;
        transform: scale(1.5);
    }
</style>
