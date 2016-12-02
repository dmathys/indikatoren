chartOptions["Chancengleichheit_LP.7.27.1"] = {
  "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 50, 
    "max": 100, 
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {"color": "#B00000"}, /* rot */
    {"color": "#008AC3"}, /* blau */
    {
      "color": "#3c3c3c", /* schwarz */
      "marker": {
        "enabled": true
    }
    },
  ],
  "legend": {
    "enabled": true,
    "x": 40,
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