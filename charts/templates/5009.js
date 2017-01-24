var chartOptions = {
	data: {
    	switchRowsAndColumns: true
        },
   "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },var chartOptions = {
	data: {
    	switchRowsAndColumns: true
        },
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
     "format": "{value:,.0f}"
    }    
  },
   "series": [
  {"color": "#cd9c00"}, /* hellbraun*/
  {"color": "#9f7c5a"}, /* ... */
  {"color": "#b00000"}, /* ...*/
  {"color": "#ff5050"}, /* ... */
  {"color": "#45381d"}, /* dunkelbraun*/
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
};

 
  "series": [
  {"color": "#cd9c00"}, /*hellbraun */
  {"color": "#9f7c5a"}, /*dunkelbraun1 */
  {"color": "#b00000"}, /*rot */
  {"color": "#45381d"}, /*dunkelbraun2 */
  {"color": "#71a3b5"}  /*blau */
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
    "inverted": false
  }
};