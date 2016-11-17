chartOptions["MyFirstChart"] = {
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y}%</b><br/>"
  },
  "series": [
    {"color": "#69929B"},
    {"color": "#672773"},
    {"color": "#007A2F"},
    {"color": "#73BA7C"}
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 35,
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
