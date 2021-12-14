// import {
// 	debounce
// } from '@/utils'

export default {
	data() {
		return {
			$_resizeHandler: null,
			length: 0
		}
	},

	mounted() {
		this.initListener()
		// 自动播放
		// this.tooltip()
	},
	activated() {
		if (!this.$_resizeHandler) {
			// avoid duplication init
			this.initListener()
		}
		// when keep-alive chart activated, auto resize
		this.resize()
	},
	beforeDestroy() {
		this.destroyListener()
	},
	deactivated() {
		this.destroyListener()
	},
	methods: {
		initListener() {
			// this.$_resizeHandler = debounce(() => {
			// 	this.resize()
			// }, 100)
			this.$_resizeHandler = () => {
				this.resize()
			}
			window.addEventListener('resize', this.$_resizeHandler)
		},
		destroyListener() {
			window.removeEventListener('resize', this.$_resizeHandler)
			this.$_resizeHandler = null
			clearInterval(this.mTime)
		},
		resize() {
			const {
				chart
			} = this
			chart && chart.resize()
		},
		tooltip() {
			var index = 0; //播放所在下标
			this.mTime = setInterval(() => {
				if(this.length == 0) {
					return
				}
				this.chart && this.chart.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,
					dataIndex: index
				});
				index++;
				if (index > this.length) {
					index = 0;
				}
			}, 3000);

		}
	}
}
