<template>
	<ModalBox @close="close" :showBack="true">
		<template>
			<div class="content">
				<div class="arae_name">{{ companyName }}</div>
				<DatePicker />
				
				<div class="main_chart">
					<div class="chart_left">
						<div class="left_top_chart">
							<EntMsg />
						</div>
						<div class="left_bottom_chart">
							<ProductionData />
						</div>
					</div>
					<div class="chart_right">
						<div class="right_top_chart">
							<PeopleCompare />
						</div>
						<div class="right_bottom_chart">
							<ElectricCompare />
						</div>
					</div>
				</div>
			</div>
		</template>
	</ModalBox>	
</template>

<script>
	import ModalBox from '@/components/modalBox/index.vue'
	import DatePicker from '@/components/datePicker.vue'
	import EntMsg from '@/components/macroscopic/companyModal/entMsg.vue'
	import ProductionData from '@/components/macroscopic/companyModal/productionData.vue'
	import ElectricCompare from './companyModal/electricCompare.vue'
	import PeopleCompare from './companyModal/peopleCompare.vue'
	export default{
		props: {
			companyName: {
				type: String,
				default: ''
			}
		},
		components: {
			ModalBox,
			DatePicker,
			EntMsg,
			ProductionData,
			ElectricCompare,
			PeopleCompare
		},
		methods: {
			close() {
				this.$emit('close')
			}
		}
	}
</script>

<style scoped lang="less">
	.content{
		width: 86.458333rem;
		height: 42.708333rem;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 3;
		background-image: url(../../assets/images/modal_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-left: -43.229166rem;
		margin-top: -21.354166rem;
		padding: 1.822916rem 2.604166rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.arae_name{
			text-align: center;
			color: #05FFFE;
			font-size: 1.822916rem;
			font-weight: bold;
		}
		.main_chart{
			flex: 1;
			margin-top: 1.041666rem;
			// background: red;
			display: flex;
			overflow: hidden;
			.chart_left{
				flex: 1;
				margin-right: 1.5625rem;
				// background-color: gray;
				height: 100%;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				.left_top_chart{
					// height: 42%;
					margin-bottom: 1.5625rem;
				}
				.left_bottom_chart{
					flex: 1;
				}
			}
			.chart_right{
				flex: 1.35;
				// background: honeydew;
				height: 100%;
				display: flex;
				flex-direction: column;
				.right_top_chart{
					flex: 1;
					// background: darkgoldenrod;
					margin-bottom: 1.5625rem;
					display: flex;
					.top_chart_item{
						flex: 1;
						height: 100%;
						margin-right: 0.520833rem;
					}
				}
				.right_bottom_chart{
					flex: 1;
					// background: darkcyan;
				}
			}
		}
	}
</style>