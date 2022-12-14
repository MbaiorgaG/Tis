//
//
//
// /*Dashboard3 Init*/
//
// "use strict";
// $(document).ready(function() {
// 	/*Toaster Alert*/
// 	// $.toast({
// 	// 	heading: 'Well done!',
// 	// 	text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
// 	// 	position: 'top-right',
// 	// 	loaderBg:'#88c241',
// 	// 	class: 'jq-toast-primary',
// 	// 	hideAfter: 3500,
// 	// 	stack: 6,
// 	// 	showHideTransition: 'fade'
// 	// });
// 	// if($('#area_chart').length > 0) {
// 	// 	var data=[{
//  //            period: 'Sun',
//  //            FORMA: 10,
//  //            FORMM: 50,
//  //            FORMNXP: 20,
//  //           LETTEROFCREDIT: 25,
//
//  //        }, {
//  //            period: 'Mon',
//  //            FORMA: 130,
//  //            FORMM: 100,
//  //            FORMNXP: 30,
//  //           LETTEROFCREDIT: 20,
//
//  //        }, {
//  //            period: 'Tue',
//  //            FORMA: 80,
//  //            FORMM: 30,
//  //            FORMNXP: 20,
//  //           LETTEROFCREDIT: 15,
//
//  //        }, {
//  //            period: 'Wed',
//  //            FORMA: 70,
//  //            FORMM: 200,
//  //            FORMNXP: 10,
//  //           LETTEROFCREDIT: 25,
//
//  //        }, {
//  //            period: 'Thu',
//  //            FORMA: 180,
//  //            FORMM: 50,
//  //            FORMNXP: 30,
//  //           LETTEROFCREDIT: 27,
//
//  //        }, {
//  //            period: 'Fri',
//  //            FORMA: 105,
//  //            FORMM: 170,
//  //            FORMNXP: 40,
//  //           LETTEROFCREDIT: 54,
//
//  //        },
//  //         {
//  //            period: 'Sat',
//  //            FORMA: 200,
//  //            FORMM: 150,
//  //            FORMNXP: 50,
//  //           LETTEROFCREDIT: 45,
//
//  //        }];
//
//
//
// 	// 	var lineChart = Morris.Area({
//  //        element:'area_chart',
//  //        data: data ,
//  //        xkey: 'period',
//  //        ykeys: ['FORMA', 'FORMM','FORMNXP','LETTEROFCREDIT'],
//  //        labels: ['FORMA', 'FORMM','FORMNXP','LETTEROFCREDIT'],
//  //        pointSize: 0,
//  //        lineWidth:0,
// 	// 	fillOpacity: 0.95,
// 	// 	pointStrokeColors:['#97ca5a','#88c241'],
// 	// 	behaveLikeLine: true,
// 	// 	grid: false,
// 	// 	hideHover: 'auto',
// 	// 	lineColors: ['#97ca5a','#88c241'],
// 	// 	resize: true,
// 	// 	redraw: true,
// 	// 	smooth: true,
// 	// 	gridTextColor:'#878787',
// 	// 	gridTextFamily:"Nunito",
//  //        parseTime: false
//  //    });
// 	// }
// 	// if( $('#m_chart_4').length > 0 ){
// 	// 	// Line Chart
// 	// 	var data=[{ y: '100', a: 10, b: 20, c: 40},
// 	// 			  { y: '200', a: 30, b: 50, c: 70},
// 	// 			  { y: '300', a: 20, b: 40, c: 50},
// 	// 			  { y: '400', a: 50, b: 70, c: 90},
// 	// 			  { y: '500', a: 10, b: 40, c: 100},
//
// 	// 			];
// 	// 	var lineChart = Morris.Line({
// 	// 			element: 'm_chart_4',
// 	// 			data: data,
// 	// 			xkey: 'y',
// 	// 			ykeys: ['a', 'b', 'c'],
// 	// 			labels: ['Total Income', 'Total Outcome', 'Total Expences'],
// 	// 			gridLineColor: 'transparent',
// 	// 			resize: true,
// 	// 			gridTextColor:'#6f7a7f',
// 	// 			gridTextFamily:"Inherit",
// 	// 			hideHover: 'auto',
// 	// 			behaveLikeLine: true,
// 	// 			smooth:false,
// 	// 			pointSize:4,
// 	// 			lineWidth:2,
// 	// 			pointFillColors:['#fff','#fff','#fff'],
// 	// 			pointStrokeColors: ['#88c241','#97ca5a','#aed67e'],
// 	// 			lineColors: ['#88c241','#97ca5a','#aed67e'],
// 	// 		});
// 	// }
//     var colors = ['#002e5a', '#dfe4e5', '#b50156','rgb(198, 205,209)']
//    // colors.reverse()
//
//
//     var options = {
//         chart: {
//             height: '280px',
//             width: '300px',
//             // id:"chart2",
//             type: 'bar',
//             stacked: true,
//             stackType: '100%',
//             toolbar: {
//                 show: false
//             },
//             animations: {
//                 enabled: true,
//                 easing: 'easeinout',
//                 speed: 1900,
//                 animateGradually: {
//                     enabled: true,
//                     delay: 2500
//                 },
//             }
//         },
//         dataLabels: {
//             enabled: false,
//             enabledOnSeries: undefined,
//             formatter: function (val, opts) {
//                 return val
//             }
//         },
//         series: [{
//
//             data: [40, 30, 30],
//         },
//             {
//                 data:[60,70,70]
//             }],
//         labels: ['Form A', 'Form M', 'LC'],
//         fill: {
//             opacity: 1,
//             colors:['#002e5a', '#dfe4e5', '#b50156','rgb(198, 205,209)'],
//         },
//
//         legend: {
//             show:false,
//             position: 'right',
//             offsetX: 0,
//             offsetY: 50
//         },
//     }
//
//     var chart = new ApexCharts(
//         document.querySelector("#chart"),
//         options
//     );
//
//     chart.render();
//
//     var options = {
//         chart: {
//             id:'chart1',
//             height: 230,
//             type: 'area',
//             stacked: true,
//             toolbar:false,
//             events: {
//                 selection: function(chart, e) {
//                     console.log(new Date(e.xaxis.min) )
//                 }
//             },
//
//         },
//         colors: ['#002e5a', '#d2d7db', '#54616c'],
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth'
//         },
//
//         series: [{
//             name: 'Form A',
//             data: generateDayWiseTimeSeries(new Date('27 Jul 2019 GMT').getTime(), 7, {
//                 min: 10,
//                 max: 30000
//             })
//         },
//             {
//                 name: 'Form M',
//                 data: generateDayWiseTimeSeries(new Date('27 Jul 2019 GMT').getTime(), 7, {
//                     min: 10,
//                     max: 30000
//                 })
//             },
//
//             {
//                 name: 'Letter of credits',
//                 data: generateDayWiseTimeSeries(new Date('27 Jul 2019 GMT').getTime(), 7, {
//                     min: 10,
//                     max: 30000
//                 })
//             }
//         ],
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 opacityFrom: 0.6,
//                 opacityTo: 0.8,
//             }
//         },
//         legend: {
//             position: 'top',
//             horizontalAlign: 'left'
//         },
//         xaxis: {
//             type: 'datetime',
//             interval:1,
//             tickAmount: 20,
//         },
//     }
//
//     var chart = new ApexCharts(
//         document.querySelector("#area_chart"),
//         options
//     );
//
//     chart.render();
//
// 	/***E-Chart Line(Area) Chart Start***/
// 	var chart = echarts.init(document.getElementById('aarea_chart'));
//
// var formAData =[["",0],
//  ["2019-07-15T10:04:01.339Z",500000],
//  ["2019-07-16T10:14:13.914Z",1240000],
//  ["2019-07-17T10:04:01.339Z",3210500],
//  ["2019-07-18T10:14:13.914Z",5005054],
//  ["2019-07-19T10:14:13.914Z",6260800],
//  ["2019-07-20T10:04:01.339Z",8530900],
//  ["2019-07-21T10:14:13.914Z",7100000],
//  ["2019-07-22T10:04:01.339Z",7000000],
//  ["2019-07-23T10:14:13.914Z",9240000],
//  ["2019-07-24T10:04:01.339Z",6510500],
//  ["2019-07-25T10:14:13.914Z",2705054],
//  ["2019-07-26T10:14:13.914Z",2860800],
//  ["2019-07-24T10:04:01.339Z",9030900],
//  ["2019-07-28T10:14:13.914Z",9800000]
//  ]
//
//  var formMData = [["",0],
//  ["2019-07-15T10:04:01.339Z",3000500],
//  ["2019-07-16T10:14:13.914Z",6182000],
//  ["2019-07-17T10:04:01.339Z",4304900],
//  ["2019-07-18T10:14:13.914Z",7901500],
//  ["2019-07-19T10:14:13.914Z",3490600],
//  ["2019-07-20T10:04:01.339Z",5363000],
//  ["2019-07-21T10:14:13.914Z",1405300],
//  ["2019-07-22T10:04:01.339Z",3000000],
//  ["2019-07-23T10:14:13.914Z",6240000],
//  ["2019-07-24T10:04:01.339Z",9210500],
//  ["2019-07-25T10:14:13.914Z",4005054],
//  ["2019-07-26T10:14:13.914Z",2260800],
//  ["2019-07-27T10:04:01.339Z",5530900],
//  ["2019-07-28T10:14:13.914Z",9100000]
//  ]
//
//  var letterOfCreditData = [["",0],
//  ["2019-07-15T10:04:01.339Z",5055600],
//  ["2019-07-16T10:14:13.914Z",1510540],
//  ["2019-07-17T10:04:01.339Z",9510600],
//  ["2019-07-18T10:14:13.914Z",8440200],
//  ["2019-07-19T10:14:13.914Z",3265000],
//  ["2019-07-20T10:04:01.339Z",8050270],
//  ["2019-07-21T10:14:13.914Z",6510000],
//  ["2019-07-22T10:04:01.339Z",8700000],
//  ["2019-07-23T10:14:13.914Z",4540000],
//  ["2019-07-24T10:04:01.339Z",3250500],
//  ["2019-07-25T10:14:13.914Z",5895054],
//  ["2019-07-26T10:14:13.914Z",6120800],
//  ["2019-07-27T10:04:01.339Z",8900900],
//  ["2019-07-28T10:14:13.914Z",7340000]
//  ]
//
// 	var chartOptions = {
// 		legend: {
//         data:['Form A','Form M','Letter Of Credit'],
//
//
//     },
// 		 tooltip : {
//         trigger: 'axis'
//     },
// 		//color: ['#aed67e'],
// 		 toolbox: {
//         show : false,
//         feature : {
//             mark : {show: true},
//             dataView : {show: true, readOnly:true},
//             magicType : {show: true, type: ['line', 'bar',]},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     calculable : true,
//     grid:{
//     	show:true,
//     	top:'10%',
//     	left:'3%',
//
//     	bottom: '8%',
//     	width:'95%'
//     },
//   xAxis: [
//   {
//    type: 'time',
//    axisTick:{
//    	show:false
//    },
//    // maxInterval: 3600 * 1000 * 24,
//             boundaryGap:false,
//             axisLabel: {
//                 formatter: function (value) {
//                                     return echarts.format.formatTime('dd-MM', value);
//                                 },
//                            show:true
//             },
//             splitLine: {
//          show: false
//       }
//       }
//   ],
//
//   yAxis: [
//   {
//     type: 'value',
//      min: 1000000,
//      axisTick:{
//    	show:false
//    },
//    axisLine:{
//    	show:false
//    },
//     axisLabel:{
//
//          formatter:function (value) {
//         return Math.abs(Number(value)) / 1.0e+6;
//          }
//      },
//      splitLine: {
//          show: true
//       }
//
//   }
//   ],
//
//   series: [
//   {
//      name:'Form A',
//             type:'line',
//             smooth:true,
//             itemStyle: {normal: {areaStyle: {type: 'default'}}},
//             data:formAData,
//             color:'#d2d7db'
//   },
//   {
//      name:'Form M',
//             type:'line',
//             smooth:true,
//             itemStyle: {normal: {areaStyle: {type: 'default'}}},
//             data:formMData,
//             color:'#002e5a'
//   },
//   {
//      name:'Letter Of Credit',
//             type:'line',
//             smooth:true,
//             itemStyle: {normal: {areaStyle:{type:'default'}}},
//             data:letterOfCreditData,
//             color:'#54616c'
//   }
//   ],
//
// };
// chart.setOption(chartOptions);
// /***E-Chart Line(Area) Chart Ends***/
//
// /***E-Chart Bar Chart Start***/
// // var chart = echarts.init(document.getElementById('line_chart'));
// // var barOptions = {
// // legend: {
// //         data:['Form A','Form M','Letter Of Credit','Form Nxp']
// //     },
// //      tooltip : {
// //         trigger: 'axis'
// //     },
// //     //color: ['#aed67e'],
// //   xAxis: [
// //   {
// //     type : 'category',
// //             data : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// //   }
// //   ],
// //   yAxis: [
// //   {
// //     type: 'value'
// //   }
// //   ],
// //   series: [
// //   {
// //      name:'Form A',
// //             type:'bar',
// //             data:[10, 12, 21, 54, 260, 830, 710],
//
//
// //   },
// //   {
// //      name:'Form M',
// //             type:'bar',
// //             data:[30, 182, 434, 791, 390, 30, 10],
//
//
// //   },
// //   {
// //      name:'Letter Of Credit',
// //             type:'bar',
// //             data:[15, 11, 51, 44, 265, 870, 510],
//
//
// //   },
// //   {
// //      name:'Form Nxp',
// //             type:'bar',
// //             data:[1320, 1132, 601, 234, 120, 90, 20],
//
//
// //   }
// //   ],
//
// // };
//
//
// // chart.setOption(barOptions);
//
//
// /***E-Chart Bar Chart Ends***/
//
// var chart = echarts.init(document.getElementById('cchart'));
// var barOptions = {
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         }
//     },
//     legend: {
//         data:['Form A','Form M','Letter Of Credit','Form Nxp']
//     },
//     xAxis: {
//         data:['Form A','Form M','LOC','Form Nxp']
//
//     },
//     yAxis: {
//         // type: 'category',
//     },
//     series: [
//         {
//             name: '	Form A',
//             type: 'bar',
//             data: [28203],
//             stack: '1',
//         },
//         {
//             name: 'Form M',
//             type: 'bar',
//             data: [ 10497],
//             stack: '1'
//         },
//         {
//             name: 'Letter Of Credit',
//             type: 'bar',
//             data: [28203],
//             stack: '1',
//         },
//         {
//             name: 'Form Nxp',
//             type: 'bar',
//             data: [ 10497],
//             stack: '1'
//         }
//     ]
// };
//
// chart.setOption(barOptions);
//
// });
//
// // Morris.Bar({
// //   element: 'cchart',
// //   data: [
// //     { y: 'FormA', a: 50, b: 50},
// //     { y: 'FormM', a: 70,  b: 30},
// //     { y: 'letterOfCredit', a: 50,  b: 50},
// //     { y: 'FormNxp', a: 40,  b: 60}
// //   ],
// //   stacked:true,
// //   hideHover:false,
// //   xLabels: 'auto',
// //   xkey: 'y',
// //   ykeys: ['a', 'b'],
// //   labels: ['Series A', 'Series B']
// // });
//
// // var options = {
// //             chart: {
// //                 height: 350,
// //                 type: 'bar',
// //                 stacked: true,
// //                 stackType: '100%'
// //             },
// //             responsive: [{
// //                 breakpoint: 480,
// //                 options: {
// //                     legend: {
// //                         position: 'bottom',
// //                         offsetX: -10,
// //                         offsetY: 0
// //                     }
// //                 }
// //             }],
// //             series: [{
// //                 name: 'PRODUCT A',
// //                 data: [44, 55, 41, 67, 22, 43, 21, 49]
// //             },{
// //                 name: 'PRODUCT B',
// //                 data: [13, 23, 20, 8, 13, 27, 33, 12]
// //             },{
// //                 name: 'PRODUCT C',
// //                 data: [11, 17, 15, 15, 21, 14, 15, 13]
// //             }],
// //             xaxis: {
// //                 categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
// //             },
// //             fill: {
// //                 opacity: 1
// //             },
// //
// //             legend: {
// //                 position: 'right',
// //                 offsetX: 0,
// //                 offsetY: 50
// //             },
// //         }
// //
// //        var chart = new ApexCharts(
// //             document.getElementById("#cchart"),
// //             options
// //         );
// //
// //         chart.render();
//
//
//
// /*****E-Charts function start*****/
// var echartsConfig = function() {
// 	if( $('#e_chart_').length > 0 ){
// 		var eChart_6 = echarts.init(document.getElementById('e_chart_8'));
// 		var option5 = {
// 			color: ['#aed67e'],
// 			tooltip: {
// 				show: true,
// 				trigger: 'axis',
// 				backgroundColor: '#fff',
// 				borderRadius:6,
// 				padding:6,
// 				axisPointer:{
// 					lineStyle:{
// 						width:0,
// 					}
// 				},
// 				textStyle: {
// 					color: '#324148',
// 					fontFamily: '"Nunito", sans-serif;',
// 					fontSize: 12
// 				}
// 			},
//
// 			grid: {
// 				top: '3%',
// 				left: '3%',
// 				right: '3%',
// 				bottom: '3%',
// 				containLabel: true
// 			},
// 			xAxis : [
// 				{
// 					type : 'category',
// 					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
// 					axisLine: {
// 						show:false
// 					},
// 					axisTick: {
// 						show:false
// 					},
// 					axisLabel: {
// 						textStyle: {
// 							color: '#6f7a7f'
// 						}
// 					}
// 				}
// 			],
// 			yAxis : [
// 				{
// 					type : 'value',
// 					axisLine: {
// 						show:false
// 					},
// 					axisTick: {
// 						show:false
// 					},
// 					axisLabel: {
// 						textStyle: {
// 							color: '#6f7a7f'
// 						}
// 					},
// 					splitLine: {
// 						lineStyle: {
// 							color: 'transparent',
// 						}
// 					}
// 				}
// 			],
//
// 			series: [
// 				{
// 					data:[420, 332, 401, 334, 400, 330, 410],
// 					type: 'bar',
// 					barMaxWidth: 30,
// 				},
// 				{
// 					data: [120, 152, 251, 124, 250, 120, 110],
// 					type: 'bar',
// 					symbolSize: 6,
// 					smooth: true,
// 					itemStyle: {
// 						color: '#88c241',
// 					},
// 					lineStyle: {
// 						color: '#88c241',
// 						width:2,
// 					}
// 				}
// 			]
// 		};
// 		eChart_6.setOption(option5);
// 		eChart_6.resize();
// 	}
//
// }
// /*****E-Charts function end*****/
//
// var sparklineLogin = function() {
// 	if( $('#sparkline_1').length > 0 ){
// 		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
// 			type: 'bar',
// 			width: '100%',
// 			height: '40',
// 			barWidth: '5',
// 			resize: true,
// 			barSpacing: '5',
// 			barColor: '#88c241',
// 			highlightSpotColor: '#88c241'
// 		});
// 	}
// 	if( $('#sparkline_2').length > 0 ){
// 		$("#sparkline_2").sparkline([2,7,7,5,8,5,4,4,3,4,6,1 ], {
// 			type: 'bar',
// 			width: '100%',
// 			height: '40',
// 			barWidth: '5',
// 			resize: true,
// 			barSpacing: '5',
// 			barColor: '#88c241',
// 			highlightSpotColor: '#88c241'
// 		});
// 	}
// 	if( $('#sparkline_3').length > 0 ){
// 		$("#sparkline_3").sparkline([9,3,3,2,8,6,4,3,3,2,6,1 ], {
// 			type: 'bar',
// 			width: '100%',
// 			height: '40',
// 			barWidth: '5',
// 			resize: true,
// 			barSpacing: '5',
// 			barColor: '#88c241',
// 			highlightSpotColor: '#88c241'
// 		});
// 	}
// 	if( $('#sparkline_4').length > 0 ){
// 		$("#sparkline_4").sparkline([5,3,3,2,1,6,2,3,5,2,2,1 ], {
// 			type: 'bar',
// 			width: '100%',
// 			height: '40',
// 			barWidth: '5',
// 			resize: true,
// 			barSpacing: '5',
// 			barColor: '#88c241',
// 			highlightSpotColor: '#88c241'
// 		});
// 	}
// }
//
//
//
// sparklineLogin();
//
// /*****Resize function start*****/
// var sparkResize,echartResize;
// $(window).on("resize", function () {
// 	/*Sparkline Resize*/
// 	clearTimeout(sparkResize);
// 	sparkResize = setTimeout(sparklineLogin, 200);
//
// 	/*E-Chart Resize*/
// 	clearTimeout(echartResize);
// 	echartResize = setTimeout(echartsConfig, 200);
// }).resize();
// /*****Resize function end*****/
//
// /*****Function Call start*****/
// echartsConfig();
// /*****Function Call end*****/
//
// function generateDayWiseTimeSeries(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//         var x = baseval;
//         var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
//         series.push([x, y]);
//         console.log("getting the series"+series)
//         baseval += 86400000;
//         i++;
//     }
//     return series;
// }
//
// function generateDayWiseTimeSeriesforma(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//         var x = baseval;
//         var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
//         series.push([x, y]);
//         console.log("getting the series"+series)
//         baseval += 86400000;
//         i++;
//     }
//     return series;
// }
//
// function myFunction() {
//     var menu = document.getElementById("Days");
//     if (menu.value == '7')
//     {
//         ApexCharts.exec('chart1', "updateSeries",[
//                 {
//                     name: 'Form A',
//                     data: generateDayWiseTimeSeries(new Date('19 Jul 2019 GMT').getTime(), 7, {
//                         min: 10,
//                         max: 60
//                     })
//                 },
//                 {
//                     name: 'Form M',
//                     data: generateDayWiseTimeSeries(new Date('19 Jul 2019 GMT').getTime(), 7, {
//                         min: 10,
//                         max: 20
//                     })
//                 },
//
//                 {
//                     name: 'Letter of credits',
//                     data: generateDayWiseTimeSeries(new Date('19 Jul 2019 GMT').getTime(), 7, {
//                         min: 10,
//                         max: 15
//                     })
//                 }
//             ]
//         ),
//             ApexCharts.exec('chart2', "updateSeries",
//                 [
//                     {
//                         data:[40, 70, 15],
//                     },
//                     {
//                         data:[60, 30, 85],
//                     }
//                 ]
//             )
//
//     } else if (menu.value == '30') {
//         ApexCharts.exec('chart1', "updateSeries",[
//                 {
//                     name: 'Form A',
//                     data: generateDayWiseTimeSeries(new Date('19 Jul 2019 GMT').getTime(), 30, {
//                         min: 10,
//                         max: 60
//                     })
//                 },
//                 {
//                     name: 'Form M',
//                     data: generateDayWiseTimeSeries(new Date('19 Jul 2019 GMT').getTime(), 30, {
//                         min: 10,
//                         max: 20
//                     })
//                 },
//
//                 {
//                     name: 'Letter of credits',
//                     data: generateDayWiseTimeSeries(new Date('19 Jul 2019 GMT').getTime(), 30, {
//                         min: 10,
//                         max: 15
//                     })
//                 }
//             ]
//         ),
//             ApexCharts.exec('chart2', "updateSeries",[
//                     {
//                         data:[35, 25, 30],
//                     },
//                     {
//                         data:[65, 75, 70],
//                     }
//                 ]
//             )
//     }
//
// }
//
//
//
