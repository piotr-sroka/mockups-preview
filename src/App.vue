<template>
	<div id="app" :class="selectedMockups.length ? 'scrollable' : ''">
		<transition name="fadein">
			<button @click="reset" class="back-btn" v-if="unzippedImages.length"></button>
		</transition>
		<DropZone :onDropFiles="preProcessFiles" v-if="!unzippedImages.length" />
		<Publishers :show="unzippedImages.length" :setPublisher="setPublisher" :isCarousel="isCarousel" />
		<MockupTypes :types="mockupTypes" :onClick="onMockupTypeClick" />
		<transition name="mockup-fade">
			<div class="mockup-view-container" v-if="selectedMockups.length">
				<Mockups :selectedMockups="selectedMockups" :assets="unzippedImages" :assetType="assetType" />
			</div>
		</transition>
		<!-- <Mockup :mockupTypes="mockupTypes" v-if="unzippedImages.length" :publisher="currentPublisher" :isCarousel="isCarousel" /> -->
	</div>
</template>

<script>
import DropZone from "@/components/DropZone";
import Publishers from "@/components/Publishers";
import PublisherLogo from "@/components/PublisherLogo";
import MockupTypes from "@/components/MockupTypes";
import Mockups from "@/components/Mockup";

import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

import "@/assets/css/style.css";
import "@/assets/css/base.css";

