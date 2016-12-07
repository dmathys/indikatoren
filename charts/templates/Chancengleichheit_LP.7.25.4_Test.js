chartOptions["Chancengleichheit_LP.7.25.4_Test"] = {
 "xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
    "min": 0, 
    "max": 100,
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {"color": "#b475ab",
  	"index": 4,
  	}, /* hellrot*/
  {"color": "#b475ab",
  	"index": 8,
  	}, /* ... */
  {"color": "#933f8d",
  	"index": 10
  }, /* ...*/
  {"color": "#2f1435",
  	"index": 1
  }, /* ... */
  {"color": "#8064a2",
  	"index": 2,
  	}, /* dunkelrot*/
  {"color": "#e7cfe2",
  	"index": 5,
  	}, /* hellrot*/
  {"color": "#b475ab",
  	"index": 6
  	}, /* ... */
  {"color": "#933f8d",
  	"index": 9
  	}, /* ...*/
  {"color": "#2f1435",
  	"index": 3,
  	}, /* ... */
  {"color": "#2f1435",
  	"index": 7
  	}, /* ... */
  {"color": "#8064a2",
  	"index": 11
  	} /* dunkelrot*/
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 35,
    "itemWidth": 100,
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