<template>
	<div class="card">
		<div class="card__thumbnail"></div>
		<p class="card__description">{{ props.description }}</p>
		<CustomButton/>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'
import CustomButton from './CustomButton.vue'

const props = defineProps({
  description: String
});
</script>

<style lang="scss" scoped>
@import '@/assets/_mixins.scss';

.card {
	border-radius: 5px;
	box-shadow: 0 0 9px rgb(0 0 0 / 20%);
	display: flex;
	flex: 100%;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	padding: 20px;
	max-width: 400px;

	.card__thumbnail {
		background-image: url('https://via.placeholder.com/400x300');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px;
		padding-bottom: 75%;
		width: 100%;
	}

	.card__description {
		text-align: center;
		font-size: 18px;
	}

	@include breakpoint(tablet) {
		flex: 33.33%;
	}
}


</style>