<template>
    <transition name="fadein">
        <section class="mockup-types" v-if="mockupTypes.length">
            <button class="mockup-type" :class="mockupType.active ? 'active' : ''" v-for="mockupType in mockupTypes" :key="mockupType.type" @click="selectMockupType(mockupType)">{{getNiceMockupType(mockupType.type)}}</button>
        </section>
    </transition>
</template>

<script>
export default {
	props: ["types", "onClick"],
	data() {
		return {
			mockupTypes: []
		};
	},
	methods: {
		getComponentPath(mockupType) {
			// console.log(mockupType);
		},
		getNiceMockupType(mockupType) {
			this.getComponentPath(mockupType);
			return mockupType.replace(/-/g, " ");
		},
		selectMockupType(mockupType) {
            mockupType.active = !mockupType.active;
            let selectedMockups = this.mockupTypes.filter(mockupType => {
                return mockupType.active;
            });
			this.onClick(selectedMockups.map(mockupType => {
                return mockupType.type;
            }));
		}
    },
    watch: {
        types: function (val, oldVal) {
            this.mockupTypes = [];
            this.types.forEach(type => {
		    	this.mockupTypes.push({type: type, active: false});
            });
        },
    }
};
</script>

<style scoped>
.mockup-types {
	display: flex;
	max-width: 720px;
	justify-content: center;
	margin: 0 auto;
}
.mockup-type {
	font-size: 0.8em;
	font-weight: bold;
	color: #f8f8f8;
	background-color: #a8a8a8;
	border: none;
	outline-color: transparent;
	padding: 12px;
	margin: 0 4px;
	min-width: 200px;
	transition: all 0.2s linear;
	cursor: pointer;
}
.mockup-type:hover,
.mockup-type.active {
	background-color: #2a2a2a;
	color: #d8d8d8;
}
@media screen and (max-width: 720px) {
	.mockup-types {
		flex-direction: column;
	}
	.mockup-type {
		margin: 4px 0;
	}
}
.fadein-enter-active,
.fadein-leave-active {
	transition: all 0.5s;
}
.fadein-enter,
.fadein-leave-to {
	margin-top: 40px;
	opacity: 0;
}
</style>
