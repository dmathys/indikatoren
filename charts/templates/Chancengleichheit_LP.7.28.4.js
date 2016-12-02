chartOptions["Chancengleichheit_LP.7.28.4"] = {
  "xAxis": {
    "tickInterval": 1,
	"labels": {
		"rotation": -45
	}
  },
  "yAxis": {
    "min": 0, 
    "max": undefined, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
	{"color": "#256370",
  "visible": false}, /*blau*/
	{"color": "#a8c4cb",
  "visible": false}, /*hellblau*/
	{"color": "#ffbb58",
  "visible": false}, /*hellorange*/
	{"color": "#b475ab",
  "visible": false}, /*hellviolett*/
	{"color": "#44ab2b",
  "visible": false}, /*grün*/
  {"color": "#007a2f",
  "visible": false},  /*dunkelgrün*/
	{"color": "#672773",
  "visible": false}, /*violett*/
	{"color": "#b00000",
  "visible": false}, /*rot*/
	{"color": "#ff8028",
  "visible": false}, /*orange*/
	{"color": "#cd9c00",
  "visible": false}, /*hellbraun*/
	{"color": "#8a8a8a",
  "visible": false}, /*hellgrau*/
  {"color": "#474747",
  "visible": true,
    "marker": {
      "enabled": true
  }
  }  /*dunkelgrau*/
  ],
  "legend": {
    "enabled": true,
    "x": 30,
    "y": 50,
    "itemWidth": 200,
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