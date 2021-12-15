<template>
	<div class="history">
		<div class="chart">
			<OutputValue />
		</div>
		<div class="chart">
			<ElectricHistory />
		</div>
		<div class="chart" style="margin-bottom: 0;">
			<SaleHistory />
		</div>
		<div class="chart" style="margin-bottom: 0;">
			<ProportionArea />
		</div>
	</div>
</template>

<script>
	import OutputValue from '@/components/history/outputValue.vue'
	import ElectricHistory from '@//components/history/electricHistory.vue'
	import SaleHistory from '@/components/history/saleHistory.vue'
	import ProportionArea from '@/components/history/proportionArea.vue'
	export default{
		components: {
			OutputValue,
			ElectricHistory,
			SaleHistory,
			ProportionArea
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
