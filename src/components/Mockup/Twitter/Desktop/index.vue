<template>
  <article class="smc-mockup smc-mockup-twitter">
    <img class="smc-mockup-logo" src="https://hp-shopper.com/static/img/HP_Blue_RGB.png" alt="">
    <div class="smc-mockup-content">
        <div class="smc-mockup-top">
            <div class="smc-mockup-top--page">
                <p class="smc-page-title smc-btn" dir="auto">
                    <strong>HP</strong>
                    <span class="smc-page-title-verified"></span>
                    <span>@HP</span>&nbsp;•&nbsp;
                    <i></i>
                    <span>26 Sep 2019</span>
                </p>
                <p class="smc-page-subtitle" dir="auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci nisi, eleifend in quam ac, accumsan convallis
                    mi.
                </p>
            </div>
            <span class="smc-btn smc-twitter-more"></span>
        </div>
        <div class="smc-mockup-media">
            <div class="smc-twitter-black-background">
              <img class="smc-mockup-media-image" :src="assets[0]" alt="" v-if="assetType === 'image'">
              <video preload="metadata" loop="" class="smc-mockup-media-video" v-if="assetType === 'video'" @click="onSmcPlayVideoClick">
                  <source :src="assets[0]">
              </video>
              <span class="smc-btn smc-play-btn smc-no-events" v-if="assetType === 'video'"></span>
            </div>
            <div class="smc-btn smc-twitter-post">
                <p class="smc-btn smc-twitter-post--headline" dir="auto">Sed in rhoncus tellus.</p>
                <p class="smc-btn smc-twitter-post--description" dir="auto">test.example.com/loremipsum...</p>
            </div>
        </div>
        <div class="smc-twitter-comments">
            <span class="smc-btn smc-twitter-comments--reply">13</span>
            <span class="smc-btn smc-twitter-comments--retweet">416</span>
            <span class="smc-btn smc-twitter-comments--favourite">647</span>
            <span class="smc-btn smc-twitter-comments--other"></span>
        </div>
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
