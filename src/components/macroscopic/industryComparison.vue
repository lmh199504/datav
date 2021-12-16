<template>
	<div class="industryComparison">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">行业对比</div>
				<div class="tab_list">
					<div class="tab_item" :class="{ tab_active: timeType == 'year' }" @click="tabTime('year')">当年</div>
					<div class="tab_item" :class="{ tab_active: timeType == 'month' }" @click="tabTime('month')">当月</div>
				</div>
			</div>
			<div class="head_right">
				<div class="page_btn" :class="{ page_btn_disalbe: disablePre }" @click="tabPre">上一页</div>
				<div class="page_btn" @click="tabNext">下一页</div>
			</div>
		</div>
		
		<div class="legend">
			<div class="legend_item">
				<div class="legend_div" style="background: #ff971d;"></div>
				<div class="legend_name">工业产值</div>
			</div>
			<div class="legend_item">
				<div class="legend_item">
					<div class="legend_div" style="background: #37B449;"></div>
					<div class="legend_name">工业产值</div>
				</div>
			</div>
		</div>
		
		<div class="data_list">
			<div class="data_item">
				<div class="data_name over_one_line" title="铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业</div>
				<div class="data_column">
					<div class="data_num_left">
						<div class="column"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent down_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/downimg.png" >
						</div>
					</div>
				</div>
				
				<div class="data_column">
					<div class="data_num_left">
						<div class="column_green"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent up_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/upimg.png" >
						</div>
					</div>
				</div>
			</div>
			<div class="data_item">
				<div class="data_name over_one_line" title="铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业</div>
				<div class="data_column">
					<div class="data_num_left">
						<div class="column"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent down_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/downimg.png" >
						</div>
					</div>
				</div>
				
				<div class="data_column">
					<div class="data_num_left">
						<div class="column_green"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent up_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/upimg.png" >
						</div>
					</div>
				</div>
			</div>
			<div class="data_item">
				<div class="data_name over_one_line" title="铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业</div>
				<div class="data_column">
					<div class="data_num_left">
						<div class="column"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent down_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/downimg.png" >
						</div>
					</div>
				</div>
				
				<div class="data_column">
					<div class="data_num_left">
						<div class="column_green"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent up_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/upimg.png" >
						</div>
					</div>
				</div>
			</div>
			<div class="data_item">
				<div class="data_name over_one_line" title="铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业</div>
				<div class="data_column">
					<div class="data_num_left">
						<div class="column"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent down_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/downimg.png" >
						</div>
					</div>
				</div>
				
				<div class="data_column">
					<div class="data_num_left">
						<div class="column_green"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent up_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/upimg.png" >
						</div>
					</div>
				</div>
			</div>
			<div class="data_item">
				<div class="data_name over_one_line" title="铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业</div>
				<div class="data_column">
					<div class="data_num_left">
						<div class="column"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent down_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/downimg.png" >
						</div>
					</div>
				</div>
				
				<div class="data_column">
					<div class="data_num_left">
						<div class="column_green"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent up_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/upimg.png" >
						</div>
					</div>
				</div>
			</div>
			<div class="data_item">
				<div class="data_name over_one_line" title="铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业航空航天和其他运输设备制造业</div>
				<div class="data_column">
					<div class="data_num_left">
						<div class="column"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent down_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/downimg.png" >
						</div>
					</div>
				</div>
				
				<div class="data_column">
					<div class="data_num_left">
						<div class="column_green"></div>
						<div class="unm_unit">207亿元</div>
					</div>
					<div class="data_num_right">
						<div class="pencent up_pencent">10%</div>
						<div class="pencent_img flex_center">
							<img src="../../assets/images/upimg.png" >
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<ComLoad v-if="loading"/>
	</div>
</template>

<script>
	import ComLoad from '@/components/loading/index.vue'
	import { mapGetters } from 'vuex'
	export default{
		components: {
			ComLoad
		},
		data() {
			return {
				page: 0,
				loading: false,
				timeType: 'year',
				total: 30
			}
		},
		computed: {
			disablePre: function() {
				return this.page == 0
			},
			...mapGetters([
				'cur_year'
			])
		},
		methods: {
			tabPre() {
				if(this.disablePre) {
					return
				}
				
				this.page --
				this.getData()
			},
			tabNext() {
				
				this.page ++
				this.getData()
			},
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
		},
		watch: {
			cur_year: function() {
				this.getData()
			}
		}
	}
</script>

<style scoped lang="less">
	.industryComparison{
		position: relative;
		width: 100%;
		height: 100%;
		width: 100%;
		height: 100%;
		background-image: url(../../assets/images/macroscopic/industryComparisonbg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		.chart_head{
			.head_right{
				display: flex;
				color: #05FFFE;
				font-size: 0.729166rem;
				align-items: flex-end;
				.page_btn{
					margin-right: 1.5625rem;
					cursor: pointer;
				}
				.page_btn_disalbe{
					cursor: not-allowed;
				}
			}
		}
		.legend{
			display: flex;
			justify-content: flex-end;
			padding: 0.520833rem 2.604166rem;
			margin-top: 0.520833rem;
			.legend_item{
				margin-left: 1.041666rem;
				display: flex;
				align-items: center;
				
				.legend_div{
					width: 0.677083rem;
					height: 0.677083rem;
					margin-right: 0.15625rem;
				}
				.legend_name{
					font-size: 0.729166rem;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}
		.data_list{
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			padding:  0 0.78125rem 0.78125rem;
			overflow: hidden;
			.data_item{
				padding: 0.520833rem 0.78125rem;
				width: calc((100% - 0.78125rem) / 2);
				height: calc((100% - 1.5625rem ) / 3);
				background-image: url(../../assets/images/macroscopic/Industry_item_bg.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin-left: 0.78125rem;
				margin-bottom: 0.78125rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&:nth-child(2n+1){
					margin-left: 0;
				}
				.data_name{
					font-size: 0.729166rem;
					font-weight: 400;
					color: #05FFFE;
					// margin-bottom: 0.520833rem;
				}
				.data_column{
					display: flex;
					justify-content: space-between;
					
					.data_num_left{
						display: flex;
						flex: 1;
						align-items: center;
						.column{
							width: 80%;
							height: 0.520833rem;
							background: linear-gradient(90deg, #9F681A, #F49D20);
						}
						.column_green{
							width: 2.604166rem;
							height: 0.520833rem;
							background: linear-gradient(90deg, #137E23, #39B74B);
						}
						.unm_unit{
							margin-left: 0.520833rem;
							font-size: 0.729166rem;
							color: #FFFFFF;
							min-width: 5.208333rem;
							flex-shrink: 0;
						}
					}
					.data_num_right{
						display: flex;
						align-items: center;
						.up_pencent{
							color: #E20D09;
							font-size: 0.729166rem;
						}
						.down_pencent{
							color: #3BDF53;
							font-size: 0.729166rem;
						}
						.pencent_img{
							margin-left: 0.15625rem;
							width: 0.677083rem;
							img{
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
</style>
