<script setup lang="ts">
	import { useResponsiveStore } from '~/store/responsive'

	const showLeft = ref(true)
	const showRight = ref(true)

	const responsiveStore = useResponsiveStore()
</script>
<template>
	<div class="main-container">
		<template v-if="responsiveStore.isNotebook">
			<div v-if="showLeft" class="left">
				<div class="title">
					<p>character.ai</p>
					<img @click="showLeft = false" src="~/assets/left.svg" alt="" />
				</div>
				<div class="list">
					<div class="create">
						<img src="~/assets/plus.svg" alt="" />
						<span>{{ $t('create') }}</span>
					</div>
					<div class="discover">
						<img src="~/assets/discover.svg" alt="" />
						<span>{{ $t('discover') }}</span>
					</div>
				</div>
			</div>
		</template>
		<div class="content">
			<div class="head">
				<div>
					<img v-show="!showLeft" @click="showLeft = true" src="~/assets/menu.svg" />
				</div>
				<div class="control">
					<img v-show="!showRight" @click="showRight = true" src="~/assets/right.svg" />
				</div>
			</div>
		</div>
		<template v-if="responsiveStore.isTv">
			<div v-if="showRight" class="right">
				<img @click="showRight = false" src="~/assets/avatar.avif" alt="" />
				<div class="lang">
					<LangSwitch></LangSwitch>
				</div>
			</div>
		</template>
	</div>
</template>
<style lang="scss" scoped>
	.main-container {
		display: flex;
		width: 100vw;
		height: 100vh;

		.left {
			width: 225px;
			box-sizing: border-box;
			padding: 24px 0 0 24px;
			background-color: #f9f9f9;
			.list {
				box-sizing: border-box;
				padding-right: 10px;
				.discover {
					height: 48px;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					padding-left: 10px;
					margin-top: 10px;

					&:hover {
						background-color: #999;
						border-radius: 10px;
					}

					img {
						width: 19px;
						margin-right: 10px;
					}
				}

				.create {
					width: 128px;
					height: 48px;
					border-radius: 24px;
					color: #26272b;
					line-height: 48px;
					background-color: rgb(236, 236, 238);
					display: flex;
					justify-content: center;
					border: 1px solid #d2d0d0;

					img {
						width: 19px;
						margin-right: 10px;
					}
				}
			}

			.title {
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding-right: 10px;
				margin-bottom: 20px;

				p {
					font-size: 18px;
					font-weight: bold;
				}

				img {
					cursor: pointer;
					width: 22px;
					height: 22px;

					&:hover {
						border-radius: 50%;
						background-color: #e2e0e0;
					}
				}
			}
		}

		.content {
			flex: 1;
			background-color: #f2f2f3;
			position: relative;
			.head {
				display: flex;
				justify-content: space-between;
				height: 40px;

				img {
					width: 40px;
				}

				.control {
					position: relative;
					display: flex;
					align-items: center;
				}
			}
		}

		.right {
			width: 320px;

			.lang {
				box-sizing: border-box;
				padding-left: 10px;
			}

			img {
				border-radius: 50%;
			}
		}
	}
</style>
