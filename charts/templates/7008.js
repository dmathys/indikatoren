(function(){
    return {
 "xAxis": {
    "tickInterval": 8,
     "type": "category",
     labels:{
       rotation: 0,
     		"formatter": function() {
   			 return this.value.split("-").slice(0, -1);
		},
     }
  },
  "yAxis": {
  tickAmount: 6,
  tickInterval: 20000,
	"labels": {
		"format": "{value:,.0f}",
		"formatter": function(){
        return Highcharts.numberFormat((this.value),0)+''; 
      },
	}
  },	
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y),0) + ' </b><br/><b>' 
    },
  },
 "series": [
 	 {"color": "#6F6F6F", "index": 0,	
 	 "marker": {
       // "enabled": true
    }}, /*BS*/
 	{"color": "#FF8028","index": 1}, /*TI*/
	{"color": "#A8C3CA", "index": 1}, /*GE*/	  
//	{"color": "#008AC3", "index": 2}, /*ZH*/
	  ],
  "legend": {
    "enabled": true,
    //"y": 45,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
}
}());