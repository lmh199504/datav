<template>
	<div class="entMsg">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">企业信息</div>
				
			</div>
			<div class="head_right"></div>
		</div>
		<div class="list_wrapper">
			<div class="line_item">
				<div class="item_left">
					<span class="item_name">企业规模：</span>
					<span class="item_text">大型</span>
				</div>
				<div class="item_right">
					<span class="item_name">经济类型：</span>
					<span class="item_text">港澳台独资</span>
				</div>
			</div>
			<div class="line_item">
				<div class="item_left">
					<span class="item_name">行业类别：</span>
					<span class="item_text">铁路、船舶、航空航天和其他运输设备制造业</span>
				</div>
			</div>
			<div class="line_item">
				<div class="item_left">
					<span class="item_name">注册时间：</span>
					<span class="item_text">2020-12-12</span>
				</div>
				<div class="item_right">
					<span class="item_name">投产时间：</span>
					<span class="item_text">2019-09-18</span>
				</div>
			</div>
			<div class="line_item">
				<div class="item_left">
					<span class="item_name">注册资本：</span>
					<span class="item_text">2000万元</span>
				</div>
				<div class="item_right">
					<span class="item_name">占地面积：</span>
					<span class="item_text">32435㎡</span>
				</div>
			</div>
			<div class="line_item">
				<div class="item_left">
					<span class="item_name">主要产品：</span>
					<span class="item_text">燕窝等传统高端滋补品</span>
				</div>
			</div>
		</div>
		<ComLoading v-if="loading"/>
	</div>
</template>

<script>
	import ComLoading from '@/components/loading/index.vue'
	export default{
		data() {
			return {
				loading: false
			}
		},
		components: {
			ComLoading
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1500)
			},
		}
	}
</script>

<style scoped lang="less">
	.entMsg{
		height: 100%;
		width: 100%;
		min-height: 12.5rem;
		background-image: url(../../../assets/images/macroscopic/entmsg_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;
		.list_wrapper{
			padding: 1px 3px 1px 1px;
			.line_item{
				padding-left: 1.5625rem;
				height: 2.083333rem;
				display: flex;
				align-items: center;
				font-size: 0.729166rem;
				color: #FFFFFF;
				&:nth-child(2n) {
					background: #0c3042;
				}
				.item_right{
					flex: 1;
				}
				.item_left{
					flex: 1;
				}
				.item_name{
					color: #05FFFE;
				}
			}
		}
	}
</style>
