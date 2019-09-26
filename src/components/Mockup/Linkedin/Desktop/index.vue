<template>
    <article class="smc-mockup smc-mockup-linkedin">
        <div class="smc-mockup-top">
            <img class="smc-mockup-logo" src="https://hp-shopper.com/static/img/HP_Blue_RGB.png" alt="">
            <div class="smc-mockup-top--page">
                <p class="smc-btn smc-page-title" dir="auto">HP</p>
                <p class="smc-page-subtitle">Sponsored</p>
            </div>
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="smc-btn smc-more-options smc-artdeco-icon"
                focusable="false">
                <path d="M2,10H6v4H2V10Zm8,4h4V10H10v4Zm8-4v4h4V10H18Z" class="large-icon" style="fill: currentColor"></path>
            </svg>
        </div>
        <p class="smc-mockup-message" dir="auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci nisi, eleifend in quam ac, accumsan convallis mi.</p>
        <div class="smc-mockup-media">
          <img class="smc-mockup-media-image" :src="assets[0]" alt="" v-if="assetType === 'image'">
          <video preload="metadata" loop="" class="smc-mockup-media-video" v-if="assetType === 'video'" @click="onSmcPlayVideoClick">
              <source :src="assets[0]">
          </video>
          <span class="smc-btn smc-play-btn smc-no-events" v-if="assetType === 'video'"></span>
        </div>
        <div class="smc-linkedin-post">
            <p class="smc-btn smc-linkedin-post--headline" dir="auto">Sed in rhoncus tellus.</p>
            <p class="smc-btn smc-linkedin-post--description" dir="auto">test.example.com/loremipsum...</p>
        </div>
        <div class="smc-linkedin-comments">
            <span class="smc-btn smc-linkedin-comments--likes">531 Likes</span>
            <span class="smc-btn smc-linkedin-comments--comments">65 Comments</span>
        </div>
        <div class="smc-linkedin-footer">
            <span class="smc-btn smc-linkedin-like">
                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="smc-artdeco-icon"
                    focusable="false">
                    <path d="M17.51,11L15.36,8a14.81,14.81,0,0,1-2.25-5.29L12.74,1H10.5A2.5,2.5,0,0,0,8,3.5V4.08a9,9,0,0,0,.32,2.39L9,9H4.66A2.61,2.61,0,0,0,2,11.4a2.48,2.48,0,0,0,.39,1.43,2.48,2.48,0,0,0,.69,3.39,2.46,2.46,0,0,0,1.45,2.92,2.47,2.47,0,0,0,0,.36A2.5,2.5,0,0,0,7,22h4.52a8,8,0,0,0,1.94-.24l3-.76H21V11H17.51ZM19,19H16.88l-3.41.82A6,6,0,0,1,12,20H7a0.9,0.9,0,0,1-.9-0.89s0-.07,0-0.14l0.15-1-1-.4a0.9,0.9,0,0,1-.55-0.83,0.93,0.93,0,0,1,0-.22L5,15.57,4.27,15a0.9,0.9,0,0,1-.39-0.74A0.88,0.88,0,0,1,4,13.82l0.46-.72L4,12.38a0.88,0.88,0,0,1-.14-0.51,1,1,0,0,1,1-.87H11.5L10.2,6.3a9,9,0,0,1-.33-2.37V3.38a0.5,0.5,0,0,1,.5-0.5h0.95a17.82,17.82,0,0,0,2.52,6.22L16.6,13H19v6Z"
                        class="large-icon" style="fill: currentColor"></path>
                </svg>Like</span>
            <span class="smc-btn smc-linkedin-comment">
                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="smc-artdeco-icon"
                    focusable="false">
                    <path d="M18,10H6V9H18v1Zm4-5V22l-5-4H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM20,6H4V16H17.7L20,17.84V6Zm-4,6H8v1h8V12Z"
                        class="large-icon" style="fill: currentColor"></path>
                </svg>Comment</span>
            <span class="smc-btn smc-linkedin-share">
                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="smc-artdeco-icon"
                    focusable="false">
                    <path d="M24,12h0a1.18,1.18,0,0,0-.36-0.84L14,2V8H11A10,10,0,0,0,1,18v4H2.87A6.11,6.11,0,0,1,9,16h5v6l9.63-9.14A1.18,1.18,0,0,0,24,12s0,0,0,0h0Zm-8,5.54V14H9a8.15,8.15,0,0,0-6,2.84A8,8,0,0,1,11,10h5V6.48L21.81,12Z"
                        class="large-icon" style="fill: currentColor"></path>
                </svg>Share</span>
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