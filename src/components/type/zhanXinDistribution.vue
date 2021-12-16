<template>
	<div class="typeDistribution">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">战新分布</div>
				
				<div class="tab_list">
					<div class="tab_item" :class="{ tab_active: timeType == 'year' }" @click="tabTime('year')">当年</div>
					<div class="tab_item" :class="{ tab_active: timeType == 'month' }" @click="tabTime('month')">当月
					</div>
				</div>
			</div>
			<div class="head_right">
		
			</div>
		</div>
		<div class="chart_id" :id="id" :class="className" :style="{height:height,width:width}" />
		<ComLoading v-if="loading"/>
	</div>
</template>

<script>
	import ComLoading from '@/components/loading/index.vue'
	import * as echarts from 'echarts';
	import resize from '@/mixins/resize.js'
	import { mapGetters } from 'vuex'
	export default{
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart_zhanXinDistribution'
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
				timeType: "year",
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
			tabTime(type) {
				this.timeType = type
				this.getData()
			},
			getData() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1500)
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
								<div class="modal_industry_tip_title">${ params.name }</div>
								<div class="line_item">
									<div class="line_item_name">企业数：</div><div class="line_item_num">34(12%)</div>
								</div>
								<div class="line_item">
									<div class="line_item_name">本年产值：</div><div class="line_item_num">207亿元(12%)</div>
									<div class="up_percent">10%</div>
									<div class="up_image"><i class="iconfont icon-xiangshang4" style="color:#FF0600;"></i></div>
								</div>
								<div class="line_item">
									<div class="line_item_name">本年销售：</div><div class="line_item_num">207亿元(12%)</div>
									<div class="up_percent">10%</div>
									<div class="up_image"><i class="iconfont icon-xiangshang4" style="color:#FF0600;"></i></div>
								</div>
								<div class="line_item">
									<div class="line_item_name">本年出口：</div><div class="line_item_num">207亿元(12%)</div>
									<div class="down_percent">10%</div> 
									<div class="up_image"><i class="iconfont icon-xiangshang4" style="color:#35B147;"></i></div>
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
						left: 100,
						top: 'center',
						textStyle: {
							color: '#fff'
						},
					},
					series: [{
						name: '行业分布',
						type: 'pie',
						radius: ['25%', '80%'],
						label: {
							show: false
						},
						roseType: 'area',
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
	.typeDistribution{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-image: url(../../assets/images/type/type_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;
		.chart_id{
			flex: 1;
		}
	}
</style>
