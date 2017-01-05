var chartOptions = {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y}%</b><br/>"
  },
  "series": [
	{"color": "#008AC3"},
    {"color": "#FFBB58"}, 
	{"color": "#933F8D"}
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 55,
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
};
 
 