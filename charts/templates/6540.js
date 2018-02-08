/*
global Highcharts
*/

(function(){
    return {
  xAxis: {
    tickInterval: 2
  },
  yAxis: {
    min: 0.4,
  	labels: {
      formatter: function() {
         return 100 * this.value + "%";
      }
  	}
  },	
  "tooltip": {
    shared: false, 
	  pointFormatter: function(){
	    return '<span style="color:'+ this.series.color+'">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat(100 * this.y, 1, ",", " ")  + '%</b><br/>';
	  }
  },
  "series": [
    {
      color: 'rgb(220, 68, 14)',
      marker:{
        enabled: false
      }
    },
    {
      color: 'rgb(68, 141, 43)',
      marker:{
        enabled: false
      }
    },
    {
      color: 'rgb(250, 189, 36)',
      marker:{
        enabled: false
      }
    },
    {
      color: 'rgb(220, 68, 14)',
    },
    {
      color: 'rgb(68, 141, 43)',
    },
    {
      color: 'rgb(250, 189, 36)',
    }
  ],
  "legend": {
    enabled: true,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    },
    labelFormatter: function(){
        //remove text before year on each item with odd index
        return (this.index % 3 != 0) ? this.name.slice(-5) : this.name;
    }
  },
  plotOptions: {
    line: {
      marker:{
        symbol: 'circle', 
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: null // inherit from series
      }
    }
  }
}
}());
 