<template>
  <article class="smc-mockup smc-mockup-reddit smc-mockup-reddit--mobile">
    <div class="smc-mockup-top">
      <img class="smc-mockup-logo" src="static/reddit_logo.svg" alt="" />
      <div class="smc-mockup-top--page">
        <p class="smc-page-subtitle">PROMOTED</p>
      </div>
    </div>
    <p class="smc-mockup-message" dir="auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci nisi,
      eleifend in quam ac, accumsan convallis mi.
    </p>
    <div class="smc-mockup-media">
      <img
        class="smc-mockup-media-image"
        :src="assets[0]"
        alt=""
        v-if="assetType === 'image'"
      />
      <video
        preload="metadata"
        loop=""
        class="smc-mockup-media-video"
        v-if="assetType === 'video'"
        @click="onSmcPlayVideoClick"
      >
        <source :src="assets[0]" />
      </video>
      <span
        class="smc-btn smc-play-btn smc-no-events"
        v-if="assetType === 'video'"
      ></span>
    </div>
    <div class="smc-reddit-post">
      <p class="smc-btn smc-reddit-post--display" dir="auto">
        Lorem ipsum dolor sit amet, co
      </p>
    </div>
    <div class="smc-reddit-footer">
      <div class="smc-reddit-voting">
        <button class="smc-reddit-arrow arrow-up"><span></span></button>
        <div class="smc-reddit-votes">0</div>
        <button class="smc-reddit-arrow arrow-down"><span></span></button>
      </div>
      <span class="smc-btn smc-reddit-comment"><i></i>0</span
      ><span class="smc-btn smc-reddit-share"><i></i>Share</span>
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
            video.parentNode
              .querySelector(".smc-play-btn")
              .classList.remove("hidden");
          }
          try {
            video.parentNode
              .querySelector(".smc-instagram-story--progress span")
              .classList.add("smc-paused");
          } catch (err) {}
          video.pause();
        }
      });
      if (e.currentTarget.paused) {
        e.currentTarget.parentNode
          .querySelector(".smc-play-btn")
          .classList.add("hidden");
        e.currentTarget.play();
      } else {
        e.currentTarget.parentNode
          .querySelector(".smc-play-btn")
          .classList.remove("hidden");
        e.currentTarget.pause();
      }
    }
  }
};
</script>

<style></style>
