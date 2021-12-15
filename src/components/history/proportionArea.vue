<template>
	<div class="outputValue">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">工业销售值历史趋势对比分析</div>
			</div>
			<div class="head_right"></div>
		</div>
		<div class="chart_container">
			<div class="unit">单位：亿元</div>
			<div class="chart_id" :id="id" :class="className" :style="{height:height,width:width}" />
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	import resize from '@/mixins/resize'
	export default {
		mixins: [resize],
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart_proportion_area'
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
			return {
				collegeName: ['2020 2021\n01', '2020 2021\n02', '2020 2021\n03', '2020 2021\n04', '2020 2021\n05', '2020 2021\n06'],
				peopleList: [100, 120, 130, 140, 150, 160],
				eleList: [80, 90, 100, 110, 120, 130]
			}
		},
		mounted() {
			this.initChart()
		},
		methods: {
			initChart() {
				this.chart = echarts.init(document.getElementById(this.id));
				let option = {
					animation: true,
					color: ['#6E04E2', '#00A2FF', '#00E9AF', '#B04684', '#35B147', '#FF971D'],
					tooltip: {
						show: true,
						trigger: 'axis',
					},
					legend: {
						show: true,
						right: 160,
						top: 10,
						textStyle: {
							color: '#fff'
						},
					},
					grid: {
						// top: "10px",
						bottom: "40px"
					},
					xAxis: {
						type: 'category',
						data: this.collegeName,
						axisLabel: {
							show: true,
							textStyle: {
								color: "#1DDCFF"
							},
							interval: 0
						},
						//设置轴线的属性
						axisLine: {
							lineStyle: {
								color: '#1DDCFF',
								// width: 8, //这里是为了突出显示加上的
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'solid',
								color: "#0f4055"
							}
						},
						axisTick: { //y轴刻度线
							show: false,
							inside: true
						},
					},
					yAxis: {
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								color: "#1DDCFF"
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
								color: "#0f4055"
							}
						}
					},
					series: [
						// 去年
						{
							name: '思明区',
							type: 'bar',
							stack: 'Ad',
							emphasis: {
								focus: 'series'
							},
							data: [320, 332, 301, 334, 390, 330, 320]
						}, {
							name: '海沧区',
							type: 'bar',
							stack: 'Ad',
							emphasis: {
								focus: 'series'
							},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '湖里区',
							type: 'bar',
							stack: 'Ad',
							emphasis: {
								focus: 'series'
							},
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '集美区',
							type: 'bar',
							stack: 'Ad',
							emphasis: {
								focus: 'series'
							},
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '翔安区',
							type: 'bar',
							stack: 'Ad',
							emphasis: {
								focus: 'series'
							},
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '同安区',
							type: 'bar',
							barWidth: 24,
							stack: 'Ad',
							emphasis: {
								focus: 'series'
							},
							data: [620, 732, 701, 734, 1090, 1130, 1120]
						},
						
						// 今年
						
						{
								name: '思明区',
								type: 'bar',
								stack: 'cur',
								emphasis: {
									focus: 'series'
								},
								data: [320, 332, 301, 334, 390, 330, 320]
							}, {
								name: '海沧区',
								type: 'bar',
								stack: 'cur',
								emphasis: {
									focus: 'series'
								},
								data: [120, 132, 101, 134, 90, 230, 210]
							},
							{
								name: '湖里区',
								type: 'bar',
								stack: 'cur',
								emphasis: {
									focus: 'series'
								},
								data: [220, 182, 191, 234, 290, 330, 310]
							},
							{
								name: '集美区',
								type: 'bar',
								stack: 'cur',
								emphasis: {
									focus: 'series'
								},
								data: [150, 232, 201, 154, 190, 330, 410]
							},
							{
								name: '翔安区',
								type: 'bar',
								stack: 'cur',
								emphasis: {
									focus: 'series'
								},
								data: [150, 232, 201, 154, 190, 330, 410]
							},
							{
								name: '同安区',
								type: 'bar',
								barWidth: 24,
								stack: 'cur',
								emphasis: {
									focus: 'series'
								},
								data: [620, 732, 701, 734, 1090, 1130, 1120]
							}
						
					]
				};
				this.chart.clear()
				this.chart.setOption(option)
			}
		}
	}
</script>

<style scoped lang="less">
	.outputValue {
		width: 100%;
		height: 100%;
		background-image: url(../../assets/images/history/history_chart_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;

		.chart_id {
			height: 100%;
		}

		.chart_container {
			position: relative;
			flex: 1;
		}

		.unit {
			position: absolute;
			right: 60px;
			color: #FFFFFF;
			top: 10px;
			font-size: 0.729166rem;
		}
	}
</style>
