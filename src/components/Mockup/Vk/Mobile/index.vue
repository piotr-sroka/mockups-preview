<template>
  <article class="smc-mockup smc-mockup-vk smc-mockup-vk--mobile">
      <div class="smc-mockup-top">
          <img class="smc-mockup-logo" src="https://hp-shopper.com/static/img/HP_Blue_RGB.png" alt="">
          <div class="smc-mockup-top--page">
              <p class="smc-page-title" dir="auto">HP</p>
              <p class="smc-page-subtitle">26 Sep 2019</p>
          </div>
          <span class="smc-btn smc-facebook-more-options">
              <i></i>
          </span>
      </div>
      <p class="smc-mockup-message" dir="auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci nisi, eleifend in quam ac, accumsan convallis mi.</p>
      <div class="smc-mockup-media mobile">
          <img class="smc-mockup-media-image" :src="assets[0]" alt="" v-if="assetType === 'image'">
          <video preload="metadata" loop="" class="smc-mockup-media-video" v-if="assetType === 'video'" @click="onSmcPlayVideoClick">
              <source :src="assets[0]">
          </video>
          <span class="smc-btn smc-play-btn smc-no-events" v-if="assetType === 'video'"></span>
      </div>
      <div class="smc-facebook-post-mobile">
          <p class="smc-btn smc-facebook-post--description" dir="auto">Sed in rhoncus tellus.</p>
          <p class="smc-facebook-post--caption" dir="auto">test.example.com/loremipsum...</p>
      </div>
      <div class="smc-facebook-comments smc-mobile">
          <span class="smc-btn smc-facebook-comments--likes">
              <i></i>20</span>
          <span class="smc-btn smc-facebook-comments--shares">
              <i></i>311</span>
          <span class="smc-btn smc-facebook-comments--comments">
              <i></i>562</span>
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
}
</script>

<style scoped>

</style>
