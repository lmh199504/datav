<template>
	<div class="capitalComparison">
		<div class="unit">单位：万元</div>
		<div class="chart_id" :id="id" :class="className" :style="{height:height,width:width}" />
		
		<!-- <div style="color: red;position: absolute;z-index: 100;top: 10px;right: 10px">{{ year }}</div> -->
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
				default: 'chart_enterpriseStatistics'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '100%'
			},
			year: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				collegeName: ['2021.01', '2021.02', '2021.03', '2021.04', '2021.05', '2021.06'],
				peopleList: [100, 120, 130, 140, 150, 160],
				eleList: [80, 90, 100, 110, 120, 130],
				loading: false
			}
		},
		components: {
			ComLoading
		},
		computed: {
			...mapGetters([
				'cur_year'
			])
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
					title: {
						text: "资金对比",
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
						data: [{
							name: "单位用人产值",
							icon: "rect",
							itemStyle: {
								color: "rgba(31, 128, 218, 1)"
							}
						},
						{
							name: "单位用电产值",
							icon: "rect",
							itemStyle: {
								color: "rgba(255, 151, 29, 1)"
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
						name: "单位用人产值",
						data: this.peopleList,
						type: 'bar',
						// yAxisIndex: 0,
						barWidth: '16',
						itemStyle: {
							normal: {
								// barBorderRadius: [5, 5, 0, 0],
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(31, 128, 218, 1)'
								}, {
									offset: 1,
									color: 'rgba(31, 128, 218, 0)'
								}]),

							},

						}
					}, {
						name: "单位用电产值",
						data: this.eleList,
						type: 'bar',
						// yAxisIndex: 1,
						barWidth: '16',
						itemStyle: {
							normal: {
								//颜色设置
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(255, 151, 29, 1)'
								}, {
									offset: 1,
									color: 'rgba(255, 151, 29, 0)'
								}]),
							},
						}
					}]
				};
				this.chart.clear()
				this.chart.setOption(option)
			}
		},
		watch: {
			year: {
				handler: function() {
					this.getData()
				},
				immediate: true
			}
		}
	}
</script>

<style scoped lang="less">
	.capitalComparison {
		width: 100%;
		height: 100%;
		position: relative;
		.chart_id {
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
