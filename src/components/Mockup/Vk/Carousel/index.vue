<template>
    <article class="smc-mockup smc-mockup-vk smc-mockup-vk--carousel">
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
        <div class="smc-mockup-media">
          <Carousel publisher="vk" mode="desktop" :assets="assets" :assetType="assetType" />
        </div>
        <div class="smc-facebook-comments">
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