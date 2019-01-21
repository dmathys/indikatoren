(function(){
    return {
 "xAxis": {
    "tickInterval": 4,
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
    max: 1,
		"labels": {
		"format": "{value:,.0f}",
		"formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%'; 
      }, 
	}

  },	
  tooltip: {
  "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + ' </b><br/><b>' 
    },
  },
 "series": [
 	 {"color": "#3C3C3C", "index": 0}, /**/
 	{"color": "#FABD24","index": 1}, /**/
	{"color": "#923F8D", "index": 2}, /**/	  
	{"color": "#007A2F", "index": 3}, /**/
	  ],
  "legend": {
    "enabled": true,
    //"y": 45,
    //itemWidth: 1000,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
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