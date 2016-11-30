chartOptions["Lebensqualitaet_LP.9.38.3"] = {
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
 	{"color": "#000000"}, /*schwarz*/
	{"color": "#4a7ebb"}, /*blau*/
	{"color": "#e46c0a"}, /*orange*/
	{"color": "#9933ff"}, /*violett*/
 	{"color": "#ff0000"} /*rot*/
	  ],
  "legend": {
    "enabled": true,
    "x": 40,
    "y": 100,
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