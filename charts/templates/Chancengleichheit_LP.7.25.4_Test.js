chartOptions["Chancengleichheit_LP.7.25.4_Test"] = {
 "xAxis": {
    "tickInterval": 3,
    "startOnTick": true
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {"color": "#B00000",
  	"index": 4,
  	"visible": false
  }, /* rot - Schweiz */
  {"color": "#183ec9",
  	"index": 8,
  	"visible": false
  }, /* blau - Ausland*/
  {"color": "#E64900",
  	"index": 1
  	}, /* hellgrün - 18-29 */
  {"color": "#FF8028",
  	"index": 2,
  	}, /* 30.39 J. */
  {"color": "#FABD24",
  	"index": 5
  	}, /* 50-49 J. */
  {"color": "#73B97C",
  	"index": 6
  	}, /* 50 - 59 J. */
  {"color": "#B6CFD7",
  	"index": 9
  	}, /* 60-69 J. */
  {"color": "#E7CEE2",
  	"index": 10
  	}, /* dunkelgrün >69 J. */
  {"color": "#008AC3",
  	"index": 3,
  	"visible": false
  	}, /* blau - Männer */
  {"color": "#923F8D",
  	"index": 7,
  	"visible": false
  	}, /* violett - Frauen */
  {"color": "#3c3c3c",
  	"index": 11,
  	"visible": false,
  	  "marker": {
        "enabled": true
    }
  	} /* schwarz - Total  */
  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
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