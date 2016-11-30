chartOptions['Wirtschaftsstandort_I.03.0.0001'] = {
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#8a8a8a"}, /*grau */
  {"color": "#71a3b5"}, /*hellblau */
  {"color": "#933f8d"}, /*violett */
  {"color": "#ff8028"}, /*orange */
  {"color": "#256370"}  /*dunkelblau */
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
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": {      
    "type": "column",
    "inverted": false
  }
};

 