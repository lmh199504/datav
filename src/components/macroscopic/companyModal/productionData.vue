<template>
	<div class="productionData">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">生成数据（2021）</div>
				
			</div>
			<div class="head_right"></div>
		</div>
		
		<div class="tagList">
			<div class="tag_item">
				<div class="tag_name">工业产值</div>
				<div class="compare">
					<div class="compare_num">
						<span class="num">2000</span>
						<span class="unit">万元</span>
					</div>
					<div class="compare_percent">
						<span class="up">同比12%</span>
						<i class="iconfont icon-xiangshang4"></i>
					</div>
				</div>
				<div class="column">
					<div class="pencent_column"></div>
				</div>
				
			</div>
			<div class="tag_item">
				<div class="tag_name">用电量</div>
				<div class="compare">
					<div class="compare_num">
						<span class="num">20</span>
						<span class="unit">万千瓦</span>
					</div>
					<div class="compare_percent">
						<span class="down">同比12%</span>
						<i class="iconfont icon-xiangxia4"></i>
					</div>
				</div>
				<div class="column">
					<div class="pencent_column pencent_column_electric"></div>
				</div>
			</div>
			<div class="tag_item">
				<div class="tag_name">产值销售</div>
				<div class="compare">
					<div class="compare_num">
						<span class="num">2000</span>
						<span class="unit">万元</span>
					</div>
					<div class="compare_percent">
						<span class="up">同比12%</span>
						<i class="iconfont icon-xiangshang4"></i>
					</div>
				</div>
				<div class="column">
					<div class="pencent_column pencent_column_sale"></div>
				</div>
			</div>
			<div class="tag_item">
				<div class="tag_name">出口值</div>
				<div class="compare">
					<div class="compare_num">
						<span class="num">2000</span>
						<span class="unit">万元</span>
					</div>
					<div class="compare_percent">
						<span class="up">同比12%</span>
						<i class="iconfont icon-xiangshang4"></i>
					</div>
				</div>
				<div class="column">
					<div class="pencent_column pencent_column_out"></div>
				</div>
			</div>
			<div class="tag_item">
				<div class="tag_name">营业税金</div>
				<div class="compare">
					<div class="compare_num">
						<span class="num">2000</span>
						<span class="unit">万元</span>
					</div>
					<div class="compare_percent">
						<span class="up">同比12%</span>
						<i class="iconfont icon-xiangshang4"></i>
					</div>
				</div>
				<div class="column">
					<div class="pencent_column pencent_column_sui"></div>
				</div>
			</div>
			<div class="tag_item">
				<div class="tag_name">从业人数</div>
				<div class="compare">
					<div class="compare_num">
						<span class="num">12345</span>
						<span class="unit">人</span>
					</div>
					<div class="compare_percent">
						<span class="up">同比12%</span>
						<i class="iconfont icon-xiangshang4"></i>
					</div>
				</div>
				<div class="column">
					<div class="pencent_column pencent_column_people"></div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.productionData{
		height: 100%;
		width: 100%;
		background-image: url(../../../assets/images/macroscopic/productionData_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		.tagList{
			height: 100%;
			padding: 1.041666rem;
			padding-bottom: 0;
			display: flex;
			flex-wrap: wrap;
			.tag_item{
				padding: 1.041666rem 0.520833rem;
				border: 1px solid rgba(27, 169, 171, 0.58);
				background: #0c4050;
				margin-right: 1.041666rem;
				width: calc( (100% - 2.083333rem) /3 );
				margin-bottom: 1.041666rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&:nth-child(3n){
					margin-right: 0;
				}
				.tag_name{
					text-align: center;
					font-size: 0.833333rem;
					color: #05FFFE;
					font-weight: bold;
				}
				.compare{
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					.compare_num{
						color: #FFFFFF;
						.num{
							font-size: 0.9375rem;
							font-weight: bold;
						}
						.unit{
							font-size: 0.625rem;
						}
					}
					.compare_percent{
						font-size: 0.625rem;
						.up{
							color: #E20D09;
						}
						.icon-xiangshang4{
							color: #FF0600;
						}
						.icon-xiangxia4, .down{
							color: rgba(59, 223, 83, 1);
						}
					}
				}
				.column{
					height: 0.729166rem;
					background: #16637B;
					.pencent_column{
						width: 30%;
						height: 100%;
						background: linear-gradient(to right, rgba(255, 151, 2, 0.5) ,rgba(255, 151, 2, 1));
					}
					.pencent_column_electric{
						background: linear-gradient(to right, rgba(53, 177, 71, 0.5) ,rgba(53, 177, 71, 1));
					}
					.pencent_column_sale{
						background: linear-gradient(to right, rgba(151, 59, 244, 0.5) ,rgba(151, 59, 244, 1));
					}
					.pencent_column_out{
						background: linear-gradient(to right, rgba(31, 128, 218, 0.5) ,rgba(31, 128, 218, 1));
					}
					.pencent_column_sui{
						background: linear-gradient(to right, rgba(12, 189, 148, 0.5) ,rgba(12, 189, 148, 1));
					}
					.pencent_column_people{
						background: linear-gradient(to right, rgba(176, 70, 132, 0.5) ,rgba(176, 70, 132, 1));
					}
				}
			}
		}
	}
</style>
