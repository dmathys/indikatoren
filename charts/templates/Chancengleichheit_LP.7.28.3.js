chartOptions["Chancengleichheit_LP.7.28.3"] = {
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
    "visible": false,
    "marker": {
    "enabled": true
  }
  },
	{"color": "#256370", /*blau*/
	  "visible": false
	}, 
  {"color": "#96c9d3",  /* blau*/
    "visible": false
  } 
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