<script setup lang="ts">
	const route = useRoute()
	const { data } = await useFetch('/api/movies', {
		method: 'post',
		body: { id: route.params.id }
	})
</script>
<template>
	<div>list {{ route.params.id }}</div>
	<ul>
		<li v-for="v in data">{{ v.id }}</li>
	</ul>
</template>