export default {
	name: "app",
	components: {
		DropZone,
		Publishers,
		PublisherLogo,
		MockupTypes,
		Mockups
	},
	data() {
		return {
			assetPath: "",
			zippedFiles: [],
			unzippedImages: [],
			currentPublisher: "",
			isCarousel: false,
			assetType: "",
			mockupTypes: [],
			selectedMockups: []
		};
	},
	methods: {
		reset() {
			this.zippedFiles = [];
			this.unzippedImages = [];
			this.currentPublisher = "";
			this.isCarousel = false;
			this.assetType = "";
			this.mockupTypes = [];
			this.selectedMockups = [];
		},
		onDrag() {
			// console.log("onDrag");
		},
		onDrop(e, publisher) {
			this.currentPublisher = publisher;
			this.preProcessFiles(e.target.files || e.dataTransfer.files);
		},
		preProcessFiles(files) {
			const filesArray = Array.from(files);
			let allTheSameType = filesArray.every(file => {
				return file.type === filesArray[0].type;
			});
			if (filesArray.length > 1 && !allTheSameType) {
				return this.$dialogs.alert("Multiple files have to be the same type");
			}
			if (filesArray.length > 1 && allTheSameType && ["zip", "application/octet-stream", "application/zip", "application/x-zip", "application/x-zip-compressed"].indexOf(filesArray[0].type) >= 0) {
				return this.$dialogs.alert("Only one carousel at a time");
			}
			if (filesArray.length > 1 && allTheSameType && ["image/png", "image/jpeg", "image/gif"].indexOf(filesArray[0].type) >= 0) {
				this.isCarousel = true;
				this.assetType = "image";
				return this.loadAssets(filesArray);
			}
			if (filesArray.length > 1 && allTheSameType && ["video/mp4"].indexOf(filesArray[0].type) >= 0) {
				this.isCarousel = true;
				this.assetType = "video";
				return this.loadAssets(filesArray);
			}
			if (filesArray.length < 2 && ["zip", "application/octet-stream", "application/zip", "application/x-zip", "application/x-zip-compressed"].indexOf(filesArray[0].type) >= 0) {
				this.isCarousel = true;
				this.assetType = "image";
				return this.unzipPackage(filesArray[0]);
			}
			if (filesArray.length < 2 && ["image/png", "image/jpeg", "image/gif"].indexOf(filesArray[0].type) >= 0) {
				this.assetType = "image";
				return this.loadAssets(filesArray);
			}
			if (filesArray.length < 2 && ["video/mp4"].indexOf(filesArray[0].type) >= 0) {
				this.assetType = "video";
				return this.loadAssets(filesArray);
			}
			return this.$dialogs.alert("Unsupported file type");
		},
		unzipPackage(zipFile) {
			let ifAnyUnsupportedFile = false;
			JSZipUtils.getBinaryContent(URL.createObjectURL(zipFile), (err, data) => {
				try {
					JSZip.loadAsync(data).then(zip => {
						for (let file in zip.files) {
							let fileExtension = file.substring(file.indexOf(".") + 1);
							if (fileExtension !== "jpg" && fileExtension !== "png" && fileExtension !== "gif") {
								return this.$dialogs.alert("Only images are supported in carousel");
							}
							this.zippedFiles.push(zip.files[file]);
						}
						this.loadZippedFiles(zip);
					});
				} catch (e) {
					showError(elt, e);
				}
			});
		},
		loadZippedFiles(zip) {
			this.unzippedImages = [];
			this.zippedFiles.forEach(zippedFile => {
				zip
					.file(zippedFile.name)
					.async("base64")
					.then(result => {
						this.unzippedImages.push("data:image/jpeg;base64," + result);
						if (this.unzippedImages.length === this.zippedFiles.length) this.checkPublisherAndPrepareMockup();
					});
			});
		},
		loadAssets(files) {
			this.unzippedImages = [];
			files.forEach(file => {
				this.unzippedImages.push(URL.createObjectURL(file));
			});
			this.checkPublisherAndPrepareMockup();
		},
		checkPublisherAndPrepareMockup() {
			switch (this.currentPublisher.toLowerCase()) {
				case "facebook":
					if (this.unzippedImages.length > 1) {
						this.mockupTypes = ["facebook-carousel", "facebook-carousel-mobile"];
					} else {
						this.mockupTypes = ["facebook-desktop", "facebook-mobile", "facebook-story"];
					}
					break;
				case "instagram":
					if (this.unzippedImages.length > 1) {
						this.mockupTypes = [];
						return this.$dialogs.alert("Instagram doesn't support carousels");
					} else {
						this.mockupTypes = ["instagram-standard", "instagram-story"];
					}
					break;
				case "linkedin":
					if (this.unzippedImages.length > 1) {
						this.mockupTypes = ["linkedin-carousel", "linkedin-carousel-mobile"];
					} else {
						this.mockupTypes = ["linkedin-desktop", "linkedin-mobile"];
					}
					break;
				case "twitter":
					if (this.unzippedImages.length > 1) {
						this.mockupTypes = [];
						return this.$dialogs.alert("Twitter doesn't support carousels");
					} else {
						this.mockupTypes = ["twitter-desktop", "twitter-mobile"];
					}
					break;
				case "vk":
					if (this.unzippedImages.length > 1) {
						this.mockupTypes = ["vk-carousel", "vk-carousel-mobile"];
					} else {
						this.mockupTypes = ["vk-desktop", "vk-mobile"];
					}
					break;
			}
		},
		setPublisher(publisher) {
			if (this.currentPublisher !== publisher) {
				this.selectedMockups = [];
				this.currentPublisher = publisher;
				this.checkPublisherAndPrepareMockup();
			}
		},
		onMockupTypeClick(selectedMockups) {
			this.selectedMockups = selectedMockups;
		}
	},
	created() {
		document.title = "Mockups preview"
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
html,
body {
	height: 100%;
	width: 100%;
	max-height: 100%;
	box-sizing: border-box;
	background-color: #e8e8e8;
	overflow: hidden;
}
.mockup-view-container {
	margin-top: 50px;
}
.social-media-mockup-view.smc-product-view.mockup-preview {
	margin-top: 0;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
}
#app.scrollable {
	overflow: auto;
}
.back-btn {
	background: transparent;
	background-image: url("assets/back.svg");
	background-size: 50px 50px;
	background-repeat: no-repeat;
	background-position: center;
	width: 60px;
	height: 60px;
	border: none;
	outline-color: transparent;
	position: fixed;
	left: 0;
	top: 0;
	padding: 10px;
	cursor: pointer;
	transform: scale(0.8);
	transition: all 0.2s linear;
}
.back-btn:hover {
	transform: scale(1);
}
.fadein-enter-active,
.fadein-leave-active {
	transition: all 0.5s;
}
.fadein-enter-active {
	transition-delay: 0.5s;
}
.fadein-enter,
.fadein-leave-to {
	margin-left: 80px;
	opacity: 0;
}
.mockup-fade-enter-active,
.mockup-fade-leave-active {
	transition: all 0.5s;
}
.mockup-fade-enter,
.mockup-fade-leave-to {
	opacity: 0;
}
</style>