chartOptions['Wirtschaftsstandort_I.03.0.0001_Test'] = {
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
 {"color": "#d7e9d2"}, /* hellgrün*/
  {"color": "#73ba7c"}, /* ... */
  {"color": "#007a2f"}, /* ... */
  {"color": "#0b3b19"}, /* ... */
  {"color": "#4f6228"}  /* dunkelgrün */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	"y": 65,
	"itemWidth": 80,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": true
  }
};

 