chartOptions["Kulturstadt_LP.6.22.2"] = {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
    "min": 0,
    "max": 700000,
    "tickInterval":350000,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
   "series": [
  {"color": "#44ab2b"} /* grün*/
  ],
  "legend": {
    "enabled": true,
    "x": 155,
  	"y": 55,   
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
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