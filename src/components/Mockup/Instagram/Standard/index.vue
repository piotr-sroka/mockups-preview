<template>
  <article class="smc-mockup smc-mockup-instagram">
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
        <img class="smc-mockup-media-image" :src="assets[0]" alt="" v-if="assetType === 'image'">
        <video preload="metadata" loop="" class="smc-mockup-media-video" v-if="assetType === 'video'" @click="onSmcPlayVideoClick">
            <source :src="assets[0]">
        </video>
        <span class="smc-btn smc-play-btn smc-no-events" v-if="assetType === 'video'"></span>
    </div>
    <div class="smc-instagram-learn-more">
        <span class="smc-btn">Learn More</span>
        <i class="smc-btn"></i>
    </div>
    <div class="smc-instagram-icons">
        <i class="smc-btn smc-instagram-love"></i>
        <i class="smc-btn smc-instagram-comment"></i>
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
export default {
	props: ["assets", "assetType"],
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
		}
	}
};
</script>

<style scoped>

</style>
