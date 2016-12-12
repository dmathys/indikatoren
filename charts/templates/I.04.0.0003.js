chartOptions["I.04.0.0003"] = {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": -20, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
  "series": [
	  {"color": "#8a8a8a",
	   "index": 2,
	   "visible": true,
	     "marker": {
        "enabled": true
    } 
	  }, /* BS = grau */
    {"color": "#71a3b5",
    "visible": false,
       "index": 4
    }, /* ZH = hellblau*/
	  {"color": "#933f8d",
	  "visible": false,
	     "index":5
	  }, /* GE = violett*/
    {"color": "#ff8028",
    "visible": false,
       "index": 3
    }, /* BL = orange*/	
  	{"color": "#256370",
  	"visible": false,
  	   "index": 6
  	}, /* AG = dunkelblau */
  	{"color": "#b00000",
  	"visible": true,
  	 "index": 1,
  	    "marker": {
        "enabled": true
    }
  	}  /* CH = rot */
  ],
  "legend": {
    "enabled": true,
    "x": 40,
    "y": 35,
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
 
 