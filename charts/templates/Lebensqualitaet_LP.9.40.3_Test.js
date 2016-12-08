chartOptions["Lebensqualitaet_LP.9.40.3_Test"] = {
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
  {"color": "#C9D6DB",
  	"index": 1,
  	  "marker": {
        "enabled": true
    }
  	}, /* rot - 18-29 */
  {"color": "#E7CEE2",
  	"index": 2,
  	}, /* 30.39 J. */
  {"color": "#008AC3",
  	"index": 3,
  	  "marker": {
        "enabled": true
    },
    "visible": false
  	}, /* 50-49 J. */
  {"color": "#DC440E",
  	"index": 4,
  	"visible": false
  	}, /* 50 - 59 J. */
  {"color": "#2B0099",
  	"index": 5,
  	  "marker": {
        "enabled": true
    },
    "visible": false
  	}, /*violett * 60-69 J. */
  	{"color": "#990300",
  	"index": 5,
  	"visible": false
  	} /*violett * 60-69 J. */
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