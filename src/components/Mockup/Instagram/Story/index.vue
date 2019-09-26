<template>
    <article class="smc-mockup smc-mockup-instagram smc-mockup-instagram-story">
        <img class="smc-instagram-story-media" :src="assets[0]" alt="" v-if="assetType === 'image'">
		<video preload="metadata" loop="" class="smc-mockup-media-video" v-if="assetType === 'video'" @click="onSmcPlayVideoClick">
			<source :src="assets[0]">
		</video>
		<span class="smc-btn smc-play-btn smc-no-events" v-if="assetType === 'video'"></span>
        <div class="smc-instagram-story--progress">
            <span class="smc-paused"></span>
        </div>
        <div class="smc-mockup-top smc-no-events">
            <img class="smc-mockup-logo smc-no-events" src="https://hp-shopper.com/static/img/HP_Blue_RGB.png" alt="">
            <div class="smc-mockup-top--page smc-no-events">
                <p class="smc-page-title" dir="auto">HP</p>
            </div>
            <i class="smc-btn smc-close-btn smc-no-events"></i>
        </div>
        <div class="smc-instagram-footer smc-no-events">
            <p>Sponsored
                <i></i>
            </p>
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
					video.pause();
				}
			});
			e.currentTarget.parentNode.querySelector(".smc-instagram-story--progress span").style.animationDuration = e.currentTarget.duration + "s";
			if (e.currentTarget.paused) {
				e.currentTarget.parentNode.querySelector(".smc-play-btn").classList.add("hidden");
				e.currentTarget.parentNode.querySelector(".smc-instagram-story--progress span").classList.remove("smc-paused");
				e.currentTarget.play();
			} else {
				e.currentTarget.parentNode.querySelector(".smc-play-btn").classList.remove("hidden");
				e.currentTarget.parentNode.querySelector(".smc-instagram-story--progress span").classList.add("smc-paused");
				e.currentTarget.pause();
			}
		}
	}
};
</script>

<style scoped>

</style>