<template>
	<div class="dataMap">
		<div class="chart_id" :id="id" :class="className" :style="{width:width}" />
		
		<ModalMap v-if="show" @close="show=false"/>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import XMJson from '@/libs/mapJson/xiamen.json' // 内圈包含子区域
	import XMJsonOut from '@/libs/mapJson/xiamenout.json' // 外圈不包含子区域
	echarts.registerMap('xiamen', XMJson);
	echarts.registerMap('xiamenout', XMJsonOut);
	import resize from '@/mixins/resize.js'
	
	import ModalMap from '@/components/macroscopic/modalMap.vue'
	export default{
		mixins: [resize],
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart_macroscopic_map'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '100%'
			}
		},
		data() {
			return {
				geoCoordMap: {
					思明区: [118.133331, 24.430006],
					海沧区: [118.016364, 24.482512],
					湖里区: [118.189203, 24.519534],
					集美区: [118.047724, 24.608417],
					同安区: [118.100455, 24.719333],
					翔安区: [118.242811, 24.637479]
				},
				dataArr: [
					{ name: "思明区", value: 100 },
					{ name: "海沧区", value: 100 },
					{ name: "湖里区", value: 100 },
					{ name: "集美区", value: 100 },
					{ name: "同安区", value: 100 },
					{ name: "翔安区", value: 100 }
				],
				show: false,
				area: ""
			}
		},
		components: {
			ModalMap
		},
		mounted() {
			this.initChart()
		},
		methods: {
			initChart() {
				// var self = this
				this.chart = echarts.init(document.getElementById(this.id));
				const color = [ '#0cbd94','#1f80da',  '#38b64a','#f8ae2d' ,   '#f8662d', '#973bf4']
				let option = {
					color: color,
					geo: {
						map: 'xiamenout',
						show: true,
						aspectScale: 1, //长宽比
						zoom: 1.1,
						roam: false,
						itemStyle: {
							normal: {
								borderWidth: 3,
								areaColor: '#0c4050',
								borderColor: "#229d9b",
							}
						},
					},
					//滑动显示数据
					tooltip: {
						padding: 0,
						borderWidth: 0,
						backgroundColor: 'transparent',
						show: false,
						trigger: "item",
						formatter: function(params) {
							// console.log(params.data)
							return `<div class="tooltip_wrapper">
								<div class="area_name">${params.name}</div>	
								<div class="number_line">企业数： <span class="span_num">${ params.data.value }</span> <span>家</span></div>
								<div class="number_line">占&nbsp;&nbsp;&nbsp;比：<span class="span_num">${ params.data.rat }</span> <span>%</span></div>
							</div>`
			
						}
					},
					series: [{
							name: '厦门市',
							type: 'map',
							mapType: 'xiamen',
							showLegendSymbol: false,
							roam: false,
							zoom: 1.1,
							aspectScale: 1,
							shading: 'realistic',
							label: {
								show: true,
								fontSize: '0.729166rem',
								color: "#999999",
								fontWeight: 'bold',
								emphasis: {
									show: true,
									color: "#fff",
									fontSize: '0.729166rem',
								},
								position: 'insideTop',
								formatter: '{b}\n'
							},
							itemStyle: {
								normal: {
									areaColor: '#0c4050',
									borderWidth: 1,
									borderColor: '#3b6a7a',
								},
								emphasis: {
									show: true,
									borderWidth: 2,
									borderColor: '#229d9b',
									areaColor: '#229d9b',
								},
								select: {
									show: true,
									borderWidth: 2,
									borderColor: '#229d9b',
									areaColor: '#229d9b',
								},
							},
							
							
							data: this.dataArr
						},
						{
							name: "散点",
							type: "effectScatter",
							coordinateSystem: "geo",
							// color: "#fff", //点的颜色
							// color: color,
							colorBy: "data",
							data: this.convertData(this.dataArr),
							symbolSize: 30, //点的大小
							// symbol: "path://M512 962c-60.728 0-119.665-11.904-175.175-35.384-53.592-22.667-101.711-55.107-143.022-96.418-41.311-41.312-73.751-89.431-96.418-143.022C73.905 631.665 62 572.728 62 512s11.905-119.665 35.384-175.175c22.667-53.592 55.107-101.711 96.418-143.022s89.431-73.751 143.022-96.418C392.335 73.905 451.272 62 512 62s119.665 11.905 175.176 35.384c53.592 22.667 101.711 55.107 143.022 96.418 41.311 41.311 73.751 89.431 96.418 143.022C950.096 392.335 962 451.272 962 512s-11.904 119.665-35.384 175.176c-22.667 53.592-55.107 101.711-96.418 143.022-41.312 41.311-89.431 73.751-143.022 96.418C631.665 950.096 572.728 962 512 962z m0-800c-192.991 0-350 157.009-350 350 0 192.99 157.009 350 350 350 192.99 0 350-157.01 350-350 0-192.991-157.01-350-350-350z", //点的样式
							label: {
								normal: {
									fontSize: '0.729166rem',
									//默认展示
									show: true,
									formatter: function(param) {
										// console.log(param.name)
										return '产值' + '\n' + param.value[2]
									},
									color: '#fff'
								},
								emphasis: {
									//滑过展示
									show: true,
									fontSize: '0.729166rem',
								}
							},
							tooltip: {
								show: false
							}
						},
					]
				}
			
				this.chart.setOption(option)
				
				
				this.chart.on('click',(params) => {
					console.log(params)
					this.area = params.data.name
					this.show = true
				})
				
			},
			convertData(data) {
				var res = [];
				let self = this;
				for (var i = 0; i < data.length; i++) {
					var geoCoord = self.geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}
				// console.log(res)
				return res;
			},
		}
	}
</script>

<style scoped lang="less">
	.dataMap{
		height: 100%;
		width: 100%;
		.chart_id{
			height: 100%;
			width: 100%;
		}
	}
</style>
