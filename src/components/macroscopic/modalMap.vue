<template>
	<ModalBox @close="close" :showBack="true">
		<template>
			<div class="content">
				<div class="arae_name">{{ area }}</div>
				<DatePicker />
				
				<div class="main_chart">
					<div class="chart_left">
						<GeneralDetails />
					</div>
					<div class="chart_right">
						<div class="top_chart">
							<div class="top_chart_item">
								<IndustryDistribution id="chart_macroscopic_modal_industry1"/>
							</div>
							<div class="top_chart_item">
								<IndustryDistribution id="chart_macroscopic_modal_industry2"/>
							</div>
						</div>
						<div class="bottom_chart">
							<CapitalComparison />
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
	import GeneralDetails from '@/components/macroscopic/modal/generalDetails.vue'
	import IndustryDistribution from '@/components/macroscopic/modal/industryDistribution.vue'
	import CapitalComparison from '@/components/macroscopic/modal/capitalComparison.vue'
	export default{
		props: {
			area: {
				type: String,
				default: "思明区"
			}
		},
		data() {
			return {}
		},
		components: {
			ModalBox,
			DatePicker,
			GeneralDetails,
			IndustryDistribution,
			CapitalComparison
		},
		methods: {
			close() {
				this.$emit("close")
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
			}
			.chart_right{
				flex: 1.35;
				// background: honeydew;
				height: 100%;
				display: flex;
				flex-direction: column;
				.top_chart{
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
				.bottom_chart{
					flex: 1;
					// background: darkcyan;
				}
			}
		}
	}
</style>
