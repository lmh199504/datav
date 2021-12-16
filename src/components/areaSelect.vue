<template>
	<div class="areaSelect">
		<el-select v-model="value" placeholder="请选择" @change="change">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>	
		<div class="arrow" />
	</div>
</template>

<script>
	export default{
		data() {
			return {
				options: [
					{
						label: "所有区",
						value: "所有区"
					},
					{
						label: "思明区",
						value: "思明区"
					},
					{
						label: "湖里区",
						value: "湖里区"
					},
					{
						label: "集美区",
						value: "集美区"
					},
					{
						label: "翔安区",
						value: "翔安区"
					},
					{
						label: "同安区",
						value: "同安区"
					}
				],
				value: "所有区"
			}
		},
		methods: {
			change(value) {
				this.$emit('change', value)
			}
		}
	}
</script>

<style scoped lang="less">
	.areaSelect{
		width: 5.208333rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		margin-top: 0.520833rem;
		/deep/ .el-input__inner{
			cursor: pointer;
			background-color: transparent;
			border: none;
			// background-image: url(../assets/images/yearPicker.png);
			background-size: 100% 100%;
			color: #05FFFE;
			font-size: 0.729166rem;
			height: 2.135416rem;
			line-height: 2.135416rem;
			padding-left: 1.5625rem;
			padding-right: 1.5625rem;
			width: 100%;
			padding: 0;
			padding-left: 0.78125rem;
		}
		/deep/ .el-icon-arrow-up:before{
			display: none;
		}
		.arrow {
			width: 0;
			height: 0;
			border-left: 0.260416rem solid transparent;
			border-right: 0.260416rem solid transparent;
			border-top: 0.416666rem solid #05FFFE;
			position: absolute;
			right: 1.041666rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
