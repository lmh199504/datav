<template>
	<div class="layouts">
		<top-header></top-header>
		<div class="app-container">
			<router-view />
		</div>
	</div>
</template>

<script>
	import { reqGetEntInfo } from '@/api/index'
	import TopHeader from '@/components/header.vue'
	export default{
		components: {
			TopHeader
		},
		created() {
			var data = {
				appId: '123132',
				years: '2021',
				page: 1,
				limit: 10
			}
			reqGetEntInfo(data)
		}
	}
</script>

<style scoped lang="less">
	.layouts{
		width: 100%;
		height: 100vh;
		background: #0d1e32;
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		.app-container{
			flex: 1;
			padding: 0.520833rem 2.604166rem 2.604166rem 2.604166rem;
			overflow: hidden;
		}
	}
</style>
