<template>
	<div class="top_header">
		<div class="left">
			<div class="title">
				厦门市经济运行监测系统
			</div>
			<DatePicker />
		</div>
		<div class="right">
			<div class="menu_list">
				<router-link to="/macroscopic" class="router" active-class="router_active">宏观分析</router-link>
				<router-link to="/history" class="router" active-class="router_active">历史趋势</router-link>
				<router-link to="/benefit" class="router" active-class="router_active">效益分析</router-link>
				<router-link to="/type" class="router" active-class="router_active">类型分析</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import DatePicker from '@/components/datePicker.vue'
	export default {
		data() {
			return {
				value3: ''
			}
		},
		components: {
			DatePicker
		}
	}
</script>

<style scoped lang="less">
	.top_header {
		height: 5.208333rem;
		background-image: url(../assets/images/top_bg.png);
		background-position: 2.5% 2.5%;
		background-size: 105% 105%;
		background-repeat: no-repeat;
		display: flex;
		// align-items: center;
		.left {
			display: flex;
			align-items: center;
			padding-left: 2.1875rem;
			height: 4.166666rem;
			.title {
				font-size: 1.5625rem;
				font-weight: bold;
				color: #05FFFE;
				margin-right: 1.145833rem;
			}
		}

		.right {
			margin-left: 10.416666rem;
			.menu_list{
				display: flex;
				height: 4.166666rem;
				align-items: center;
				.router{
					display: block;
					font-size: 1.145833rem;
					font-weight: 400;
					color: #05FFFE;
					text-decoration: none;
					background-image: url(../assets/images/router_bg.png);
					background-position: 0 0;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					width: 8.645833rem;
					height: 2.03125rem;
					text-align: center;
					line-height: 2.03125rem;
					margin-left: 0.9375rem;
				}
				.router_active, .router:hover{
					color: #FFFFFF;
					background-image: url(../assets/images/router_bg_active.png);
				}
			}
		}
	}
</style>
