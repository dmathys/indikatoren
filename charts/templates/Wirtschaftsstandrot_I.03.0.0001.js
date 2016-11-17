chartOptions['Wirtschaftsstandrot_I.03.0.0001'] = {
  "xAxis": {
    "type": "category"    
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    }    
  },
  "series": [
  {"color": "#FF8028"}, /*Orange */
  {"color": "#FFBB58"}, /*Gelb */
  {"color": "#007A2F"}, /*Grün */
  {"color": "#008AC3"}, /*Blau */
  {"color": "#933F8D"}  /*Pink */
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

 