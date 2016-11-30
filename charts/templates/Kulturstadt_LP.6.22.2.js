chartOptions["Kulturstadt_LP.6.22.2"] = {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
    "labels": {
      "format": "{value}"
    }    
  },
   "series": [
  {"color": "#44ab2b"} /* grün*/
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 45,
	"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true
  }
};