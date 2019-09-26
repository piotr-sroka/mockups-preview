<template>
    <div>
        <div :class="'smc-' + changedPublisherClass + '-carousel'" :data-displayed-carousel-item="displayedCarouselItem" ref="carousel" :style="'left:' + carouselPosition + 'px'">
            <div class="smc-carousel-item" :data-carousel-item="index" style="opacity: 1;" v-for="(asset, index) in assets" :key="index" @click="onCarouselItemClick(index)" @mouseover="onCarouselItemOver($event, index)" @mouseout="onCarouselItemOut($event)">
                <img class="smc-mockup-media-image" :src="asset" alt="" v-if="assetType === 'image'">
                <div class="smc-facebook-post" v-if="publisher === 'facebook'">
                    <p class="smc-btn smc-facebook-post--headline smc-uppercase" dir="auto"></p>
                    <p class="smc-btn smc-facebook-post--description" dir="auto">Sed in rhoncus tellus.</p>
                    <p class="smc-facebook-post--caption" dir="auto">TEST.EXAMPLE.COM/LOREMIPSUM...</p>
                </div>
                <div class="smc-linkedin-post" v-if="publisher === 'linkedin'">
                    <p class="smc-btn smc-linkedin-post--headline" dir="auto">Sed in rhoncus tellus.</p>
                    <p class="smc-btn smc-linkedin-post--description" dir="auto">TEST.EXAMPLE.COM/LOREMIPSUM...</p>
                </div>
                <div class="smc-facebook-post" v-if="publisher === 'vk'">
                    <p class="smc-btn smc-facebook-post--headline smc-uppercase " dir="auto"></p>
                    <p class="smc-btn smc-facebook-post--description " dir="auto ">Ferma l'hacking visivo</p>
                    <p class="smc-facebook-post--caption
                    " dir="auto ">ENABLE.HP.COM/COMPUTERSECURITY-IT</p>
                </div>
            </div>
        </div>
        <div :class="'smc-' + changedPublisherClass + '-carousel-arrow smc-carousel-arrow-left smc-no-events'" v-if="displayedCarouselItem > 0"></div>
        <div :class="'smc-' + changedPublisherClass + '-carousel-arrow smc-carousel-arrow-right smc-no-events'" v-if="displayedCarouselItem < assets.length - 1"></div>
    </div>
</template>

<script>
export default {
	props: ["publisher", "mode", "assets", "assetType"],
	data() {
		return {
			carouselItemWidthAndShift: {
				desktop: {
					width: 310,
					shift: 220,
					maxLeft: 474
				},
				mobile: {
					width: 240,
					shift: 205,
					maxLeft: 298
				}
			},
			displayedCarouselItem: 0,
			carouselPosition: 0
		};
    },
    computed: {
        changedPublisherClass() {
            if (this.publisher === "vk") {
                return "facebook";
            }
            return this.publisher;
        }
    },
	methods: {
		onCarouselItemOver(e, index) {
			if (this.displayedCarouselItem !== index) e.currentTarget.style.opacity = ".6";
		},
		onCarouselItemOut(e) {
			e.currentTarget.style.opacity = "1";
		},
		onCarouselItemClick(carouselItem) {
			let changeDirection = "";
			if (carouselItem > this.displayedCarouselItem) {
				changeDirection = "right";
			} else if (carouselItem < this.displayedCarouselItem) {
				changeDirection = "left";
			}
			if (changeDirection != "") this.changeCarouselPosition(changeDirection, carouselItem);
		},
		changeCarouselPosition(dir, carouselItem) {
			let carouselProps = this.mode === "desktop" ? this.carouselItemWidthAndShift.desktop : this.carouselItemWidthAndShift.mobile;
			if (dir === "right") {
				if (carouselItem < this.assets.length - 1) {
					let position = this.carouselPosition < 0 ? -((carouselItem - 1) * carouselProps.width) : 0;
					this.carouselPosition = -carouselProps.shift + position;
				} else {
					this.carouselPosition = -(this.$refs.carousel.scrollWidth - carouselProps.maxLeft);
				}
			} else if (dir === "left") {
				if (carouselItem > 0) {
					let position = this.carouselPosition < 0 ? -((carouselItem - 1) * carouselProps.width) : 0;
					this.carouselPosition = -carouselProps.shift + position;
				} else {
					this.carouselPosition = 0;
				}
			}
			this.displayedCarouselItem = carouselItem;
		}
	}
};
</script>

