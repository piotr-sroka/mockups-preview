<template>
  <article class="smc-mockup smc-mockup-facebook smc-mockup-facebook--mobile smc-mockup-facebook--carousel-mobile">
    <div class="smc-mockup-top">
        <img class="smc-mockup-logo" src="https://hp-shopper.com/static/img/HP_Blue_RGB.png" alt="">
        <div class="smc-mockup-top--page">
            <p class="smc-page-title" dir="auto">HP</p>
            <p class="smc-page-subtitle">Sponsored</p>
        </div>
        <span class="smc-btn smc-facebook-more-options">
            <i></i>
        </span>
    </div>
    <p class="smc-mockup-message" dir="auto">Scopri una delle nostre tecnologie di sicurezza più recenti: HP Sure View, disponibile su HP EliteBook x360.</p>
    <div class="smc-mockup-media mobile">        
      <Carousel publisher="facebook" mode="mobile" :assets="assets" :assetType="assetType" />
    </div>
    <div class="smc-facebook-comments smc-mobile">
        <i class="smc-btn"></i>
        <span class="smc-btn smc-facebook-comments--likes">20</span>
        <span class="smc-btn smc-facebook-comments--shares">311 Shares</span>
        <span class="smc-btn smc-facebook-comments--comments">562 Comments</span>
    </div>
    <div class="smc-facebook-footer">
        <span class="smc-btn smc-facebook-like">
            <i></i>Like</span>
        <span class="smc-btn smc-facebook-comment">
            <i></i>Comment</span>
        <span class="smc-btn smc-facebook-share">
            <i></i>Share</span>
    </div>
  </article>
</template>

<script>
import Carousel from "@/components/Mockup/Carousel";

export default {
	props: ["assets", "assetType"],
  components: {
    Carousel
  }
};
</script>

<style scoped>

</style>
