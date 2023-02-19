<template>
	<div>
		<nav class="tab">
			<span
				v-for="(content, index) in props.contentData"
				:key="index"
				@click="onSelect(content)"
				class="tab__title"
				:class="{'tab__title--active' : content.active }"
				>{{ content.title }}</span
			>
		</nav>
		<div class="accordion">
			<section
				v-for="(content, index) in props.contentData"
				:key="index"
				@click="onSelect(content)"
				class="accordion__item"
			>
				<div
					class="accordion__title"
					:class="{ 'accordion__title--active' : content.active }"
				>
					<span>{{ content.title }}</span>
					<img :src="getImage(content)" class="arrow" alt="expand"/>
				</div>
				<div class="accordion__content" :class="{ 'accordion__content--expanded': content.active }" v-html="content.content"></div>
			</section>
		</div>
	</div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useContentFetch } from '@/components/ContentFetch.ts'

const { actions } = useContentFetch()
const props = defineProps({
  contentData: Object
});

const onSelect = (content) => {
	actions.resetContent(content);

	if (!isMobileBreakpoint()) {
		content.active = true
	} else {
		content.active = !content.active
	}
}

const getImage = (content) => {
	return content.active ? "./assets/arrow-up.svg" : "./assets/arrow-down.svg"
}


const isMobileBreakpoint = () => {
	return document.documentElement.clientWidth <= 768 ? true : false
	
}
onMounted(() => {
	window.addEventListener('resize', () => {
		if (isMobileBreakpoint()) {
			actions.resetContentDesktop()
		}
	})
})
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
@import "@/assets/_mixins.scss";

.tab {
	display: none;

	.tab__title {
		display: inline-block;
		border: 1px solid #aaa;
		border-bottom: 0;
		border-right: 0;
		cursor: pointer;
		font-weight: bold;
		padding: 10px 20px;

		&:first-child {
			border-top-left-radius: 5px;
		}
		&:last-child {
			border-right: 1px solid #aaa;
			border-top-right-radius: 5px;
		}
	}

	@include breakpoint(tablet) {
		display: block;
	}
}

.accordion {
	.accordion__title {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		align-content: normal;
		border: 1px solid #aaa;
		cursor: pointer;
		font-weight: bold;
		padding: 10px;
		position: relative;

		@include breakpoint(tablet) {
			display: none;
		}
	}

	.accordion__content {
		max-height: 0;
		opacity: 0;
		border: 1px solid #aaa;
		padding: 0 20px;
		transition: all 0.5s;

		&.accordion__content--expanded {
			max-height: 500px;
			opacity: 1;
		}

		&:not(.accordion__content--expanded) {
			@include breakpoint(tablet) {
				display: none;
			}
		}

		@include breakpoint(tablet) {
			transition: none;
			border-radius: 0 5px 5px 5px;
			box-shadow: 0 1px 5px rgb(0 0 0 / 15%);
		}
	}
}

.tab__title--active,
.accordion__title--active {
	background: $background-selected;
}

.arrow {
	width: 24px;
	height: 24px;
}
</style>
