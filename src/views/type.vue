<template>
	<div class="history">
		<div class="chart">
			<TypeDistribution />
		</div>
		<div class="chart">
			<IndustryDistribution />
		</div>
		<div class="chart" style="margin-bottom: 0;">
			<ZhanXinDistribution />
		</div>
		<div class="chart" style="margin-bottom: 0;">
			<IndustrialchainDistribution />
		</div>
	</div>
</template>

<script>
	import TypeDistribution from '@/components/type/typeDistribution.vue'
	import IndustryDistribution from '@/components/type/industryDistribution.vue'
	import ZhanXinDistribution from '@/components/type/zhanXinDistribution.vue'
	import IndustrialchainDistribution from '@/components/type/IndustrialchainDistribution.vue'
	export default{
		components: {
			TypeDistribution,
			IndustryDistribution,
			ZhanXinDistribution,
			IndustrialchainDistribution
		}
	}
</script>

<style scoped lang="less">
	.history{
		// background: red;
		height: 100%;
		width: 100%;
		padding-top: 1.5625rem;
		display: flex;
		flex-wrap: wrap;
		.chart{
			margin-left: 2.083333rem;
			margin-bottom: 2.083333rem;
			width: calc(( 100% - 2.083333rem) / 2);
			height: calc(( 100% - 2.083333rem) / 2);
			// background: gainsboro;
			&:nth-child(2n + 1){
				margin-left: 0;
			}
		}
	}
</style>
