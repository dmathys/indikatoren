chartOptions['Urbanitaet_LP.5.20.3'] = {
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
      "format": "{value:,.0f}%"
    },
	"max": 100
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#007a2f", "index": 1, "legendindex":10}, /*grün dunkel2*/
  {"color": "#44ab2b", "index": 2, "legendindex":9}, /*grün mittel*/
  {"color": "#73ba7c", "index": 3, "legendindex":8}, /*grün dunkel1*/
  {"color": "#d7e9d2", "index": 4, "legendindex":7}, /*grün hell*/
  {"color": "#b9cfd7", "index": 5, "legendindex":6}, /*blau hell */
  {"color": "#71a3b5", "index": 6, "legendindex":5}, /*blau dunkel */
  {"color": "#ffbb58", "index": 7, "legendindex":4}, /*orange hell */
  {"color": "#ff8028", "index": 8, "legendindex":3}, /*orange dunkel */
  {"color": "#dc440e", "index": 9, "legendindex":2}, /*rot hell */
  {"color": "#b00000", "index": 10, "legendindex":1} /*rot dunkel */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": true
  }
};
