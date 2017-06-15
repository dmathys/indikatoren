(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    },
	"max": undefined
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 40,
	"y": 20,
	"width": 200,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#b00000", "index": 5}, /*rot */
  {"color": "#2f656b", "index": 4}, /*dunkelblau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
}
}());
