chartOptions["Chancengleichheit_LP.7.25.5"] = {
  "xAxis": {
    "tickInterval": 1,
	"labels": {
		"rotation": -45
	}
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{"color": "#672773"}, /* violett*/
	{"color": "#4a7ebb"}, /*dunkelblau*/
	{"color": "#46aac5"}, /*hellblau*/
    {"color": "#c1d2a7"}  /* hellgrün*/
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 50,
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