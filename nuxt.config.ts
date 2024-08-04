export default defineNuxtConfig({
	css: ['~/assets/reset.css'],
	compatibilityDate: '2024-04-03',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/common.scss" as *;'
				}
			}
		}
	},
	devtools: { enabled: true },
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
			}
		],
		'@unocss/nuxt'
	],
	unocss: {
		nuxtLayers: true
	}
})
