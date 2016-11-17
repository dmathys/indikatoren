chartOptions['Wirtschaftsstandort_LP.1.04.1'] = {
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#FF8028"}, /* Schweiz = orange */
  {"color": "#008AC3"}, /* BS = Blau */
  {"color": "#933F8D"}, /* GE = Pink */
  {"color": "#007A2F"}  /* ZH = Grün */
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

 