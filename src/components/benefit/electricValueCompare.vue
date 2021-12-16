<template>
	<div class="outputValue">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">单位用电产值对比</div>
			</div>
			<div class="head_right">
		
			</div>
		</div>
		<div class="chart_container">
			<div class="unit">单位：万元</div>
			<div class="chart_id" :id="id" :class="className" :style="{height:height,width:width}" />
		</div>
		
		<ComLoading v-if="loading"/>
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	import resize from '@/mixins/resize'
	import ComLoading from '@/components/loading/index.vue'
	import { mapGetters } from 'vuex'
	export default {
		mixins: [resize],
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart_electricValueCompare'
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
				collegeName: ['01', '02', '03', '04', '05', '06'],
				peopleList: [100, 120, 130, 140, 150, 160],
				eleList: [80, 90, 100, 110, 120, 130],
				loading: false
			}
		},
		computed: {
			...mapGetters([
				'cur_year'
			])
		},
		components: {
			ComLoading
		},
		mounted() {
			this.initChart()
		},
		methods: {
			getData() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1500)
			},
			initChart() {
				this.chart = echarts.init(document.getElementById(this.id));
				let option = {
					animation: true,
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
						data: [
							{
								name: "今年单位用电产值",
								icon: "rect",
								itemStyle: {
									color: "#1C7DFF"
								}
							},
							{
								name: "去年单位用电产值",
								icon: "rect",
								itemStyle: {
									color: "#FD981E"
								}
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
						name: "去年单位用电产值",
						data: this.peopleList,
						type: 'line',
						// yAxisIndex: 0,
						barWidth: '16',
						
						
						itemStyle: {
							normal: {
								//颜色设置
								color: 'rgba(253, 152, 30, 1)'
							},
						},
						// areaStyle: {
						// 	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						// 		offset: 0,
						// 		color: 'rgba(126, 0, 255, 0.5)'
						// 	}, {
						// 		offset: 1,
						// 		color: 'rgba(126, 0, 255, 0.1)'
						// 	}]),
						// },
						
						symbol: "none",
						smooth:true,//设置折线图平滑
					}, {
						name: "今年单位用电产值",
						data: this.eleList,
						type: 'bar',
						// yAxisIndex: 1,
						barWidth: '35',
						itemStyle: {
							normal: {
								// barBorderRadius: [5, 5, 0, 0],
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(28, 125, 255, 1)'
								}, {
									offset: 1,
									color: 'rgba(28, 125, 255, 0)'
								}]),
						
							},
						
						},
						symbol: "none",
						smooth:true,//设置折线图平滑
					}]
				};
				this.chart.clear()
				this.chart.setOption(option)
			}
		},
		watch: {
			cur_year: function() {
				this.getData()
			}
		}
	}
</script>

<style scoped lang="less">
	.outputValue{
		width: 100%;
		height: 100%;
		background-image: url(../../assets/images/history/history_chart_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		position: relative;
		.chart_id {
			height: 100%;
		}
		.chart_container{
			position: relative;
			flex: 1;
		}
		.unit{
			position: absolute;
			right: 60px;
			color: #FFFFFF;
			top: 12px;
			font-size: 0.729166rem;
		}
	}
</style>
