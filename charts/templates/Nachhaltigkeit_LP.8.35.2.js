chartOptions["Nachhaltigkeit_LP.8.35.2"] = {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
 	{"color": "#71a3b5"}, /*blau*/
	{"color": "#b00000"} /*dunkelrot*/
  ],
  "legend": {
    "enabled": true,
    "x": 55,
    "y": 50,
    "itemWidth": 180,
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