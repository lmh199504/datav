<template>
	<div class="loading">
		<div class="loading_wrapper">
			<img class="loading_img" src="../../assets/images/loading.png" >
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.loading{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.7);
		z-index: 10;
		.loading_wrapper{
			margin: auto;
			width: 2.5rem;
			height: 2.5rem;
			position: absolute;
			top: 50%;
			left: 50%;
			.loading_img{
				width: 2.5rem;
				height: 2.5rem;
				animation: rotationLeft 0.8s linear infinite;
			}
		}
	}
	
	@keyframes rotationLeft {
		0% {
			transform: rotateZ(0deg)
		}
	
		100% {
			transform: rotate(360deg)
		}
	}
</style>
