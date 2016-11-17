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
	"pointFormat": "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y}%</b><br/>"
  },
  "series": [
	{"color": "#008AC3"}, /* BS = blau */
    {"color": "#FFBB58"}, /* ZH = gelb*/
	{"color": "#933F8D"}, /* GE = pink*/
    {"color": "#FF8028"}, /* BL = orange*/	
	{"color": "#007A2F"}, /* AG = grün */
	{"color": "#000000"}  /* CH = schwarz */
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
 
 