chartOptions["Chancengleichheit_LP.7.28.4"] = {
  "xAxis": {
    "tickInterval": 1,
	"labels": {
		"rotation": -45
	}
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
	{"color": "#256370"}, /*blau*/
	{"color": "#a8c4cb"}, /*hellblau*/
	{"color": "#ffbb58"}, /*hellorange*/
	{"color": "#b475ab"}, /*hellviolett*/
	{"color": "#44ab2b"}, /*grün*/
    {"color": "#007a2f"},  /*dunkelgrün*/
	{"color": "#672773"}, /*violett*/
	{"color": "#b00000"}, /*rot*/
	{"color": "#ff8028"}, /*orange*/
	{"color": "#cd9c00"}, /*hellbraun*/
	{"color": "#8a8a8a"}, /*hellgrau*/
    {"color": "#474747"}  /*dunkelgrau*/
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