chartOptions["I.04.0.0001"] = {
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
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'

  },
  "series": [
    {
    "color": "#b00000", /* Schweiz: rot */
    "marker": {
    "enabled": true
      }
    },
    {"color": "#ff8031"}, /* BS: orange */
    {"color": "#675d73"}, /* GE: violett */
    {"color": "#a0bec8"} /* ZH: hellblau */
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
 