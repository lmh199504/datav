<template>
	<div class="history">
		<div class="chart">
			<PeopleValueCompare />
		</div>
		<div class="chart">
			<ElectricValueCompare />
		</div>
		<div class="chart" style="margin-bottom: 0;">
			<OutputValueCompare />
		</div>
		<div class="chart" style="margin-bottom: 0;">
			<SaleValueCompare />
		</div>
	</div>
</template>

<script>
	import PeopleValueCompare from '@/components/benefit/peopleValueCompare.vue'
	import ElectricValueCompare from '@/components/benefit/electricValueCompare.vue'
	import OutputValueCompare from '@/components/benefit/outputValueCompare.vue'
	import SaleValueCompare from '@/components/benefit/saleValueCompare.vue'
	export default{
		components: {
			PeopleValueCompare,
			ElectricValueCompare,
			OutputValueCompare,
			SaleValueCompare
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
