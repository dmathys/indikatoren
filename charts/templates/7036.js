(function(){
    return {
 "xAxis": {
   "labels": {
     rotation: 0,
   },
    "tickInterval": 1,
  },
  "yAxis": {
    min: 60,
    max: 160,
    tickAmount: 11,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#C8C8C8"},
  {"color": "#008AC3"}, 
  {"color": "#6F6F6F"}, 
  {"color": "#2B0099"}, 
	  ],
  "legend": {
    "enabled": true,
    symbolPadding: 3,
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