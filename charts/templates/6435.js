(function(){
    return {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
  "series": [
    {"color": "#008AC3 "}, /* blau */
	  {"color": "#B00000"}, /* rot */
  ],
  "legend": {
    "enabled": true,
    //"x": 30,
    //"y": 35,
    "itemWidth": 100,
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
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 