<template>
	<div class="electricCompare">
		<div class="unit">单位：万元</div>
		<div class="chart_id" :id="id" :class="className" :style="{height:height,width:width}" />
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
				default: 'chart_electric_compare'
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
				collegeName: ['2021.01', '2021.02', '2021.03', '2021.04', '2021.05', '2021.06'],
				peopleList: [100, 120, 130, 140, 150, 160],
				eleList: [80, 90, 100, 110, 120, 400]
			}
		},
		mounted() {
			this.initChart()
		},
		methods: {
			initChart() {
				this.chart = echarts.init(document.getElementById(this.id));
				let option = {
					title: {
						text: "单位用电产值对比",
						textStyle: {
							color: "#fff",
							fontSize: '16',

						},
						padding: [5, 5, 5, 40]
					},
					animation: true,
					tooltip: {
						show: true,
						trigger: 'axis',
					},
					legend: {
						show: true,
						right: 160,
						textStyle: {
							color: '#fff'
						},
						data: [
							{
								name: "单位用电量",
								icon: "rect"
							},
							{
								name: "单位用电量平均产值",
								icon: "rect"
							}
						]
					},
					grid: {
						// top: "10px",
						bottom: "30px"
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
					series: [{
						name: "单位用电量",
						data: this.peopleList,
						type: 'line',
						// yAxisIndex: 0,
						itemStyle: {
							normal: {
								// barBorderRadius: [5, 5, 0, 0],
								color: "#35B147"
							},
						},
						symbol: "none",
						smooth:true,//设置折线图平滑
					}, {
						name: "单位用电量平均产值",
						data: this.eleList,
						type: 'line',
						// yAxisIndex: 1,
						barWidth: '16',
						itemStyle: {
							normal: {
								//颜色设置
								color: "#973BF4"
							},
						},
						symbol: "none",
						smooth:true,//设置折线图平滑
					}]
				};
				this.chart.clear()
				this.chart.setOption(option)
			}
		}
	}
</script>

<style scoped lang="less">
	.electricCompare{
		height: 100%;
		width: 100%;
		position: relative;
		.chart_id{
			width: 100%;
			height: 100%;
		}
		.unit{
			position: absolute;
			right: 60px;
			color: #FFFFFF;
			font-size: 0.729166rem;
		}
	}
</style>
