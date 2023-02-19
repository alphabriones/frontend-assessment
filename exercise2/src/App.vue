<template>
	<div>
		<TabAccordion :contentData="state.content"/>
	</div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useContentFetch } from './components/ContentFetch.ts'
import TabAccordion from '@/components/TabAccordion.vue'

const { state, actions } = useContentFetch()

onBeforeMount(async () => {
	await actions.getData()
})
</script>