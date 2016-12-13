chartOptions['Lebensqualitaet_LP.9.40.1a'] = {
"plotOptions": {
    "series": {
      "pointWidth": 20,
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
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "itemWidth": 100,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#007a2f", "index": 4}, /*dunkelgrün */
  {"color": "#44ab2b", "index": 3}, /*hellgrün */
  {"color": "#dc440e", "index": 2}, /*hellrot */
  {"color": "#b00000", "index": 1}  /*dunkelrot */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
};

