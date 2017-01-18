var chartOptions = {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
	"max": 50,
    "labels": {
      "format": "{value}%",
    }    
  },
   "series": [
  {"color": "#cd9c00"}, /* hellbraun*/
  {"color": "#9f7c5a"}, /* ... */
  {"color": "#baa85a"}, /* ...*/
  {"color": "#b9cfd7"}, /* ... */
  {"color": "#71a3b5"}, /* ... */ 
  {"color": "#2f656b"}, /* dunkelblau*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 0,
	"y": 65,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true
  }
};