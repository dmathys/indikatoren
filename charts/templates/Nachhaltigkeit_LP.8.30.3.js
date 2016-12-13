chartOptions['Nachhaltigkeit_LP.8.30.3'] = {
"plotOptions": {
    "series": {
      "pointWidth": 50,
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
      "format": "{value:,.0f}%"
    },
	"max": 100
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
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
  {"color": "#256370", "index": 5}, /*dunkelblau */
  {"color": "#71a3b5", "index": 4}, /*hellblau */
  {"color": "#fabd24", "index": 3}, /*hellorange */
  {"color": "#cd9c00", "index": 2}, /*dunkelorange */
  {"color": "#73ba7c", "index": 1}  /*hellgrün */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
};

