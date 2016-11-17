 chartOptions['I.04.0.0004'] = {
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "format": "{y:,.1f}%"
      }
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    },
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },
  "legend": {
    "enabled": false
  },
  "series": [
    {
    "color": "#0070C0"
    }
  ],
  "tooltip": {
    "shared": false,
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
  },
  "chart": {
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column"
  }
};

/* chartOptions["I.04.0.0004"] = {
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%",
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value}%"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": "<span style='color:{point.color}'>\u25CF</span> {series.name}: <b>{point.y}%</b><br/>"
  },
  "series": [
    {"color": "#69929B"}
  ],
  "legend": {
    "enabled": true,
    "x": 20,
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
}; */