chartOptions["Metrolitanraum_LP.3.11.1b_Test"] = {
  "xAxis": {
    "type": "category"  ,	
  },
  "yAxis": {
    "labels": {
      "format": "{value}%"
    },
  },
  "series": [
  {"color": "#b475ab"}, /* pink*/
  {"color": "#b2c4cb"}, /* hellblau */
  {"color": "#cd9c00"}, /* braun */
  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "x": 78,
    "itemWidth": 220,
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
    "inverted": true
  }
};

 