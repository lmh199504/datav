<template>
	<div class="capital">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">资金对比</div>

			</div>
			<div class="head_right">

			</div>
		</div>
		<div class="chart_id" :id="id" :class="className" :style="{width:width}" />

	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import resize from '@/mixins/resize.js'
	export default {
		mixins: [resize],
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart_macroscopic_capital'
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
		data() {
			return {}
		},
		mounted() {
			this.initChart()
		},
		methods: {
			initChart() {
				// var self = this
				this.chart = echarts.init(document.getElementById(this.id));
				const color = ['#7E00FF', '#00A2FF', '#00E9AF', '#ff971d']
				let option = {
					color: color,
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						top: 15,
						right : 30,
						textStyle: {
							color: '#fff'
						},
						data: [{
								name: "资产合计",
								icon: "rect"
							},
							{
								name: "工业产值",
								icon: "rect"
							},
							{
								name: "主营业务收入",
								icon: "rect"
							},
							{
								name: "销售产",
								icon: "rect"
							}
						]
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['2021.01', '2021.02', '2021.03', '2021.04', '2021.05', '2021.06'],
						axisLabel: {
							show: true,
							textStyle: {
								color: "#1DDCFF"
							}
						},
						//设置轴线的属性
						axisLine: {
							lineStyle: {
								color: '#1DDCFF',
								// width: 8, //这里是为了突出显示加上的
							}
						},
						axisTick: { //y轴刻度线
							show: true,
							inside: true
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'solid',
								color: "rgba(29, 220, 255, 0.2)"
							}
						}
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: "#1DDCFF",
								fontSize: '14px'
							}
						},
						//设置轴线的属性
						axisLine: {
							show: true,
							lineStyle: {
								color: '#1DDCFF',
								// width: 8, //这里是为了突出显示加上的
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'solid',
								color: "rgba(29, 220, 255, 0.2)"
							}
						}
					}],
					series: [{
							name: '资产合计',
							type: 'line',
							emphasis: {
								focus: 'series'
							},
							data: [320, 332, 301, 334, 390, 330, 320],
							
							lineStyle: {
								color: "#7E00FF"
							},
							areaStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(126, 0, 255, 0.8)'
								}, {
									offset: 1,
									color: 'rgba(126, 0, 255, 0.1)'
								}]),
							},
							symbol: 'circle',
							symbolSize: 10
						},
						{
							name: '工业产值',
							type: 'line',
							data: [220, 182, 191, 234, 290, 330, 310],
							lineStyle: {
								color: "rgba(0, 162, 255, 1)"
							},
							areaStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(0, 162, 255, 0.8)'
								}, {
									offset: 1,
									color: 'rgba(0, 162, 255, 0.1)'
								}]),
							},
							symbol: 'circle',
							symbolSize: 10
						},
						{
							name: '主营业务收入',
							type: 'line',
							data: [150, 232, 201, 154, 190, 330, 410],
							lineStyle: {
								color: "rgba(0, 233, 175, 1)"
							},
							areaStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(0, 233, 175, 0.8)'
								}, {
									offset: 1,
									color: 'rgba(0, 233, 175, 0.1)'
								}]),
							},
							symbol: 'circle',
							symbolSize: 10
						},
						{
							name: '销售产',
							type: 'line',
							data: [120, 132, 101, 134, 90, 230, 210],
							lineStyle: {
								color: "rgba(255, 151, 29, 1)"
							},
							areaStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(255, 151, 29, 0.8)'
								}, {
									offset: 1,
									color: 'rgba(255, 151, 29, 0.1)'
								}]),
							},
							symbol: 'circle',
							symbolSize: 10
						}
					]
				}

				this.chart.setOption(option)

			}
		}
	}
</script>

<style scoped lang="less">
	.capital {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		background-image: url(../../assets/images/macroscopic/capital_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;

		.chart_id {
			flex: 1;
		}
	}
</style>
