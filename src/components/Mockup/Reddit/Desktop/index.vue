<template>
  <article class="smc-mockup smc-mockup-reddit">
    <div class="smc-reddit-column--left">
      <button class="smc-reddit-arrow arrow-up"><span></span></button>
      <div class="smc-reddit-votes">0</div>
      <button class="smc-reddit-arrow arrow-down"><span></span></button>
    </div>
    <div class="smc-reddit-column--right">
      <div class="smc-mockup-top">
        <span class="smc-page-subtitle">PROMOTED </span><span class="smc-page-subtitle-posted">• Posted by u/GL 9 days ago</span>
      </div>
      <p class="smc-mockup-message" dir="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci
        nisi, eleifend in quam ac, accumsan convallis mi.
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
        <span class="smc-btn smc-reddit-comment"><i></i>Comments</span>
        <span class="smc-btn smc-reddit-share"><i></i>Share</span>
        <span class="smc-btn smc-reddit-save"><i></i>Save</span>
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