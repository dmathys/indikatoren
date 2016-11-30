chartOptions["Nachhaltigkeit_LP.8.35.1"] = {
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
 	{"color": "#b00000"}, /*dunkelrot*/
	{"color": "#71a3b5"}, /*blau*/
	{"color": "#474747"}, /*dunkelgrau*/
	{"color": "#672773"}, /*dunkelviolett*/
	{"color": "#8a8a8a"}, /*grau*/
	{"color": "#44ab2b"}, /*hellgrün*/
	{"color": "#9f7c5a"}, /*hellbraun*/
	{"color": "#dc440e"}, /*orange*/
	{"color": "#007a2f"}, /*grün*/
	{"color": "#b475ab"} /*hellviolett*/
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