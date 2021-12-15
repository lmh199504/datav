<!-- 弹窗组件 -->
<template>
	<div class="modalBox" :class="[className, out ? 'out': 'in' ]">
		<slot></slot>
		<div class="mask" :style="{ opacity: opacity }" @click="close"></div>
		<div class="back" v-if="showBack" @click="close"></div>
	</div>
</template>

<script>
	export default {
		props: {
			className: {
				type: String, 
				default: ''
			},
			opacity: {
				type: Number,
				default: 0.7
			},
			showBack: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				out: false
			}
		},
		methods: {
			close() {
				this.out = true
				setTimeout(() => {
					this.$emit('close')
					this.out = false
				}, 200)
			}
		}
	}
</script>

<style scoped lang="less">
	.modalBox{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 99;
	}
	.in{
		animation: scaleIn 0.4s ease;
	}
	.out{
		animation: scaleOut 0.4s ease;
	}
	.main_content{
		position: absolute;
		z-index: 3;
		// height: 100%;
	}
	.mask{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.3;
		z-index: 1;
		top: 0;
		left: 0;
		cursor: pointer;
	}
	.back{
		width: 3.697916rem;
		height: 3.697916rem;
		position: absolute;
		bottom: 2.083333rem;
		right: 1.041666rem;
		background-image: url(../../assets/images/back.png);
		z-index: 100;
		background-size: 100% 100%;
		cursor: pointer;
	}
	@keyframes scaleIn {
		0% {
			transform: scale(0);
			
		}
		80% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes scaleOut {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	
</style>
