<template>
	<div class="year_picker">
		<el-date-picker v-model="year" type="year" placeholder="选择年" :clearable="false" format="yyyy年" :editable="false"
			popper-class="picker_date" :picker-options="pickerOptions" @change="change" value-format="yyyy" />
		<div class="arrow"></div>
	</div>
</template>

<script>
	export default {
		props: {
			dateyear: {
				type: String,
				default: ''
			}
		},
		data() {
			const year = new Date().getFullYear() + ''

			return {
				year: year,
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					}
				}
			}
		},
		created() {
			if(this.dateyear) {
				this.year = this.dateyear
			}
		},
		methods: {
			change(value) {
				this.$emit('change', value)
				this.$emit('input', value)
			}
		}
	}
</script>

<style scoped lang="less">
	.year_picker {
		width: 7.135416rem;
		height: 2.135416rem;
		position: relative;

		/deep/ .el-input__inner {
			cursor: pointer;
			background-color: transparent;
			border: none;
			background-image: url(../assets/images/yearPicker.png);
			background-size: 100% 100%;
			color: #05FFFE;
			font-size: 0.729166rem;
			height: 2.135416rem;
			line-height: 2.135416rem;
			padding-left: 1.5625rem;
			padding-right: 1.5625rem;
		}

		/deep/ .el-input__prefix {
			display: none;
		}

		/deep/ .el-date-editor.el-input {
			width: 100%;

		}

		.arrow {
			width: 0;
			height: 0;
			border-left: 0.416666rem solid transparent;
			border-right: 0.416666rem solid transparent;
			border-top: 0.78125rem solid #05FFFE;
			position: absolute;
			right: 1.5625rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.picker_date {
		z-index: 1000000;
	}
</style>
