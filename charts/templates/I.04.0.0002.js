chartOptions["I.04.0.0002"] = {
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
	{"color": "#8a8a8a"}, /* BS = grau */
    {"color": "#ffc000"}, /* BL gelb */
	{"color": "#256370"}, /* Aargau = dunkelblau */
    {"color": "#007A2F"} /*  Schweiz = rot */
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
 
