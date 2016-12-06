chartOptions["Wissensstandort_LP.2.08.1"] = {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
	  {"color": "#6F6F6F",
	    "index": 1,
      "visible":true,
	     "marker": {
        "enabled": true
    }
	  }, /* dunkelgrau */
    {"color": "#923F8D",
      "index": 5,
      "visible":true
    }, /* dunkelviolett */
	  {"color": "#0F7399",
	    "index": 3,
      "visible":true
	  }, /* dunkelblau*/
	  {"color": "#C8C8C8",
	    "index": 2,
	    "visible":false,
       "marker": {
        "enabled": true
	       }
	  }, /* hellgrau */
    {"color": "#A8C3CA",
      "index": 4,
	    "visible":false,
    },  /* hellblau*/
	  {"color": "#E7CEE2",
	    "index": 6,
	    "visible":false,
	  }, /* hellviolett */

  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 55,
    "itemWidth": 220,
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
 
 