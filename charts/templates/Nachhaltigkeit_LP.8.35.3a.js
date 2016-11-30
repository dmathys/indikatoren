chartOptions["Nachhaltigkeit_LP.8.35.3a"] = {
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
 	{"color": "#ff8028"}, /*orange BS*/
 	{"color": "#007a2f"}, /*grün BE*/
	{"color": "#672773"}, /*violett GE*/
	{"color": "#b00000"}, /*rot Liestal*/
	{"color": "#a0bec8"}, /*hellblau ZH*/
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