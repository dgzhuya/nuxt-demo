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

		@include respondToTV {
			color: red;
		}

		@include respondToDesktop {
			color: gold;
		}

		@include respondToPhone {
			color: green;
		}

		@include respondToNotebook {
			color: chocolate;
		}

		@include respondToPad {
			color: magenta;
		}
	}
</style>
