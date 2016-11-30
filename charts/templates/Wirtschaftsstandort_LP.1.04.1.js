chartOptions['Wirtschaftsstandort_LP.1.04.1'] = {
  "xAxis": {
    "type": "category",
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#8a8a8a"}, /* Schweiz = hellgrau */
  {"color": "#ff8028"}, /* BS = orange */
  {"color": "#256370"}, /* GE = dunkelblau */
  {"color": "#71a3b5"}  /* ZH = hellblau */
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
    "inverted": true /* false */
  },
};

