chartOptions["Lebensqualitaet_LP.9.40.3_Test"] = {
 "xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
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
  	}, 
  {"color": "#E7CEE2",
  	"index": 2,
  	},
  {"color": "#008AC3",
  	"index": 3,
    "visible": false
  	}, 
  {"color": "#DC440E",
  	"index": 4,
  	"visible": false
  	},
  {"color": "#2B0099",
  	"index": 5,
    "visible": false
  	}, 
  	{"color": "#990300",
  	"index": 5,
  	"visible": false
  	}, 
  	{"color": "#3C3C3C",
  	"index": 5,
  	"visible": false
  	},
  	{"color": "#C8C8C8",
  	"index": 5,
  	"visible": false
  	}
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