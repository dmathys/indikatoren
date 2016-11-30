chartOptions["I.04.0.0003"] = {
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
    {"color": "#71a3b5"}, /* ZH = hellblau*/
	{"color": "#933f8d"}, /* GE = violett*/
    {"color": "#ff8028"}, /* BL = orange*/	
	{"color": "#256370"}, /* AG = dunkelblau */
	{"color": "#b00000"}  /* CH = rot */
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
 
 