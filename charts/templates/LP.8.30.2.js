var chartOptions = {
  "plotOptions": {
    "series": {
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
    "tickInterval": 2
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
    "itemWidth": 170,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#8b2223", "index": 6}, /*dunkelrot*/
  {"color": "#9a86a6", "index": 5}, /*hellviolett*/
  {"color": "#672773", "index": 4}, /*dunkelviolett*/
  {"color": "#b9cfd7", "index": 3}, /*hellblau*/
  {"color": "#baa85a", "index": 2}, /*hellbraun*/
  {"color": "#71a3b5", "index": 1}, /*dunkelblau*/
  {"color": "#85b77d", "index": 0} /*grün*/
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
};
