(function(){
    return {
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
    "tickInterval": 8
  },
  "tooltip": {
    "shared": false
  },
  "series": [
    {"color": "#69929B", "lineWidth": 5},
    {"color": "#D3E2E5"},
    {"color": "#9F7C5A"},
    {"color": "#E7CFE2"}
  ],
  "legend": {
    "enabled": true,
    "x": 45,
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
    },
  },
	}
}());
 