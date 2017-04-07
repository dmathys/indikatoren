/*global Highcharts  */

(function(){
    return {
  "data":{
  	"switchRowsAndColumns": true
  },
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#c9d6db", visible: false}, /* hellblau*/
  {"color": "#a0bec8", visible: false}, /* ... */
  {"color": "#71a3b5", visible: false}, /* ... */
  {"color": "#256370", visible: false}, /* ... */
  {"color": "#17375e", visible: true},  /* dunkelblau */
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false},
  {visible: false, showInLegend: false}
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 65,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    formatter: function(args){
      var seriesName = this.series.name;
      //get corresponding series by name: series 2015-N corresponds to series 2015, etc.
      var correspondingNSeries = this.series.chart.series.filter(function(element, index, array){
          return element.name == seriesName + '_n';
      })[0];
      var n = correspondingNSeries.yData[this.x];
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 1, ",", " ") + '%</b> (n=' + n + ')<br/>';
    },
    "shared": false
  },  
  "chart": {      
    "type": "column",
    "inverted": true
  }
}
}());