<template>
	<div class="outputSort">
		<div class="chart_head">
			<div class="head_left">
				<div class="chart_title">单位用电产值排名</div>
				<div class="tab_list">
					<div class="tab_item" :class="{ tab_active: timeType == 'year' }" @click="tabTime('year')">当年</div>
					<div class="tab_item" :class="{ tab_active: timeType == 'month' }" @click="tabTime('month')">当月
					</div>
				</div>
			</div>
			<div class="head_right">
				<div>万元</div>
			</div>
		</div>

		<div class="table_list">
			<div class="sort_item" v-for="item in 30" :key="item" @click="tabCompany">
				<div class="sort_num flex_center">
					<div class="tag">20351</div>
				</div>
				<div class="srot_name">厦门华电开关有限公司</div>
			</div>
		</div>
		
		<CompanyModal v-if="show" @close="show= false" :companyName="companyName"/>
		
		<ComLoading v-if="loading"/>
	</div>
</template>

<script>
	import CompanyModal from './companyModal.vue'
	import ComLoading from '@/components/loading/index.vue'
	import { mapGetters } from 'vuex'
	export default {
		components: {
			CompanyModal,
			ComLoading
		},
		data() {
			return {
				timeType: 'year',
				show: false,
				companyName: '',
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
			tabCompany() {
				this.companyName = '厦门华电开关有限公司'
				this.show = true
			},
			getData() {
				this.loading = true
				setTimeout(() => {
					this.loading = false
				}, 1500)
			},
		},
		watch: {
			cur_year: function() {
				this.getData()
			}
		}
	}
</script>

<style scoped lang="less">
	.outputSort {
		width: 100%;
		height: 100%;
		background-image: url(../../assets/images/macroscopic/output_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		.chart_head {
			flex-shrink: 0;
			.head_right {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				color: #05FFFE;
				font-size: 0.729166rem;
				padding-bottom: 0.15625rem;
			}
		}

		.table_list {
			flex: 1;
			padding: 1px;
			overflow: auto;
			border-bottom: 1px solid #1abcdc;

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

			.sort_item {
				display: flex;
				height: 2.1875rem;
				align-items: center;
				cursor: pointer;
				&:nth-child(2n) {
					background-color: rgba(12, 52, 70, 1);
				}

				.sort_num {
					width: 6.770833rem;

					.tag {
						min-width: 2.864583rem;
						height: 1.09375rem;
						line-height: 1.09375rem;
						background: #35b147;
						font-size: 0.729166rem;
						font-weight: 400;
						color: #FFFFFF;
						text-align: center;
						border-radius: 0.104166rem;
					}
				}

				.srot_name {
					font-size: 0.729166rem;
					font-weight: 400;
					color: #05FFFE;
				}
			}
		}
	}
</style>
