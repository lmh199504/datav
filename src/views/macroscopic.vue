<template>
	<div class="macroscopic">
		<div class="title">数据概览</div>
		<div class="flex_box">
			<div class="flex_left"></div>
			<div class="flex_right"></div>
		</div>
		<div class="flex_box">
			<div class="flex_left"></div>
			<div class="flex_right"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "Macroscopic"
	}
</script>

<style scoped lang="less">
	.macroscopic{
		display: flex;
		flex-direction: column;
		height: 100%;
		.title{
			font-size: 0.833333rem;
			font-weight: bold;
			color: #05FFFE;
			text-align: center;
			margin-bottom: 0.520833rem;
		}
		.flex_box{
			display: flex;
			flex: 1;
			background-color: red;
			margin-bottom: 2.083333rem;
			&:last-child{
				margin-bottom: 0;
			}
			.flex_left{
				flex: 1.4;
				background-color: green;
				margin-right: 2.083333rem;
			}
			.flex_right{
				flex: 1;
				background-color: yellow;
			}
		}
	}
</style>
