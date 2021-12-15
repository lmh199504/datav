<template>
	<div class="industryDistribution">
		<div class="total">
			<div>产业分布：</div>
			<div class="tab_list">
				<div class="tab_item" :class="{ tab_active: timeType == 'year' }" @click="tabTime('year')">当年</div>
				<div class="tab_item" :class="{ tab_active: timeType == 'month' }" @click="tabTime('month')">当月
				</div>
			</div>
		</div>
		<div class="chart_id" :id="id" :class="className" :style="{width:width}" />

	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import resize from '@/mixins/resize.js'
	export default {
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart_macroscopic_modal_industry'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '100%'
			}
		},
		mixins: [resize],
		data() {
			return {
				timeType: 'year'
			}
		},
		mounted() {
			this.initChart()
		},
		methods: {
			tabTime(type) {
				this.timeType = type
			},
			initChart() {
				this.chart = echarts.init(document.getElementById(this.id));
				let option = {
					
					tooltip: {
						trigger: 'item',
						formatter: function(params) {
							console.log(params)
							
							return `
							<div class="modal_industry_tip">
								<div class="modal_industry_tip_title">电子信息制造业</div>
								<div class="line_item">
									<div class="line_item_name">企业数：</div><div class="line_item_num">34(12%)</div>
								</div>
								<div class="line_item">
									<div class="line_item_name">本年产值：</div><div class="line_item_num">207亿元(12%)</div>
									<div class="up_percent">10%</div>
									<div class="up_image"><i class="iconfont icon-xiangshang4" style="color:#FF0600;"></i></div>
								</div>
								<div class="line_item">
									<div class="line_item_name">本年用电：</div><div class="line_item_num">200万千瓦(12%)</div>
									<div class="down_percent">10%</div> 
									<div class="up_image"><i class="iconfont icon-xiangshang4" style="color:#35B147;"></i></div>
								</div>
								<div class="line_item">
									<div class="line_item_name">本年税金：</div><div class="line_item_num">20亿元(12%)</div>
									<div class="down_percent">10%</div> 
									<div class="up_image"><i class="iconfont icon-xiangxia4" style="color:#35B147;"></i></div>
								</div>
							</div>
							`
						}
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						top: 50,
						textStyle: {
							color: '#fff'
						},
					},
					series: [{
						name: '行业分布',
						type: 'pie',
						radius: '75%',
						label: {
							show: false
						},
						left: 100,
						data: [{
								value: 1048,
								name: '电子信息制造业'
							},
							{
								value: 735,
								name: '电子信息制造'
							},
							{
								value: 580,
								name: '消费品制造业'
							},
							{
								value: 484,
								name: '材料及石化制造业'
							},
							{
								value: 300,
								name: '能源行业'
							}
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};
				this.chart.setOption(option)
			}
		}
	}
</script>

<style scoped lang="less">
	.industryDistribution {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		.total {
			display: flex;
			font-size: 0.833333rem;
			font-weight: 400;
			color: #FFFFFF;

			.tab_list {
				margin-left: 0.416666rem;
				display: flex;
				color: #FFFFFF;
				font-size: 0.833333rem;

				.tab_item {
					margin-right: 1.041666rem;
					cursor: pointer;
					position: relative;
					text-align: center;
				}

				.tab_active,
				.tab_item:hover {
					color: #05FFFE;

					&::after {
						content: '';
						display: block;
						position: absolute;
						width: 100%;
						width: 1.875rem;
						height: 0.104166rem;
						background: #05FFFE;
						bottom: -0.208333rem;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			}
		}

		.chart_id {
			flex: 1;
		}
	}
</style>
