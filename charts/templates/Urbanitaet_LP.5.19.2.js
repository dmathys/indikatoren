chartOptions["Urbanitaet_LP.5.19.2"] = {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
	"max": 100,
    "labels": {
      "format": "{value}%"
    }    
  },
   "series": [
  {"color": "#77933c"}, /* dunkelgrün*/
  {"color": "#c3d69b"}, /* hellgrün */
 
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