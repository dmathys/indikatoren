chartOptions["Wissensstandort_LP.2.08.1"] = {
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
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
	{"color": "#6F6F6F"}, /* dunkelgrau */
    {"color": "#0F7399"}, /* dunkelblau */
	{"color": "#923F8D"}, /* dunkelviolett*/
	{"color": "#C8C8C8"}, /* hellgrau */
    {"color": "#A8C3CA"}, /* hellblau*/
	{"color": "#E7CEE2"}, /* hellviolett */

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
 
 