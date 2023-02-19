<template>
	<div>
		<header class="header">
			<h1 class="title">Hello Developer!</h1>
			<h2 class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
		</header>

		<div class="card-panel-group">
			<CardPanel v-for="card in cards" :key="card" :description="card"/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import CardPanel from './components/CardPanel.vue'

const cards = ref([
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lacus feugiat quam mattis, pellentesque commodo augue efficitur. Suspendisse eget lacus risus. Fusce imperdiet mi ligula, a pulvinar mi pellentesque cursus. Vestibulum sodales felis a lacus tristique.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lacus feugiat quam mattis, pellentesque commodo augue efficitur.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lacus feugiat quam mattis, pellentesque commodo augue efficitur. Suspendisse eget lacus risus. Fusce imperdiet mi ligula, a pulvinar mi pellentesque cursus.'
])
</script>


<style lang="scss" scoped>
@import '@/assets/_mixins.scss';

.header {
	background-color: #8f8f8f;
	background-image: url('https://via.placeholder.com/600x600');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	color: #ffffff;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
	gap: 20px;
	height: 50vh;
	max-height: 650px;
	padding: 0 20px;

	h1 {
		font-size: calc(100% + 9.5vw);
		line-height: 100%;
		margin: 0;

		@include breakpoint(tablet) {
			font-size: calc(100% + 3.5vw);
		}

	}

	h2 {
		font-size: calc(100% + 3vw);
		font-weight: normal;
		line-height: 100%;
		margin: 0;

		@include breakpoint(tablet) {
			font-size:  calc(100% + 1vw);
		}
	}

	@include breakpoint(tablet) {
		background-image: url('https://via.placeholder.com/1920x650');
		padding: 0 30px;
	}
}

.card-panel-group {
	display: grid;
	grid-template-columns: repeat(1, 1fr);	
	justify-items: center;
	align-content: flex-start;
	gap: 50px;
	margin: 50px 15%;

	@include breakpoint(tablet) {
		grid-template-columns: repeat(3, 1fr);	
		margin: 50px 7%;
	}
	
	@include breakpoint(desktop) {
		margin: 50px 15%;
    }
}
</style>
