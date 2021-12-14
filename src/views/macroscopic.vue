<template>
	<div class="macroscopic">
		<div class="title">数据概览</div>
		<div class="flex_box">
			<div class="flex_left">
				<div class="data_views">
					<data-overview />
				</div>
				<div class="map_data">
					<data-map />
				</div>
			</div>
			<div class="flex_right">
				<IndustryComparison />
			</div>
		</div>
		<div class="flex_box">
			<div class="flex_left">
				<Capital />
			</div>
			<div class="flex_right">
				<div class="table_view">
					<OutputSort />
				</div>
				<div class="table_view">
					<ElectricitySort />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DataOverview from '@/components/macroscopic/dataOverview.vue'
	import DataMap from '@/components/macroscopic/dataMap.vue'
	import IndustryComparison from '@/components/macroscopic/industryComparison.vue'
	import Capital from '@/components/macroscopic/capital.vue'
	import OutputSort from '@/components/macroscopic/outputSort.vue'
	import ElectricitySort from '@/components/macroscopic/electricitySort.vue'
	export default{
		name: "Macroscopic",
		components: {
			DataOverview,
			DataMap,
			IndustryComparison,
			Capital,
			OutputSort,
			ElectricitySort
		}
	}
</script>

<style scoped lang="less">
	.macroscopic{
		display: flex;
		flex-direction: column;
		height: 100%;
		.title{
			font-size: 0.833333rem;
			font-weight: bold;
			color: #05FFFE;
			text-align: center;
			margin-bottom: 0.520833rem;
		}
		.flex_box{
			display: flex;
			flex: 1;
			margin-bottom: 2.083333rem;
			overflow: hidden;
			&:last-child{
				margin-bottom: 0;
			}
			.flex_left{
				flex: 1.4;
				margin-right: 2.083333rem;
				display: flex;
				.data_views{
					flex: 1.2;
					margin-right: 1.5625rem;

				}
				.map_data{
					flex: 1;
				}
			}
			.flex_right{
				flex: 1;
				display: flex;
				.table_view{
					flex: 1;
					margin-right: 1.5625rem;
					&:last-child{
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
