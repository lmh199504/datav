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

		<ComLoading v-if="loading" />
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	import resize from '@/mixins/resize'
	import ComLoading from '@/components/loading/index.vue'
	import {
		mapGetters
	} from 'vuex'
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
				collegeName: ['2020 2021\n01', '2020 2021\n02', '2020 2021\n03', '2020 2021\n04', '2020 2021\n05',
					'2020 2021\n06'
				],
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
					animation: true,
					color: ['#6E04E2', '#00A2FF', '#00E9AF', '#B04684', '#35B147', '#FF971D'],
					tooltip: {
						show: true,
						trigger: 'axis',
						formatter: function(params) {
							console.log(params)
							let last_str = ''
							let cur_str = ''
							for(let i = 0;i< params.length ;i ++) {
								if(i < 6) {
									cur_str += params[i].marker + `<span style="margin-left: 5px; color:#666666">${ params[i].seriesName }</span> <span style="margin-left: 20px;color:#666666;font-weight: bold;">${ params[i].value }</span><br>`
								} else {
									last_str += params[i].marker + `<span style="margin-left: 5px; color:#666666">${ params[i].seriesName }</span> <span style="margin-left: 20px;color:#666666;font-weight: bold;">${ params[i].value }</span><br>`
								}
							}
							
							var restr = `
								<div style="display:flex;">
									<div style="margin-right: 20px;">
										<div>今年销售值</div>
										${ cur_str }
									</div>
									<div>
										<div>去年销售值</div>
										${ last_str }
									</div>
								</div>
							`
											
							return  restr
						}
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
						// 今年
						
						{
							name: '思明区',
							type: 'bar',
							stack: 'cur',
							emphasis: {
								focus: 'series'
							},
							data: [3200, 3320, 3010, 3304, 3900, 3300, 3200]
						}, {
							name: '海沧区',
							type: 'bar',
							stack: 'cur',
							emphasis: {
								focus: 'series'
							},
							data: [1200, 1320, 1010, 1340, 900, 2300, 2100]
						},
						{
							name: '湖里区',
							type: 'bar',
							stack: 'cur',
							emphasis: {
								focus: 'series'
							},
							data: [2200, 1820, 1901, 2304, 2090, 3300, 3100]
						},
						{
							name: '集美区',
							type: 'bar',
							stack: 'cur',
							emphasis: {
								focus: 'series'
							},
							data: [1500, 2032, 2001, 1540, 1900, 3300, 4010]
						},
						{
							name: '翔安区',
							type: 'bar',
							stack: 'cur',
							emphasis: {
								focus: 'series'
							},
							data: [1500, 2302, 2010, 1504, 1090, 3300, 4010]
						},
						{
							name: '同安区',
							type: 'bar',
							barWidth: 24,
							stack: 'cur',
							emphasis: {
								focus: 'series'
							},
							data: [6200, 7320, 7001, 7304, 10090, 11300, 11020]
						},
						
						// 去年
						{
							name: '思明区',
							type: 'bar',
							stack: 'last',
							emphasis: {
								focus: 'series'
							},
							data: [320, 332, 301, 334, 390, 330, 320]
						}, {
							name: '海沧区',
							type: 'bar',
							stack: 'last',
							emphasis: {
								focus: 'series'
							},
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '湖里区',
							type: 'bar',
							stack: 'last',
							emphasis: {
								focus: 'series'
							},
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '集美区',
							type: 'bar',
							stack: 'last',
							emphasis: {
								focus: 'series'
							},
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '翔安区',
							type: 'bar',
							stack: 'last',
							emphasis: {
								focus: 'series'
							},
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '同安区',
							type: 'bar',
							barWidth: 24,
							stack: 'last',
							emphasis: {
								focus: 'series'
							},
							data: [620, 732, 701, 734, 1090, 1130, 1120]
						},

						
					]
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
	.outputValue {
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
