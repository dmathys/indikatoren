chartOptions["Partnerstandort_LP.4.15.1_Test"] = {
 "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    "min": 0, 
    "max": 50,
    "tickInterval": 10,
	"labels": {
		"format": "{value:,.0f}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
 "series": [
  {"color": "#008AC3"}, /* blau*/
  {"color": "#008AC3",
  	  "marker": {
        "enabled": true
    }
  }, /* blau */
  {"color": "#73ba7c"}, /* grün */
  {"color": "#73ba7c",
  	  "marker": {
        "enabled": true
    }
  }  /* grün */
  ],
  "legend": {
    "enabled": true,
    "x": 30,
    "y": 50,
    "itemWidth": 300,
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