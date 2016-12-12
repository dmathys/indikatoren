chartOptions["I.04.0.0001"] = {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
    "max": 10,
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'

  },
  "series": [
    {
    "color": "#b00000", /* Schweiz: rot */
    "marker": {
    "enabled": true
      }
    },
    {"color": "#ff8031",
     "marker": {
        "enabled": true
    }
    }, /* BS: orange */
    {"color": "#675d73",
      "visible": true}, /* GE: violett */
    {"color": "#a0bec8",
      "visible": true} /* ZH: hellblau */
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 35,
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
 