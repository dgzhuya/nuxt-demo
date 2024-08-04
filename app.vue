<template>
	<!-- <div> -->
	<div>
		<form>
			<label for="locale-select">{{ $t('language') }}: </label>
			<select id="locale-select" v-model="$i18n.locale">
				<option value="en">en</option>
				<option value="zh">zh</option>
			</select>
		</form>
	</div>
	<NuxtPage />
	<!-- </div> -->
</template>
<script setup lang="ts"></script>
