<script setup lang="ts">
	import { useResponsiveStore } from '~/store/responsive'

	const responsiveStore = useResponsiveStore()
</script>
<template>
	<div class="about-container">{{ $t('about') }}</div>
	<div>{{ responsiveStore.device }}</div>
</template>
<style lang="scss" scoped>
	.about-container {
		color: rebeccapurple;

		@include respondTo('desktop') {
			color: gold;
		}

		@include respondTo('') {
		}
	}
</style>
