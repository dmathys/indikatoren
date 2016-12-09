chartOptions['Wissensstandort_LP.2.07.1b'] = {
 
  "xAxis": {
    "type": "category"
  },
  "yAxis": {
  	"min": 0,
  	"max": 0.5,
    "labels": {
      "format": "{value}"
    }    
  },
  "series": [
  {"color": "#b00000"},
  {"color": "#4f81bd"}, 
  {"color": "#9A86A6"}, 
  {"color": "#9bbb59"},  
  {"color": "#FABD24"} 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 92,
	"y": 55,  
	"itemWidth": 300,
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

 