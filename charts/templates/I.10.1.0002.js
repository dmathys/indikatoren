chartOptions["I.10.1.0002"] = {
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
	"pointFormat": "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y}</b><br/>"
  },
  "series": [
    {"color": "#933F8D "}, /* violet */
    {"color": "#FF8028"}, /* orange */
	{"color": "#689199"}, /* blau1 */
	{"color": "#008AC3"}, /* blau2 */
	{"color": "#68AB2B"}, /* Grün  */
    {"color": "#DC440E"}, /* Rot */	
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
	  "connectNulls": true,
      "marker":{
        "enabled": true,
        "symbol": "circle",
      }
    }
  }
};
 