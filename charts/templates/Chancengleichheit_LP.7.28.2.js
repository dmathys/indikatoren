chartOptions["Chancengleichheit_LP.7.28.2"] = {
  "xAxis": {
    "tickInterval": 1,
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
  	{"color": "#933f8d"}, /* violett*/
  	{"color": "#44ab2b"}, /*grün*/
  	{"color": "#256370"}, /*dunkelblau*/
  	{"color": "#71a3b5"}, /*hellblau*/
  	{"color": "#fabd24"}, /*gelb*/
  	{
      "color": "#b00000", /* rot */
      "marker": {
        "enabled": true
      }
  	},
  ],
  "legend": {
    "enabled": true,
    "x": 40,
    "y": 50,
    "itemWidth": 210,
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