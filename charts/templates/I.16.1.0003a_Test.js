chartOptions["I.16.1.0003a_Test"] = {
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
  {"color": "#E64900",
  	"index": 1
  	}, /* rot - 18-29 */
  {"color": "#FF8028",
  	"index": 2,
  	}, /* 30.39 J. */
  {"color": "#FABD24",
  	"index": 3
  	}, /* 50-49 J. */
  {"color": "#5CE639",
  	"index": 4
  	}, /* 50 - 59 J. */
  {"color": "#008AC3",
  	"index": 5
  	}, /*blau * 60-69 J. */
  ],
  "legend": {
    "enabled": true,
    "x": 35,
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