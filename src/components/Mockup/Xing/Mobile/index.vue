<template>
  <article class="smc-mockup smc-mockup-xing smc-mockup-xing--mobile">
    <div class="smc-mockup-top">
      <img
        class="smc-mockup-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZEolkvOzu5mSzZptlfWzNGUmKTJtIy3ziILCkmm6xWAzjspkf&usqp=CAU"
        alt=""
      />
      <div class="smc-mockup-top--page">
        <p class="smc-page-title" dir="auto">Flexiworksspace GmbH</p>
        <p class="smc-page-subtitle">Gesponsert</p>
      </div>
    </div>
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
    <div class="smc-xing-post">
      <p class="smc-btn smc-xing-post--headline" dir="auto">
        Sed in rhoncus tellus.
      </p>
      <p class="smc-btn smc-xing-post--description" dir="auto">
        Morbi eget congue neque.
      </p>
    </div>
    <div class="smc-xing-footer">
      <span class="smc-btn smc-xing-like"><i></i></span>
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

<style scoped></style>
