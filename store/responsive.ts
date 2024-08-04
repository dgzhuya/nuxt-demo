import { defineStore } from 'pinia'

type DeviceType = 'other' | 'phone' | 'pad' | 'notebook' | 'desktop' | 'tv'

export const useResponsiveStore = defineStore('responsive', () => {
	const width = ref(0)

	const device = computed<DeviceType>(() => {
		if (width.value > 1200) {
			return 'tv'
		} else if (width.value > 1024) {
			return 'desktop'
		} else if (width.value > 768) {
			return 'notebook'
		} else if (width.value > 480) {
			return 'pad'
		} else if (width.value > 320) {
			return 'phone'
		} else {
			return 'other'
		}
	})

	const resetWidth = () => {
		width.value = window.innerWidth
	}

	onMounted(() => {
		width.value = window.innerWidth
		window.addEventListener('resize', resetWidth)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', resetWidth)
	})

	return {
		device,
		isPhone: computed(() => device.value === 'phone')
	}
})
