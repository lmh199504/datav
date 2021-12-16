<template>
	<div class="data_overview">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">数据概览</div>
				<div class="tab_list">
					<div class="tab_item" :class="{ tab_active: timeType == 'year' }" @click="tabTime('year')">当年</div>
					<div class="tab_item" :class="{ tab_active: timeType == 'month' }" @click="tabTime('month')">当月
					</div>
				</div>
			</div>
			<div class="head_right">
				<AreaSelect @change="areaChange"/>
			</div>
			<!-- <img src="@/assets/images/macroscopic/overview_title.png" class="head_bg"> -->
		</div>
		
		<div class="data_list">
			<div class="row">
				<div class="data_item">
					<div class="data_item_name">重点工业企业</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>家</div>
						<div class="data_num_right">
							<div class="pencent up_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/upimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">工业产值</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">用电量</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>千瓦时</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="data_item">
					<div class="data_item_name">工业销售值</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">出口交货值</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">存货</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="data_item">
					<div class="data_item_name">主营业务收入</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">负债合计</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">营业税金</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="data_item">
					<div class="data_item_name">资产合计</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">利润总额</div>
					<div class="data_num">
						<div class="data_num_left"><span>207</span>亿元</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
				<div class="data_item">
					<div class="data_item_name">从业人数</div>
					<div class="data_num">
						<div class="data_num_left"><span>25777</span>人</div>
						<div class="data_num_right">
							<div class="pencent down_pencent">10%</div>
							<div class="pencent_img flex_center">
								<img src="../../assets/images/downimg.png" >
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ComLoading v-if="loading"/>
	</div>
</template>

<script>
	import ComLoading from '@/components/loading/index.vue'
	import AreaSelect from '@/components/areaSelect.vue'
	import { mapGetters } from 'vuex'
	export default{
		data() {
			return {
				timeType: 'year',
				loading: false
			}
		},
		computed: {
			...mapGetters([
				'cur_year'
			])
		},
		methods: {
			tabTime(type) {
				this.timeType = type
				this.getData()
			},
			areaChange(value) {
				console.log(value)
				this.getData()
			},
			getData() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1500) 
			}
		},
		components: {
			AreaSelect,
			ComLoading
		},
		watch: {
			cur_year: function() {
				this.getData()
			}
		}
	}
</script>

<style scoped lang="less">
	.data_overview{
		width: 100%;
		height: 100%;
		background-image: url(../../assets/images/macroscopic/overview_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;
		display: flex;
		flex-direction: column;
		.head_bg{
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.data_list{
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 0.78125rem;
			.row{
				flex: 1;
				display: flex;
				margin-bottom: 0.78125rem;
				&:last-child{
					margin-bottom: 0;
				}
				.data_item{
					margin-right: 0.78125rem;
					flex: 1;
					flex-direction: column;
					display: flex;
					justify-content: space-between;
					padding: 0.677083rem 0.833333rem;
					border: 1px solid rgba(27, 169, 171, 0.58);
					cursor: pointer;
					&:hover{
						box-shadow: inset -5px 5px 5px #097c87, inset -5px -5px 5px #097c87, inset 5px -5px 5px #097c87, inset 5px 5px 5px #097c87;
					}
					&:last-child{
						margin-right: 0;
					}
					.data_item_name{
						font-size: 0.677083rem;
						font-weight: 400;
						color: #FFFFFF;
					}
					.data_num{
						display: flex;
						justify-content: space-between;
						.data_num_left{
							font-size: 0.729166rem;
							font-weight: bold;
							color: #FFFFFF;
							span{
								color: #FFEC13;
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
	}
</style>
