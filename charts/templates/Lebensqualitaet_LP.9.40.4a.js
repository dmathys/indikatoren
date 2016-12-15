chartOptions["Lebensqualitaet_LP.9.40.4a"] = {
  "yAxis": [{
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 3000,
    "tickInterval":600,
    "title": ""
  },
  {
    "title": {
        "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.0f}%",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": 10,
    "tickInterval": 2,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 40,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#71a3b5",
      "index": 0,
      "type": "column",
      "pointWidth": "30"
    },
    {
      "color": "#7d60a0",
      "index": 1,
      "type": "line",
      "yAxis": 1
    }
  ],  
  "tooltip": {
    "shared": true
  },
  "chart": {
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
  }
};
