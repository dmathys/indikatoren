(function(){
    return {
  "plotOptions": {
    "series": {
   "pointWidth": 10,
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
    "tickInterval": 1,
    labels: {
                rotation: 0,
            }
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    },
	"max": 100
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    "shared": false
  },  
    "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "width": 300,
  	"x": 75,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#007a2f", "index": 9, "legendIndex":8}, /*grün dunkel2*/
  {"color": "#44ab2b", "index": 8, "legendIndex":5}, /*grün mittel*/
  {"color": "#73ba7c", "index": 7, "legendIndex":2}, /*grün dunkel1*/
  {"color": "#d7e9d2", "index": 6, "legendIndex":6}, /*grün hell*/
  {"color": "#b9cfd7", "index": 5, "legendIndex":4}, /*blau hell */
  {"color": "#71a3b5", "index": 4, "legendIndex":1}, /*blau dunkel */
  {"color": "#ffbb58", "index": 3, "legendIndex":9}, /*orange hell */
  {"color": "#ff8028", "index": 2, "legendIndex":6}, /*orange dunkel */
  {"color": "#dc440e", "index": 1, "legendIndex":3}, /*rot hell */
  {"color": "#b00000", "index": 0, "legendIndex":0} /*rot dunkel */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": true
  }
}
}());
