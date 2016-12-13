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
  {"color": "#007a2f", "legendIndex":9}, /*grün dunkel2*/
  {"color": "#44ab2b", "legendIndex":8}, /*grün mittel*/
  {"color": "#73ba7c", "legendIndex":7}, /*grün dunkel1*/
  {"color": "#d7e9d2", "legendIndex":6}, /*grün hell*/
  {"color": "#b9cfd7", "legendIndex":5}, /*blau hell */
  {"color": "#71a3b5", "legendIndex":4}, /*blau dunkel */
  {"color": "#ffbb58", "legendIndex":3}, /*orange hell */
  {"color": "#ff8028", "legendIndex":2}, /*orange dunkel */
  {"color": "#dc440e", "legendIndex":1}, /*rot hell */
  {"color": "#b00000", "legendIndex":0} /*rot dunkel */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": true
  }
};
