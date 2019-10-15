<template>
  <div class="social-media-mockup-view smc-product-view mockup-preview">
    <div class="mockup-view">
      <AsyncComponent
        :class="isMouseOver && isCheckingLogoSize ? 'hovered' : ''"
        @mousemove.native="onMouseMove"
        @mouseover.native="isMouseOver = true"
        @mouseout.native="isMouseOver = false"
        v-for="selectedMockup in  selectedMockups"
        :key="selectedMockup"
        :mockupPath="parsePath(selectedMockup)"
        :unzippedImages="assets"
        :assetType="assetType"
      />
    </div>
    <LogoSizeIndicator
      v-if="isMouseOver && isCheckingLogoSize"
      :left="clientX"
      :top="clientY"
      :width="`${logoMaxSize.width}px`"
      :height="`${logoMaxSize.height}px`"
    />
  </div>
</template>

<script>
import AsyncComponent from "@/components/AsyncComponent";
import LogoSizeIndicator from "@/components/LogoSizeIndicator";

export default {
  components: {
    AsyncComponent,
    LogoSizeIndicator
  },
  props: [
    "selectedMockups",
    "assets",
    "assetType",
    "isCheckingLogoSize",
    "maxLogoWidth",
    "maxLogoHeight"
  ],
  data() {
    return {
      isMouseOver: false,
      logoMaxSize: {
        width: this.maxLogoWidth,
        height: this.maxLogoHeight
      },
      mouseMove: {
        x: 0,
        y: 0
      }
    };
  },
  methods: {
    parsePath(path) {
      let parsedPath = path.split("-").map(el => {
        let firstLetter = el.charAt(0).toUpperCase();
        return firstLetter + el.substring(1);
      });
      return parsedPath.join("/");
    },
    onMouseMove(e) {
      this.mouseMove = {
        x: e.clientX - this.logoMaxSize.width / 2,
        y: e.clientY - this.logoMaxSize.height / 2
      };
    }
  },
  computed: {
    clientX() {
      return `${this.mouseMove.x}px`;
    },
    clientY() {
      return `${this.mouseMove.y}px`;
    }
  },
  watch: {
    maxLogoWidth: function(val) {
      this.logoMaxSize.width = val;
    },
    maxLogoHeight: function(val) {
      this.logoMaxSize.height = val;
    }
  }
};
</script>

<style scoped>
.hovered::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
.hovered {
    cursor: none !important;
    position: relative;
}
.mockup-preview {
  width: 100%;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 2px 1px 2px #d2d2d2;
}
.mockup-select {
  width: 240px;
}
.mockup-select--list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
.mockup-type {
  padding: 12px;
  font-size: 1.2em;
  border-bottom: 1px solid #d2d2d2;
  text-transform: capitalize;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s linear;
}
.mockup-type:hover {
  background-color: #c8c8c8;
}
.mockup-view {
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
}
</style>
