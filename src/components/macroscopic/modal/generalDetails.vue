<template>
	<div class="generalDetails">
		<div class="total">
			<div>总体情况：</div>
			<div class="tab_list">
				<div class="tab_item" :class="{ tab_active: timeType == 'year' }" @click="tabTime('year')">当年</div>
				<div class="tab_item" :class="{ tab_active: timeType == 'month' }" @click="tabTime('month')">当月
				</div>
			</div>
		</div>
		<div class="num_list">
			<div class="num_item">
				<div class="num_name">企业数量</div>
				<div class="num_value" style="background: #EB971F;">30家</div>
			</div>
			<div class="num_item">
				<div class="num_name">工业产值</div>
				<div class="num_value" style="background: #973BF4;">200亿元</div>
			</div>
			<div class="num_item">
				<div class="num_name">用电量</div>
				<div class="num_value" style="background: #0CBD94;">312万千瓦时</div>
			</div>
			<div class="num_item">
				<div class="num_name">税金</div>
				<div class="num_value" style="background: #35B147;">300亿元</div>
			</div>
		</div>
		
		<div class="table_list">
			<div class="table_item" v-for="item in 100" :key="item">
				<div class="companay_name">厦门华电开关有限公司报送</div>
				<div class="item_industry">材料及石化制造业</div>
			</div>
		</div>
		
		
		<div class="btn_wrapper">
			<div class="page_btn" :class="{ page_btn_disable: disabledPre }">上一页</div>
			<div class="page_btn" @click="tabNext">下一页</div>
		</div>
		
		<ComLoading v-if="loading"/>
	</div>
</template>

<script>
	import ComLoading from '@/components/loading/index.vue'
	export default{
		props: {
			year: {
				type: String,
				default: new Date().getFullYear() + ''
			}
		},
		data() {
			return {
				timeType: "year",
				page: 0,
				loading: false
			}
		},
		computed: {
			disabledPre: function() {
				return this.page == 0
			}
		},
		components: {
			ComLoading
		},
		methods: {
			tabTime(type) {
				this.timeType = type
			},
			tabNext() {
				this.page ++
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1500)
			}
		}
	}
</script>

<style scoped lang="less">
	.generalDetails{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		.total{
			display: flex;
			font-size: 0.833333rem;
			font-weight: 400;
			color: #FFFFFF;
			
			.tab_list{
				margin-left: 0.416666rem;
				display: flex;
				color: #FFFFFF;
				font-size: 0.833333rem;
				.tab_item{
					margin-right: 1.041666rem;
					cursor: pointer;
					position: relative;
					text-align: center;
				}
				.tab_active, .tab_item:hover{
					color: #05FFFE;
					&::after{
						content: '';
						display: block;
						position: absolute;
						width: 100%;
						width: 1.875rem;
						height: 0.104166rem;
						background: #05FFFE;
						bottom: -0.208333rem;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			}
			
		}
		.num_list{
			margin-top: 1.927083rem;
			display: flex;
			justify-content: space-between;
			.num_item{
				display: flex;
				align-items: center;
				font-size: 0.729166rem;
				font-weight: 400;
				color: #FFFFFF;
				.num_value{
					width: 5.208333rem;
					height: 1.354166rem;
					line-height: 1.354166rem;
					text-align: center;
					margin-left: 0.260416rem;
					border-radius: 0.677083rem;
				}
			}
		}
		.table_list{
			flex: 1;
			// background: red;
			margin: 1.5625rem 0;
			overflow: auto;
			&::-webkit-scrollbar {
				/*滚动条整体样式*/
				width: 10px;
				/*高宽分别对应横竖滚动条的尺寸*/
				height: 1px;
			}
			
			&::-webkit-scrollbar-thumb {
				/*滚动条里面小方块*/
				border-radius: 10px;
				box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
				background: #00b6b5;
			}
			
			&::-webkit-scrollbar-track {
				/*滚动条里面轨道*/
				box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
				border-radius: 10px;
				background: #ededed;
			}
			.table_item{
				height: 2.1875rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 0.885416rem 0 1.770833rem;
				margin-bottom: 0.9375rem;
				background-color: #0c3444;
				color: #FFFFFF;
				font-size: 0.729166rem;
				.item_industry{
					min-width: 6.822916rem;
					height: 1.354166rem;
					line-height: 1.354166rem;
					border-radius: 0.677083rem;
					background-color: #F8662D;
					text-align: center;
				}
			}
		}
		
		.btn_wrapper{
			display: flex;
			justify-content: center;
			.page_btn{
				width: 5.208333rem;
				height: 1.354166rem;
				border-radius: 0.677083rem;
				line-height: 1.354166rem;
				text-align: center;
				font-size: 0.729166rem;
				font-weight: 400;
				color: #FFFFFF;
				margin-right: 1.5625rem;
				background: #03A1A1;
				cursor: pointer;
			}
			.page_btn_disable{
				cursor: not-allowed;
				background: #0C3445;
			}
		}
	}
</style>
