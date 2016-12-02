chartOptions["Chancengleichheit_LP.7.28.1"] = {
  "xAxis": {
    "tickInterval": 1,
	 },
  "yAxis": {
    "min": 0, 
    "max": 100, 
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {
      "color": "#b00000", /* rot */
      "marker": {
        "enabled": true
    }
  },
	{"color": "#a56868"}, /*rot*/
	{"color": "#e0acac"}, /*rot*/
	{
      "color": "#183ec9", /* blau */
      "marker": {
        "enabled": true
  }
  },
	{"color": "#256370"}, /*blau*/
  {"color": "#96c9d3"}  /* blau*/
  ],
  "legend": {
    "enabled": true,
    "x": 20,
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